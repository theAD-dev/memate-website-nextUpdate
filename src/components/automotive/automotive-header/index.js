import React from "react";
import "./style.css";
import Link from "next/link";
import TronRequestADemo from "@/layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "@/layout/hover-button/WhiteButtonBammer";
const AutomotiveHeader = () => {
  return (
    <>
      <div className="NextHeaderWrap">
        <h1>Business Management Software for the Automotive Industry</h1>
        <h2>software for auto detailing shops</h2>
        <p>
        Here’s the solution for car wrapping and detailing businesses. We’ve designed and tested <br/>meMate specifically for you—robust, simple to use, and proven in the field.        </p>
      </div>
      <div className="NextHeaderWrapper NextHeaderAutoBox">
        <div className="industryNewHead">
          <div className="LeftSide">
            <span>Business Management Software for the Automotive Industry</span>
            <h4>For Car Wrapping & Detailing  </h4>
            <p>
            meMate streamlines operations for car wrapping and detailing services, managing workflows, contractors, and customer communication—all in one easy-to-use platform.            </p>
            <div className="dubleButtonLeft">
              <div className="request-btn">
                <Link
                  href="https://app.memate.com.au/requestdemo"
                  target="_blank"
                  className="nav-btn--get-started  navbar-link"
                >
                  <TronRequestADemo text="Book a Demo" />
                </Link>
              </div>
              <div className="request-btn">
                <Link
                  href="https://app.memate.com.au/onboarding"
                  target="_blank"
                  className="nav-btn--get-started  navbar-link"
                >
                  <WhiteButtonBammer text="Start Free Trial" />
                </Link>
              </div>
            </div>
          </div>
          <div className="RightSide">
            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automotive-industry-img.png"
              width="100%"
              alt="mechanic shop CRM"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AutomotiveHeader;
