import React, { useState } from "react";
import "./css/teamAnalysisBox.css";

const TeamInfo = () => {
  var [content, setContent] = useState([]);
  var [click, setClick] = useState(false);
  const myTeam = [
    ["A팀", "20명", "WS", "공지사항 글"],
    ["B팀", "10명", "MD", "공지사항 글2"],
  ];
  const TeamhandleChange = (name) => {
    for (let i = 0; i < myTeam.length; i++) {
      if (myTeam[i][0] === name)
        setContent([myTeam[i][1], myTeam[i][2], myTeam[i][3]]);
      console.log(content);
    }
  };
  return (
    <div className="teamAnalysisBox">
      <label style={{ fontSize: "3.5vw", fontWeight: "800" }}>
        팀 한눈에 보기
      </label>
      <div className="teamAnalysisBox_button">
        {myTeam.map((el, index) => {
          return (
            <div>
              <button
                className="TeamName_button"
                onClick={() => TeamhandleChange(el[0])}
              >
                {el[0]}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <div className="TeamAnalysisomponent1">{content}</div>
      </div>
    </div>
  );
};

export default TeamInfo;
