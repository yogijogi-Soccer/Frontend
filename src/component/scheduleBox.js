import React from "react";
import "./css/scheduleBox.css";

const ScheduleBox = () => {
  return (
    <div className="scheduleBox">
      <h1>경기 일정</h1>
      <div className="scheduleBoxInner">
        <table className="scheduleTable">
          <tbody>
            <tr className="scheduleColumn oddNum">
              <td>일시</td>
              <td>장소</td>
              <td>팀</td>
              <td>참석 여부</td>
            </tr>
            <tr className="evenNum">
              <td>02.14 10:00 PM</td>
              <td>반포경기장</td>
              <td>앨리스</td>
              <td>참여</td>
            </tr>
            <tr className="oddNum">
              <td>02.16 12:00 PM</td>
              <td>반포경기장</td>
              <td>정모</td>
              <td>불참</td>
            </tr>
            <tr className="evenNum">
              <td>02.20 09:00 AM</td>
              <td>반포경기장</td>
              <td>앨리스</td>
              <td>참여</td>
            </tr>
            <tr className="oddNum">
              <td>02.20 09:00 AM</td>
              <td>반포경기장</td>
              <td>앨리스</td>
              <td>참여</td>
            </tr>
          </tbody>
        </table>
        <div className="evenEffect1"></div>
        <div className="evenEffect2"></div>
      </div>
    </div>
  );
};

export default ScheduleBox;
