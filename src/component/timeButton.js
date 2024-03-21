import "./css/Button.css"
import React from 'react';

function timeButton({onClick}){
    return (
      <div className="timeButton">
        <button onClick={onClick}>아침 6~10</button>
        <button onClick={onClick}>낮 10~14</button>
        <button onClick={onClick}>오후 14~18</button>
        <button onClick={onClick}>저녁 18~22</button>
        <button onClick={onClick}>밤 22~02</button>
      </div>
    )
}

export default timeButton;