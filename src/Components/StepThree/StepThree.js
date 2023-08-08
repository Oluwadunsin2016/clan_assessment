import React, { useEffect, useState } from "react";
import "./stepThree.css";

const StepThree = ({formik, isChecked }) => {
  const [selectedIds, setselectedIds] = useState([])
  const [add_ons, setAdd_ons] = useState([
    {
      id: 1,
      name: "Online services",
      access: "Access to multiplayer games",
      subscription: "+$1/mo",
      duration: 1,
    },
    {
      id: 2,
      name: "Larger storage",
      access: "Extra 1TB of cloud save",
      subscription: "+$2/mo",
      duration: 2,
    },
    {
      id: 3,
      name: "Customizable profile",
      access: "Custom theme on your profile",
      subscription: "+$2/mo",
      duration: 2,
    },
  ]);

  useEffect(() => {
    if (isChecked) {
      setAdd_ons([
        {
          id: 1,
          name: "Online services",
          access: "Access to multiplayer games",
          subscription: "+$10/yr",
          duration: 10,
        },
        {
          id: 2,
          name: "Larger storage",
          access: "Extra 1TB of cloud save",
          subscription: "+$20/yr",
          duration: 20,
        },
        {
          id: 3,
          name: "Customizable profile",
          access: "Custom theme on your profile",
          subscription: "+$20/yr",
          duration: 20,
        },
      ]);
    } else {
      setAdd_ons([
        {
          id: 1,
          name: "Online services",
          access: "Access to multiplayer games",
          subscription: "+$1/mo",
          duration: 1,
        },
        {
          id: 2,
          name: "Larger storage",
          access: "Extra 1TB of cloud save",
          subscription: "+$2/mo",
          duration: 2,
        },
        {
          id: 3,
          name: "Customizable profile",
          access: "Custom theme on your profile",
          subscription: "+$2/mo",
          duration: 2,
        },
      ]);
    }
  }, [isChecked]);

  const select=(id)=>{
  if (selectedIds.includes(id)) {
    setselectedIds(selectedIds.filter(selected=>selected!=id));
  }else{
  setselectedIds([...selectedIds,id]);
  }

const newadd=add_ons.find(add_on=>add_on.id==id)
  const existed=formik.values.add_ons.find(add_on=>add_on.id==id)

  if (existed) {
    let remaining=formik.values.add_ons.filter(add_on=>add_on.id!=id)
formik.values.add_ons=remaining
formik.values.totalPrice=formik.values.totalPrice-newadd.duration;
  }else{
formik.values.add_ons=[...formik.values.add_ons,newadd]
formik.values.totalPrice=formik.values.totalPrice+newadd.duration;
  }

  }

  return (
    <div className="container-fluid h-100">
      <h2>Pick add-ons</h2>
      <span>Add-ons help enhance your gaming experience</span>

      <div className="my-4">
        {add_ons.map((add_on,i)=>{
        return(
        <div className={`first d-flex justify-content-between align-items-center py-2 px-4 rounded my-3 ${selectedIds.includes(add_on.id) && 'active'}`} key={i} onClick={()=>select(add_on.id)}>
          <div className='category d-flex align-items-center'>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
            </div>
            <div>
              <h6 className="m-0 fw-bold">{add_on.name}</h6>
              <span>{add_on.access}</span>
            </div>
          </div>

          <div className="price">
            <small>{add_on.subscription}</small>
          </div>
        </div>
        )
        })}
      </div>
    </div>
  );
};

export default StepThree;
