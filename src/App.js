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

const App = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(sessionStorage.currentPage?sessionStorage.currentPage:1);
  const [completed, setCompleted] = useState(false)

  const goToNext = () => {
    if (currentPage < 4) {
    if(sessionStorage.currentPage){
    let page = JSON.parse(sessionStorage.getItem('currentPage'))
    sessionStorage.setItem('currentPage',JSON.stringify(page + 1))
      setCurrentPage( page + 1);
    }else{
      setCurrentPage((page)=> page + 1);
    sessionStorage.setItem('currentPage',JSON.stringify(currentPage + 1))
    
    }
      navigate(`/step${currentPage + 1}`);
    }
  };

  const goBack = () => {
    if (currentPage > 1) {
       if(sessionStorage.currentPage){
    let page = JSON.parse(sessionStorage.getItem('currentPage'))
    sessionStorage.setItem('currentPage',JSON.stringify(page - 1))
      setCurrentPage( page - 1);
    }else{
      setCurrentPage((page)=> page - 1);
    sessionStorage.setItem('currentPage',JSON.stringify(currentPage - 1))
    }
      navigate(-1);
    }
  };

  const finished = () => {
  setCompleted(true)
  };

  return (
    <>
      <div className="mobile d-md-none">
        <div className="header">
          <Header currentPage={currentPage} />
        </div>
        <div className='body'>
          <div className="inner rounded shadow">
           <div className={`${completed && 'd-none'}`}>
            <Routes>
              <Route path="/" element={<Navigate to="/step1" />} />
              <Route path="step1" element={<StepOne />} />
              <Route path="step2" element={<StepTwo />} />
              <Route path="step3" element={<StepThree />} />
              <Route path="step4" element={<StepFour />} />
              {/* <Route path="/step4" element={<Appreciation/>}/> */}
            </Routes>
           </div>

           <div className={`${!completed && 'd-none'}`}>
             <Appreciation/>
           </div>
          </div>
        </div>
        <div className={`footer ${completed && 'd-none'}`}>
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
        <div className={`main col-md-8 col-xg-9 h-100 ${completed && 'd-none'}`}>
          <Routes>
            <Route path="/" element={<Navigate to="/step1" />} />
            <Route path="step1" element={<StepOne />} />
            <Route path="step2" element={<StepTwo />} />
            <Route path="step3" element={<StepThree />} />
            <Route path="step4" element={<StepFour />} />
          </Routes>
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
        <div className={`main col-md-8 col-xg-9 h-100 ${!completed && 'd-none'}`}>
        <Appreciation/>
        </div>
      </div>
    </>
  );
};

export default App;
