import AgilePipeLineManagement from "./agile-pipeline-management";
import CRMChatTools from "./crm-chat-tool";
import PipeLineTool from "./pipeline-tool";
import ChatManagement from "./chat-management";
import ChatProcessOptimiation from "./chat-process-optimization";
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
        <ChatManagement />
        <CRMChatTools />
        <PipeLineTool />
        <ChatProcessOptimiation />
        <AgilePipeLineManagement />
        <SuitableTender />
      </div>
    </div>
  );
};

export default ChatComponentFeature;
