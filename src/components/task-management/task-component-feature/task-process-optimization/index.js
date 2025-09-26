import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const TaskProcessOptimiation = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Fast</p>
        <p className="sales-heading-salesF">Manage To-Do Lists</p>
        <p className="sales-typeF">via the Memate App</p>
        <p className="sales-description-salesF">
        Send, view, and update tasks from anywhere<br/> using the Memate mobile app—ideal for teams on<br/> the move.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="location-based job management"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/todolist04-min.png"
            effect="blur" 
            type="image/svg+xml"
            className="geolocation"
            />
      </div>
    </div>
  );
};

export default TaskProcessOptimiation;
