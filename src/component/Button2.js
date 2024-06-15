import React from "react";
import "./css/Button.css";

function Button2({ children, onClick, selected }) {
  return (
    <button
      className={`Button2 ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button2;
