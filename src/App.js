import React from "react";
import SideBar from "./Components/Sidebar/SideBar";
import StepOne from "./Components/StepOne/StepOne";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import StepTwo from "./Components/StepTwo/StepTwo";
import StepThree from "./Components/StepThree/StepThree";
// import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <>
   <div className="mobile d-md-none">
   <div className="header">
   <Header/>
   </div>
   <div className="body">
   <div className="inner rounded shadow">
   <Routes>
      <Route path="/" element={<StepOne/>}/>
      <Route path="/step2" element={<StepTwo/>}/>
      <Route path="/step3" element={<StepThree/>}/>
      </Routes>
   </div>
   </div>
   <div className="footer">
    <div className="buttons">
      <button className="btn btn-light text-secondary previous">Go Back</button>
      <button className="btn next text-white float-end px-3">Next Step</button>
      </div>
   </div>
   
   </div>
   
    <div className="destop rounded p-3 row bg-white shadow d-none d-md-flex">
      <div className="sidebar col-md-4 col-xg-3 rounded">
        <SideBar />
      </div>
      <div className="main col-md-8 col-xg-9 h-100">
      <Routes>
      <Route path="/" element={<StepOne/>}/>
      <Route path="/step2" element={<StepTwo/>}/>
      <Route path="/step3" element={<StepThree/>}/>
      </Routes>
      <div className="buttons">
      <button className="btn btn-light text-secondary previous">Go Back</button>
      <button className="btn next text-white float-end px-3">Next Step</button>
      </div>
      </div>
    </div>
   </>
  );
};

export default App;
