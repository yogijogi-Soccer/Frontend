//팀 공지사항 페이지
import React from "react";
import Header from "../../component/header";
import Navigationbar from "../../component/navigationbar";
import "../css/notice.css";
import "../../index.css";
import TeamNav from "../../component/teamNav";
import { Link } from "react-router-dom";
import notice from "../../data/notice";

function NoticeDetailpage() {
  let role = true;

  return (
    <div>
      <Header />
      <div className="div-page">
        <div>제목</div>
        <div>내용</div>
      </div>
      <Navigationbar />
    </div>
  );
}

export default NoticeDetailpage;
