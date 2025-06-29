import React from "react";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";

const Ames = () => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash == "#ames") {
      setIsOpen(true);
    }
  }, [location]);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    console.log("Drawer toggled to: ", !isOpen);
  };

  return (
    <div className="card-drawer">
      <div className="heading-wrapper" onClick={toggleOpen}>
        <div className="dropdown-wrapper">
          <img
            src="/dropdown.svg"
            style={{
              transition: "transform 0.3s",
              transformOrigin: "center",
              transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
            }}
            alt=""
            className="dropdown"
          />
        </div>
        <div className="projectheading data-science">
          Kaggle - Ames Housing Dataset
        </div>
        <div className="empty">
          <img src="/dropdown.svg" alt="" className="dropdown" />
        </div>
      </div>
      <div
        className="card"
        id="ames"
        ref={drawerRef}
        style={{
          maxHeight: isOpen ? `${drawerRef.current?.scrollHeight}vh` : "0px",

          paddingBottom: isOpen ? "20px" : "0px",
          paddingTop: isOpen ? "20px" : "0px",
          transition: "max-height .5s",
        }}
      >
        <div>
          This project for me was an exploratory data analysis project. I had
          taken 2 Machine Learning courses in my degree program, and I wanted to
          really apply the concepts I had learned in a way that wasn't just to
          make a grade. Through this project, I explored different types of
          models: XGBoost, LGBoost, neural networks, and SVMs. I also explored
          different methods of data processing, from cleaning, scaling, and
          feature engineering. I also explored different methods of model
          evaluation, from cross validation to hyperparameter tuning. For this
          project, I used Optuna to create studies for different
          hyperparameters, and SHAP for exploring feature importance.
        </div>
        <div>
          My original goal was to place in the top 10% of submissions, but I
          realized how lofty that was for my first project. I am proud to have
          been able to submit a model that had a RMSE score of .129, ranking in
          the top 25% however. This score is .007 points away from placing in
          the top 10% of submissions.
        </div>
        <img src="/ames-score.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Ames;
