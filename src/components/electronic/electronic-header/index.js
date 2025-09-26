import React from 'react'
import './style.css'
import TronRequestADemo from "../../../layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "../../../layout/hover-button/WhiteButtonBammer";
import Link from "next/link";
const ElectronicHeader = () => {
  return (
    <>
    <div className='NextHeaderWrap'>
      <h1>Repair Shop Management Software for Electronics Businesses</h1>
      <h2>software for repair shops</h2>
      <p>Meet MeMate, a complete solution built with repair shops in mind. Whether you’re fixing cameras, phones, computers, or any other electronics, our software is tailored to make your business run smoother and more efficiently.</p>
    </div>
      <div className='NextHeaderWrapper'>
    <div className='industryNewHead'>
    <div className='LeftSide'>
      <span>Software that helps Australian repair <br/>shops
operate efficiently</span>
       <h4>Electronic Repair Specialists</h4>
       <p>With MeMate, you can effortlessly communicate with clients and effortlessly submit jobs, all from a centralised and streamlined interface. Say goodbye to scattered systems and embrace the convenience of MeMate for unparalleled business management in the  electronics repair industry.</p>
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
     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/electronic-head-photo.png" width="100%" alt="small repair business software"/>
    </div>
    </div>
   </div>
    </>
  )
}

export default ElectronicHeader
