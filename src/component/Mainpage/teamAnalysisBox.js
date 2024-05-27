import React, { useState, useEffect } from "react";
import "../css/teamAnalysisBox.css";

const TeamInfo = () => {
  var [content, setContent] = useState([]);
  var [click, setClick] = useState(false);

  const myTeam = [
    ["A팀", "20명", "WS", "공지사항 글"],
    ["B팀", "10명", "MD", "공지사항 글2"],
  ];

  const TeamhandleChange = (name, idx) => {
    const newArr = Array(myTeam.length).fill(false);
    newArr[idx] = true;
    setClick(newArr);
    for (let i = 0; i < myTeam.length; i++) {
      if (myTeam[i][0] === name)
        setContent([myTeam[i][1], myTeam[i][2], myTeam[i][3]]);
      console.log(content);
    }
  };

  useEffect(() => {
    if (click === false) {
      TeamhandleChange(myTeam[0], 0);
      setContent([myTeam[0][1], myTeam[0][2], myTeam[0][3]]);
      console.log("false");
    }
    console.log(click);
  });
  return (
    <div className="teamAnalysisBox">
      <label style={{ fontSize: "3.5vw", fontWeight: "800" }}>
        팀 한눈에 보기
      </label>
      <div className="teamAnalysisBox_div">
        <div>
          {myTeam.map((el, index) => {
            return (
              <button
                className={
                  click[index] ? "TeamName_button-click" : "TeamName_button"
                }
                onClick={() => TeamhandleChange(el[0], index)}
              >
                {el[0]}
              </button>
            );
          })}
        </div>

        <div className="teamAnalysisBox_content">
          <div className="content_div">
            <div className="content_teamNumber">
              팀원 수{" "}
              <div style={{ fontWeight: "normal", fontSize: "3.2vw" }}>
                {content[0]}
              </div>
            </div>
            <div className="content_myPosition">
              포지션{" "}
              <div style={{ fontWeight: "normal", fontSize: "3.2vw" }}>
                {content[1]}
              </div>
            </div>
          </div>
          <div className="content_notice">
            공지사항
            <div className="content_notice-list">{content[2]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
