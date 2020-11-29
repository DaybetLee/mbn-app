import React, { Component } from "react";
import Navbar from "../common/navbar";

class Verification extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar navbarItems={this.navbarItems} />
        <main className="container">
          <h1>Verify Your Email</h1>
          <hr />
          <p>
            We have sent and email to <b>dummy_Email</b>
          </p>
          <p>
            You need to verify your email to continue. If you have not received
            the verification email, please check your "Spam" or "Bulk Email"
            folder. You can also click the resend button below to have another
            email send to you.
          </p>

          <button className="btn btn-link p-0">
            Resend verification Email
          </button>
        </main>
      </React.Fragment>
    );
  }
}

export default Verification;
