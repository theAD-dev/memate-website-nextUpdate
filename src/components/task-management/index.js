// import ComingSoon from '../../layout/coming-soon';
import TaskComponent from './task-component';
import TaskComponentFeature from './task-component-feature';
import TaskInvestment from './task-investment';
import QuestionAnswer from './ans-questions-task';

const TaskManagementComponent = () => {
  return (
    <>
  {/* <ComingSoon /> */}
  <TaskComponent />
  <TaskComponentFeature />
  <TaskInvestment />
  <QuestionAnswer />
    </>
  );
};

export default TaskManagementComponent;
