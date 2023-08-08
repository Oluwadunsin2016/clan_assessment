import React, { useEffect, useState } from "react";
import "./stepTwo.css";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

const StepTwo = ({ formik,isChecked, setIsChecked}) => {
// const [selectedId, setselectedId] = useState(sessionStorage.PlanId? JSON.parse(sessionStorage.getItem("PlanId")):0)
const [selectedId, setselectedId] = useState(0)
console.log(selectedId);
const [plans, setPlans] = useState([
{
id:1,
name:'Arcade',
pic:arcade,
subscription:'$9/mo',
duration:9,
free:' ',
},
{
id:2,
name:'Advanced',
pic:advanced,
subscription:'$12/mo',
duration:12,
free:' ',
},
{
id:3,
name:'Pro',
pic:pro,
subscription:'$15/mo',
duration:15,
free:' ',
},
])

useEffect(() => {
if (isChecked) {
  setPlans(
[
{
id:1,
name:'Arcade',
pic:arcade,
subscription:'$90/yr',
duration:90,
free:'2 months free',
},
{
id:2,
name:'Advanced',
pic:advanced,
subscription:'$120/yr',
duration:120,
free:'2 months free',
},
{
id:3,
name:'Pro',
pic:pro,
subscription:'$150/yr',
duration:150,
free:'2 months free',
},
]
)
}else{
setPlans([
{
id:1,
name:'Arcade',
pic:arcade,
subscription:'$9/mo',
duration:9,
free:' ',
},
{
id:2,
name:'Advanced',
pic:advanced,
subscription:'$12/mo',
duration:12,
free:' ',
},
{
id:3,
name:'Pro',
pic:pro,
subscription:'$15/mo',
duration:15,
free:' ',
},
])
}
}, [isChecked])


 const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(isChecked);
  };

  const select=(id)=>{
// sessionStorage.setItem('PlanId',JSON.stringify(id));
  setselectedId(id);
const selected=plans.find(plan=>plan.id==id)
formik.values.plan=selected
formik.values.totalPrice=selected.duration;
  }

  return (
    <div className="container-fluid h-100">
      <h2>Select your plan</h2>
      <span>You have the option of monthly or yearly billings</span>

      <div className="billings row my-4">
       {plans.map((plan, i) =>{
       return(
        <div className="col-md-4 py-2" key={i} onClick={()=>select(plan.id)}>
          <div className={`plan rounded d-flex d-md-block p-3 p-md-0 gap-3 ${plan.id==selectedId && 'active'}`}>
            <img
              src={plan.pic}
              className="m-md-3"
              alt={plan.pic}
              width={35}
              height={35}
            />
            <div className="ms-2 mt-md-4">
              <h6 className="m-0 fw-bold">{plan.name}</h6>
              <span>{plan.subscription}</span>
              <p className="m-0">{plan.free}</p>
            </div>
          </div>
        </div>
       )
       })}
      </div>

      <div className="toggle d-flex justify-content-center gap-3 p-2 bg-light rounded">
      <span className={!isChecked&&'ticked'}>Monthly</span>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={isChecked}
          onChange={handleCheckboxChange}/>
</div>
      <span className={isChecked&&'ticked'}>Yearly</span>
      </div>
    </div>
  );
};

export default StepTwo;
