import React from "react";
import Carousel from "../Home/Carousel";
import chat from "/Chat/chat.jpeg";
import login_register from "/Chat/login_register.png";
const images = [chat, login_register];

const Chat = () => {
  return (
    <div className="card">
      <div className="projectheading">Chat App</div>
      <div>
        This application I built because it sounded like a refreshing break from
        other front end focused projects. This is a chat application built on
        Socket.IO and ExpressJS
      </div>
      <div>
        <div className="projectsubheading">Front End</div>
        <div>
          I left the front end extremely simple, because I wanted to focus on
          back end functionality.
        </div>
        <div className="projectsubheading">Back End</div>
        <div>
            This back end was the most complex i've built by far. It relies on an ExpressJS server using Socket.IO and MongoDB to run a real time chat application. The APIs are very simple (getMessages, sendMessage, login, register). The front end sends the message through the API, the server saves the message to the MongoDB Collection, and emits to the front end clients when a message has been sent. The inital load relies on pulling messages from the database collection, but all subsequent messages are sent through the sockets.
        </div>
        </div>
      <div className="carousel-container">
        <Carousel images={images} id="carousel" />
      </div>
    </div>
  )}

export default Chat;
