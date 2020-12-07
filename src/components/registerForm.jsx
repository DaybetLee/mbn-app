import React from "react";
import Joi from "joi";
import jpc from "joi-password-complexity";

import Navbar from "./common/navbar";
import Input from "./common/input";
import Form from "./common/form";
import Footer from "./common/footer";
import { register } from "../services/userService";
import { loginWithJwt } from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    errors: {},
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

  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/verification";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
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

  render() {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <Navbar />
        <div className="d-flex p-5 justify-content-center">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <h1 className="pb-2">Registration</h1>
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
              onChange={(e) => this.handleChange(e)}
            />
            <Input
              name="confirm_password"
              label="Confirm Password"
              value={data.confirm_password}
              error={errors.confirm_password}
              type="password"
              onChange={(e) => this.handleChange(e)}
            />
            <button
              type="submit"
              className="btn btn-outline-primary btn-block "
            >
              Register
            </button>
          </form>
        </div>
        <Footer message={"A Project of Daybet Lee"} />
      </React.Fragment>
    );
  }
}

export default RegisterForm;
