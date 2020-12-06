import React from "react";

import Navbar from "../common/navbar";
import ExternalContent from "../dashboard/externalContent/externalContent";

const DashboardNavbar = ({
  user,
  emailEdit,
  onEmailToggle,
  onSendLink,
  onLogout,
}) => {
  const navbarItems = {
    content: (
      <button
        key={"navBarBtn"}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    ),
  };

  return (
    <React.Fragment>
      <Navbar navbarItems={navbarItems} />
      <ExternalContent
        user={user}
        onEmailToggle={() => onEmailToggle()}
        emailEdit={emailEdit}
        onSendLink={() => onSendLink()}
        onLogout={() => onLogout()}
      />
    </React.Fragment>
  );
};

export default DashboardNavbar;
