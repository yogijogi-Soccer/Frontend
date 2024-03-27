import "./css/Button.css";
import React from "react";

function timeButton({ onClick }) {
  return (
    <div className="timeButton">
      <button onClick={onClick}>
        아침
        <br />
        6~10
      </button>
      <button onClick={onClick}>
        낮<br />
        10~14
      </button>
      <button onClick={onClick}>
        오후
        <br />
        14~18
      </button>
      <button onClick={onClick}>
        저녁
        <br />
        18~22
      </button>
      <button onClick={onClick}>
        밤<br />
        22~02
      </button>
    </div>
  );
}

export default timeButton;
