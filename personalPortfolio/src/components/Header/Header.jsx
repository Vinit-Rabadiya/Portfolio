import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  // Detect which section is in view
  useEffect(() => {
    // Only run scroll detection on home page
    if (location.pathname !== "/" && location.pathname !== "") {
      setActiveSection(""); // Clear active section when not on home page
      window.scrollTo(0, 0); // Scroll to top when navigating to other pages
      return;
    }

    const handleScroll = () => {
      const sections = ["home", "skills", "projects"];
      const scrollPosition = window.scrollY + 100;

      // iterate in reverse so the last visible section wins
      let current = "home";
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop) {
          current = sectionId;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle scrolling to section when navigating with hash
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location]);

  const handleSectionClick = (sectionId, e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // Navigate to home page with hash
      navigate(`/#${sectionId}`);
    } else {
      // Already on home page, just update hash and scroll
      window.location.hash = sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="font-[var(--font)] bg-[var(--bg-color)] py-3 px-4 flex  items-center border-b border-green-800 sticky top-0 z-50">
      <div className="logo text-2xl font-bold">
        V
        <span className="i-letter">
          ı<span className="dot"></span>
        </span>
        n
        <span className="i-letter">
          ı<span className="dot"></span>
        </span>
        t<span className="square"></span>
      </div>
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-1 items-center list-none m-0 p-0 justify-center">
          <li>
            <a
              href="#home"
              onClick={(e) => handleSectionClick("home", e)}
              className={`nav-link ${
                activeSection === "home"
                  ? "active text-green-500"
                  : "text-white"
              } no-underline transition-colors duration-300 cursor-pointer`}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleSectionClick("skills", e)}
              className={`nav-link ${
                activeSection === "skills"
                  ? "active text-green-500"
                  : "text-white"
              } no-underline transition-colors duration-300 cursor-pointer`}
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleSectionClick("projects", e)}
              className={`nav-link ${
                activeSection === "projects"
                  ? "active text-green-500"
                  : "text-white"
              } no-underline transition-colors duration-300 cursor-pointer`}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active text-green-500" : "text-white"} no-underline transition-colors duration-300`
              }
            >
              RESUME
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
