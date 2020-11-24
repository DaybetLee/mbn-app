import React, { Component } from "react";
import { getDevices } from "../services/fakeDeviceService";
import DeviceCard from "./deviceCard";
import $ from "jquery";

class Dashboard extends Component {
  componentDidMount() {
    $("#myModal").on("shown.bs.modal", function () {
      $("#myInput").trigger("focus");
    });
  }
  state = { devices: getDevices() };

  handleAddDevice = () => {};

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

  render() {
    const { devices: allDevices } = this.state;
    const count = allDevices.length;
    return (
      <div className="card-deck">
        <DeviceCard
          count={count}
          allDevices={allDevices}
          onChange={(device) => this.handleNotificationChange(device)}
          onDelete={(device) => this.handleDelete(device)}
        />
      </div>
    );
  }
}

export default Dashboard;
