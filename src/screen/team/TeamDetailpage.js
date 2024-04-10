//팀 상세 페이지
import React, { useState } from "react";
import Header from "../../component/header";
import Navigationbar from "../../component/navigationbar";
import GreenButton from "../../component/GreenButton";
import "../css/teamdetail.css";
import "../../index.css";
import Divbox from "../../component/divbox";
import DivSquareBox from "../../component/divSquareBox";
import { Link } from "react-router-dom";
import GroupButton from "../../component/GroupButton";

function TeamDetailpage() {
  //관리자인가 일반인가?
  const role = "manger";
  const [x, setX] = useState("x data");
  const [y, setY] = useState("y");
  // const onSetX = (x) => {
  //   setX(x);
  // };
  console.log(x);

  const noticlist = [
    { title: "제목1", date: "2020.03.18 12:00" },
    { title: "제목2", date: "2023.03.14 12:00" },
  ];
  const teamlist = [
    { position: "공격수", count: 4 },
    { position: "수비수", count: 5 },
    { position: "골키퍼", count: 2 },
    { position: "미드필더", count: 0 },
  ];
  const gamelist = [
    { title: "2월 15일 오후 7시", place: "반포경기장", btn: "자세히 보기" },
  ];

  const list = ["dsdf", "d", "c", "a"];

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
              <div>팀 이름</div>
              <GreenButton>
                {role !== "manger" ? (
                  "팀 탈퇴하기"
                ) : (
                  <Link to="/manger/fix" className="link_white">
                    팀 정보 수정
                  </Link>
                )}
              </GreenButton>
            </div>
            <div className="TeamDetail-profile_introduce">팀 소개 한줄</div>
          </div>
        </div>
        <Divbox
          title={"공지사항"}
          button={"더보기"}
          link={"notice"}
          item={noticlist}
        ></Divbox>
        <Divbox
          title={"팀 정보"}
          button={"목록보기"}
          link={"member"}
          item={teamlist}
        ></Divbox>
        <Divbox title={"경기일정"} item={gamelist}></Divbox>
        <DivSquareBox
          title={"회비"}
          content={"10,000원"}
          button={"더보기"}
          link={"main"}
        />
        <GroupButton list={list} result={setX}></GroupButton>
        <GroupButton list={list} result={setY}></GroupButton>
      </div>

      <Navigationbar />
    </div>
  );
}

export default TeamDetailpage;
