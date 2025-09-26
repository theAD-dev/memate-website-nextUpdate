import AgilePipeLineManagement from "./agile-pipeline-management";
import CRMCalculatorTools from "./crm-calculator-tool";
import PipeLineTool from "./pipeline-tool";
import CalculatorManagement from "./calculator-management";
import CalculatorProcessOptimiation from "./calculator-process-optimization";
import "./style.css";
import SuitableTender from "./suitable-tender";
const CalculatorsComponentFeature = () => {
  return (
    <div className="sales-component-feature-wrapper">
      <div className="sales-component-feature">
        <h2>Memate</h2>
        <span className="gradientAnimenate">features</span>
      </div>
      <div className="sales-feature-wrapper">
        <CalculatorManagement />
        <CRMCalculatorTools />
        <PipeLineTool />
        <CalculatorProcessOptimiation />
        <AgilePipeLineManagement />
        <SuitableTender />
      </div>
    </div>
  );
};

export default CalculatorsComponentFeature;
