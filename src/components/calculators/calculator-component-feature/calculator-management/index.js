import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CalculatorManagement = () => {
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
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/custombusiness01-min.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Powerful</p>
        <p className="sales-heading-salesF">Set a Budget</p>
        <p className="sales-typeF">Automatically</p>
        <p className="sales-description-salesF">
        Create quick and accurate budgets with auto-<br/>calculations based on your set rules—no<br/> spreadsheets required.
       </p>
      </div>
    </div>
  );
};

export default CalculatorManagement;
