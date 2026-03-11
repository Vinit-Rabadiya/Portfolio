import React from "react";
import "./Resume.css";

function Resume() {
  const experiences = [
    {
      title: "Smart Fellow (Data Science Intern)",
      company: "@iLabAfrica",
      duration: "June 2023 - August 2023",
      description:
        "Worked on a project focused on analyzing and predicting the spread of infectious diseases using machine learning algorithms. Developed a predictive model that achieved an accuracy of 85% in forecasting disease outbreaks based on historical data and environmental factors.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Nairobi",
      duration: "2019 - 2023",
      description:
        "Graduated with First Class Honors, specializing in Data Science and Machine Learning. Completed coursework in algorithms, data structures, and artificial intelligence, and participated in various projects and internships related to software development and data analysis.",
    },
    {
      degree: "High School Diploma",
      institution: "Nairobi High School",
      duration: "2015 - 2018",
      description:
        "Graduated with a strong academic record, excelling in mathematics and computer science. Participated in extracurricular activities such as coding clubs and science fairs, which sparked an interest in technology and software development.",
    },
  ];
  return (
    <>
      <section id="Experience">
        <div>
          {experiences.map((experience, index) => (
            <div key={index}>
              <h2>{experience.title}</h2>
              <h3>{experience.company}</h3>
              <p>{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="Education">
        <div>
          {education.map((education, index) => (
            <div key={index}>
              <h2>{education.title}</h2>
              <h3>{education.company}</h3>
              <p>{education.duration}</p>
              <p>{education.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Resume;
