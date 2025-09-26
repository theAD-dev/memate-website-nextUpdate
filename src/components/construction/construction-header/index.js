import React from "react";
import "./style.css";
import Link from "next/link";
import TronRequestADemo from "@/layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "@/layout/hover-button/WhiteButtonBammer";
const ConstructionHeader = () => {
  return (
    <>
      <div className="NextHeaderWrap">
        <h1>Business Software for the Construction Industry</h1>
        <h2>software for construction companies</h2>
        <p>
        All-in-one business software for Australian construction companies. Manage jobs, quotes,<br/> contractors, scheduling, invoicing, and site teams — all in one place        
        </p>
      </div>
      <div className="NextHeaderWrapper NextHeaderAutoBox">
        <div className="industryNewHead">
          <div className="LeftSide">
            <span>Management Software for</span>
            <h4>Builders, Trades & Construction Teams</h4>
            <p>
            Run your construction business the smart way — with everything in one dashboard. From job quotes to on-site contractor coordination, MeMate <br/>handles it all.           </p>
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
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/construction-industry-img.png"
              width="100%"
              alt="construction-specific software solutions"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionHeader;
