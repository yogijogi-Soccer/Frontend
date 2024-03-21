//[관리자] 공지사항 글쓰기 페이지
import React from "react";
import Header from "../../component/header";
import Navigationbar from "../../component/navigationbar";
import "../css/noticewrite.css";
import "../../index.css";

function TeamNoticepage() {
  let role = true;

  return (
    <div>
      <Header />
      <div className="div-page">
        <div>도구모음</div>
        <div>제목</div>
        <div>내용</div>
        <button>등록하기</button>
      </div>
      <Navigationbar />
    </div>
  );
}

export default TeamNoticepage;
