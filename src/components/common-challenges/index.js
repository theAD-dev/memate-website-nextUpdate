import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";

const CommonChallenges = () => {
  return (
    <div className="common-box-wrapper">
      <div className="common-box1">
        <div className="challenges-text" data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="900"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom">
          <h3>Streamline Your Business <br/>and Enjoy Full Control</h3>
          <p>Track, analyze, and manage all your business activities in one clear, organized place.</p>
        </div>
        <div className="streamlineimggrid" data-aos="fade-up"
          data-aos-offset="50"  >
            <div className="gridboxstreamline item1"> 
               <LazyLoadImage
                            alt="Complete Control Over Business Activities"
                            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img22.jpg'}
                            effect="blur" 
                            style={{ width: "100%", height: "auto" }}
                          />
              <h4>A system designed for complete <br/> control over business activities</h4>
            </div>
            <div className="gridboxstreamline item2"> 
               <LazyLoadImage
                            alt="Track Every Expense and Time to Your Projects"
                            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img21-min.jpg'}
                            effect="blur" 
                            style={{ width: "100%", height: "auto" }}
                          />
               <h4>Track Every Expense and Time <br/> Allocated to Your Projects</h4>
            </div>
            <div className="gridboxstreamline item3"> 
              <LazyLoadImage
                            alt="See and predict unprofitable business activities"
                            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img23-min.jpg'}
                            effect="blur" 
                            style={{ width: "100%", height: "auto" }}
                          />
              <h4>See and predict unprofitable <br/> business activities.</h4>
            </div>
            <div className="gridboxstreamline item4"> 
               <LazyLoadImage
                            alt="Overcome challenges caused by manual processes"
                            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img24-min.jpg'}
                            effect="blur" 
                            style={{ width: "100%", height: "auto" }}
                          />
                <h4>Overcome scaling challenges <br/> caused by manual processes </h4>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CommonChallenges;
