import React from "react";
import SkillBox from "./SkillBox";

const Skills = () => {
  const skill_set = [
    { skill: "JavaScript", logo: "src/assets/skillLogos/javascript.svg" },
    { skill: "HTML", logo: "src/assets/skillLogos/html.svg" },
    { skill: "CSS", logo: "src/assets/skillLogos/css.svg" },
    { skill: "React", logo: "src/assets/skillLogos/react.svg" },
    { skill: "Git", logo: "src/assets/skillLogos/git.svg" },
    { skill: "PostgreSQL", logo: "src/assets/skillLogos/pg.svg" },
    { skill: "Python", logo: "src/assets/skillLogos/python.svg" },
    { skill: "SQL", logo: "src/assets/skillLogos/sql.svg" },
    { skill: "DBT", logo: "src/assets/skillLogos/dbt.svg" },
    { skill: "Buisness Analysis", logo: "src/assets/skillLogos/banalysis.svg" },
  ];

  return (
    <div className="card" id="skills">
      <h1 className="heading">Skills</h1>
      <div className="skillcontainer">
        {skill_set.map((skillitem, index) => (
          <SkillBox key={index} skill={skillitem.skill} logo={skillitem.logo} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
