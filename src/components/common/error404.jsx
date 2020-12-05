import React from "react";

const Error404 = () => {
  return (
    <div id="errorContainer" className="container">
      <i className="far fa-frown fa-10x fa-spin" />
      <h1 className="errorCode">404</h1>
      <h2>Page not found</h2>
      <br />
      <p>
        The Page you are looking for doesn't exist or an other error occured.
      </p>
      Go back, or head over to _ to choose a new direction.
    </div>
  );
};

export default Error404;
