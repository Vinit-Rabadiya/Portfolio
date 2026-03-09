import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center px-4"
        >
          <div className="hero-content text-center max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-[#00ff88]">Vinit Rabadiya</span>
              <span className="text-[#00ff88]">□</span>
            </h1>
            <p className="hero-tagline">Curiosity. Code. Create</p>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
              Data Science Intern | Full Stack Developer
            </h2>
            <p className="hero=description">
              Student developer exploring AI/ML and building web applications
              while turning ideas into real projects.
            </p>
          </div>
        </section>
        <section id="skills">
          <h2>Skills</h2>
        </section>
        <section id="projects">
          <h2>Projects</h2>
        </section>
      </div>
    </>
  );
}

export default Home;
