'use client'
import Layout from "../../layout";
// import { Helmet } from 'react-helmet-async';
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment,
} from "../../components/sale";
import AppWrapper from "../../components/AppWrapper";

const FeaturePage = () => {
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

export default FeaturePage;
