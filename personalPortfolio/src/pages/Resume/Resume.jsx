import "./Resume.css";
import { useRef, useEffect } from "react";

const experienceIcon = new URL("../../assets/experience.svg", import.meta.url)
  .href;
const educationIcon = new URL("../../assets/book.svg", import.meta.url).href;

function Resume() {
  const experienceLineRef = useRef(null);
  const educationLineRef = useRef(null);
  const experienceContentRef = useRef(null);
  const educationContentRef = useRef(null);

  useEffect(() => {
    const updateLineHeights = () => {
      // Update experience line
      if (experienceContentRef.current && experienceLineRef.current) {
        const items = experienceContentRef.current.querySelectorAll('.timeline-item');
        if (items.length > 0) {
          const lastItem = items[items.length - 1];
          const dot = lastItem.querySelector('.timeline-dot');
          if (dot) {
            // Get the absolute position of the dot relative to the line container
            const lineRect = experienceLineRef.current.getBoundingClientRect();
            const dotRect = dot.getBoundingClientRect();
            // Calculate height from top of line to center of last dot
            const height = dotRect.top - lineRect.top + (dotRect.height / 2);
            experienceLineRef.current.style.height = `${height}px`;
          }
        }
      }
      
      // Update education line
      if (educationContentRef.current && educationLineRef.current) {
        const items = educationContentRef.current.querySelectorAll('.timeline-item');
        if (items.length > 0) {
          const lastItem = items[items.length - 1];
          const dot = lastItem.querySelector('.timeline-dot');
          if (dot) {
            const lineRect = educationLineRef.current.getBoundingClientRect();
            const dotRect = dot.getBoundingClientRect();
            const height = dotRect.top - lineRect.top + (dotRect.height / 2);
            educationLineRef.current.style.height = `${height}px`;
          }
        }
      }
    };

    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(updateLineHeights, 100);
    window.addEventListener('resize', updateLineHeights);
    return () => window.removeEventListener('resize', updateLineHeights);
  }, []);

  const experiences = [
    {
      title: "Junior Smart Fellow (Data Science Intern)",
      company: "@iLabAfrica",
      duration: "January 2026 – Present",
      responsibilities: [
        "Perform data profiling, cleaning, and exploratory data analysis using Python (Pandas, NumPy, Matplotlib, Seaborn, and other libraries).",
        "Applied machine learning models to conduct predictive analysis on real-world and healthcare-related data.",
        "Interpret model results and generate meaningful insights.",
        "Develop interactive dashboards in Power BI using measures, Power Query, and visualizations to present findings."
      ]
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Informatics and Computer Science",
      institution: "Strathmore University",
      location: "Nairobi, Kenya",
      duration: "2023 - Present",
      description: "",
    },
    {
      degree: "Pearson Edexcel International Advanced Level (IAL) (A' Levels)",
      institution: "SCLP Samaj Senior School",
      location: "Nairobi, Kenya",
      duration: "2020 - 2022",
      description: "Obtained grade 'A' in Pure Mathematics and Chemistry, grade 'B' in Physics and grade 'C' in Further Pure Mathematics.",
    },
    
  ];

  return (
    <div className="min-h-screen pt-2 pb-8 px-6">
      {/* Experience Section */}
      <section id="experience" className="mb-4 scroll-mt-20">
        <div className="bg-[#111] p-8 rounded-lg">
          <div className="flex gap-6">
            {/* Left side - Icon with line */}
            <div
              className="flex flex-col items-center flex-shrink-0 relative"
              style={{ width: "48px" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl flex items-center justify-center shadow-lg border border-gray-800 mb-4 relative z-10">
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
              {/* Vertical line from icon to last dot */}
              <div 
                ref={experienceLineRef}
                className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gray-700"
              ></div>
            </div>

            {/* Right side - Content */}
            <div className="flex-grow">
              <h2 className="text-3xl font-bold mb-8 text-[#00ff88] mt-2 -ml-4">
                Experience
              </h2>
              <div className="relative" ref={experienceContentRef}>
                {experiences.map((experience, index) => (
                  <div key={index} className="timeline-item relative mb-10 last:mb-0">
                    {/* Green dot on the line */}
                    <div className="timeline-dot absolute left-[-54px] top-2 w-3 h-3 bg-[#00ff88] rounded-full shadow-[0_0_0_3px_rgba(0,255,136,0.3)] z-10"></div>

                    {/* Content with padding */}
                    <div className="-ml-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-[#00ff88] mb-1 text-sm">{experience.company}</p>
                      <p className="text-gray-400 text-sm mb-3">
                        {experience.duration}
                      </p>
                      <ul className="text-gray-300 leading-relaxed text-sm space-y-2">
                        {experience.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
            {/* Left side - Icon with line */}
            <div
              className="flex flex-col items-center flex-shrink-0 relative"
              style={{ width: "48px" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl flex items-center justify-center shadow-lg border border-gray-800 mb-4 relative z-10">
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
              {/* Vertical line from icon to last dot */}
              <div 
                ref={educationLineRef}
                className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gray-700"
              ></div>
            </div>

            {/* Right side - Content */}
            <div className="flex-grow">
              <h2 className="text-3xl font-bold mb-8 text-[#00ff88] mt-2 -ml-4">
                Education
              </h2>
              <div className="relative" ref={educationContentRef}>
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item relative mb-10 last:mb-0">
                    {/* Green dot on the line */}
                    <div className="timeline-dot absolute left-[-54px] top-2 w-3 h-3 bg-[#00ff88] rounded-full shadow-[0_0_0_3px_rgba(0,255,136,0.3)] z-10"></div>

                    {/* Content with padding */}
                    <div className="-ml-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-[#00ff88] mb-1 text-sm">
                        {edu.institution} • {edu.location}
                      </p>
                      <p className="text-gray-400 text-sm mb-3">{edu.duration}</p>
                      {edu.description && (
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {edu.description}
                        </p>
                      )}
                    </div>
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
