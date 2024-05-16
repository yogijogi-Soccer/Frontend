//마이페이지
import React from "react";
import Header from "../component/header";
import Navigationbar from "../component/navigationbar";
import "./css/teamdetail.css";
import GreenButton from "../component/GreenButton";
import { Link } from "react-router-dom";
import "../component/css/component.css";

function Mypage() {
  return (
    <div>
      <Header />
      <div className="div-page">
        <div className="TeamDetail-profile">
          <img
            className="TeamDetail-profile_img"
            alt="프로필"
            src="../img/profile.png"
          />
          <div className="TeamDetail-profile_box">
            <div className="TeamDetail-profile_title">
              <div>사용자</div>
              <GreenButton>
                <Link to="fix" className="link_white">
                  개인 정보 수정
                </Link>
              </GreenButton>
            </div>
            <div
              style={{
                borderTop: "1px solid var(--color-normal6)",
                marginTop: "1vh",
                paddingTop: "1vh",
                color: "var(--color-normal8)",
              }}
            >
              내 포지션 : CB, GK
            </div>
          </div>
        </div>
        <div className="divbox">
          <p>내 팀</p>
        </div>

        <div className="divbox">
          <p>가입 승인 대기중</p>
        </div>
      </div>
      <Navigationbar />
    </div>
  );
}

export default Mypage;
