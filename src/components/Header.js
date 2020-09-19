import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="nav-link">
        <li>
          <NavLink to="/" exact={true}>
            Product Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">Product Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
