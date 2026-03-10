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
      className="min-h-screen flex flex-col items-center px-4 "
    >
      <h2 className="text-4xl md:text-2xl font-bold text-center mb-4 text-[#00ff88]">
        PROJECTS
      </h2>

      <div className="projects-container grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-center gap-8 w-full ">
        {projects.map((project, index) => (
          <div
            className="project-card w-full rounded-xl overflow-hidden shadow-lg bg-[#111] hover:scale-102 hover:shadow-[0_0_10px_#00ff88] transition-all duration-600 p-4"
            key={index}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            <div className="py-4">
              <h3 className="font-bold text-xl mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={gitHubLogo}
                className="github-icon w-7 hover:scale-110 transition"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
