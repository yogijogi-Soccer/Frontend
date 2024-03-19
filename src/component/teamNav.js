import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "./css/teamNav.css";

function teamNav({ menu }) {
  return (
    <div className="teamNav">
      <Link to="/detail/notice" className="link">
        <div
          className={
            menu === "공지사항" ? "teamNav_menu click" : "teamNav_menu"
          }
        >
          공지사항
        </div>
      </Link>
      <Link to="/detail/member" className="link">
        <div
          className={
            menu === "멤버관리" ? "teamNav_menu click" : "teamNav_menu"
          }
        >
          멤버관리
        </div>
      </Link>
    </div>
  );
}

export default teamNav;
