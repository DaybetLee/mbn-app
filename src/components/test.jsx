import React from "react";

class Modal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    return console.log(e);
  };

  render() {
    return (
      <div>
        <div className="bd-example">
          <button
            type="button"
            className="btn btn-primary "
            data-toggle="modal"
            data-target="#exampleModalLive"
          >
            Launch demo modal
          </button>

          <div
            className="modal"
            id="exampleModalLive"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <form id="my-form" onSubmit={(e) => this.handleSubmit(e)}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
