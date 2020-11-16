import React from "react";
import { NavLink } from "react-router-dom";

// Components
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">Dept Tracker</NavLink>
      </div>

      <ul className="navbar-items">
        <li>
          <NavLink to="/">Sign in</NavLink>
        </li>
        <li>
          <CustomButton to="/">Sign up</CustomButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
