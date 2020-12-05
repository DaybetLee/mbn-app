import React from "react";

const Footer = ({ message }) => {
  return (
    <React.Fragment>
      <hr />
      <footer
        style={{ position: "relative", bottom: "0", width: "100%" }}
        className="text-muted"
      >
        <div className="container">
          <p>{message}</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
