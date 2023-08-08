import React, { useState } from "react";
import "./stepFour.css";

const StepFour = ({ formik,setCurrentPage }) => {
  console.log(formik.values);
  const change=()=>{
  setCurrentPage(2)
  }

  return (
    <div className="container-fluid h-100">
      <h2>Finishing up</h2>
      <span>Double-check everything looks OK before confirming</span>

      <div className="category_section my-4 p-3 rounded">
        <div className="category d-flex justify-content-between m-0 p-0">
          <h6 className="fw-bold">{`${formik.values.plan.name}(${
            formik.values.plan.subscription.endsWith("mo")
              ? "Monthly"
              : "Yearly"
          })`}</h6>
          <h6 className="fw-bold">{formik.values.plan.subscription}</h6>
        </div>
        <span className="change" onClick={change}>Change</span>
        <hr />
        <div>
          {formik.values.add_ons.map((add_on, i) => {
            return (
              <div className="online d-flex justify-content-between" key={i}>
                <span>{add_on.name}</span>
                <p>{add_on.subscription}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="total d-flex justify-content-between">
        <span>
          Total
          {`(${
            formik.values.plan.subscription.endsWith("mo")
              ? "per month"
              : "per year"
          })`}
        </span>
        <h5 className="fw-bold">{formik.values.plan.subscription.endsWith("mo")?`$${formik.values.totalPrice}/mo`:`+$${formik.values.totalPrice}/yr`}</h5>
      </div>
    </div>
  );
};

export default StepFour;
