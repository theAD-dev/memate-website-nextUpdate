'use client'
import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/profitability-and-budgeting";
// import { Helmet } from "react-helmet-async";
import AppWrapper from "../../components/AppWrapper";

const ProfitabilityAndBudgetingPage = () => {
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

export default ProfitabilityAndBudgetingPage;
