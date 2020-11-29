import React from "react";

const ExtContentModalBody = (user) => {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputFirstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="inputFirstName"
            placeholder={user.firstName}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputLastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            placeholder={user.lastName}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail1"
          aria-describedby="email"
          placeholder={user.email}
        />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword2">Retype Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword2"
          placeholder="Password"
        />
      </div>
    </form>
  );
};

export default ExtContentModalBody;
