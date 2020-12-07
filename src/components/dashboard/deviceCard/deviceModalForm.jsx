import Joi from "joi";
import React from "react";

import Form from "./../../common/form";
import { addDevice } from "../../../services/deviceService";
import Input from "./../../common/input";

class DeviceModalForm extends Form {
  state = { data: { name: "", mac: "", psk: "" }, errors: {} };

  schema = {
    name: Joi.string().max(255).label("Device Name"),
    mac: Joi.string()
      .insensitive()
      .pattern(
        /^([0-9A-Fa-f]{2}):([0-9A-Fa-f]{2}):([0-9A-Fa-f]{2}):([0-9A-Fa-f]{2}):([0-9A-Fa-f]{2}):([0-9A-Fa-f]{2})$/
      )
      .required()
      .label("Mac Address"),
    psk: Joi.string().min(8).max(255).required().label("Pre-shared Key"),
  };

  doSubmit = async () => {
    try {
      await addDevice(this.state.data);
      window.location = "/dashboard";
    } catch (ex) {
      console.log("ex", ex.response.status);
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.mac = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { header, priBtnTitle, secBtnTitle, priBtnEvnt, id } = this.props;

    const { data, errors } = this.state;

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
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  {header}
                </h5>
              </div>
              <div className="modal-body">
                <Input
                  name="name"
                  label="Device Name"
                  value={data.name}
                  error={errors.name}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="MailBoxSensor e.g."
                />
                <Input
                  name="mac"
                  label="Mac Address"
                  value={data.mac}
                  error={errors.mac}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="xx:xx:xx:xx:xx:xx e.g."
                />
                <Input
                  name="psk"
                  label="Pre-shared Key"
                  value={data.psk}
                  error={errors.psk}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="12345678 e.g."
                />
              </div>
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
                >
                  {priBtnTitle}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DeviceModalForm;
