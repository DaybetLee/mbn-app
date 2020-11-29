import React, { Component } from "react";

class Navbar extends Component {
  renderButton = () => {
    const { navbarItems } = this.props;
    return navbarItems ? navbarItems.content : null;
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div key="brand" className="text-white float-right">
          <h3>
            {"MailBoxNotifica"} <i className="fa fa-paper-plane" />
          </h3>
        </div>
        {this.renderButton()}
      </nav>
    );
  }
}

export default Navbar;
