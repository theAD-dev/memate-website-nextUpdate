import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ChatProcessOptimiation = () => {
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
        <p className="sales-heading-salesF">Mobile App Chat Access </p>
        <p className="sales-typeF">for Contractors</p>
        <p className="sales-description-salesF">
        Your contractors can stay in the loop and respond<br/> on the go through the Memate mobile app—easy,<br/> direct communication wherever they are.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="location-based job management"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/internalchat04-min.png"
            effect="blur" 
            type="image/svg+xml"
            className="geolocation"
            />
      </div>
    </div>
  );
};

export default ChatProcessOptimiation;
