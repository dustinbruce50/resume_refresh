import React from "react";
import TheLook from "./TheLook.jsx";
import PdfViewer from "./PdfViewer.jsx";

const DSHome = () => {
  return (
    <div className="home" id="datasciencehome">
      <img src="src\assets\datascience.svg" alt="" />
      <h1 className="heading">Data Science Projects</h1>

      <TheLook />
    </div>
  );
};

export default DSHome;
