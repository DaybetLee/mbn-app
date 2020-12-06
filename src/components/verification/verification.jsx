import React, { Component } from "react";
import { toast } from "react-toastify";

import Navbar from "../common/navbar";
import { getUser } from "./../../services/userService";
import { getCurrentUserToken } from "./../../services/authService";
import { resendLink } from "../../services/verifyService";
import Loading from "./../common/loading";

class Verification extends Component {
  state = { user: {}, rendered: false };

  async componentDidMount() {
    const token = getCurrentUserToken();
    try {
      const { data: user } = await getUser(token._id);
      this.setState({ user, rendered: true });
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        window.location = "/unauthorized";
      }
    }
  }

  handleSendLink = async () => {
    await resendLink();
    toast(
      <React.Fragment>
        <i className="fas fa-check-circle text-success" />
        <span className="text-dark">
          {" "}
          A verification link has been sent to your account.
        </span>
      </React.Fragment>,
      {
        toastId: "successEmailSent",
      }
    );
  };

  render() {
    const { user, rendered } = this.state;

    if (!rendered) return <Loading />;

    return (
      <React.Fragment>
        <Navbar navbarItems={this.navbarItems} />
        <main className="container">
          <h1>Verify Your Email</h1>
          <hr />
          <p>
            We have sent and email to <b>{user.email}</b>
          </p>
          <p>
            You need to verify your email to continue. If you have not received
            the verification email, please check your "Spam" or "Bulk Email"
            folder. You can also click the link below to have another email send
            to you.
          </p>

          <button
            onClick={() => this.handleSendLink()}
            className="btn btn-link p-0"
          >
            Resend verification Email
          </button>
        </main>
      </React.Fragment>
    );
  }
}

export default Verification;
