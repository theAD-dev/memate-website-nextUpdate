'use client'
import React from "react";
import BussinessManagement from "../../components/bussiness-management";
import CommonChallenges from "../../components/common-challenges";
import FeaturedOn from "../../components/featured-on";
import FindOneApplication from "../../components/find-one-all";
import AutomotiveQuesitonAndAns from "./automotive-question-ans/index";
import NewsAndUpdate from "../../components/news-and-updates";
// import NextStep from "../../components/next-step"
import SeamlessInegration from "../../components/seamless-integration"; 
import SimpleVersatilePowerful from "../../components/simple-versatile-powerful";
import SuccessStories from "../../components/success-stories";
import ZeroOfferOnboarding from "../../components/zero-offer-onboarding";
import Layout from "../../layout";
// import { Helmet } from 'react-helmet-async';
import LessBusyness from "./less-busyness";
import CaseStudiesHome from "../../components/casestudies-home";
import BrandLogoSlide from "../../components/logopartner";
import HomePageFeatuchers from "./HomePageFeatuchers";

// import AppWrapper from "../../components/AppWrapper";

const LandingPage = ({ postsLatest }) => {
  return (
    <>
      {/* <AppWrapper> */}
        <Layout>
          <BussinessManagement /> 
          <LessBusyness />     
          <FeaturedOn />  
          <FindOneApplication />
          <CommonChallenges /> 
          <ZeroOfferOnboarding /> 
          <HomePageFeatuchers /> 
          <SeamlessInegration />
          <BrandLogoSlide />    
          <CaseStudiesHome />          
          {/* <SimpleVersatilePowerful /> */}
          <SuccessStories />  
          <NewsAndUpdate postsLatest={postsLatest} />
           <AutomotiveQuesitonAndAns />  
        </Layout>
      {/* </AppWrapper> */}
    </>
  );
};

export default LandingPage;
