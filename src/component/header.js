import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { TiArrowLeftThick } from "react-icons/ti";

function Useheader({ main }) {
  return <div>{main === true ? <MainHeader /> : <MenuHeader />}</div>;
}

function MainHeader() {
  return (
    <div className="mainHeader">
      <Link to="/" className="link">
        요기조기
      </Link>
    </div>
  );
}

function MenuHeader() {
  const navigate = useNavigate();
  return (
    <div className="menuHeader">
      <TiArrowLeftThick
        style={{ marginLeft: "3vw", marginRight: "auto" }}
        onClick={() => navigate(-1)}
      />

      <Link to="/" className="link">
        요기조기
      </Link>
    </div>
  );
}

export default Useheader;
