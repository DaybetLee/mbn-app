import React from "react";
import Card from "../common/card";
import DeviceInnerCard from "./deviceInnerCard";
import Modal from "./../common/modal";

const DeviceCard = ({ count, allDevices, onChange, onDelete, user }) => {
  const modalID = "deleteModal";

  const head = (
    <React.Fragment>
      My Device ({count})
      <button
        id="cardButton"
        className="btn btn-sm btn-outline-primary"
        disabled={!user.verified}
        data-toggle="modal"
        data-target="#addModal"
      >
        Add
      </button>
      <Modal
        header={"New Device"}
        id="addModal"
        body={
          <form className="font-weight-normal">
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                aria-describedby="name"
                placeholder="E.g. mailSensor"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputMac">Mac Address</label>
              <input
                type="text"
                className="form-control"
                id="inputMac"
                placeholder="Without ':' or '-' E.g. aabbccddeeff"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputKey">Key</label>
              <input
                type="text"
                className="form-control"
                id="inputKey"
                placeholder="Device's key"
              />
            </div>
          </form>
        }
        secBtnTitle={"Cancel"}
        priBtnTitle={"Add"}
        priBtnEvnt={() => console.log("device")}
      />
    </React.Fragment>
  );

  const body = allDevices.map((device) => (
    <DeviceInnerCard
      key={device._id}
      device={device}
      onChange={(device) => onChange(device)}
      modalID={modalID}
      onDelete={(device) => onDelete(device)}
    />
  ));

  return (
    <React.Fragment>
      <Card head={head} body={body} />
    </React.Fragment>
  );
};

export default DeviceCard;
