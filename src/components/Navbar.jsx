import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import Navitem from "./Navitem";
import Opensidebar from "./Opensidebar";

const Navbar = () => {
  // const openSidebar = () => {
  //   document.getElementById("mysidebar").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  // };
  const CloseSidebar = () => {
    if (document.getElementById("nav") && document.getElementById("sidebar")) {
      document.getElementById("nav").style.width = "0";
      document.getElementById("sidebar").style.marginLeft = "0";
    }
  };

  return (
    <>
      <div id="mysidebar" className="sidebar">
        <nav className="nav">
          <ul className="active">
            <Navitem
              item="X"
              href="javascript:void(0)"
              className="closebtn"
              onClick={CloseSidebar}
            ></Navitem>
            <Navitem item="Home" tolink="/"></Navitem>
            <Navitem item="About" tolink="/about"></Navitem>
            <Navitem item="Education" tolink="/education"></Navitem>
            <Navitem item="Skills" tolink="/skills"></Navitem>
            <Navitem item="Contact" tolink="/contact"></Navitem>
          </ul>
        </nav>
        
        {/* <span
          styles={{ fontSize: "30", cursor: "pointer" }}
          onclick={Opensidebar}
        >
          &#9776; open
        </span> */}
      </div>
    </>
  );
};

export default Navbar;
