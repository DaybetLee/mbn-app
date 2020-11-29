import React from "react";

const Input = ({ name, onChange, value, label, error, type }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="form-control"
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={value}
      />
      <div className="small text-danger">some words</div>
    </React.Fragment>
  );
};

export default Input;
