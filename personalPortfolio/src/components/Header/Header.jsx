import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Only highlight Home when on root path with no hash
  const isHomeActive = location.pathname === "/" && !location.hash;
  
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
    <header className="font-[var(--font)] bg-[var(--bg-color)] py-6 px-4 flex justify-center">
      <nav>
        <ul className="flex gap-6 items-center list-none m-0 p-0">
          <li>
            <NavLink
              to="/"
              className={() =>
                isHomeActive
                  ? "text-green-500 no-underline transition-colors duration-300 hover:text-green-500"
                  : "text-white no-underline transition-colors duration-300 hover:text-green-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleSectionClick("skills", e)}
              className={`${
                location.pathname === "/" && location.hash === "#skills"
                  ? "text-green-500"
                  : "text-white"
              } no-underline transition-colors duration-300 hover:text-green-500 cursor-pointer`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleSectionClick("projects", e)}
              className={`${
                location.pathname === "/" && location.hash === "#projects"
                  ? "text-green-500"
                  : "text-white"
              } no-underline transition-colors duration-300 hover:text-green-500 cursor-pointer`}
            >
              Projects
            </a>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 no-underline transition-colors duration-300 hover:text-green-500"
                  : "text-white no-underline transition-colors duration-300 hover:text-green-500"
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
