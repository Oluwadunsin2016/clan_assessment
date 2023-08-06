import React from "react";
import SideBar from "./Components/Sidebar/SideBar";
import StepOne from "./Components/StepOne/StepOne";
import { Route, Routes } from "react-router-dom";
// import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="container rounded p-3 row bg-white shadow">
      <div className="sidebar col-3 h-100 rounded">
        <SideBar />
      </div>
      <div className="main col-9 h-100">
      <Routes>
      <Route path="/" element={<StepOne/>}/>
      </Routes>
      <div className="buttons">
      <button className="btn btn-light text-secondary previous">Go Back</button>
      <button className="btn next text-white float-end px-3">Next Step</button>
      </div>
      </div>
    </div>
  );
};

export default App;
