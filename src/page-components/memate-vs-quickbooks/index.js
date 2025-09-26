'use client'
import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/memate-vs-quickbooks";
import AppWrapper from "../../components/AppWrapper";
// import ComingSoon from '../../layout/coming-soon';
// import { Helmet } from "react-helmet-async";
const ServicesVsQuickBooksPage = () => {
  return (
    <>
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
      <SalesComponent />
      <SalesComponentFeature />
      <SmartInvestment />
      <QuestionAnswer />
      </div> 
       {/* <ComingSoon /> */}
    </Layout>
    </AppWrapper>
    </>
  );
};

export default ServicesVsQuickBooksPage;
