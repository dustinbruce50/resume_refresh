import React from "react";
import TheLook from "./TheLook.jsx";
import PdfViewer from "./PdfViewer.jsx";
import Ames from "./Ames.jsx";

const DSHome = () => {
  return (
    <div className="home" id="datasciencehome">
      <div className="ds-header-container">
        <img src="src\assets\datascience.svg" alt="" className="ds-logo" />
        <h1 className="heading">Data Science Projects</h1>
      </div>
      <div className="drawer-container">
        <TheLook />
        <Ames />
      </div>
    </div>
  );
};

export default DSHome;
