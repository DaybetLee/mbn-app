import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/navbar";
import { verify } from "../../services/verifyService";
import { loginWithJwt } from "../../services/authService";

class Verify extends Component {
  state = {
    verifed: null,
  };

  async componentDidMount() {
    try {
      const response = await verify(this.props.match.params.id);
      loginWithJwt(response.headers["x-auth-token"]);
      this.setState({ verifed: true });
    } catch (ex) {
      this.setState({ verifed: false });
    }
  }

  render() {
    const { verifed } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        {verifed && verifed ? (
          <main className="container">
            <h1 className="text-success">
              <i className="fas fa-check" />
              Email Verifed
            </h1>
            <hr />
            <p>Thank you for verifying your email address.</p>
            <p>
              Verifying your email address is a simple way to prove you are a
              real Persepective user and makes your account more secure. It alos
              helps the system work as it should, with the right email alerts
              going to the right users.
            </p>
            <a href="/dashboard" className="btn btn-primary">
              Continue To Site
            </a>
          </main>
        ) : (
          <main className="container">
            <h1 className="text-danger">
              <i className="fas fa-times" />
              Email Verification Failed
            </h1>
            <hr />
            <p>
              Please make sure that you have copied and paste the entire URL
              from your email in your browser.
              <br />
              If you are still having trouble verifying your email
              <Link to="/"> contact customer support</Link>.
            </p>
          </main>
        )}
      </React.Fragment>
    );
  }
}

export default Verify;
