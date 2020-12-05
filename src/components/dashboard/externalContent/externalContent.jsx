import React from "react";
import ExternalModalForm from "./externalModalForm";

const ExternalContent = ({ user, onEmailToggle, onSendLink }) => {
  const modalID = "editUserModal";

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
            className="fas fa-user-edit text-primary"
          />
          <span className="text-white"> {user.email} </span>
          {user.verified ? null : (
            <button
              onClick={() => onSendLink()}
              className="btn badge badge-pill badge-warning"
            >
              Click To Verify
            </button>
          )}
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
