//팀 목록 페이지
import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Navigationbar from "../component/Navigationbar";
import SearchBar from "../component/SarchBar";
import SelectBar from "../component/SelectBar";
import TeamBox from "../component/TeamBox";
import "../component/css/FindTeamPage.css";

function FindTeampage() {
  const data = [
    {
      teamName: "요기조기",
      local: "성동구",
      gender: "여성",
      memberCount: "10",
      age: "20대, 30대",
      meetTime: "오전(9시~12시)",
      homeground: "성동구 경기장",
    },
    {
      teamName: "요기조기",
      local: "성동구",
      gender: "남성",
      memberCount: "10",
      age: "20대, 30대",
      meetTime: "오전(9시~12시)",
      homeground: "성동구 경기장",
    },
    {
      teamName: "요기조기",
      local: "성동구",
      gender: "여성",
      memberCount: "10",
      age: "20대, 30대",
      meetTime: "오전(9시~12시)",
      homeground: "성동구 경기장",
    },
    {
      teamName: "요기조기",
      local: "성동구",
      gender: "남성",
      memberCount: "10",
      age: "20대, 30대",
      meetTime: "오전(9시~12시)",
      homeground: "성동구 경기장",
    },
    {
      teamName: "요기조기",
      local: "성동구",
      gender: "여성",
      memberCount: "10",
      age: "20대, 30대",
      meetTime: "오전(9시~12시)",
      homeground: "성동구 경기장",
    },
    {
      teamName: "요기조기",
      local: "성동구",
      gender: "남성",
      memberCount: "10",
      age: "20대, 30대",
      meetTime: "오전(9시~12시)",
      homeground: "성동구 경기장",
    },
  ];

  return (
    <div>
      <Header main={true} />
      <div className="div-page">
        <button
          style={{
            backgroundColor: "var(--color-point-green)",
            color: "var(--color-normal1)",
            padding: "2vw",
            borderRadius: "5px",
            width: "100%",
            marginBottom: "1vh",
          }}
        >
          초대코드로 승인 없이 가입하기
        </button>
        <SearchBar />
        <SelectBar />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "5vw",
            rowGap: "2vh",
            paddingTop: "2vh",
          }}
        >
          {data.map((el, index) => {
            return (
              <Link to={"/join-team"} className="link">
                <TeamBox data={el} index={index} />
              </Link>
            );
          })}
        </div>
      </div>
      <Navigationbar />
    </div>
  );
}

export default FindTeampage;
