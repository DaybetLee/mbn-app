import React from "react";
import Card from "../common/card";
import DeviceInnerCard from "./deviceInnerCard";
import DeviceModalForm from "./deviceModalForm";

const DeviceCard = ({ count, allDevices, onChange, onDelete, user }) => {
  const modalID = "addModal";

  console.log("deviceCard", user);

  const head = (
    <React.Fragment>
      My Device ({count})
      <button
        id="cardButton"
        className="btn btn-sm btn-outline-primary"
        disabled={!user.verified}
        data-toggle="modal"
        data-target={"#" + modalID}
      >
        Add
      </button>
      <DeviceModalForm
        header={"New Device"}
        id={modalID}
        secBtnTitle={"Cancel"}
        priBtnTitle={"Add"}
        priBtnEvnt={() => null}
      />
    </React.Fragment>
  );

  const body = allDevices.map((device) => (
    <DeviceInnerCard
      key={device._id}
      device={device}
      onChange={(device) => onChange(device)}
      modalID={"deleteModal"}
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
