import React from "react";
import Carousel from "../Home/Carousel.jsx";
import NewWorkOrder from "/WOM/NewWorkOrder.jpg";
import register from "/WOM/register.jpg";
import UpdateWorkOrder from "/WOM/UpdateWorkOrder.jpg";
import workOrderTable from "/WOM/workOrderTable.jpg";
import login from "/WOM/login.jpg";

const images = [NewWorkOrder, register, UpdateWorkOrder, workOrderTable, login];

const WOM = () => {
  return (
    <div className="card">
      <div className="projectheading">Work Order Management</div>
      <div>
        I decided to build this piece because, in my current position, our work
        order system is terribly disorganized. It's comprised of an excel file
        hosted in teams, and relies on the user to email the technicians, and
        then update the work order log manually.
      </div>
      <div className="projectsubheading">Front End</div>
      <div>
        The work order management system frontend is built with React and
        Material-UI. The login uses BCrypt.NET for password hashing but
        currently doesn’t include email verification or 2FA. The dashboard
        features a searchable, sortable table and filters for active or inactive
        work orders. Users can create or edit work orders through modal forms,
        mark them complete, and upload related photos. The focus so far has been
        on solid functionality rather than polished design.
      </div>
      <div className="projectsubheading">Back End</div>
      <div>
        The backend is developed in .NET with Entity Framework for ORM and uses
        a SQLite database for data storage. It handles CRUD operations for work
        orders, processes user requests, and manages secure file uploads for
        work order photos. Automated email notifications are sent using
        System.Net.Mail. Security includes protected routes in React, hashed
        passwords with BCrypt.NET, and session tokens for authenticated user
        access.
      </div>
      <div className="carousel-container">
        <Carousel images={images} id="carousel" />
      </div>
    </div>
  );
};

export default WOM;
