import React from "react";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Dustin_Bruce_Resume.pdf"; // Path to your resume file
    link.download = "Dustin_Bruce_Resume.pdf"; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="Nav">
        <HashLink smooth to="/#about">
          About
        </HashLink>
        <HashLink smooth to="/#skills">
          Skills
        </HashLink>
        <HashLink smooth to="/#experience">
          Experience
        </HashLink>
        <HashLink smooth to="/#projects">
          Projects
        </HashLink>
        <HashLink smooth to="/#contact">
          Contact
        </HashLink>
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
          onClick={downloadResume}
        >
          Resume
        </button>
      </div>
    </>
  );
};

export default Nav;
