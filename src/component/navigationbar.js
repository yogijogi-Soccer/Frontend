import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsPlusSquare } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

function navigationbar() {
  return (
    <div>
      <div className="navigationbar">
        <Link to="/" className="link">
          <div className="naviIcon">
            <BsFillHouseDoorFill size={"10vw"} />
            <span>홈</span>
          </div>
        </Link>
        <Link to="/find" className="link">
          <div className="naviIcon">
            <BsSearch size={"9vw"} />
            <span>팀 찾기</span>
          </div>
        </Link>
        <Link to="/create" className="link">
          <div className="naviIcon">
            <BsPlusSquare size={"9vw"} />
            <span>팀 생성</span>
          </div>
        </Link>
        <Link to="/login" className="link">
          <div className="naviIcon">
            <BsFillPersonFill size={"10vw"} />
            <span>로그인</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default navigationbar;
