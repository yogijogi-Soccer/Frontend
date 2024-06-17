import React from "react";
import "./Button.css";

function Button2({ children, onClick, selected }) {
  return (
    <button
      className={`button_toggle ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button2;
