import React from "react";

const SkillBox = ({ skill, logo }) => {
  return (
    <>
      <div className={`skillbox ${skill}`}>
        {logo && <img src={logo} alt="" />}
        <div>{skill}</div>
      </div>
    </>
  );
};

export default SkillBox;
