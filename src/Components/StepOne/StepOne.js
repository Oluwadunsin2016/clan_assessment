import React from "react";
import "./stepOne.css";


const StepOne = ({formik}) => {



  return (
    <div className="container-fluid h-100">
      <h2>Personal info</h2>
      <span>
        Please provide your name, email address, and your phone number.
      </span>

      <form action="" onSubmit={formik.handleSubmit}>
        <div className="name my-4">
          <label htmlFor="">
            Name
          </label>
           {formik.touched.name && <small className="text-danger fw-bold float-end">{formik.errors.name}</small>}
          <input type="text" name="name" id="" className={`form-control ${formik.errors.name && 'error'}`} placeholder="e.g Stephen King" onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
        </div>
        <div className="email my-4">
          <label htmlFor="">
            Email Address
          </label>
           {formik.touched.Email && <small className="text-danger fw-bold float-end">{formik.errors.Email}</small>}
          <input type="email" name="Email" id="" className={`form-control ${formik.errors.Email && 'error'}`} placeholder="e.g stephenking@lorem.com" />
        </div>
        <div className="phone_number my-4">
          <label htmlFor="">
            Phone Number
          </label>
          {formik.touched.phone_number && <small className="text-danger fw-bold float-end">{formik.errors.phone_number}</small>}
          <input type="tel" name="phone_number" id="" className={`form-control ${formik.errors.phone_number && 'error'}`} placeholder="e.g +1 234 567 890" onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
