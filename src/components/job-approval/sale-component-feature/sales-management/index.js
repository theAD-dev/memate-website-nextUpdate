import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SalesManagement = () => {
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
            alt="job sign-off software"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/job-pproval-iphone-mockup.svg"
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
      <div className="content-wrapper">
        <p className="sale-titleF">Centralised</p>
        <p className="sales-heading-salesF">Workflow</p>
        <p className="sales-typeF">Approval</p>
        <p className="sales-description-salesF">
        meMate replaces all your traditional clock-in and <br/>clock-out time-tracking devices. With the meMate<br/> mobile app,
         tracking shifts becomes simpler and <br/> more efficient, streamlining workforce time<br/> management in your office.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
