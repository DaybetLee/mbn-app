import React from "react";
import Modal from "../../common/modal";
import ExtContentModalBody from "./extContentModalBody";

const ExternalContent = ({ user, onEmailToggle }) => {
  const modalID = "editUserModal";

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-dark p-4">
        <div>
          <h5 className="text-white h4">
            Hi, {user.firstName} {user.lastName}
          </h5>
        </div>
        <div>
          <i
            onClick={() => onEmailToggle()}
            data-toggle="modal"
            data-target={"#" + modalID}
            className="far fa-edit text-primary"
          />
          <span className="text-white"> {user.email} </span>
          {user.verified ? null : (
            <button className="btn badge badge-pill badge-warning">
              Click To Verify
            </button>
          )}
        </div>
        <Modal
          header={
            <React.Fragment>
              <i className="fas fa-user" />
              {" Profile"}
            </React.Fragment>
          }
          id={modalID}
          body={
            <ExtContentModalBody
              user={user}
              onSubmit={(e) => handleSubmit(e)}
            />
          }
          secBtnTitle={"Close"}
          priBtnTitle={"Commit"}
          priBtnEvnt={() => console.log("button")}
        />
      </div>
    </div>
  );
};

export default ExternalContent;
