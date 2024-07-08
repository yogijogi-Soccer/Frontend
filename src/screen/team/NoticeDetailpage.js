//팀 공지사항 페이지
import React from "react";
import Header from "../../component/Header";
import Navigationbar from "../../component/Navigationbar";
import "../css/notice.css";
import "../../index.css";
import TeamNav from "../../component/TeamNav";
import { Link } from "react-router-dom";

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
