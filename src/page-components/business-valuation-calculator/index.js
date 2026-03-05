'use client'
import React, { useEffect, useRef } from "react";
import Layout from '../../layout';
import ValuationCalculatorComponent from '../../components/business-valuation-calculator';
import AutomotiveQuesitonAndAns from '../../components/business-valuation-calculator/automotive-question-ans';
import AppWrapper from '../../components/AppWrapper';
import NextStep from '@/components/next-step'; 

import "../../layout/style.css";
import "../../App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);
const ValuationCalculatorPage = () => {
    // const pathname = usePathname();
  const stickySectionRef = useRef(null);
  const buttonRef = useRef(null);
  // const intervalRef = useRef(null);

  // useEffect(() => {
    // let animationInstances = [];
    // const initTimeout = setTimeout(() => {
    //   if (stickySectionRef.current) {
    //     gsap.set(stickySectionRef.current, { opacity: 1});
    //     const stickyAnimation = gsap.to(stickySectionRef.current, {
    //       opacity: 1,
    //       scrollTrigger: {
    //         trigger: ".apply-container",
    //         start: "bottom 60%",
    //         end: "bottom 20%",
    //         scrub: 0.5,
    //         markers: true,
    //         invalidateOnRefresh: true,
    //       },
    //     });
    //     animationInstances.push(stickyAnimation);
    //   }

    //   if (buttonRef.current) {
    //     const tl = gsap.timeline({
    //       repeat: 0,
    //       scrollTrigger: {
    //         trigger: buttonRef.current,
    //         start: "top center",
    //         toggleActions: "play none none none",
    //         once: true,
    //       },
    //     });

    //     tl.to(buttonRef.current, {
    //       scale: 1.1,
    //       duration: 0.5,
    //       ease: "power2.out",
    //     });

    //     animationInstances.push(tl);
    //   }
    //   // console.log("ANIMATION INSTANCES", animationInstances);
    // }, 100);

    // let refreshCount = 0;
    // const MAX_REFRESHES = 1;

    // intervalRef.current = setInterval(() => {
    //   if (document.readyState === "complete" && ScrollTrigger) {
    //     try {
    //       ScrollTrigger.refresh();

    //       if (typeof window !== "undefined" && window.AOS) {
    //         window.AOS.refresh();
    //       }

    //       refreshCount++;

    //       if (refreshCount >= MAX_REFRESHES) {
    //         clearInterval(intervalRef.current);
    //       }
    //     } catch (e) {
    //       console.warn("ScrollTrigger refresh error:", e);
    //       clearInterval(intervalRef.current);
    //     }
    //   }
    // }, 5000);

  //   return () => {
  //     clearTimeout(initTimeout);
  //     clearInterval(intervalRef.current);

  //     try {
  //       ScrollTrigger.getAll().forEach((instance) => instance.kill());
  //       animationInstances.forEach((animation) => {
  //         if (animation && animation.kill) animation.kill();
  //       });
  //     } catch (e) {
  //       console.warn("Error cleaning up GSAP animations:", e);
  //     }

  //     window.scrollTo(0, 0);
  //   };
  // }, [pathname]);
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
    <div className="apply-container ">
    <ValuationCalculatorComponent/> 
      </div>
   <NextStep text="Book a Demo"  />
        {/* <div
          // ref={stickySectionRef}
          className="sticky-section-switch"
         
        >
          <div className="apply-content apply-content12">
            <div className="get-started-wrapper">
              <div className="intro-sticky12">
                
              </div>
            </div>
          </div>
        </div> */}
        <AutomotiveQuesitonAndAns />  
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default ValuationCalculatorPage;












