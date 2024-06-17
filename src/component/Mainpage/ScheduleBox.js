import React from "react";
import "../css/Mainpage.css";

const ScheduleBox = () => {
  const mySchedule = [
    ["5월 22일", "A경기장", "A팀", "참여"],
    ["5월 23일", "B경기장", "A팀", "미참여"],
  ];

  return (
    <div className="scheduleBox">
      <label>팀의 경기일정을 확인해보세요!</label>
      <div className="scheduleBoxInner">
        <table className="scheduleTable">
          <thead>
            <tr className="scheduleTable_title">
              <td>일시</td>
              <td>장소</td>
              <td>팀</td>
              <td>참석 여부</td>
            </tr>
          </thead>
          <tbody>
            {mySchedule.map((el, index) => {
              return (
                <tr className="scheduleTable_content">
                  <td>{el[0]}</td>
                  <td>{el[1]}</td>
                  <td>{el[2]}</td>
                  <td>{el[3]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="evenEffect1"></div>
        <div className="evenEffect2"></div>
      </div>
    </div>
  );
};

export default ScheduleBox;
