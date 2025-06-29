import React from "react";
import cart from "/Taco/cart.png";
import menunc from "/Taco/menu-nc.png";
import menuc from "/Taco/menu-c.png";
import stripe from "/Taco/stripe-checkout.png";
import tacohome from "/Taco/taco-home.png";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";

import Carousel from "../Home/Carousel";

const images = [cart, menuc, menunc, stripe, tacohome];
const Taco = () => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash == "#taco") {
      setIsOpen(true);
    }
  }, [location]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    console.log("Drawer toggled to: ", !isOpen);
  };

  return (
    <div className="card-drawer" id="taco">
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
        <div className="projectheading data-science">Taco ECommerce</div>
        <div className="empty">
          <img src="/dropdown.svg" alt="" className="dropdown" />
        </div>
      </div>
      <div
        className="card"
        ref={drawerRef}
        style={{
          maxHeight: isOpen ? `${drawerRef.current?.scrollHeight}vh` : "0px",
          paddingBottom: isOpen ? "20px" : "0px",
          paddingTop: isOpen ? "20px" : "0px",
          transition: "max-height .5s",
        }}
      >
        <div className="projectheading"></div>
        <div>
          For this project, I chose to try Angular instead of my usual React
          stack. I wanted hands-on experience since my college team spoke highly
          of it. While I found Angular less intuitive than React, using
          TypeScript helped me build cleaner patterns for passing data and
          strengthened my JavaScript fundamentals.
        </div>
        <div className="projectsubheading">Front End</div>
        <div>
          The front end was really fun to work on, as Angular makes generating
          front end components really easy. On top of that, I really enjoyed the
          way Angular has a great methodology of separation of concerns. Each
          component has it's own CSS, HTML, and Typescript file. This helped me
          conceptualize each component a little easier than when I've built
          projects using React.
        </div>
        <div className="projectsubheading">Back End</div>
        <div>
          For the backend, I focused on adding a payment feature I hadn’t
          tackled before. I chose Stripe for its solid API and flexible
          integration options. I implemented an embedded Stripe checkout page
          but explored other approaches, from simple redirects to more advanced
          custom flows.
        </div>
        <div className="carousel-container">
          <Carousel images={images} id="carousel" />
        </div>
      </div>
    </div>
  );
};

export default Taco;
