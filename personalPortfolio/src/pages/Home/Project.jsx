import React from "react";
import gitHubLogo from "../../assets/github-original.svg";
import "./Project.css";

function Project() {
  const projects = [
    {
      title: "Password Manager",
      image: new URL(
        "../../assets/ProjectImages/passwordManager.png",
        import.meta.url,
      ).href,
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
      <h2 className="text-4xl md:text-2xl font-bold text-center mb-3 -mt-10 text-[#00ff88]">
        PROJECTS
      </h2>
      <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            className="project-card max-w-sm rounded overflow-hidden shadow-lg bg-[#111] hover:scale-105 transition-transform duration-300 p-4"
            key={index}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded"
            />
            <div className="py-4">
              <div className="font-bold text-xl mb-3 text-white">
                {project.title}
              </div>
              <p className="text-gray-400 text-base">{project.description}</p>
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block -mt-3">
              <img src={gitHubLogo} className="github-icon" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
