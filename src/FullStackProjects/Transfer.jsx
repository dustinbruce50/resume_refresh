import React from "react";
import { useState, useRef, useEffect } from "react";
import Carousel from "../Home/Carousel";
import { useLocation } from "react-router";

import driver_ready from "/Transfers/driver_ready.png";
import driver_recently from "/Transfers/driver_recently.png";
import homescreen from "/Transfers/homescreen.png";
import loginscreen from "/Transfers/loginscreen.png";
import operator_delivered from "/Transfers/operator_delivered.png";
import operator_open from "/Transfers/operator_open.png";
import operator_request from "/Transfers/operator_request.png";
import register from "/Transfers/register.png";
import successlogin from "/Transfers/successlogin.png";
const images = [
  driver_ready,
  driver_recently,
  homescreen,
  loginscreen,
  operator_delivered,
  operator_open,
  operator_request,
  register,
  successlogin,
];
const Transfer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash == "#transfer") {
      setIsOpen(true);
    }
  }, [location]);

  const drawerRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    console.log("Drawer toggled to: ", !isOpen);
  };

  return (
    <div className="card-drawer" id="transfer">
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
          Transfer App - React Native
        </div>
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
        <h1 className="projectheading">Transfer</h1>
        <div>
          A project that I built to learn a new technology, with the benefit of
          doubling as a solution to a problem I have in my daily career. On a
          daily basis, my job requires me to communicate with up to 8 other
          units and coordinate the transfer of food and supplies. This app is a
          solution to that problem, allowing me to send a request for food that
          will notify all other operators of my need.
        </div>
        <div className="carousel-container">
          <Carousel images={images} id="carousel" />
        </div>
        <div>
          I built the front end in React Native without Expo to get deeper
          experience with the framework. Along the way, I learned a lot about
          handling keyboard quirks on mobile and the real differences between
          web and native development. The app uses a stack navigator from the
          login screen, then switches to role-based tabs: Drivers and Operators
          see only the features they need, keeping the interface clear and
          user-friendly.
        </div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Transfer;
