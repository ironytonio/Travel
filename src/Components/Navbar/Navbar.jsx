import React from "react";
import { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { IoIosCloseCircle } from "react-icons/io";
import "./navbar.css";



const Navbar = () => {
// Создается состояние active с начальным значением "navBar", и функция setActive предоставляется для обновления этого состояния.
  const [active, setActive] = useState("navBar")
  //Function to toggle
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  const removeNavbar = () => {
    setActive('navBar')
  }

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel
            </h1>
          </a>
        </div>
        <div className={active}>
            <ul className="navList flex">
              
              <li className="navItem">
                <a href="#" className="navLink">
                  Home
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Packages
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Shop
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  About
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Pages
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  News
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Contact
                </a>
              </li>
              <button className="btn">
                <a href="#book">BOOK NOW</a>
              </button>
            </ul>
            <div onClick = {removeNavbar} className="closeNavbar">
              <IoIosCloseCircle className="icon" />
            </div>
         
        </div>

          <div onClick = {showNav} className="toogleNavbar">
            <TbGridDots className="icon" />
          </div>

      </header>
    </section>
  );
};

export default Navbar;
