import gitHubLogo from "../../assets/github-original.svg";
import emailLogo from "../../assets/email.svg";
import linkedinLogo from "../../assets/linkedin-original.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-[var(--bg-color)] border-t border-green-800 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex gap-8 items-center">
          <a
            href="https://github.com/Vinit-Rabadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src={gitHubLogo} 
              alt="GitHub" 
              className="w-8 h-8 filter invert brightness-75 hover:brightness-100 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.6)]"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vinitrabadiya/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src={linkedinLogo} 
              alt="LinkedIn" 
              className="w-8 h-8 filter brightness-75 hover:brightness-100 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.6)]"
            />
          </a>
          <a
            href="mailto:vinitrabadiya22@gmail.com"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src={emailLogo} 
              alt="Email" 
              className="w-8 h-8 filter invert brightness-75 hover:brightness-100 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.6)]"
            />
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
