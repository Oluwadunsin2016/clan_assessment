import React from "react";
import "./stepTwo.css";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

const StepTwo = () => {
  return (
    <div className="container-fluid h-100">
      <h2>Select your plan</h2>
      <span>You have the option of monthly or yearly billings</span>

      <div className="billings row my-4">
        <div className="col-md-4 py-2">
          <div className="arcade rounded d-flex d-md-block p-3 p-md-0 gap-3">
            <img
              src={arcade}
              className="m-md-3"
              alt="arcade"
              width={35}
              height={35}
            />
            <div className="ms-2 mt-md-4">
              <h6 className="m-0 fw-bold">Arcade</h6>
              <span>$9/mo</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-2">
          <div className="advanced rounded d-flex d-md-block p-3 p-md-0 gap-3 active">
           <img
              src={advanced}
              className="m-md-3"
              alt="arcade"
              width={35}
              height={35}
            />
            <div className="ms-2 mt-md-4">
              <h6 className="m-0 fw-bold">Advanced</h6>
              <span>$12/mo</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-2">
          <div className="pro rounded d-flex d-md-block p-3 p-md-0 gap-3">
           <img
              src={pro}
              className="m-md-3"
              alt="arcade"
              width={35}
              height={35}
            />
            <div className="ms-2 mt-md-4">
              <h6 className="m-0 fw-bold">Pro</h6>
              <span>$15/mo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="toggle d-flex justify-content-center gap-3 p-2 bg-light rounded">
      <span>monthly</span>
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
</div>
      <span>yearly</span>
      </div>
    </div>
  );
};

export default StepTwo;
