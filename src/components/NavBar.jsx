import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        GamePHILE
      </Link>
    </nav>
  );
};

export default NavBar;
