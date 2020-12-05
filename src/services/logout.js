import React, { Component } from "react";
import { logout } from "./authService";

class Logout extends Component {
  componentDidMount() {
    logout();
    window.location = "/dashboard";
  }
  render() {
    return null;
  }
}

export default Logout;
