function Skills() {
  // Logo imports or object here
  const logos = {
    python: new URL("../../assets/python-original.svg", import.meta.url).href,
    java: new URL("../../assets/java-original.svg", import.meta.url).href,
    cplusplus: new URL("../../assets/cplusplus-original.svg", import.meta.url)
      .href,
    javascript: new URL("../../assets/javascript-original.svg", import.meta.url)
      .href,
    php: new URL("../../assets/php-original.svg", import.meta.url).href,
    pandas: new URL("../../assets/pandas-original.svg", import.meta.url).href,
    numpy: new URL("../../assets/numpy-original.svg", import.meta.url).href,
    jupyter: new URL(
      "../../assets/jupyter-original-wordmark.svg",
      import.meta.url,
    ).href,
    react: new URL("../../assets/react-original.svg", import.meta.url).href,
    tailwind: new URL("../../assets/tailwindcss-original.svg", import.meta.url)
      .href,
    vite: new URL("../../assets/vitejs-original.svg", import.meta.url).href,
    reactRouter: new URL(
      "../../assets/reactrouter-original.svg",
      import.meta.url,
    ).href,
    css3: new URL("../../assets/css3-original.svg", import.meta.url).href,
    mysql: new URL("../../assets/mysql-original.svg", import.meta.url).href,
    git: new URL("../../assets/git-original.svg", import.meta.url).href,
    github: new URL("../../assets/github-original.svg", import.meta.url).href,
  };

  // Skills data organized by category
  const skills = [
      { name: "Python", logo: logos.python },
      { name: "JavaScript", logo: logos.javascript },
      { name: "Java", logo: logos.java },
      { name: "C++", logo: logos.cplusplus },
      { name: "PHP", logo: logos.php },
    
      { name: "Pandas", logo: logos.pandas },
      { name: "NumPy", logo: logos.numpy },
      { name: "Jupyter", logo: logos.jupyter },
  
      { name: "React", logo: logos.react },
      { name: "Tailwind CSS", logo: logos.tailwind },
      { name: "Vite", logo: logos.vite },
      { name: "React Router", logo: logos.reactRouter },
      { name: "CSS3", logo: logos.css3 },

      { name: "MySQL", logo: logos.mysql },
      { name: "Git", logo: logos.git },
      { name: "GitHub", logo: logos.github },
    
  ];
  
  const invertedPyramid = (items) => {
    const totalItems = items.length;
    const maxRowSize = Math.ceil((-1 +Math.sqrt(1+8*totalItems))/2);
    const rows =[];
    let index = 0;

    for (let rowSize = maxRowSize; rowSize>0 && index<totalItems; rowSize--){
      const rowItems = items.slice(index, index+rowSize);
      rows.push(rowItems);
      index += rowSize;
    }
    return rows;
  };

  const pyramidRows = invertedPyramid(skills);

  return (
    <section id="skills" className="skills-section">
      <div>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill.name}>
              <img src={skill.logo} alt={skill.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
