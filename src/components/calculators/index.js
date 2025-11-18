import style from './calculators.module.scss';
import React from "react";
import CalculatorComponent from "./calculator-component";
import CalculatorsComponentFeature from "./calculator-component-feature";
import CalculatorsInvestment from "./calculator-investment";
import QuestionAnswer from "./ans-questions-calculator";
// import ComingSoon from "../../layout/coming-soon";
const CalculatorsComponent = () => {
  return (
    <>
      {/* <ComingSoon /> */}
      <CalculatorComponent />
      <CalculatorsComponentFeature />
      <CalculatorsInvestment />
      <QuestionAnswer />

    </>
  );
};

export default CalculatorsComponent;
