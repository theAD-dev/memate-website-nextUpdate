'use client'
import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/schedule-jobs";
// import { Helmet } from "react-helmet-async";
import AppWrapper from "../../components/AppWrapper";

const CommunicationPage = () => {
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

export default CommunicationPage;
