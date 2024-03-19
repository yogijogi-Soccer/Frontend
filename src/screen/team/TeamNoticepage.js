//팀 공지사항 페이지
import React from "react";
import Header from "../../component/header";
import Navigationbar from "../../component/navigationbar";
import "../css/teamdetail.css";
import "../../index.css";
import TeamNav from "../../component/teamNav";
import Noticlist from "../../component/Noticelist";

function TeamNoticepage() {
  let role = true;
  const noticelist = [
    { title: "[필독] 팀 개설 안내", date: "2020.03.18 12:00", update: 5 },
    { title: "제목2", date: "2023.03.14 12:00", update: 10 },
  ];

  return (
    <div>
      <Header />
      <div className="div-page">
        <TeamNav menu="공지사항" />
        {role ? <button className="Noticediv-btn">글쓰기</button> : ""}
        <Noticlist list={noticelist} />
      </div>
      <Navigationbar />
    </div>
  );
}

export default TeamNoticepage;
