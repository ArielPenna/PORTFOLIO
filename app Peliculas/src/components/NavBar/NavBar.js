import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logoWZS.png";

import "./Navbar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="divLogo">
        <img
          id="logoWZS"
          src={Logo}
          width="120"
          height="40"
          className="d-inline-block align-top"
          alt=""
        />
        <h5>Movies App</h5>
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/favs">Favoritas</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
