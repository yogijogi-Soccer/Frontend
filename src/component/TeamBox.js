//팀 목록 페이지
import React from "react";
import "./css/TeamBox.css";

function TeamBox() {
  return (
    <div className="TeamBox">
      <div style={{ padding: "1vh" }}>
        <div className="TeamBox_logo">
          <img src="" alt="TeamLogo" />
        </div>
        <div className="TeamBox_content">
          <div style={{ fontSize: "4vw" }}>팀 이름</div>
          <div
            style={{ display: "flex", marginTop: "1vh", marginBottom: "1vh" }}
          >
            <div
              style={{
                padding: "2vw",
                borderRadius: "1vw",
                backgroundColor: "var(--color-point-lightgreen)",
                fontSize: "2.5vw",
                marginLeft: "auto",
                marginRight: "2vw",
              }}
            >
              서울 서초구
            </div>
            <div
              style={{
                padding: "2vw",
                borderRadius: "1vw",
                backgroundColor: "#D6009A",
                color: "white",
                fontSize: "2.5vw",
                marginRight: "auto",
              }}
            >
              여성
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className="TeamBox_content">인원</div>
            <div className="TeamBox_content">연령대</div>
            <div className="TeamBox_content">시간</div>
            <div className="TeamBox_content">장소</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamBox;
