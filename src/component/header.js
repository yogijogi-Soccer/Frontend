import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function header() {
  return (
    <div className="header">
      <Link to="/">요기조기</Link>
    </div>
  );
}

export default header;
