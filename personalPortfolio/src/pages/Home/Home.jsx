import React, { use } from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import Skills from "./Skills";
import Project from "./Project";

function Home() {
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "Student developer exploring AI/ML and building web applications while turning ideas into real projects.";
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50); // Speed: 30ms per character (adjust for faster/slower)

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="home-container">
        <section
          id="home"
          className="min-h-screen flex flex-col justify-start items-center px-4 pt-10"
        >
          <div className="hero-content text-center max-w-3xl">
            <p className="hero-tagline text-xl md:text-4xl mb-8 font-black">
              Curiosity. Code. Create.
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Hello, I'm{" "}
              <span className="name mt-2 text-[#00ff88]">
                Vinit Rabadiya.
                <span
                  className="blink-cursor text-[#00ff88]"
                  aria-hidden="true"
                ></span>
              </span>
            </h1>

            <h2 className="text-2xl md:text-2xl text-gray-300 mb-6">
              Data Science Intern | Full Stack Developer
            </h2>
            <p className="hero-description text-base md:text-lg text-gray-400">
              {displayText}
            </p>
          </div>
        </section>

        <Skills />
        <Project />
      </div>
    </>
  );
}

export default Home;
