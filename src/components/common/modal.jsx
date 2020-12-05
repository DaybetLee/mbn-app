import React from "react";

const Modal = ({ header, body, priBtnTitle, secBtnTitle, priBtnEvnt, id }) => {
  return (
    <div
      className="modal fade"
      id={id}
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {header}
            </h5>
          </div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              {secBtnTitle}
            </button>
            <button
              onClick={() => priBtnEvnt()}
              type="submit"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              {priBtnTitle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
