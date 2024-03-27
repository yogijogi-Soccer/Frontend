//팀 정보 수정 페이지
import React, { useState } from "react";
import Header from "../../component/header";
import Navigationbar from "../../component/navigationbar";
import "../css/notice.css";
import "../../index.css";
import GreenButton from "../../component/GreenButton";
import "../css/teamdetail.css";
import "../css/inforfix.css";
import Divbox from "../../component/divbox";
import DivSquareBox from "../../component/divSquareBox";
import { Link } from "react-router-dom";
import WeekButton from "../../component/weekButton";
import TimeButton from "../../component/timeButton";

function TeamInforFixpage() {
  //팀 소개 한줄
  const [introText, setIntroText] = useState("팀 소개 한줄");
  const introChange = (e) => {
    setIntroText(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="div-page">
        {/* 팀 이름, 팀 사진, 프로필 사진 수정 */}
        <div className="TeamDetail-profile">
          <img
            className="TeamDetail-profile_img"
            alt="프로필"
            src="../img/profile.png"
          />
          <div className="TeamDetail-profile_box">
            <div className="Inforfix-profile_title">팀 이름</div>
            <GreenButton>프로필 사진 수정하기</GreenButton>
          </div>
        </div>
        <div className="Inforfix-content">
          <div className="Inforfix-div">
            <label className="Inforfix-label">
              팀 소개 ( {introText.length - 1} / 50자 )
            </label>
            <textarea
              type="text"
              className="Inforfix_infor-intro"
              value={introText}
              onChange={introChange}
              placeholder="팀 소개를 입력하세요"
              maxLength="50"
            />
          </div>
          <div className="Inforfix-div">
            <label className="Inforfix-label">주요 활동 지역</label>
            <WeekButton />
            <TimeButton />
          </div>
          <div className="Inforfix-div">
            <label className="Inforfix-label">월 회비</label>
          </div>
        </div>
      </div>
      <Navigationbar />
    </div>
  );
}

export default TeamInforFixpage;
