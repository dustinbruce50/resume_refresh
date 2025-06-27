import React from "react";
import cart from "/Taco/cart.jpeg";
import full_height_menu from "/Taco/full_height_menu.jpeg";
import full_home from "/Taco/full_home.jpeg";
import full_width_menu from "/Taco/full_width_menu.jpeg";
import post_cart_checkout from "/Taco/post_cart_checkout.jpeg";
import stripe_checkout from "/Taco/stripe_checkout.jpeg";
import Carousel from "../Home/Carousel";

const images = [
  cart,
  full_height_menu,
  full_home,
  full_width_menu,
  post_cart_checkout,
  stripe_checkout,
];
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
        front end componenets really easy. On top of that, I really enjoyed the
        way Angular has a great methodology of seperation of concerns. Each
        component has it's own CSS, HTML, and Typescript file. This helped me
        conceptualize each component a littl easier than when i've built
        projects using React.
      </div>
      <div className="projectsubheading">Back End</div>
      <div>
        For the backend, I focused on adding a payment feature I hadn’t tackled
        before. I chose Stripe for its solid API and flexible integration
        options. I implemented an embedded Stripe checkout page but explored
        other approaches, from simple redirects to more advanced custom flows.
      </div>
      <div className = "carousel-container">
        <Carousel images={images} id="carousel" />
      </div>
    </div>
  );
};

export default Taco;
