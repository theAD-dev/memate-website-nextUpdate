

import ComingSoon from '../../layout/coming-soon';
import style from './internal.module.scss';
import ChatComponent from './chat-component';
import ChatComponentFeature from './chat-component-feature';
import ChatInvestment from './chat-investment';
import QuestionAnswer from './ans-questions-chat';

const InternalChatComponent = () => {


  return (
    <>
     {/* <ComingSoon /> */}
     <ChatComponent />
     <ChatComponentFeature />
     <ChatInvestment />
     <QuestionAnswer />
    </>
  );
};

export default InternalChatComponent;
