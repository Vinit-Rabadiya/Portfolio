import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

// Reusable menu link component
function MenuLink({ to, label, onClick, isAnchor, activeSection }) {
  if (isAnchor) {
    // In-page anchor link
    return (
      <a
        href={to}
        onClick={(e) => {
          e.preventDefault();
          const section = document.querySelector(to);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
          if (onClick) onClick();
        }}
        className={activeSection === to ? "text-green-400" : "text-white"}
      >
        {label}
      </a>
    );
  }

  // Route link
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => (isActive ? "text-green-400" : "text-white")}
    >
      {label}
    </NavLink>
  );
}

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("#home");

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Scroll detection for in-page sections (only on homepage)
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") {
        setActiveSection(null); // Clear anchor highlight on other routes
        return;
      }

      const skills = document.querySelector("#skills");
      const projects = document.querySelector("#projects");
      const scrollY = window.scrollY;

      if (projects && scrollY >= projects.offsetTop - 100)
        setActiveSection("#projects");
      else if (skills && scrollY >= skills.offsetTop - 100)
        setActiveSection("#skills");
      else setActiveSection("#home");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const links = [
    { to: "#home", label: "Home", onClick: handleHomeClick, isAnchor: true },
    { to: "#skills", label: "Skills", isAnchor: true },
    { to: "#projects", label: "Projects", isAnchor: true },
    { to: "/resume", label: "Resume" }, // Route link
  ];

  return (
    <header className="bg-[var(--bg-color)] p-6 flex justify-center">
      <nav>
        <ul className="flex gap-6 items-center">
          {links.map((link) => (
            <li key={link.to}>
              <MenuLink {...link} activeSection={activeSection} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
