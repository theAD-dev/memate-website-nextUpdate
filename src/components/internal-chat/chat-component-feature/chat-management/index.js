import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ChatManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="sales-imageF">
        <LazyLoadImage
          alt="manage multiple business locations"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/internalchat01-min.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Accessible</p>
        <p className="sales-heading-salesF">Chat with Employees & </p>
        <p className="sales-typeF">Contractors in One Place</p>
        <p className="sales-description-salesF">
        Easily connect your internal team and external<br/> contractors in a single, secure chat space—no<br/> need for separate tools or platforms.
       </p>
      </div>
    </div>
  );
};

export default ChatManagement;
