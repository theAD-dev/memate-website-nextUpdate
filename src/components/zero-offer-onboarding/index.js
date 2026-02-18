import React from "react";
import "./style.css";
import Link from 'next/link';
import { LazyLoadImage } from "react-lazy-load-image-component";
import InfiniteDualSlider from './InfiniteDualSlider'



const ZeroOfferOnboarding = () => {

  return (
    <div className="onboarding-section onboarding-section12" >
      <div className="onboarding-section-content">
        <div className="offer-opt1">
          <div className="sab-heading">
            <div className="h2HeadingHome"> We offer <span className="shadow">zero</span> fees for</div>
            <div className="headingSimmer">onboarding</div>
            <p>
           Plus, we provide a  <em className="em sequel_sans_semi_bold_head">14-day</em>  free trial because we believe our software will become indispensable to your business.
            </p>
            <div className="button-container butcontainerzero">
              <Link href="https://app.memate.com.au/requestdemo"><button className="book-a-demo">Book a Demo</button></Link>
              <Link href="https://app.memate.com.au/onboarding"><button className="book-a-demo">Start Free Trial</button></Link>
            </div>
          </div>    
         <InfiniteDualSlider />
        </div>
      </div>
    </div>
  );
};

export default ZeroOfferOnboarding;
