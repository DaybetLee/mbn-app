import React from "react";

const Error401 = () => {
  return (
    <div id="errorContainer" className="container">
      <i className="fas fa-ban fa-10x" />
      <h1 className="errorCode">401</h1>
      <h2>Unauthorized</h2>
      <br />
      <p>Sorry, your request could not be processed.</p>
    </div>
  );
};

export default Error401;
