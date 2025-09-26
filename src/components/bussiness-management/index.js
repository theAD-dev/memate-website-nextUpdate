import React from "react";
import Images from "../../assests/images";
import "./styles.css";
import Link from "next/link";
import TronRequestADemo from "../../layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "../../layout/hover-button/WhiteButtonBammer";
import Image from "next/image";
const BussinessManagement = () => {
  return (
    <div className="home-page-content filtercolorbox">
      <div className="home-container-wrapper">
        <div
          className="home-page-section"
        >
          <div className="home-platform">
            <h1>All-in-One Business Management Software Platform</h1>
          </div>
          <div className="gradientHeading gradiientColor header-text">
            to run your business
          </div>
        </div>

        <div className="image-wrapper">
          <div className="macBook-image">
            <div className="big-img-mac">
              <div className="big-img-macMain">
                <Image
                  alt="Business Management Software"
                  src={Images.landingHero}
                  width="1200"
                  height="600"
                  style={{ width: "100%", height: "auto" }}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-to-use">
        <p>
          Easy-to-Use Business Management Software: to Start, Run,
          <br /> and Succeed in Your Business{" "}
        </p>
      </div>
      <div className="businesses-mode fontFamilyRomanHead">
        <span>
          Made for Small to Medium Businesses & Business Projects, Offering
          Simplicity & Control
        </span>
      </div>

      <div className="dflexbannerbtn">
        <div className="request-btn">
          <Link
            href="https://app.memate.com.au/requestdemo"
            target="_blank"
            className="nav-btn--get-started  navbar-link"
          >
            <TronRequestADemo text="Request a Demo" />
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
  );
};

export default BussinessManagement;
