import React from "react";
import "./css/component.css";
import "../index.css";

function textbox({ children }) {
  return <input className="textbox" placeholder={children}></input>;
}

export default textbox;
