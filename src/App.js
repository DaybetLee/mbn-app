import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import { Redirect, Route, Switch } from "react-router-dom";
import Error404 from "./components/common/error404";
import Error401 from "./components/common/error401";
import Validation from "./components/verification/verification";
import Verify from "./components/verification/verify.jsx";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Expired from "./components/common/expired";
import DeleteAccount from "./components/deleteAccount";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <ToastContainer hideProgressBar />
        <Switch>
          <Route path="/expired" component={Expired} />
          <Route path="/deleteAccount" component={DeleteAccount} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/unauthorized" component={Error401} />
          <Route path="/verification" component={Validation} />
          <Route path="/verify/:id" component={Verify} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/error" component={Error404} />
          <Redirect from="/" exact to="/dashboard" />
          <Redirect to="/error" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
