import React from 'react'
import './style.css'
import Link from 'next/link';
import TronRequestADemo from "@/layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "@/layout/hover-button/WhiteButtonBammer";
const StartupsHeader = () => {
  return (
    <>
     <div className='NextHeaderWrap'>
      <h1>Business Management Software for Startups | MeMate</h1>
      <h2>startups and new companies</h2>
      <p>All-in-one business management software designed to help startups and new companies<br/> stay organized and grow with confidence.</p>
    </div>
      <div className='NextHeaderWrapper NextHeaderAutoBox'>
    <div className='industryNewHead'>
    <div className='LeftSide'>
      <span>Management Software for</span>
       <h4>Startups and New Businesses</h4>
       <p>meMate is designed to help you kickstart your business with the right workflow from day one. It’s the ideal tool to set up your operations smoothly and efficiently as you grow.</p>
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
     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/software-for-startups-img.png" width="100%" alt="Project Management Tools for Startups"/>
    </div>
    </div>
   </div>
    </>
  )
}

export default StartupsHeader
