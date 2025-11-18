'use client'
import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/memate-vs-netsuite";
import AppWrapper from "../../components/AppWrapper";
// import { Helmet } from "react-helmet-async";
const ServicesNetsuitePage = () => {
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
    </Layout>
    </AppWrapper>
    </>
  );
};

export default ServicesNetsuitePage;
