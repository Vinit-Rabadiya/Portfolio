import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a onClick={handleHomeClick} href="#home">
              Home
            </a>
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
