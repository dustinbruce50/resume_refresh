import React from "react";
import Job from "./Job";
const Experience = () => {
  const jobs = [
    {
      company: "Chartwells Higher Education",
      title: "Associate Director of Dining Services",
      timeframe: "2021 - Today",
      responsibilities: 
        "I lead the largest dining operation on campus, overseeing a $17M budget and a team of 150+ with multiple leadership layers. I build engaged, well-trained teams through hands-on coaching and structured development, while ensuring rigorous safety standards as a food and workplace safety subject matter expert. I manage full budget planning and cost analysis, using data-driven insights to drive efficiency and exceed performance targets.",
    learned: "From this role, I learned how to probelm solve in a professional environment, becoming an expert at SOPs and Action Plans. Delegating was a key skill I developed the hard way."
    },
    {   company: "Chartwells Higher Education",
        title: "Associate Director of Dining Services",
        timeframe: "2018-2021",
        responsibilities: "I was the primary brand manager for 2 starbucks locations, and helped to manager 6 other national brands. The 2 Starbucks stores combined for 1.8M in revenue, had over 50 associates, and 1 supervisor. I ran the daily operations from top to bottom, hiring, training, ordering and scheduling. I was responsible for the P&L, and reported to the Director of my unit, as well as the Regional Director for Starbucks, the financial metrics for both locations.",
        learned: "In this role, I learned the importance of time management and associate engagment. To meet my goals, I had to get get 50 people on board to do things the right way."
    },
    {
        company: "Dolphin Sales Consulting",
        title: "Senior Inside Sales Representative",
        timeframe: "2017-2018",
        responsibilities:
            "As the Senior ISR, I was responsible for training my team to interact with C-leve executives first, and manage high value clients second.",
        learned: "This role taught me to value of self confidence. In order to succesfully capture clients, I first had to believe I was capable of doing so. "
    },
    {
        company: "Chartwells Higher Education, The Den",
        title: "Front Line Supervisor",
        timeframe: "2015-2017",
        responsibilities: "Managing a shift that consisted of 20+ associates, I was the first line of training and interaction with both customers and associates. Implementing the training programs written by the Director and cooordinating with other leaders was my primary responsibility.",
        learned: "This role taught me the value of excelling wherever I am. It wasn’t always glamorous or high-profile, but it often served as a keystone, holding things together when it mattered most."
    }

  ];

  return (
    <div className="card" id='experience'>
      <h1 className="heading">Experience</h1>
      {jobs.map((job, index) => {
        return(
        <Job
          key={index}
          company={job.company}
          timeframe={job.timeframe}
          title={job.title}
          description={job.responsibilities}
          learned={job.learned}
        />)
      })}
    </div>
  );
};

export default Experience;
