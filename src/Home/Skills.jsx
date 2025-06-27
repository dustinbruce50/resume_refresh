import React from "react";
import SkillBox from "./SkillBox";

const Skills = () => {
  const skill_set = [
    { skill: "JavaScript", logo: "/skillLogos/javascript.svg" },
    { skill: "HTML", logo: "/skillLogos/html.svg" },
    { skill: "CSS", logo: "/skillLogos/css.svg" },
    { skill: "React", logo: "/skillLogos/react.svg" },
    { skill: "Git", logo: "/skillLogos/git.svg" },
    { skill: "PostgreSQL", logo: "/skillLogos/pg.svg" },
    { skill: "Python", logo: "/skillLogos/python.svg" },
    { skill: "SQL", logo: "/skillLogos/sql.svg" },
    { skill: "DBT", logo: "/skillLogos/dbt.svg" },
    { skill: "Buisness Analysis", logo: "/skillLogos/banalysis.svg" },
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
