import React, { useRef, useState } from "react";
import { NavMenus } from "./NavMenus";

type Props = {
  handleNavButton: (v: string) => void,
  navButton: {
    about: boolean;
    home: boolean;
    projects: boolean;
  },
  currentPage: string,
  handleCurrentPage: (v:string)=>void,

};

export const Navbar = (props: Props) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const parentDiv = e.currentTarget;
    const iconElement = parentDiv.querySelector("i");

    if (parentDiv.classList.contains("nav-button")) {
      if (!iconElement) {
        return;
      }
      if (parentDiv.classList.contains("about")) {
        props.handleNavButton("about");
      } else if (parentDiv.classList.contains("home")) {
        props.handleNavButton("home");
      } else if (parentDiv.classList.contains("projects")) {
        props.handleNavButton("projects");
      }
    }
  };

  return (
    <nav id="navbar-parent">
      <div className="navbar">
        <div
          onClick={handleButtonClick}
          className={`nav-button about ${
            props.navButton.about ? "nav-button-active" : ""
          }`}
        >
          <i
            className={`fa-solid fa-question ${
              props.navButton.about ? "nav-button-active-i" : ""
            }`}
          ></i>
        </div>
        <div
          onClick={handleButtonClick}
          className={`nav-button home ${
            props.navButton.home ? "nav-button-active" : ""
          }`}
        >
          <i
            className={`fa-solid fa-home ${
              props.navButton.home ? "nav-button-active-i" : ""
            }`}
          ></i>
        </div>
        <div
          onClick={handleButtonClick}
          className={`nav-button projects ${
            props.navButton.projects ? "nav-button-active" : ""
          }`}
        >
          <i
            className={`fa-solid fa-folder ${
              props.navButton.projects ? "nav-button-active-i" : ""
            }`}
          ></i>
        </div>
      </div>
      <NavMenus navButton={props.navButton} handleNavButton={props.handleNavButton} currentPage={props.currentPage} handleCurrentPage={props.handleCurrentPage} 
      // handleVisitedPages={props.handleVisitedPages} 
      />
    </nav>
  );
};
