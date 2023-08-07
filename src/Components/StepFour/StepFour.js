import React from "react";
import "./stepFour.css";

const StepFour = () => {
  return (
    <div className="container-fluid h-100">
      <h2>Finishing up</h2>
      <span>Double-check everything looks OK before confirming</span>

      <div className="category_section my-4 p-3 rounded">
        <div className="category d-flex justify-content-between m-0 p-0">
          <h6 className="fw-bold">Arcade(Monthly)</h6>
          <h6 className="fw-bold">$9/mo</h6>
        </div>
        <span className="change">Change</span>
        <hr />
        <div>
          <div className="online d-flex justify-content-between">
            <span>Online service</span>
            <p>+$1/mo</p>
          </div>
          <div className="storage d-flex justify-content-between">
            <span>Larger storage</span>
            <p>+$2/mo</p>
          </div>
        </div>
      </div>
      <div className="total d-flex justify-content-between">
      <span>Total(per month)</span>
      <h5 className="fw-bold">+$12/mo</h5>
      </div>
    </div>
  );
};

export default StepFour;
