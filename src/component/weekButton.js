import "./css/Button.css"
import React from 'react';

function weekButton({onClick}){
    return (
      <div className="weekButton">
        <button onClick={onClick}>월</button>
        <button onClick={onClick}>화</button>
        <button onClick={onClick}>수</button>
        <button onClick={onClick}>목</button>
        <button onClick={onClick}>금</button>
        <button onClick={onClick}>토</button>
        <button onClick={onClick}>일</button>
      </div>
    )
}

export default weekButton;