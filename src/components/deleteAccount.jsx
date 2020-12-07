import React from "react";
import Joi from "joi";

import Navbar from "./common/navbar";
import Input from "./common/input";
import Footer from "./common/footer";
import { getCurrentUserToken } from "./../services/authService";
import { getUser, deleteUser } from "./../services/userService";
import Loading from "./common/loading";
import Form from "./common/form";

class DeleteAccount extends Form {
  state = { data: { password: "" }, errors: {}, rendered: false, user: {} };

  async componentDidMount() {
    const token = getCurrentUserToken();

    try {
      const { data: user } = await getUser(token._id);

      this.setState({
        user,
        rendered: true,
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        window.location = "/unauthorized";
      } else if (ex.response && ex.response.status === 400) {
        window.location = "/expired";
      } else {
        window.location = "/login";
      }
    }
  }

  schema = {
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    const { data, user } = this.state;

    try {
      await deleteUser(user._id, data.password);
      window.location = "/login";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.password = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { data, errors, rendered } = this.state;
    const { user } = this.state;

    if (!rendered) return <Loading />;
    return (
      <React.Fragment>
        <Navbar />
        <div className="d-flex p-5 justify-content-center">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <h1 className="pb-2">
              Delete account <br />
              {user.email}
            </h1>
            Please enter your password to delete your account:
            <Input
              name="password"
              label=""
              type="password"
              value={data.password}
              error={errors.password}
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit" className="btn btn-danger btn-block ">
              Delete
            </button>
          </form>
        </div>
        <Footer message={"A Project of Daybet Lee"} />
      </React.Fragment>
    );
  }
}

export default DeleteAccount;
