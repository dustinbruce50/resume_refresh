import React from "react";
import { Link } from "react-router-dom";

const ProjectLink = () => {
  return (
    <div className="card" id="project-link">
      <h1 className="heading">Projects</h1>
      <span style={{ textAlign: "center" }}>
        All of the projects you see are hosted on my{" "}
        <a href="https://www.github.com/dustinbruce50">Github</a>
      </span>
      <div className="project-link-container">
        <Link to={"/datascience"}>Data Science Projects</Link>
        <Link to={"/fullstack"}>Full Stack Projects</Link>
      </div>
    </div>
  );
};

export default ProjectLink;
