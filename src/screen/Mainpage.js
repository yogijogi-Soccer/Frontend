//메인페이지
import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../component/header";
import Navigationbar from "../component/navigationbar";
import SearchBar from "../component/searchBar";
import Carousel from "../component/Mainpage/Carousel";
import ScheduleBox from "../component/Mainpage/scheduleBox";
import TeamAnalysisBox from "../component/Mainpage/teamAnalysisBox";
import "../component/css/Mainpage.css";
import "../index.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Mainpage() {
  //모바일 웹 앱 100vh 실제 화면 크기로 맞추기
  //https://velog.io/@eunddodi/React-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9B%B9-%EC%95%B1-100vh-%EC%8B%A4%EC%A0%9C-%ED%99%94%EB%A9%B4-%ED%81%AC%EA%B8%B0%EB%A1%9C-%EB%A7%9E%EC%B6%94%EA%B8%B0
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  const [data, setData] = useState("");
  useEffect(() => {
    setScreenSize();
    axios.get("/main-api/search-gender").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="Mainpage">
      <Header main={true} />
      <div className="div-page">
        <div>
          <Link to="/search" className="link">
            <SearchBar />
          </Link>
        </div>
        {data ? (
          <div>
            <div>{data[2].gender}</div>
            <div>{data[2].team_name}</div>
          </div>
        ) : (
          ""
        )}

        <Carousel />
        <ScheduleBox />
        <TeamAnalysisBox />
      </div>
      <Navigationbar />
    </div>
  );
}

export default Mainpage;
