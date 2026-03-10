import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 py-8 text-gray-400">
      <div className="flex gap-6">
        <a href="https://github.com/yourusername">GitHub</a>
        <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
        <a href="mailto:youremail@gmail.com">Email</a>
      </div>

      <p>© {new Date().getFullYear()} Vinit Rabadiya</p>
    </footer>
  );
}

export default Footer;
