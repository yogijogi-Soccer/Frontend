//팀 공지사항 페이지
import React from "react";
import Header from "../../component/Header";
import Navigationbar from "../../component/Navigationbar";
import "../css/notice.css";
import "../../index.css";
import TeamNav from "../../component/TeamNav";
import OutList from "../../component/list/OutList";
import { Link } from "react-router-dom";

function TeamOutpage() {
  let role = true;

  const list = [
    { name: "이지현", position: "공격수 - CB", reason: "탈퇴 사유 입니다" },
    { name: "이서현", position: "골키퍼 - GK", reason: "힘들어서" },
  ];
  const count = list.length;

  return (
    <div>
      <Header />
      <div className="div-page">
        <TeamNav menu="탈퇴관리" />
        <p style={{ fontSize: "1.8vh", color: "var(--color-point-green)" }}>
          탈퇴 목록 : {count} 명
        </p>

        <OutList list={list} />
      </div>
      <Navigationbar />
    </div>
  );
}

export default TeamOutpage;
