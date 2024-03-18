import "./css/Button.css"
import React from 'react';

function memberFeeButton({onClick}){
    return (
      <div className="memberFeeButton">
        <button onClick={onClick}>무료</button>
        <button onClick={onClick}>1만원</button>
        <button onClick={onClick}>3만원</button>
        <button onClick={onClick}>5만원</button>
        <button onClick={onClick}>직접입력</button>

      </div>
    )
}

export default memberFeeButton;