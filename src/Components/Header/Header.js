import React from 'react'
import "./header.css";

const Header = ({currentPage}) => {
  return (
    <div className="text-white p-3">
       <div className="steps">
        <div className={`num me-4 one ${currentPage==1 && 'active'}`}>1</div>
        <div className={`num me-4 two ${currentPage==2 && 'active'}`}>2</div>
        <div className={`num me-4 three ${currentPage==3 && 'active'}`}>3</div>
        <div className={`num me-4 four ${currentPage==4 && 'active'}`}>4</div>
       </div>
    </div>
  )
}

export default Header