import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>

            <NavLink to="resume">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
