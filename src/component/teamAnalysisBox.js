import React from "react";
import "./css/teamAnalysisBox.css";

const TeamInfo = () => {
  return (
    <div className="teamAnalysisBox">
      <h1>팀 한눈에 보기</h1>
      <div className="teamAnalysisBoxInner">
        <div className="Team1">
          <span>앨리스</span>
        </div>
        <div className="TeamAnalysisomponent1">
          <div className="teamAnalysisPersonnel">
            <span>팀원 수</span>
            <span>15명</span>
          </div>
          <div className="teamAnalysisPosition">
            <span>내 포지션</span>
            <span>공격수</span>
          </div>
          <div className="teamAnalysisNotice">
            <span>공지사항</span>
            <span>[필독] 어쩌고저쩌고 경기장 어쩌고</span>
            <span>[필독] 어쩌고저쩌고 경기장 어쩌고</span>
          </div>
        </div>

        <div className="Team2">
          <span>정모</span>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
