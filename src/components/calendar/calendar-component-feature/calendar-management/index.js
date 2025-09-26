import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CalendarManagement = () => {
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
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/companycalander01-min.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Intuitive</p>
        <p className="sales-heading-salesF">View All Contractor</p>
        <p className="sales-typeF">Jobs in One Place</p>
        <p className="sales-description-salesF">
        Easily track every contractor’s schedule across all<br/> projects, so you always know who’s working on<br/> what—and when.
       </p>
      </div>
    </div>
  );
};

export default CalendarManagement;
