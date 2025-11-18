import React from 'react'
import './style.css'
import TronRequestADemo from "../../../layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "../../../layout/hover-button/WhiteButtonBammer";
import Link from "next/link";
const PhotoHeader = () => {
  return (
    <>

     <div className='NextHeaderWrap'>
      <h1>Studio Management Software for Photo & Video Teams | MeMate</h1>
      <h2>software for photographers & videographers </h2>
      <p>Simplify project management, team collaboration, and production workflows for your photography and video agency.</p>
    </div>
     <div className='NextHeaderWrapper'>
    <div className='industryNewHead'>
    <div className='LeftSide'>
      <span>Project management software for </span>
       <h4>Photo & Video Agency </h4>
       <p>meMate is designed to suit creative agencies that produce content. It is ideal for companies that need to manage employees and contractors to produce photo and video content, keep track of all variables and people, and ensure the project stays within budget.  meMate – project management software for creative agencies.</p>
       <div className="dubleButtonLeft">
                <div className="request-btn">
                  <Link
                    href="https://app.memate.com.au/requestdemo"
                    target="_blank"
                    className="nav-btn--get-started  navbar-link">
                      <TronRequestADemo text="Book a Demo" />
                  </Link>
                </div>
                <div className="request-btn">
                  <Link
                    href="https://app.memate.com.au/onboarding"
                    target="_blank"
                    className="nav-btn--get-started  navbar-link">
                      <WhiteButtonBammer text="Start Free Trial"/>
                  </Link>
                </div>
          </div>
    </div>
    <div className='RightSide'>
     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/photo-video-agency.png" width="100%" alt="photography business software"/>
    </div>
    </div>
   </div>
    </>
  )
}

export default PhotoHeader
