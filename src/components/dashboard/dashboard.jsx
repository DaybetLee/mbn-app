import React, { Component } from "react";
import { getDevices } from "../../services/fakeDeviceService";
import DeviceCard from "./deviceCard";
import { user } from "../../services/fakeUserService";
import DashboardNavbar from "./dashboardNavbar";
import HistoryCard from "./historyCard";
import { getHistory } from "../../services/fakeHistoryService";
import Footer from "../common/footer";

class Dashboard extends Component {
  state = {
    devices: getDevices(),
    user: user,
    emailEdit: false,
    histories: getHistory(),
  };

  handleNotificationChange = (device) => {
    const devices = this.state.devices;
    const index = devices.findIndex((d) => d._id === device._id);
    devices[index].notify = !devices[index].notify;
    this.setState({ devices });
  };

  handleDelete = (device) => {
    const devices = this.state.devices.filter((d) => d._id !== device._id);
    this.setState({ devices });
  };

  handleEmailToggle = () => {
    this.setState({ emailEdit: !this.state.emailEdit });
  };

  render() {
    const { devices: allDevices, user, emailEdit, histories } = this.state;
    const count = allDevices.length;
    return (
      <React.Fragment>
        <DashboardNavbar
          user={user}
          emailEdit={emailEdit}
          onEmailToggle={() => this.handleEmailToggle()}
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
        <hr />
        <Footer message={"A Project of Daybet Lee"} />
      </React.Fragment>
    );
  }
}

export default Dashboard;
