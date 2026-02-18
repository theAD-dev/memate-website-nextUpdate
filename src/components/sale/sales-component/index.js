

import Link from "next/link";
import "./style.css";
import TronRequestADemo from "../../../layout/hover-button/TronRequestADemo";
import { motion } from "framer-motion";
const SalesComponent = () => {
  return (
  <>
    <div className="sales-component-wrapper salesfeaturesWrapper" 
    // data-aos="fade-up"
    // data-aos-offset="50"
    // data-aos-delay="50"
    // data-aos-duration="500"
    // data-aos-mirror="true"
    // data-aos-once="false"
    // data-aos-anchor-placement="top-bottom"
    >
       <motion.h1
         className="h1tagsseo h1tagsseof fontWeight"
         initial={{ y: -40, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true, amount: 0.6 }}
         transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6, delay: 0.5 }}
       >
       Sales Management Software Built for Aussie Businesses
       </motion.h1>
       <div className="sales-headingF gradientText">sales pipeline</div>
      <div className="sales-componet-content-wrapperF client-component-para">
        <div className="sales-component-contentF">
        <motion.span
        // FADE TEST  
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6, delay: 1  }}
        >
      Our software provides a sales pipeline, simple and easy to use for
            small businesses. You can<br></br> see all your active quotes and
            prospects in one organised place.
          </motion.span>
        </div>
        <div className="sales-component-button-wrapper">
        <motion.div className="request-btn request-btn-center" 
        initial={{ y: -10, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 150, damping: 10, mass: 4, delay: 0  }}
        // data-aos="fade-up"
        // data-aos-offset="50"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        // data-aos-mirror="true"
        // data-aos-once="false"
        // data-aos-anchor-placement="top-bottom"
        >
        <Link href='https://app.memate.com.au/requestdemo' target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo text="Request a Demo" /></Link>
      </motion.div>
        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
