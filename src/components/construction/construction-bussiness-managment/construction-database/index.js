import React from "react";
import style from "./database.module.scss";
import Link from "next/link";
const ConstructionDatabase = () => {
  return (
    <>
      <div
        className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}
      >
        <div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
          <h4>Modern </h4>
          {/* <h3>Supplier and Client</h3> */}
          <h2>Data & File Storage</h2>
          <p>
            Store and share contracts, permits, blueprints,
            <br /> and photos securely in the cloud—attached
            <br /> directly to each job or client folder
          </p>
          <Link href="/features/task-management-software">Task Management</Link>
        </div>
        <div className={style.flexImageBox}>
          <img
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automative-database-management.svg"
            alt="database-management"
          />
        </div>
      </div>
    </>
  );
};

export default ConstructionDatabase;
