//팀 공지사항 페이지
import React from "react";
import Header from "../../component/header";
import Navigationbar from "../../component/navigationbar";
import "../css/notice.css";
import "../../index.css";
import TeamNav from "../../component/teamNav";
import ApprovalList from "../../component/ApprovalList";
import { Link } from "react-router-dom";

function TeamApprovalpage() {
  let role = true;
  const list = [
    { name: "이지현", position: "공격수 - CB" },
    { name: "이서현", position: "골키퍼 - GK" },
  ];
  const count = list.length;

  return (
    <div>
      <Header />
      <div className="div-page">
        <TeamNav menu="가입관리" />
        <p style={{ fontSize: "1.8vh", color: "var(--color-point-green)" }}>
          승인 대기 : {count} 명
        </p>

        <ApprovalList list={list} />
      </div>
      <Navigationbar />
    </div>
  );
}

export default TeamApprovalpage;
