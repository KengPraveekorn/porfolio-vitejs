import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import Navitem from "./Navitem";

const Navbar = () => {
  const [navItemActive, setNavItemActive] = useState(false);

  const activeItem = (item)=>{
    // if (navItemActive.length > 0) {
    //   document.getElementById(navItemActive).classList.remove('active')
    // }
    // setNavItemActive({'navItemActive': item}, ()=>{
    //   document.getElementById(navItemActive).classList.add('active')
    // })
   setNavItemActive(true)
  }

  return (
    <div>
      <nav className="nav">
        <ul className="active">
            <Navitem item="Home" tolink="/" activenav={activeItem}></Navitem>
            <Navitem item="About" tolink="/about" activenav={activeItem}></Navitem>
            <Navitem item="Education" tolink="/education" activenav={activeItem}></Navitem>
            <Navitem item="Skills" tolink="/skills" activenav={activeItem}></Navitem>
            <Navitem item="Contact" tolink="/contact" activenav={activeItem}></Navitem>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
