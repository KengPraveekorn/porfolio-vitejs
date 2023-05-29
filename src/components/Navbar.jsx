import React, { useEffect, useRef, useState } from "react";
import { slide as Menu } from "react-burger-menu";

// components
import Navitem from "./Navitem";

// Css
// import "../css/ham-menu.css";

const Navbar = () => {
  // const toggleHam = (x) => {
  //   x.classList.toggle("change");
  //   const myMenu = document.getElementById("myMenu");
  //   console.log(myMenu);
  //   if (myMenu !== null) {
  //     // myMenu.className += "menu-active";
  //     console.log("The element exists in the DOM");
  //   } else {
  //     // myMenu.className = "menu";
  //     console.log("The element does NOT exist in the DOM");
  //   }
  // };

  const myMenu = useRef(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    console.log("myMenu..", myMenu.current);
  });

  const toggleHam = (x) => {
    x.classList.toggle("change");

    if (myMenu.className === "menu") {
      myMenu.className += "menu-active";
    } else {
      myMenu.className = "menu";
    }
  };

  return (
    <>
      <div className="sidebar">
        
          <nav className="nav">
            <ul ref={myMenu} id="myMenu" className="menu">
              <Navitem item="Home" tolink="/"></Navitem>
              <Navitem item="About" tolink="/about"></Navitem>
              <Navitem item="Education" tolink="/education"></Navitem>
              <Navitem item="Skills" tolink="/skills"></Navitem>
              <Navitem item="Contact" tolink="/contact"></Navitem>
            </ul>
            {/* <div className="ham-menu" onClick={toggleHam}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div> */}
          </nav>
      </div>
    </>
  );
};

export default Navbar;
