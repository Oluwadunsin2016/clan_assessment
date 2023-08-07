import React, { useState } from "react";
import SideBar from "./Components/Sidebar/SideBar";
import StepOne from "./Components/StepOne/StepOne";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import StepTwo from "./Components/StepTwo/StepTwo";
import StepThree from "./Components/StepThree/StepThree";
import StepFour from "./Components/StepFour/StepFour";
import Appreciation from "./Components/Appreciation/Appreciation";
import { useFormik } from "formik";
import * as yup from 'yup'

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [completed, setCompleted] = useState(false);


  const formik= useFormik({
initialValues:{
name:'',
Email:'',
phone_number:''
},
onSubmit:(values)=>{
console.log(values);
},
validationSchema: yup.object({
name: yup.string().required('This field is required').matches(/^[a-zA-Z]{3,}$/, 'It must be at least three characters'),
Email: yup.string().email().required('This field is required').matches(/^([A-Za-z0-9]{3,})[@]([a-z]{2,8})[.]([a-z]{2,})$/, 'Must follow the email pattern'),
phone_number: yup.string().required('This field is required').matches(/^[0-9]{11}$/, 'It must be eleven digits')
})
})

  const goToNext = () => {
    if (currentPage < 4) {
      setCurrentPage((page) => page + 1);
    }
  };
  const goBack = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const finished = () => {
    setCompleted(true);
  };

  return (
    <>
      <div className="mobile d-md-none">
        <div className="header">
          <Header currentPage={currentPage} />
        </div>
        <div className="body">
          <div className="inner rounded shadow">
            <div className={`${completed && "d-none"}`}>
              {currentPage == 1 && <StepOne formik={formik}/>}
              {currentPage == 2 && <StepTwo />}
              {currentPage == 3 && <StepThree />}
              {currentPage == 4 && <StepFour />}
            </div>

            <div className={`${!completed && "d-none"}`}>
              <Appreciation />
            </div>
          </div>
        </div>
        <div className={`footer ${completed && "d-none"}`}>
          <div className="buttons">
            <button
              className={`btn btn-light text-secondary previous ${
                currentPage == 1 && "d-none"
              }`}
              onClick={goBack}
            >
              Go Back
            </button>
            <button
              className={`btn next text-white float-end px-3 ${
                currentPage == 4 && "d-none"
              }`}
              onClick={goToNext}
            >
              Next Step
            </button>

            <button
              className={`btn float-end confirm text-white ${
                currentPage != 4 && "d-none"
              }`}
              onClick={finished}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>

      <div className="destop rounded p-3 row bg-white shadow d-none d-md-flex">
        <div className="sidebar col-md-4 col-xg-3 rounded">
          <SideBar currentPage={currentPage} />
        </div>
        <div
          className={`main col-md-8 col-xg-9 h-100 ${completed && "d-none"}`}
        >
          {currentPage == 1 && <StepOne formik={formik}/>}
          {currentPage == 2 && <StepTwo />}
          {currentPage == 3 && <StepThree />}
          {currentPage == 4 && <StepFour />}
          <div className="buttons mt-md-4 mt-lg-0">
            <button
              className={`btn btn-light text-secondary previous ${
                currentPage == 1 && "d-none"
              }`}
              onClick={goBack}
            >
              Go Back
            </button>
            <button
              className={`btn next text-white float-end px-3 ${
                currentPage == 4 && "d-none"
              }`}
              onClick={goToNext}
            >
              Next Step
            </button>
            <button
              className={`btn float-end confirm text-white ${
                currentPage != 4 && "d-none"
              }`}
              onClick={finished}
            >
              Confirm
            </button>
          </div>
        </div>
        <div
          className={`main col-md-8 col-xg-9 h-100 ${!completed && "d-none"}`}
        >
          <Appreciation />
        </div>
      </div>
    </>
  );
};

export default App;
