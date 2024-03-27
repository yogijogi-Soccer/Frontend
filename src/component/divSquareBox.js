import React from "react";
import "./css/component.css";
import "../index.css";
import { Link } from "react-router-dom";

function divSquareBox(props) {
  return (
    <div className="divsquarebox">
      <div className="divsquarebox_div-title">
        <p className="divsquarebox_title">{props.title}</p>
      </div>
      <div className="divsquarebox_content">{props.content}</div>
      <Link to={props.link} className="divsquarebox_button">
        {props.button}
      </Link>
    </div>
  );
}

export default divSquareBox;
