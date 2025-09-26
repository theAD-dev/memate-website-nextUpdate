import React from "react";
import style from "./profitability.module.scss";
import Link from "next/link";
const ConstructionProfitability = () => {
  return (
    <>
      <div
        className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}
      >
        <div className={style.flexImageBox}>
          <img
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automotive-profitability.svg"
            alt="automotive-profitability"
          />
        </div>
        <div className={`${style.spacingRight} ${style.flexContentWrap}`}>
          <h4>Quick</h4>
          {/* <h3>Expense and </h3> */}
          <h2>Invoicing & Payments</h2>
          <p>
          Issue invoices on job completion, offer payment via card, PayID, BPAY, and handle late fees and reminders — seamlessly integrated into your workflow
          </p>
          <Link href="/features/job-management-software">Schedule Jobs</Link>
        </div>
      </div>
    </>
  );
};

export default ConstructionProfitability;
