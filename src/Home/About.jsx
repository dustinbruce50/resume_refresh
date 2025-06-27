import React from "react";

const About = () => {
  return (
    <div id="about" className="card">
      <div className="gridcontainer">
        <img className="item2" src="/coder.png" alt="" />
        <div className="item3">
          <h1>Hello, I'm Dustin Bruce. </h1>I graduated in 2023 with a Computer
          Science degree from Texas State University
        </div>
      </div>
      <a
        className="credit"
        href="https://www.flaticon.com/free-icons/coder"
        title="coder icons"
      >
        Coder icons created by Freepik - Flaticon
      </a>

      <h1 className="heading">About Me</h1>
      <div
        style={{
          fontSize: "90%",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          color: "#333",
        }}
      >
        B.S Computer Science, Texas State University 3.1 GPA Graduated Dec 2023
      </div>
      <div className="body">
        I’m not your typical Computer Science graduate. Before earning my
        degree, I built a successful career as a Food Service Director with
        Chartwells Higher Education but wanted to fully leverage my analytical
        and problem-solving skills. So in 2021, I returned to school while
        working full-time, completing my degree in just 2.5 years. I’m now back
        in my director role, building my portfolio and growing my technical
        skills.
      </div>
    </div>
  );
};

export default About;
