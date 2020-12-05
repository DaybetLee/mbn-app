import React from "react";

const Input = ({
  name,
  onChange,
  value,
  label,
  error,
  type = "text",
  className = "form-group",
  placeholder = "",
}) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
        id={name}
        type={type}
        autoComplete="off"
        className="form-control"
        placeholder={placeholder}
      />
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
};

export default Input;
