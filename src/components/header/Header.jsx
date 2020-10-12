import "./Header.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { logOut } from "../../services/api.service";
import { NavLink } from "react-router-dom";

export default function Header({ user, onLogOut }) {
  const close = () => {
    logOut()
      .then(() => onLogOut())
      .catch((e) => console.log(e));
  };

  return (
    <div className="navbar navbar-dark bg-dark">
      <div>
        <NavLink className="navbar" to="/products" activeClassName="active">
          AMAZHACK
        </NavLink>
      </div>
      {user && (
        <div className="navbarDisplay">
          <div className="userName">{user.name}</div>
          <button type="button" className="btn btn-danger" onClick={close}>
            X
          </button>
        </div>
      )}
    </div>
  );
}
