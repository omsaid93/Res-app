import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { JSX } from "react";

function NavBar(): JSX.Element {
  return (
    <header className="header-main">
      <div className="container">
        <div>
          <img
            src="https://img.freepik.com/vecteurs-premium/logo-conception-nourriture-qualite-restauration_187482-593.jpg"
            alt="logo"
            className="logo"
          />{" "}
        </div>
        <ul className="unorder-list">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              to={"/reservation"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Make a Reservation
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              to={"/list"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reservation list
            </NavLink>{" "}
          </li>
        </ul>
        <div></div>
      </div>
    </header>
  );
}

export default NavBar;
