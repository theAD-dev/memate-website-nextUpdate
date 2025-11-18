// import ComingSoon from '../../layout/coming-soon';
import style from './calendar.module.scss';
import CalendarsComponent from './calendar-component';
import CalendarComponentFeature from './calendar-component-feature';
import CalendarInvestment from './calendar-investment';
import QuestionAnswer from './ans-questions-calendar';
const CalendarComponent = () => {
  return (
    <>
      {/* <ComingSoon /> */}
      <CalendarsComponent />
      <CalendarComponentFeature />
      <CalendarInvestment />
      <QuestionAnswer />
    </>
  );
};

export default CalendarComponent;
