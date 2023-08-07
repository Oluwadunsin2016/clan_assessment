import React, { useState } from "react";
import SideBar from "./Components/Sidebar/SideBar";
import StepOne from "./Components/StepOne/StepOne";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import StepTwo from "./Components/StepTwo/StepTwo";
import StepThree from "./Components/StepThree/StepThree";
import StepFour from "./Components/StepFour/StepFour";
import Appreciation from "./Components/Appreciation/Appreciation";

const App = () => {
const navigate=useNavigate()
const [currentPage, setCurrentPage] = useState(localStorage.step ? localStorage.step : 1);

const goToNext=()=>{
if (currentPage<4) {
if (localStorage.step) {
  const outcome=localStorage.step;
  localStorage.step=outcome++
  setCurrentPage(outcome++);
}else{
  localStorage.step=currentPage++
  setCurrentPage((page)=>page++)
}
navigate(`/step${currentPage++}`);
}
}


const goBack=()=>{
if (currentPage>1) {
if (localStorage.step) {
  const outcome=localStorage.step;
  localStorage.step=outcome-1
  setCurrentPage(outcome-1);
}else{
  localStorage.step=currentPage-1
  setCurrentPage((page)=>page-1)
}
  navigate(-1);
}
}

  return (
   <>
   <div className="mobile d-md-none">
   <div className="header">
   <Header/>
   </div>
   <div className="body">
   <div className="inner rounded shadow">
   <Routes>
       <Route path="/" element={<Navigate to="/step1"/>}/>
      <Route path="step1" element={<StepOne/>}/>
      <Route path="step2" element={<StepTwo/>}/>
      <Route path="step3" element={<StepThree/>}/>
      <Route path="step4" element={<StepFour/>}/>
      {/* <Route path="/step4" element={<Appreciation/>}/> */}
      </Routes>
   </div>
   </div>
   <div className="footer">
    <div className="buttons">
      <button className={`btn btn-light text-secondary previous ${currentPage==1 && 'd-none'}`} onClick={goBack}>Go Back</button>
      <button className={`btn next text-white float-end px-3 ${currentPage==4 && 'd-none'}`} onClick={goToNext}>Next Step</button>

     {currentPage==4 && <button className='btn next text-white float-end px-3' onClick={goToNext}>Confirm</button>}
      </div>
   </div>
   
   </div>
   
    <div className="destop rounded p-3 row bg-white shadow d-none d-md-flex">
      <div className="sidebar col-md-4 col-xg-3 rounded">
        <SideBar />
      </div>
      <div className="main col-md-8 col-xg-9 h-100">
      <Routes>
      <Route path="/" element={<Navigate to="/step1"/>}/>
      <Route path="step1" element={<StepOne/>}/>
      <Route path="step2" element={<StepTwo/>}/>
      <Route path="step3" element={<StepThree/>}/>
      <Route path="step4" element={<StepFour/>}/>
      {/* <Route path="/step4" element={<Appreciation/>}/> */}
      </Routes>
      <div className="buttons mt-md-4 mt-lg-0">
      <button className={`btn btn-light text-secondary previous ${currentPage==1 && 'd-none'}`} onClick={goBack}>Go Back</button>
      <button className={`btn next text-white float-end px-3 ${currentPage==4 && 'd-none'}`} onClick={goToNext}>Next Step</button>
      </div>
      </div>
    </div>
   </>
  );
};

export default App;
