import Link from "next/link";
import "./style.css";
import TronButton from "../../../layout/hover-button/tourn-but";
import TronRequestADemo from "../../../layout/hover-button/TronRequestADemo";
const TaskComponent = () => {
  return (
  <>
    <div className="sales-component-wrapper salesfeaturesWrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
       <h1 className="h1tagsseo h1tagsseof fontWeight">MeMate Task Management Software with Powerful To Do List Tools</h1>
       <div className="sales-headingF">to-do lists & tasks</div>
      <div className="sales-componet-content-wrapperF client-component-para">
        <div className="sales-component-contentF">
        <span>
        Keep your projects moving with clear task lists and easy-to-manage to-dos. With Memate, you can assign tasks to team members, set due dates, add notes, and track progress—all in one organized workspace. Whether it’s a quick reminder or a detailed checklist, everything stays visible and accountable.
        </span>
        </div>
        <div className="sales-component-button-wrapper">
        <div  className="request-btn request-btn-center">
                <Link href="https://app.memate.com.au/requestdemo" target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo text="Request a Demo" /></Link>
              </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default TaskComponent;
