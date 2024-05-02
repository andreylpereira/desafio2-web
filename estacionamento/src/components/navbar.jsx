import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/navbar.css";
import logo from "../assets/parking.png";

const Navbar = () => {
  const location = useLocation();
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
          <img src={logo} alt="Logo" width={25} height={25} className="navbar-logo"/>
          </li>
          <li className="navbar-item">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "navbar-link-active" : "navbar-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/list-park"
              className={
                location.pathname === "/list-park"
                  ? "navbar-link-active"
                  : "navbar-link"
              }
            >
              Lista
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/list-reservations"
              className={
                location.pathname === "/list-reservations"
                  ? "navbar-link-active"
                  : "navbar-link"
              }
            >
              Reservas
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;