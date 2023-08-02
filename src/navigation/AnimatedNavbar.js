import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarItem from "./Navbar/NavbarItem";
import { Flipper } from "react-flip-toolkit";
import DropdownContainer from "./DropdownContainer";
import CompanyDropdown from "./DropdownContents/CompanyDropdown";
import DevelopersDropdown from "./DropdownContents/DevelopersDropdown";
import ProductsDropdown from "./DropdownContents/ProductsDropdown";
import HireDedicatedDropdown from "./DropdownContents/HireDedicatedDropdown";

const navbarConfig = [
  { title: "Companny", dropdown: ProductsDropdown, titleLink: "" },
  { title: "Services", dropdown: DevelopersDropdown, titleLink: "" },
  { title: "Industry", dropdown: CompanyDropdown, titleLink: "" },
  { title: "Hire Dedicated", dropdown: HireDedicatedDropdown, titleLink: "" },
  { title: "Works", dropdown: "", titleLink: "/work" },
  { title: "Blog", dropdown: "", titleLink: "/blog" },
  { title: "Schedule Call", dropdown: "", titleLink: "" },
  { title: "Get a free Quote", dropdown: "", titleLink: "/request-quote" },
];

const AnimatedNavbar = ({ duration }) => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [animatingOut, setAnimatingOut] = useState(false);
  var animatingOutTimeout;
  

  const resetDropdownState = (i) => {
    "use strict"
    setActiveIndices(typeof i === "number" ? [i] : []);
    setAnimatingOut(false);
    // delete animatingOutTimeout;
  };

  const onMouseEnter = (i) => {
    if (animatingOutTimeout) {
      clearTimeout(animatingOutTimeout);
      resetDropdownState(i);
      return;
    }
    if (activeIndices[activeIndices.length - 1] === i) return;

    setActiveIndices((prevActiveIndices) => [...prevActiveIndices, i]);
    setAnimatingOut(false);
  };

  const onMouseLeave = () => {
    setAnimatingOut(true);
    animatingOutTimeout = setTimeout(resetDropdownState, duration);
  };

  let CurrentDropdown;
  let PrevDropdown;
  let direction;

  const currentIndex = activeIndices[activeIndices.length - 1];
  const prevIndex =
    activeIndices.length > 1 && activeIndices[activeIndices.length - 2];

  if (typeof currentIndex === "number")
    CurrentDropdown =
      currentIndex <= 3 && navbarConfig[currentIndex].dropdown;
  if (typeof prevIndex === "number") {
    PrevDropdown = prevIndex <= 3 && navbarConfig[prevIndex].dropdown;
    direction = currentIndex > prevIndex ? "right" : "left";
  }


  return (
    <Flipper
      flipKey={currentIndex}
      spring={duration === 300 ? "noWobble" : { stiffness: 10, damping: 10 }}
    >
      <Navbar onMouseLeave={onMouseLeave}>
        {navbarConfig.map((n, index) => {
          return (
            <NavbarItem
              titleLink={n.titleLink}
              key={index}
              title={n.title}
              index={index}
              onMouseEnter={onMouseEnter}
            >
              {currentIndex === index && currentIndex <= 3 && (
                <DropdownContainer
                  direction={direction}
                  animatingOut={animatingOut}
                  duration={duration}
                >
                  <CurrentDropdown /> {PrevDropdown && <PrevDropdown />}
                </DropdownContainer>
              )}
            </NavbarItem>
          );
        })}
      </Navbar>
    </Flipper>
  );
};

export default AnimatedNavbar;
