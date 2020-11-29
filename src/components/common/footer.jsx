import React from "react";

const Footer = ({ message }) => {
  return (
    <footer
      style={{ position: "relative", bottom: "0", width: "100%" }}
      className="text-muted"
    >
      <div className="container">
        <p>{message}</p>
      </div>
    </footer>
  );
};

export default Footer;
