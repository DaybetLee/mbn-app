import React from "react";
import Joi from "joi";

import Navbar from "./common/navbar";
import banner from "../images/banner.jpg";
import Footer from "./common/footer";
import Input from "./common/input";
import Form from "./common/form";
import { login } from "./../services/authService";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label(`Email Address`),
    password: Joi.string().min(10).required().label(`Password`),
  };

  doSubmit = async () => {
    const { email, password } = this.state.data;
    let errors = { ...this.state.errors };

    try {
      await login(email, password);
      window.location = "/dashboard";
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        errors.error = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <Navbar />
        <img src={banner} id="banner" className="img-fluid" alt="" />
        <div className="container pt-4">
          <div className="row">
            <form onSubmit={(e) => this.handleSubmit(e)} className="col-sm-6">
              {errors.error ? (
                <small className="form-text text-danger">{errors.error}</small>
              ) : null}
              <Input
                name="email"
                label="Email Address"
                value={data.email}
                error={errors.email}
                type="email"
                onChange={(e) => this.handleChange(e)}
              />
              <Input
                name="password"
                type="password"
                label="Password"
                value={data.password}
                error={errors.password}
                onChange={(e) => this.handleChange(e)}
              />
              <button
                type="submit"
                className="btn btn-outline-primary btn-block "
              >
                Login
              </button>
              <small className="form-text text-muted">
                Don't have an account?{" "}
                <a href="/register" className="text-link">
                  Register Here
                </a>
              </small>
            </form>
          </div>
        </div>
        <br />
        <Footer message={"A Project of Daybet Lee"} />
      </React.Fragment>
    );
  }
}

export default Login;
