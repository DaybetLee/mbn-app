import React from "react";

import ExternalModalForm from "./externalModalForm";

const ExternalContent = ({ user, onEmailToggle, onSendLink, onLogout }) => {
  const modalID = "editUserModal";

  return (
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-dark p-2 d-flex flex-column ">
        <div className="px-2">
          <h5 className="text-white h4">
            Hi, {user.firstName} {user.lastName}
          </h5>
        </div>
        <div className="d-flex flex-row align-items-center align-content-around">
          <div
            className="p-2 navItem"
            onClick={() => onEmailToggle()}
            data-toggle="modal"
            data-target={"#" + modalID}
          >
            <i className="fas fa-user-edit text-primary" />
            <span className="text-white"> {user.email} </span>
          </div>
          <div className="p-2">
            {user.verified ? null : (
              <button
                onClick={() => onSendLink()}
                className="btn badge badge-pill badge-warning"
              >
                Click To Verify
              </button>
            )}
          </div>
        </div>
        <div className="d-flex flex-row align-items-center align-content-around">
          <div className="p-2 navItem" onClick={() => onLogout()}>
            <i className="fas fas fa-door-open text-primary" />
            <span className="text-white"> Logout</span>
          </div>
        </div>
        <ExternalModalForm
          header={
            <React.Fragment>
              <i className="fas fa-user" />
              {" Profile"}
            </React.Fragment>
          }
          id={modalID}
          secBtnTitle={"Close"}
          priBtnTitle={"Commit"}
          priBtnEvnt={() => null}
        />
      </div>
    </div>
  );
};

export default ExternalContent;
