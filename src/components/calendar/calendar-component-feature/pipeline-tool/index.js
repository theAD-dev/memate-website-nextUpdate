import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const PipeLineTool = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="sales-imageF">
        <LazyLoadImage
            alt="staff and job tracking by location"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/companycalender03-min.png"
            effect="blur" 
            type="image/svg+xml"
            className="Collaborative"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Organised</p>
        <p className="sales-heading-salesF">See Team Availability </p>
        <p className="sales-typeF">at a Glance</p>
        <p className="sales-description-salesF">
        Quickly check who’s available, off, or already<br/> booked—perfect for efficient task and resource<br/> planning.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
