//마이페이지
import React from "react";
import Header from "../component/Header";
import Navigationbar from "../component/Navigationbar";
import "./css/teamdetail.css";
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
              <button className="button_sub green">
                <Link to="fix" className="link_white">
                  개인 정보 수정
                </Link>
              </button>
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
