import React from 'react'
import './style.css'
import TronRequestADemo from "../../../layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "../../../layout/hover-button/WhiteButtonBammer";
import Link from "next/link";
const IndustryHeader = () => {
  return (
    // <div className='industry-header-wrapper' data-aos="fade-up"
    // data-aos-offset="50"
    // data-aos-delay="50"
    // data-aos-duration="500"
    // data-aos-mirror="true"
    // data-aos-once="false"
    // data-aos-anchor-placement="top-bottom">
    //   <div>
    //   <img
    //         className="motivationImage"
    //         srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Marketing3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Marketing2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Marketing1x.png'} 1800w`}
    //         sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
    //         src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Marketing3x.png'}
    //         alt="contact us main image"
    //         width={400} height={400}
    //       />
    //   </div>
    //   <div></div>
      
    //   <h1 className='industry-top-heading'>Agency Management Software for Creative Agencies</h1>
    //   <p className='industry-middle-heading'>marketing & <br></br>creative <br></br>agencies</p>
    //   <p className='industry-heading-content'>MeMate – Comprehensive Business Management Software for Creative Agencies. Allows you to combine the best features of project management, accounting, quoting, and invoicing. Communicate with clients and submit jobs from a single, centralised platform.</p>
    //   <Link href="https://app.memate.com.au/requestdemo" target="_blank"><button className='industry-heading-button'>Book a Demo</button></Link>
    // </div>
    <>
    <div className='NextHeaderWrap'>
      <h1>Agency Management Software for Creative Agencies | MeMate</h1>
      <h2>software for creatives</h2>
      <p>Easily create and quote your projects based on hourly rates or cost-of-sale models, <br/>ensuring accurate and efficient pricing for your creative work.</p>
    </div>
      <div className='NextHeaderWrapper'>
    <div className='industryNewHead'>
    <div className='LeftSide'>
      <span>Empower your</span>
       <h4>marketing & creative agencies</h4>
       <p>MeMate – Comprehensive Business Management Software for Creative Agencies. Allows you to combine the best features of project management, accounting, quoting, and invoicing. Communicate with clients and submit jobs from a single, centralised platform.</p>
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
     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industry-new-img.png" width="100%" alt="industry-specific software solutions"/>
    </div>
    </div>
   </div>
    </>
  )
}

export default IndustryHeader
