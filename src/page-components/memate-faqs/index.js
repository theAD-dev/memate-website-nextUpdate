'use client'

import React from 'react'
import Layout from '../../layout';
import MemateFaqsComponent from '../../components/memate-faqs';
import AppWrapper from '../../components/AppWrapper';
// import { Helmet } from 'react-helmet-async';
const MemateFaqsPage = () => {
  return (
    <AppWrapper>
  {/* <Helmet>
    <title>MeMate FAQs | Business Management Software Questions</title>
    <meta name="description" content="Everything you want to know about MeMate — from features to onboarding. Quick answers for Aussie businesses making the switch." />
    <meta property="og:title" content="MeMate FAQs | Business Management Software Questions" />
      <meta property="og:description" content="Everything you want to know about MeMate — from features to onboarding. Quick answers for Aussie businesses making the switch. 
    " />
</Helmet> */}
    <Layout>
      <div className="bgshadowwrapper">
        <MemateFaqsComponent/>
        </div>
    </Layout>
    </AppWrapper>
  )
}

export default MemateFaqsPage;
