import "./Resume.css";

const experienceIcon = new URL("../../assets/experience.svg", import.meta.url)
  .href;
const educationIcon = new URL("../../assets/book.svg", import.meta.url).href;

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
          <div className="flex gap-6">
            {/* Left side - Icon */}
            <div
              className="flex flex-col items-center flex-shrink-0 relative"
              style={{ width: "48px" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl flex items-center justify-center shadow-lg border border-gray-800">
                <img
                  src={experienceIcon}
                  alt="Experience"
                  className="w-6 h-6"
                  style={{
                    filter:
                      "invert(70%) sepia(100%) saturate(500%) hue-rotate(90deg)",
                  }}
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-grow">
              <h2 className="text-3xl font-bold mb-8 text-[#00ff88] mt-2">
                Experience
              </h2>
              <div className="relative">
                {/* Vertical line from icon to last dot */}
                <div
                  className="absolute -left-[54px] top-12 w-0.5 bg-gray-700"
                  style={{
                    height: `calc(${experiences.length * 10}rem - 7.5rem)`,
                  }}
                ></div>

                {experiences.map((experience, index) => (
                  <div key={index} className="relative mb-10 last:mb-0 pl-8">
                    {/* Green dot on the line */}
                    <div className="absolute -left-[54px] top-2 w-3 h-3 bg-[#00ff88] rounded-full shadow-[0_0_0_3px_rgba(0,255,136,0.3)] z-10"></div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-[#00ff88] mb-2">{experience.company}</p>
                    <p className="text-gray-400 text-sm mb-3">
                      {experience.duration}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="scroll-mt-20">
        <div className="bg-[#111] p-8 rounded-lg">
          <div className="flex gap-6">
            {/* Left side - Icon */}
            <div
              className="flex flex-col items-center flex-shrink-0 relative"
              style={{ width: "48px" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl flex items-center justify-center shadow-lg border border-gray-800">
                <img
                  src={educationIcon}
                  alt="Education"
                  className="w-6 h-6"
                  style={{
                    filter:
                      "invert(70%) sepia(100%) saturate(500%) hue-rotate(90deg)",
                  }}
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-grow">
              <h2 className="text-3xl font-bold mb-8 text-[#00ff88] mt-2">
                Education
              </h2>
              <div className="relative">
                {/* Vertical line from icon to last dot */}
                <div
                  className="absolute -left-[54px] top-12 w-0.5 bg-gray-700"
                  style={{
                    height: `calc(${education.length * 10}rem - 7.5rem)`,
                  }}
                ></div>

                {education.map((edu, index) => (
                  <div key={index} className="relative mb-10 last:mb-0 pl-8">
                    {/* Green dot on the line */}
                    <div className="absolute -left-[54px] top-2 w-3 h-3 bg-[#00ff88] rounded-full shadow-[0_0_0_3px_rgba(0,255,136,0.3)] z-10"></div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-[#00ff88] mb-2">{edu.degree}</p>
                    <p className="text-gray-400 text-sm mb-3">{edu.duration}</p>
                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
