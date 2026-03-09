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
            <p className="hero-tagline text-xl md:text-2xl mb-8">
              Curiosity. Code. Create
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Hi, I'm <span className="text-[#00ff88]">Vinit Rabadiya</span>
              <span className="text-[#00ff88]">□</span>
            </h1>

            <h2 className="text-2xl md:text-2xl text-gray-300 mb-6">
              Data Science Intern | Full Stack Developer
            </h2>
            <p className="hero-description text-base md:text-lg text-gray-400">
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
