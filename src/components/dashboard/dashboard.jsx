import React, { Component } from "react";
import { toast } from "react-toastify";

import DeviceCard from "./deviceCard/deviceCard";
import DashboardNavbar from "./dashboardNavbar";
import HistoryCard from "./historyCard";
import Footer from "../common/footer";
import { getCurrentUserToken, loginWithJwt } from "../../services/authService";
import { getUser } from "./../../services/userService";
import { resendLink } from "../../services/verifyService";
import {
  deleteDevice,
  toggleDeviceNotificatio,
} from "./../../services/deviceService";
import Loading from "./../common/loading";

class Dashboard extends Component {
  state = {
    devices: [],
    user: {},
    emailEdit: false,
    histories: [],
    rendered: false,
  };

  async componentDidMount() {
    const token = getCurrentUserToken();

    try {
      const { data: user, headers } = await getUser(token._id);
      loginWithJwt(headers["x-auth-token"]);
      this.setState({
        devices: user.devices,
        histories: user.history.reverse(),
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

  handleNotificationChange = async (device) => {
    let devices = [...this.state.devices];

    try {
      const { data: notify } = await toggleDeviceNotificatio(device._id);

      const index = devices.findIndex((d) => d._id === device._id);

      if (devices[index].notify !== notify) {
        devices[index].notify = notify;
        this.setState({ devices });
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        devices = this.state.devices.filter((d) => d._id !== device._id);
        toast(
          <React.Fragment>
            <i className="fas fa-exclamation-triangle text-warning" />
            <span className="text-dark">
              {" "}
              Device has been deleted from the list.
            </span>
          </React.Fragment>,
          {
            toastId: "deviceNotFound",
          }
        );
        this.setState({ devices });
      }
    }
  };

  handleDelete = async (device) => {
    const devices = this.state.devices.filter((d) => d._id !== device._id);
    try {
      await deleteDevice(device._id);
    } catch (ex) {
      console.log(ex);
      if (ex.response && ex.response.status === 404) {
        toast(
          <React.Fragment>
            <i className="fas fa-exclamation-triangle text-warning" />
            <span className="text-dark">
              {" "}
              Device has been deleted from the list.
            </span>
          </React.Fragment>,
          {
            toastId: "deviceNotFound",
          }
        );
      }
    }
    this.setState({ devices });
  };

  handleEmailToggle = () => {
    this.setState({ emailEdit: !this.state.emailEdit });
  };

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

  handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };

  render() {
    const {
      devices: allDevices,
      user,
      emailEdit,
      histories,
      rendered,
    } = this.state;
    const count = allDevices.length;

    if (!rendered) return <Loading />;

    return (
      <React.Fragment>
        <DashboardNavbar
          user={user}
          emailEdit={emailEdit}
          onEmailToggle={() => this.handleEmailToggle()}
          onSendLink={() => this.handleSendLink()}
          onLogout={() => this.handleLogout()}
        />
        <main className="container">
          <div className="card-deck ">
            <HistoryCard histories={histories} />
            <DeviceCard
              count={count}
              allDevices={allDevices}
              onChange={(device) => this.handleNotificationChange(device)}
              onDelete={(device) => this.handleDelete(device)}
              user={user}
            />
          </div>
        </main>
        <Footer message={"A Project of Daybet Lee"} />
      </React.Fragment>
    );
  }
}

export default Dashboard;
