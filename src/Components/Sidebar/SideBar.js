import React from "react";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="text-white p-3">
      <div className="step">
        <div className="num me-4 one active">1</div>
        <div className="stepOne">
          <span>STEP 1</span>
          <h6>YOUR INFO</h6>
        </div>
      </div>
      <div className="step">
        <div className="num me-4 two">2</div>
        <div className="stepTwo">
          <span>STEP 2</span>
          <h6>SELECT PLAN</h6>
        </div>
      </div>
      <div className="step">
        <div className="num me-4 three">3</div>
        <div className="stepThree">
          <span>STEP 3</span>
          <h6>ADD-ONS</h6>
        </div>
      </div>
      <div className="step">
        <div className="num me-4 four">4</div>
        <div className="steFour">
          <span>STEP 4</span>
          <h6>SUMMARY</h6>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
