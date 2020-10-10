import "./Header.css";
import React from "react";
import { logOut } from "../../services/api.service";

export default function Header({ user, onLogOut }) {

  const close = () => {
    logOut()
      .then(() => onLogOut())
      .catch(e => console.log(e))
  }

  return <div className="Header">
    <div>
      AMAZHACK
    </div>
    {user &&
      <div>
        <div>{user.name}</div>
        <button onClick={close}>X</button>
      </div>
    }
  </div>;
}
