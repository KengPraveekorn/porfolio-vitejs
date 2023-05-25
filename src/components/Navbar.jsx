import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

// components
import Navitem from "./Navitem";

const Navbar = () => {
  const [item, setItem] = useState("");

  return (
    <div>
      <Nav className="nav">
        <ul>
            <Navitem item="Home" tolink="/"></Navitem>
            <Navitem item="About" tolink="/about"></Navitem>
            <Navitem item="Education" tolink="/education"></Navitem>
            <Navitem item="Skills" tolink="/skills"></Navitem>
            <Navitem item="Contact" tolink="/contact"></Navitem>
        </ul>
      </Nav>
    </div>
  );
};

export default Navbar;
