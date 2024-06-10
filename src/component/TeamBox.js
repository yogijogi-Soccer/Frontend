//팀 목록 페이지
import React from "react";
import "./css/TeamBox.css";

function TeamBox(data) {
  console.log(data.data);
  return (
    <div className="TeamBox">
      <div className="TeamBox_logo">
        <img src="" alt="TeamLogo" />
      </div>
      <div className="TeamBox_content">
        <div style={{ fontSize: "4vw" }}>{data.data.teamName}</div>
        <div className="TeamBox_card">
          <div className="TeamBox_local_gender_card local">
            {data.data.local}
          </div>
          <div
            className={
              "TeamBox_local_gender_card " +
              (data.data.gender === "여성" ? "woman" : "man")
            }
          >
            {data.data.gender}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="TeamBox_content">
            인원 : {data.data.memberCount} 명
          </div>
          <div className="TeamBox_content">연령대 : {data.data.age}</div>
          <div className="TeamBox_content">시간 : {data.data.meetTime}</div>
          <div className="TeamBox_content">장소 : {data.data.homeground}</div>
        </div>
      </div>
    </div>
  );
}

export default TeamBox;
