import "./css/Button.css"
import React from 'react';

function ageGroupButton({onClick}){
    return (
      <div className="ageGroupButton">
        <button onClick={onClick}>10대</button>
        <button onClick={onClick}>20대</button>
        <button onClick={onClick}>30대</button>
        <button onClick={onClick}>40대</button>
        <button onClick={onClick}>50대</button>
        <button onClick={onClick}>60대 이상</button>
      </div>
    )
}

export default ageGroupButton;