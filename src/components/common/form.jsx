import { Component } from "react";
import Joi from "joi";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const { error } = Joi.object(this.schema)
      .options({ abortEarly: false })
      .validate(this.state.data);
    if (!error) return null;

    const errors = {};
    error.details.map(
      (item) => (errors[item.path[0]] = item.message.match(/(\w+)/gi).join(" "))
    );
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schm = Joi.object({ [name]: this.schema[name] });
    const { error } = schm.validate(obj);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(currentTarget);
    if (errorMessage)
      errors[currentTarget.name] = errorMessage.match(/(\w+)/gi).join(" ");
    else delete errors[currentTarget.name];

    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data, errors });
  };
}

export default Form;
