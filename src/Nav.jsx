import React from "react";

const Nav = () => {
  return (
    <>
      <div className="Nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#project-link">Projects</a>
        <a href="#Contact">Contact</a>
        <button
          style={{
            backgroundColor: "black",
            borderRadius: "5px",
            color: "white",
            alignSelf: "center",
            justifySelf: "right",
            marginLeft: "auto",
            height: "50%",
          }}
        >
          Resume
        </button>
      </div>
    </>
  );
};

export default Nav;
