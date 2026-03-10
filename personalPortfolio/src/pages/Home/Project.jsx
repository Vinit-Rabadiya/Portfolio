import React from "react";
import gitHubLogo from "../../assets/github-original.svg";
import "./Project.css";

function Project() {
  const projects = [
    {
      title: "Password Manager",
      image: new URL("../../assets/password-manager.png", import.meta.url).href,
      description:
        "A secure password manager built with React and Firebase, allowing users to store and manage their passwords safely.",
      github: "https://github.com/Vinit-Rabadiya/Password-Manager",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-start items-center px-4 pt-10"
    >
      <h2 className="text-4xl md:text-2xl font-bold text-center mb-5 -mt-10 text-[#00ff88]">
        PROJECTS
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img src={gitHubLogo} className="github-icon" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
