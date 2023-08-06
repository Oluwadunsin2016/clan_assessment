import React from "react";
import "./stepThree.css";

const StepThree = () => {
  return (
    <div className="container-fluid h-100">
      <h2>Pick add-ons</h2>
      <span>Add-ons help enhance your gaming experience</span>

      <div className="my-4">
        <div className="first d-flex justify-content-between align-items-center py-2 px-4 rounded my-3">
          <div className="category d-flex align-items-center">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
            </div>
            <div>
              <h6 className="m-0 fw-bold">Online service</h6>
              <span>Access to multiplayer games</span>
            </div>
          </div>

          <div className="price">
            <small>+$10/yr</small>
          </div>
        </div>
        <div className="first d-flex justify-content-between align-items-center py-2 px-4 rounded my-3 active">
          <div className="category d-flex align-items-center">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
            </div>
            <div>
              <h6 className="m-0 fw-bold">Larger storage</h6>
              <span>Extra 1TB of cloud save</span>
            </div>
          </div>

          <div className="price">
            <small>+$20/yr</small>
          </div>
        </div>
        <div className="first d-flex justify-content-between align-items-center py-2 px-4 rounded my-3">
          <div className="category d-flex align-items-center">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
            </div>
            <div>
              <h6 className="m-0 fw-bold">Customizable profile</h6>
              <span>Custom theme on your profile</span>
            </div>
          </div>

          <div className="price">
            <small>+$20/yr</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
