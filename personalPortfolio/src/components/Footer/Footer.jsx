import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-[var(--bg-color)] border-t border-green-800 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex gap-8 text-base">
          <a
            href="https://github.com/Vinit-Rabadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vinitrabadiya/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@gmail.com"
            className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
          >
            Email
          </a>
        </div>

        <p className="text-gray-500 text-sm font-[var(--font)]">
          © {new Date().getFullYear()} Vinit Rabadiya. Built with curiosity and
          code.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
