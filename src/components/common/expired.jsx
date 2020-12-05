import React from "react";

const Expired = () => {
  return (
    <div id="errorContainer" className="container">
      <i className="fas fa-walking fa-10x" />
      <h1 className="errorCode">OOPS</h1>
      <h2>Session Expired</h2>
      <br />
      <p>Your session has expired. Please sign in again to continue working.</p>
    </div>
  );
};

export default Expired;
