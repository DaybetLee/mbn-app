import React from "react";
import Modal from "../common/modal";

const DeviceInnerCard = ({ device, onChange, modalID, onDelete }) => {
  return (
    <div id="innerCard" className="card div card-body m-2">
      <div className="d-flex align-items-center align-content-around flex-wrap">
        <div className="p-1 ">
          <i className="fa fa-envelope" /> {device.name}
        </div>
        <div className="p-1 ml-auto">
          <div className="custom-control custom-switch">
            <input
              checked={device.notify}
              onChange={() => onChange(device)}
              type="checkbox"
              className="custom-control-input"
              id={device.name}
            />
            <label className="custom-control-label" htmlFor={device.name}>
              Notification
            </label>
          </div>
        </div>
        <div className="p-1 ml-auto">
          <button
            data-toggle="modal"
            data-target={"#" + modalID}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
        <Modal
          header={
            <React.Fragment>
              <i className="fa fa-exclamation-triangle" />
              {" Warning"}
            </React.Fragment>
          }
          id={modalID}
          body={
            <div>
              <p>
                You are about to delete a device.
                <br />
                Are you sure you want to continue?
              </p>
            </div>
          }
          secBtnTitle={"No"}
          priBtnTitle={"Yes"}
          priBtnEvnt={() => onDelete(device)}
        />
      </div>
    </div>
  );
};

export default DeviceInnerCard;
