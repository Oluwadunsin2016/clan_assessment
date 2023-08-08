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
const [isChecked, setIsChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [plan, setPlan] = useState({})
  const [selectedAdd_ons, setSelectedAdd_ons] = useState([])


  const submitForm = (values) => {
  console.log(values);

    setCompleted(true);
  };


  const formik= useFormik({
initialValues:{
userDetails:{
name:'',
Email:'',
phone_number:''
},
plan:{},
add_ons:[],
totalPrice:0,
},

onSubmit:submitForm,
// onSubmit:(values)=>{
// values.plan=plan
// values.add_ons=selectedAdd_ons
// console.log(values);
// },
validationSchema: yup.object({
name: yup.string().required('This field is required').matches(/^[a-zA-Z]{3,}$/, 'It must be at least three characters'),
email: yup.string().email().required('This field is required').matches(/^([A-Za-z0-9]{3,})[@]([a-z]{2,8})[.]([a-z]{2,})$/, 'Must follow the email pattern'),
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
              {currentPage == 2 && <StepTwo formik={formik} isChecked={isChecked} setIsChecked={setIsChecked} />}
              {currentPage == 3 && <StepThree formik={formik} isChecked={isChecked} />}
              {currentPage == 4 && <StepFour formik={formik} setCurrentPage={setCurrentPage}/>}
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
            type="button"
              className={`btn float-end confirm text-white ${
                currentPage != 4 && "d-none"
              }`}
              onClick={submitForm}
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
          {currentPage == 2 && <StepTwo formik={formik} isChecked={isChecked} setIsChecked={setIsChecked}/>}
          {currentPage == 3 && <StepThree formik={formik} isChecked={isChecked} />}
          {currentPage == 4 && <StepFour formik={formik} setCurrentPage={setCurrentPage}/>}
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
            type="button"
              className={`btn float-end confirm text-white ${
                currentPage != 4 && "d-none"
              }`}
              onClick={submitForm}
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
