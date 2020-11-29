import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Navbar from "../common/navbar";
// import Loading from "./common/loading";

class Verifying extends Component {
  state = {
    verifed: true,
  };

  render() {
    // return <Loading />;

    return (
      // <React.Fragment>
      //   <Navbar />
      //   <main className="container">
      //     <h1 className="text-success">
      //       <i className="fas fa-check" />
      //       Email Verifed
      //     </h1>
      //     <hr />
      //     <p>Thank you for verifying your email address.</p>
      //     <p>
      //       Verifying your email address is a simple way to prove you are a
      //       readl Persepective user and makes your account more secure. It alos
      //       helps the system work as it should, with the right email alerts
      //       going to the right users.
      //     </p>
      //     <button className="btn btn-primary">Continue To Site</button>
      //   </main>
      // </React.Fragment>
      <React.Fragment>
        <Navbar />
        <main className="container">
          <h1 className="text-danger">
            <i className="fas fa-times" />
            Email Verification Failed
          </h1>
          <hr />
          <p>
            Please make sure that you have copied and paste the entire URL from
            your email in your browser.
            <br />
            If you are still having trouble verifying your email
            <Link to="/"> contact customer support</Link>.
          </p>
        </main>
      </React.Fragment>
    );
  }
}

export default Verifying;
