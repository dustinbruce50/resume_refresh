import React from "react";
import Carousel from "../Home/Carousel";
import chat from "/Chat/chat.jpeg";
import login_register from "/Chat/login_register.png";
import login from "/Chat/login.jpeg";
import register from "/Chat/register.jpeg";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";
const images = [chat, login_register, login, register];

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#chat") {
      setIsOpen(true);
    }
  }, [location]);
  const drawerRef = useRef(null);

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
        <div className="projectheading data-science">Chat App - Socket.IO</div>
        <div className="empty">
          <img src="/dropdown.svg" alt="" className="dropdown" />
        </div>
      </div>
      <div
        className="card"
        id="chat"
        ref={drawerRef}
        style={{
          maxHeight: isOpen ? `${drawerRef.current?.scrollHeight}vh` : "0px",
          paddingBottom: isOpen ? "20px" : "0px",
          paddingTop: isOpen ? "20px" : "0px",
          transition: "max-height .5s",
        }}
      >
        <div className="projectheading">Chat App</div>
        <div>
          This application I built because it sounded like a refreshing break
          from other front end focused projects. This is a chat application
          built on Socket.IO and ExpressJS
        </div>
        <div>
          <div className="projectsubheading">Front End</div>
          <div>
            I left the front end extremely simple, because I wanted to focus on
            back end functionality.
          </div>
          <div className="projectsubheading">Back End</div>
          <div>
            This back end was the most complex i've built by far. It relies on
            an ExpressJS server using Socket.IO and MongoDB to run a real time
            chat application. The APIs are very simple (getMessages,
            sendMessage, login, register). The front end sends the message
            through the API, the server saves the message to the MongoDB
            Collection, and emits to the front end clients when a message has
            been sent. The inital load relies on pulling messages from the
            database collection, but all subsequent messages are sent through
            the sockets.
          </div>
        </div>
        <div className="carousel-container">
          <Carousel images={images} id="carousel" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
