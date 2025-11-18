import AgilePipeLineManagement from "./agile-pipeline-management";
import CRMTaskTools from "./crm-task-tool";
import PipeLineTool from "./pipeline-tool";
import TaskManagement from "./task-management";
import TaskProcessOptimiation from "./task-process-optimization";
import "./style.css";
import SuitableTender from "./suitable-tender";
const ChatComponentFeature = () => {
  return (
    <div className="sales-component-feature-wrapper">
      <div className="sales-component-feature">
        <h2>Memate</h2>
        <span className="gradientAnimenate">features</span>
      </div>
      <div className="sales-feature-wrapper">
        <TaskManagement />
        <CRMTaskTools />
        <PipeLineTool />
        <TaskProcessOptimiation />
        <AgilePipeLineManagement />
        <SuitableTender />
      </div>
    </div>
  );
};

export default ChatComponentFeature;
