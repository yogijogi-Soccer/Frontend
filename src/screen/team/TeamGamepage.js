//팀 멤버관리 페이지
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Header from "../../component/Header";
import Navigationbar from "../../component/Navigationbar";
import axios from "axios";
import "../css/inforfix.css";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Divbox from "../../component/Divbox";

function TeamCreateGamepage() {
  return (
    <div>
      <Header />
      <div className="div-page">
        <p
          style={{ fontSize: "2vh", fontWeight: "bold", paddingBottom: "3vh" }}
        >
          경기 일정을 확인하세요
        </p>
        <div className="Inforfix-content">
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                marginRight: "1vh",
                color: "var(--color-point-green)",
                margin: "1vh",
              }}
            >
              장소
            </p>
            <p>반포경기장</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                marginRight: "1vh",
                color: "var(--color-point-green)",
                margin: "1vh",
              }}
            >
              날짜
            </p>
            <p>2월 15일</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                marginRight: "1vh",
                color: "var(--color-point-green)",
                margin: "1vh",
              }}
            >
              시간
            </p>
            <p>오후 7시</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                marginRight: "1vh",
                color: "var(--color-point-green)",
                margin: "1vh",
              }}
            >
              상대팀
            </p>
            <p>어떤 팀</p>
          </div>
          <Divbox title={"전술 설명"}></Divbox>
          <Divbox title={"포지션 안내"}></Divbox>
          <Link to="/team" style={{ textAlign: "center", marginTop: "3vh" }}>
            <button className="button_main applegreen">확인</button>
          </Link>
        </div>
      </div>

      <Navigationbar />
    </div>
  );
}

export default TeamCreateGamepage;
