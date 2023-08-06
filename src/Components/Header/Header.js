import React from 'react'
import "./header.css";

const Header = () => {
  return (
    <div className="text-white p-3">
       <div className="steps">
        <div className="num me-4 one active">1</div>
        <div className="num me-4 two">2</div>
        <div className="num me-4 three">3</div>
        <div className="num me-4 four">4</div>
       </div>
    </div>
  )
}

export default Header