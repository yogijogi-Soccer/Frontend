//팀 정보 수정 페이지
import React, { useState } from "react";
import Header from "../../component/header";
import Navigationbar from "../../component/navigationbar";
import "../css/notice.css";
import "../../index.css";
import GreenButton from "../../component/GreenButton";
import "../css/teamdetail.css";
import "../css/inforfix.css";
import Button from "../../component/Button";
import GroupButton from "../../component/GroupButton";
import ContrySelectBtn from "../../component/CountrySelectBtn";
import KakaoAddressPopup from "../../component/KakaoAddressPopup";

function TeamInforFixpage() {
  //팀 소개 한줄
  const [introText, setIntroText] = useState("팀 소개 한줄");
  const introChange = (e) => {
    setIntroText(e.target.value);
  };

  //일주일
  const week = ["월", "화", "수", "목", "금", "토", "일"];
  const [weekResult, setWeekResult] = useState("");
  console.log("요일 : " + weekResult);

  //시간대
  const time = [
    "아침\n6~10",
    "낮\n10~14",
    "오후\n14~18",
    "저녁\n18~22",
    "밤\n22~02",
  ];
  const [timeResult, setTimeResult] = useState("");
  console.log("시간대 : " + timeResult);

  //성별
  const gender = ["남자", "여자", "남녀 모두"];
  const [genderResult, setGenderResult] = useState("");

  //나이대
  const age = ["10대", "20대", "30대", "40대", "50대", "50대 이상"];
  const [ageResult, setAgeResult] = useState("");

  //월 회비
  const dues = ["무료", "1만원", "3만원", "5만원", "직접입력"];
  const [duesResult, setDuesResult] = useState("0");
  if (duesResult === "무료") {
    setDuesResult("0");
  }
  if (duesResult === "1만원") {
    setDuesResult("10,000");
  }
  if (duesResult === "3만원") {
    setDuesResult("30,000");
  }
  if (duesResult === "5만원") {
    setDuesResult("50,000");
  }
  if (duesResult === "직접입력") {
    setDuesResult("");
    document.getElementById("DuesInput").focus();
  }

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
            <ContrySelectBtn />
          </div>
          <div className="Inforfix-div">
            <label className="Inforfix-label">주요 활동 시간</label>
            <KakaoAddressPopup />
            {/* <WeekButton />
            <TimeButton /> */}
            <GroupButton
              list={week}
              result={setWeekResult}
              width={"12vw"}
              height={"12vw"}
              borderRadius={"50px"}
              fontSize={"15px"}
              display={"flex"}
            />
            <GroupButton
              list={time}
              result={setTimeResult}
              width={"17vw"}
              height={"17vw"}
              borderRadius={"50px"}
              display={"flex"}
            />
          </div>
          <div className="Inforfix-div">
            <label className="Inforfix-label">성별</label>
            <GroupButton
              list={gender}
              result={setGenderResult}
              width={"20vw"}
              height={"8vw"}
              borderRadius={"20px"}
            />
          </div>
          <div className="Inforfix-div">
            <label className="Inforfix-label">나이대</label>
            <GroupButton
              list={age}
              result={setAgeResult}
              width={"28vw"}
              height={"8vw"}
              borderRadius={"20px"}
            />
          </div>
          <div className="Inforfix-div">
            <label className="Inforfix-label">월 회비</label>
            <div>
              <input
                id="DuesInput"
                type="text"
                className="input-money"
                placeholder={duesResult}
              />{" "}
              원
            </div>
            <div>
              <GroupButton
                list={dues}
                result={setDuesResult}
                display={"flex"}
                width={"18vw"}
                height={"8vw"}
                borderRadius={"20px"}
              />
              {/* <Button2
                Vpadding={2}
                Hpadding={3}
                FontSize={15}
                Width={16}
                onClick={(e) => {
                  setDues("0");
                }}
                Name="dues"
                Type="radio"
              >
                무료
              </Button2>
              <Button2
                Vpadding={2}
                Hpadding={3}
                FontSize={15}
                Width={16}
                onClick={(e) => setDues("10,000")}
                Name="dues"
                Type="radio"
              >
                1만원
              </Button2>
              <Button2
                Vpadding={2}
                Hpadding={3}
                FontSize={15}
                Width={16}
                onClick={(e) => {
                  setDues("30,000");
                }}
                Name="dues"
                Type="radio"
              >
                3만원
              </Button2>
              <Button2
                Vpadding={2}
                Hpadding={3}
                FontSize={15}
                Width={16}
                onClick={(e) => {
                  setDues("50,000");
                }}
                Name="dues"
                Type="radio"
              >
                5만원
              </Button2>
              <Button2
                Vpadding={2}
                Hpadding={3}
                FontSize={15}
                Width={20}
                onClick={(e) => {
                  document.getElementById("DuesInput").focus();
                }}
                Name="dues"
                Type="radio"
              >
                직접입력
              </Button2> */}
            </div>
          </div>
        </div>
        <Button>수정완료</Button>
      </div>
      <Navigationbar />
    </div>
  );
}

export default TeamInforFixpage;
