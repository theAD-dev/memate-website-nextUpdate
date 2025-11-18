'use client'
import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/job-approval";
import AppWrapper from "../../components/AppWrapper";
// import { Helmet } from "react-helmet-async";

const JobApprovalPage = () => {
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

export default JobApprovalPage;
