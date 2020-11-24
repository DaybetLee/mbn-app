import React, { Component } from "react";
import Modal from "./common/modal";

class DeviceCard extends Component {
  render() {
    const { count, allDevices, onChange, onDelete } = this.props;
    return (
      <div className="card shadow mb-5 bg-white rounded">
        <h5 className="card-header">
          My Device ({count})
          <button className="cardButton btn btn-sm btn-outline-primary">
            Add
          </button>
        </h5>
        <div className="innerCard card-body overflow-auto">
          {allDevices.map((device) => (
            <div key={device._id} className="card div card-body m-2">
              <div className="row">
                <div className="col">
                  <i className="fa fa-envelope" aria-hidden="true">
                    {" "}
                    {device.name}
                  </i>
                </div>
                <div className="col">
                  <div className="custom-control custom-switch">
                    <input
                      checked={device.notify}
                      onChange={() => onChange(device)}
                      type="checkbox"
                      className="custom-control-input"
                      id={device.name}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={device.name}
                    >
                      Notification
                    </label>
                  </div>
                </div>
                <div className="col">
                  <button
                    data-toggle="modal"
                    data-target="#staticBackdrop"
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                  <Modal
                    title={
                      <React.Fragment>
                        <i className="fa fa-exclamation-triangle" />
                        {" Warning"}
                      </React.Fragment>
                    }
                    message={`You are about to delete ${device.name} from the My Device. Are you sure you want to continue?`}
                    secBtnTitle={"No"}
                    priBtnTitle={"Yes"}
                    priBtnEvnt={() => onDelete(device)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DeviceCard;
