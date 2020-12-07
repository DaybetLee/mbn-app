import React from "react";
import Joi from "joi";
import jpc from "joi-password-complexity";

import Form from "../../common/form";
import Input from "../../common/input";
import { getCurrentUserToken } from "../../../services/authService";
import { getUser } from "../../../services/userService";
import { update } from "../../../services/userService";

class ExternalModalForm extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    errors: {},
    redenred: false,
  };

  option = {
    min: 10,
    max: 255,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
  };

  schema = {
    firstName: Joi.string().alphanum().max(30).required().label("First Name"),
    lastName: Joi.string().alphanum().max(30).required().label("Last Name"),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("Email Addresss"),
    password: jpc(this.option).required().label("Password"),
    confirm_password: jpc(this.option).required().label("Confirm password"),
  };

  async componentDidMount() {
    const token = getCurrentUserToken();
    let data = { ...this.state.data };

    try {
      const { data: user } = await getUser(token._id);
      data.firstName = user.firstName;
      data.lastName = user.lastName;
      data.email = user.email;
      this.setState({ data });
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        window.location = "/unauthorized";
      }
      if (ex.response && ex.response.status === 400) {
        window.location = "/expired";
      }
    }
  }

  doSubmit = async () => {
    const token = getCurrentUserToken();

    try {
      await update(token._id, this.state.data);

      window.location = "/dashboard";
    } catch (ex) {
      console.log("ex", ex.response.status);
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { header, priBtnTitle, secBtnTitle, priBtnEvnt, id } = this.props;

    const { data, errors } = this.state;

    return (
      <div
        className="modal fade"
        id={id}
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  {header}
                </h5>
              </div>
              <div className="modal-body">
                <div className="form-row">
                  <Input
                    name="firstName"
                    label="First Name"
                    value={data.firstName}
                    error={errors.firstName}
                    onChange={(e) => this.handleChange(e)}
                    className="form-group col-md-6"
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    value={data.lastName}
                    error={errors.lastName}
                    onChange={(e) => this.handleChange(e)}
                    className="form-group col-md-6"
                  />
                </div>
                <Input
                  name="email"
                  label="Email Adddress"
                  value={data.email}
                  error={errors.email}
                  onChange={(e) => this.handleChange(e)}
                />
                <Input
                  name="password"
                  label="Password"
                  value={data.password}
                  error={errors.password}
                  type="password"
                  placeholder="password"
                  onChange={(e) => this.handleChange(e)}
                />
                <Input
                  name="confirm_password"
                  label="Confirm Password"
                  value={data.confirm_password}
                  error={errors.confirm_password}
                  type="password"
                  placeholder="password"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => (window.location = "/deleteAccount")}
                  className="btn btn-danger mr-auto"
                  data-dismiss="modal"
                >
                  Delete Account
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  {secBtnTitle}
                </button>
                <button
                  onClick={() => priBtnEvnt()}
                  type="submit"
                  className="btn btn-primary"
                >
                  {priBtnTitle}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ExternalModalForm;
