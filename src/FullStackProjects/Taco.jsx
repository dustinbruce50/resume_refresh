import React from "react";
import cart from "/Taco/cart.png";
import menunc from "/Taco/menu-nc.png";
import menuc from "/Taco/menu-c.png";
import stripe from "/Taco/stripe-checkout.png";
import tacohome from "/Taco/taco-home.png";

import Carousel from "../Home/Carousel";

const images = [cart, menuc, menunc, stripe, tacohome];
const Taco = () => {
  return (
    <div className="card">
      <div className="projectheading">Taco ECommerce</div>
      <div>
        For this project, I chose to try Angular instead of my usual React
        stack. I wanted hands-on experience since my college team spoke highly
        of it. While I found Angular less intuitive than React, using TypeScript
        helped me build cleaner patterns for passing data and strengthened my
        JavaScript fundamentals.
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
        For the backend, I focused on adding a payment feature I hadn’t tackled
        before. I chose Stripe for its solid API and flexible integration
        options. I implemented an embedded Stripe checkout page but explored
        other approaches, from simple redirects to more advanced custom flows.
      </div>
      <div className="carousel-container">
        <Carousel images={images} id="carousel" />
      </div>
    </div>
  );
};

export default Taco;
