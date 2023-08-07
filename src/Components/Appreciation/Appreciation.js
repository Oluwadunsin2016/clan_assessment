import React from "react";
import "./appreciation.css";
import thanks from "../../assets/images/icon-thank-you.svg";

const Appreciation = () => {
  return (
    <div className="container-fluid h-100 appreciation mt-5 mt-md-0">
      <img
        src={thanks}
        className="m-md-3"
        alt="thanks"
        width={70}
        height={70}
      />
      <h2 className="mt-3">Thank you!</h2>
      <span>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</span>
    </div>
  );
};

export default Appreciation;
