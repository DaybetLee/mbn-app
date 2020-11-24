import React from "react";

const Modal = ({ title, message, priBtnTitle, secBtnTitle, priBtnEvnt }) => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {title}
            </h5>
          </div>
          <div className="modal-body">{message}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              {priBtnTitle}
            </button>
            <button
              onClick={() => priBtnEvnt()}
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              {secBtnTitle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
