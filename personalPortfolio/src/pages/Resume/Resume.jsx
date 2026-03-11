import React from "react";
import "./Resume.css";

const experienceIcon = new URL('../../assets/experience.svg', import.meta.url).href;
const educationIcon = new URL('../../assets/education.svg', import.meta.url).href;

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
    <div className="min-h-screen py-20 px-6">
      {/* Experience Section */}
      <section id="experience" className="mb-16 scroll-mt-20">
        <div className="bg-[#111] p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-[#00ff88] flex items-center gap-3">
            <img src={experienceIcon} alt="Experience" className="w-8 h-8" />
            EXPERIENCE
          </h2>
          <div className="relative pl-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative mb-10 last:mb-0">
                {/* Green dot */}
                <div className="absolute -left-[39px] top-2 w-3 h-3 bg-[#00ff88] rounded-full shadow-[0_0_0_4px_rgba(0,255,136,0.3)]"></div>
                
                {/* Vertical line - only show if not the last item */}
                {index < experiences.length - 1 && (
                  <div className="absolute -left-[33px] top-[20px] bottom-[-40px] w-0.5 bg-gray-700"></div>
                )}

                
                {/* Content */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {experience.company}
                  </h3>
                  <p className="text-[#00ff88] text-sm whitespace-nowrap ml-4">
                    {experience.duration}
                  </p>
                </div>
                <p className="text-[#00ff88] mb-3">{experience.title}</p>
                <p className="text-gray-400 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="scroll-mt-20">
        <div className="bg-[#111] p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-[#00ff88] flex items-center gap-3">
            <img src={educationIcon} alt="Education" className="w-8 h-8" />
            EDUCATION
          </h2>
          <div className="relative pl-8">
            {education.map((edu, index) => (
              <div key={index} className="relative mb-10 last:mb-0">
                {/* Green dot */}
                <div className="absolute -left-[39px] top-2 w-3 h-3 bg-[#00ff88] rounded-full shadow-[0_0_0_4px_rgba(0,255,136,0.3)]"></div>
                
                {/* Vertical line - only show if not the last item */}
                {index < education.length - 1 && (
                  <div className="absolute -left-[33px] top-[20px] bottom-[-40px] w-0.5 bg-gray-700"></div>
                )}
                
                {/* Content */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-[#00ff88] text-sm whitespace-nowrap ml-4">
                    {edu.duration}
                  </p>
                </div>
                <p className="text-[#00ff88] mb-3">{edu.degree}</p>
                <p className="text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
