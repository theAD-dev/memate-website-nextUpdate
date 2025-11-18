import React from "react";
import style from "./intuitive.module.scss";
import Link from "next/link";
const ConstructionIntuitive = () => {
  return (
    <>
      <div id="contractionSpaceBox"
        className={`${style.flexboxWrap} ${style.dubleimages} ${style.flexboxWrapstyle} ${style.bgContentWrap} ${style.sectionTopSpace} `}
      >
        <div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
          <h4>Intuitive</h4>
          {/* <h3>Project <br/> Management &<br/> Job Scheduling</h3> */}
          <h2>Project <br/> Management &<br/> Job Scheduling</h2>
          <p>
          Plan entire job timelines with task assignments,<br/> project scheduling (Gantt chart), and<br/> change‑order tracking—all in one dashboard
          </p>
          <Link href="/features/sales-management-tools">Sales</Link>
        </div>
        <div className={`${style.flexImageBox}`}>
          <img
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automative-robust.svg"
            alt="intuitive-inovice"
          />
        </div>
      </div>
    </>
  );
};

export default ConstructionIntuitive;
