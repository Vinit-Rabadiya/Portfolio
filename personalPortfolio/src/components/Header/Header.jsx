import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

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
    <header className="bg-[var(--bg-color)] text-white p-6 flex justify-between items-center">
      <nav>
        <ul className="flex gap-6 items-center">
          <li>
            <a onClick={handleHomeClick} href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <NavLink to="resume">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
