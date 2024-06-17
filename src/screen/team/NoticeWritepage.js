//[관리자] 공지사항 글쓰기 페이지
import React from "react";
import Header from "../../component/Header";
import Navigationbar from "../../component/Navigationbar";
import "../css/notice.css";
import "../../index.css";
import EditorQuill from "../../component/Notice/EditorQuill";

function NoticeWritepage() {
  let role = true;

  return (
    <div>
      <Header />
      <div className="div-page">
        <EditorQuill />
      </div>
      <Navigationbar />
    </div>
  );
}

export default NoticeWritepage;
