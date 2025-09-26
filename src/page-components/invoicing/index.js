'use client'
import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/invoicing";
// import { Helmet } from "react-helmet-async";
import AppWrapper from "../../components/AppWrapper";

const ProjectManagementPage = () => {
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

export default ProjectManagementPage;
