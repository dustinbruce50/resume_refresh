import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Nav from "./Nav.jsx";
import DSHome from "./DataScienceProjects/DSHome.jsx";
import FSHome from "./FullStackProjects/FSHome.jsx";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datascience" element={<DSHome/>} />
          <Route path="/fullstack" element={<FSHome/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
