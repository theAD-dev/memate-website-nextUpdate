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
          <div className="gradientHeading  header-text smokeyGradient">
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
                    priority                      
                    fetchPriority="high"         
                    placeholder="empty"         
                    width={1200} height={600} sizes="100vw" style={{ width: "100%", height: "auto" }}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="how-to-use">
        <p>
          Easy-to-Use Business Management Software: to Start, Run,
          <br /> and Succeed in Your Business{" "}
        </p>
      </div> */}
      <div className="businesses-mode fontFamilyRomanHead homePageNewContent">
       <p>Run your entire business from one powerful platform. <b>MeMate</b> is an all-in-one <b>business
          management software</b> designed to help modern companies manage projects, teams, finances, and
          clients with clarity and control.</p>
        <p>Whether you’re scaling operations or replacing spreadsheets and disconnected tools, MeMate
         delivers smarter workflows, real-time insights, and seamless collaboration — all in one place.</p>
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
