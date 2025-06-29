import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ProjectLink = () => {
  return (
    <div className="card" id="projects">
      <h1 className="heading">Projects</h1>
      <span style={{ textAlign: "center" }}>
        All of the projects you see are hosted on my{" "}
        <a href="https://www.github.com/dustinbruce50">Github</a>
      </span>
      <div className="project-link-container">
        <div className="datascience-container">
          <Link className="project-page-link" to={"/datascience"}>
            Data Science Projects:{" "}
          </Link>
          <HashLink className="project" smooth to="/datascience#thelook">
            The Look
          </HashLink>
          <HashLink className="project" smooth to="/datascience#ames">
            Ames Dataset
          </HashLink>
          <div className="empty">empty</div>
          <div className="empty">empty</div>
        </div>
        <div className="fullstack-container">
          <Link className="project-page-link" to={"/fullstack"}>
            Full Stack Projects:{" "}
          </Link>
          <HashLink className="project" smooth to="/fullstack#chat">
            Chat App
          </HashLink>
          <HashLink className="project" smooth to="/fullstack#taco">
            Taco Ecommerce
          </HashLink>
          <HashLink
            className="project"
            smooth
            to="/fullstack#transfer"
          ></HashLink>
          <HashLink className="project" smooth to="/fullstack#wom">
            Work Order Management
          </HashLink>
          <HashLink className="project" smooth to="/fullstack#transfer">
            Transfer Management
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectLink;
