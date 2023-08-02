import React, { useEffect } from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import AnimatedNavbar from "../navigation/AnimatedNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [dropDownToggle, setDropDownToggle] = useState(null);
  useEffect(() => {
    if (toggle === false) {
      setDropDownToggle(null)
    }
  }, [toggle])
  console.log(toggle)
  return (
    <nav className="flex z-50 py-6 items-center navbar justify-between md:justify-around py-2 backdrop-blur-md shadow-md w-full sm:px-10 fixed top-0 left-0 right-0 px-2 md:px-3">
      <Link className="z-50" to="/">
        <img src="https://dishis.in/img/logo.png" alt="hoobank" className={`${toggle === true ? "bg-primary rounded p-2 transition duration-300" : " transition duration-300"} transition duration-300 w-[224px] h-[64px] z-50`} />
      </Link>
      <AnimatedNavbar duration={500} />
      <div className="md:hidden flex justify-end items-center">
        <div onClick={() => setToggle((prev) => !prev)} className="bg-[#11101d] cursor-pointer rounded p-2 z-50">

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] z-50 h-[28px] object-contain "
          />
        </div>

        <div
          className={`${toggle ? "" : "sidebar-none"} flex
           p-8 bg-black-gradient absolute top-0 left-0 w-[82%]  min-w-[305px] h-[100vh] overflow-auto sidebar`}
        >
          <ul className="list-none flex items-start flex-1 flex-col w-full pt-[4.5rem]">
            {navLinks.map((Nav, index) => {
              return (
                <li
                  key={index}
                  className={` dropdown-2
                 font-poppins font-medium cursor-pointer w-full text-[16px] 
                 ${active === Nav.title ? "text-white" : "text-dimWhite"} 
                 ${index === navLinks.length - 1 ? "mb-0" : "mb-[12px]"}
                 ${dropDownToggle === Nav.title ? "mb-[68px]" : "unset"}
                `}
                  onClick={() => {
                    setActive(Nav.title)
                    setDropDownToggle(Nav.title === dropDownToggle ? null : Nav.title)
                  }}
                >
                  <a href={`#${Nav.id}`} className={Nav.Dropdown !== "" ? "drop-icon" : ""}>{Nav.title}</a>

                  {Nav.Dropdown !== "" && dropDownToggle === Nav.title ? <div className="dropDown h-full bg-white left-0 relative text-black hidden my-4" >
                    {Nav.Dropdown}
                  </div> : ""}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
