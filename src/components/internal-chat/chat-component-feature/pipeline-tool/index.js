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
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/internacht03-min.png"
            effect="blur" 
            type="image/svg+xml"
            className="Collaborative"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Collaborative</p>
        <p className="sales-heading-salesF">Share Files, Links & More </p>
        <p className="sales-typeF">All in One Thread</p>
        <p className="sales-description-salesF">
        Easily share documents, links, and notes right in<br/> the chat, with everything saved in the project<br/> history for quick access anytime.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
