import React, { useRef } from "react";
import { useRouter } from "next/navigation"; 
import PlayIconStoke from '../../svg/PlayIconStoke';
import './case-studies.css';

const CaseStudiesHome = () => {
  const videoRef = useRef(null);
  const router = useRouter();

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play().catch(()=>{});
  };

const handleMouseLeave = () => {
  if (videoRef.current) {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }
};


  const handleClick = (e) => {
    e.preventDefault();
    // navigate to the case study route
    router.push('/customer-stories/camera-fix');
  };
    return (
    <div className="CaseStudiesSection">
      <div className="section-heading">
        <div className="simpleH2Heading sequel_sans">Case studies </div>
      </div>
      <div className="CaseStudiesGrid">
         <div className="CaseStudiesItem">
            {/* <div className="imageBox">  
             <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/Img.jpg"
              width="100%"
              alt="Camera Fix"
            />
              <div className="overlyBox">  
              <p>“Helps us to manage large volume of repairs “</p>
              <div className='flextText'>
                <span><em>Porsha,</em> Manager</span>
              <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/img-logo+2%402x.png"
              alt="Camera Fix"
            />
              </div>
             </div>
            </div>  */}
         </div>
         <div className="CaseStudiesItem">
      
         <div
            className="imageBox"
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(e); }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ outline: 'none', cursor: 'pointer' }}
            aria-label="Open Camera Fix case study"
          >
        <div className="desktopVersionVideo">
              <video
            ref={videoRef}
            width="100%"
            height="100%"
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            poster="https://memate-website.s3.ap-southeast-2.amazonaws.com/videoPoster-bg.jpg" 
          >
            <source
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MeMate+x+Camerafix-vertical_1215-subs.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
            <div className="overlyBox overlyBoxText">  
              <p>“Helps us to manage large volume of repairs “</p>
              <div className='flextText'>
                <span><em>Porsha,</em> Manager</span>
              <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/img-logo+2.png"
              alt="Camera Fix"
            />
              </div>
             </div>
             <div className="overlyBox flextPopupVideo">  
               <div className='flextTextVideo'>
                <span>Play</span>
                <PlayIconStoke />
              </div> 
             </div>
        </div>
        <div className="MobileVersionVideo">
              <video
            width="100%"
            height="100%"
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            controls={false}
            poster="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/Img.jpg" 
          >
            <source
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/MeMate_x_Camerafix-vertical.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
             <div className="overlyBox flextPopupVideo">  
               <div className='flextTextVideo'>
                <span>Play</span>
                <PlayIconStoke />
              </div> 
             </div>
        </div>
            </div> 
         </div>
         <div className="CaseStudiesItem">
            {/* <div className="imageBox">  
             <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/Img.jpg"
              width="100%"
              alt="Camera Fix"
            />
              <div className="overlyBox">  
              <p>“Helps us to manage large volume of repairs “</p>
              <div className='flextText'>
                <span><em>Porsha,</em> Manager</span>
              <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/img-logo+2%402x.png"
              alt="Camera Fix"
            />
              </div>
             </div>
            </div>  */}
         </div>
      </div>
    </div>
    );
}

export default CaseStudiesHome;