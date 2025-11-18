import Link from "next/link";
import "./style.css";
import TronRequestADemo from "../../../layout/hover-button/TronRequestADemo";
const SalesComponent = () => {
  return (
  <>
    <div className="sales-component-wrapper sales-component-wrapperm8" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
       <h2 className="compaireMainH2">Compare the solutions</h2>
       <h1 className="comapirMainH1">Compare MeMate vs Sage</h1>
      <div className="sales-componet-content-wrapper client-component-para">
     
        <div className="compaire-service01">
        <img
            srcSet={`${'https://res.cloudinary.com/dn0jqjad3/image/upload/v1746535254/servicem8-3x_avrxqe.png'} 1800w, ${'https://res.cloudinary.com/dn0jqjad3/image/upload/v1746535254/servicem8-2x_jpqla6.png'} 1200w, ${'https://res.cloudinary.com/dn0jqjad3/image/upload/v1746535254/servicem8-1x_g4d12q.png'} 600w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://res.cloudinary.com/dn0jqjad3/image/upload/v1746535254/servicem8-3x_avrxqe.png'}
            alt="Pricing main image"

          />
        {/* <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Mockup.png" width="100%" alt="Mockup" /> */}
        </div>

        <div className="compaireHeadPara">
          <h2>Work Smarter with the #1 Sage Alternative <br/>
for Australian Service Businesses</h2>
          <p>While Sage is known for accounting and finance tools, MeMate is built for local Australian businesses that need a complete system to manage quoting, projects, invoicing, and day-to-day operations — not just the books.</p>
        <br></br>
        <div className="request-btn request-btn-center" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <Link href='https://app.memate.com.au/requestdemo' target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo  text="Book a Demo" /></Link>
      </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
