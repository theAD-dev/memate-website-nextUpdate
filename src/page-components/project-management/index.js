'use client'
import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/project-management";
import AppWrapper from "../../components/AppWrapper";
// import { Helmet } from "react-helmet-async";

const ProjectManagementPage = () => {
  return (
    <>
    <AppWrapper>
    <Layout>
      <div className="project-management-banner">
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
