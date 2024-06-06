//팀 생성 페이지
import React, { useState } from "react";
import Header from "../component/header";
import Navigationbar from "../component/navigationbar";
import Button from "../component/Button";
import Button2 from "../component/Button2";
import WeekButton from "../component/weekButton";
import TimeButton from "../component/timeButton";
import MemberFeeButton from "../component/memberFeeButton";
import GenderButton from "../component/genderButton";
import AgeGroupButton from "../component/ageGroupButton";
import GroupButton from "../component/GroupButton";

import "../component/css/CreateTeamPage.css";

function CreateTeampage() {
  const [createTeamStep, setCreateTeamStep] = useState(1); //팀 생성 페이지 조정
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNextButtonClick = () => {
    //다음 버튼 클릭 시
    setCreateTeamStep(createTeamStep + 1);
  };

  const handlePrevButtonClick = () => {
    //이전 버튼 클릭 시
    if (createTeamStep > 1) {
      setCreateTeamStep(createTeamStep - 1);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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

  const CreateTeamComponent = () => (
    //팀 프로필 작성
    <div className="CreateTeamComponent">
      <h1>팀 프로필을 작성해주세요</h1>
      <div className="CreateTeamComponent1">
        <div className="CreateTeamComponentInner">
          <div className="CreateTeamComponentProfile">
            {selectedImage && <img src={selectedImage} alt="Selected" />}
          </div>
          <div className="CreateTeamComponentBtnBox">
            {/* <button className="imgBtn">이미지 추가하기</button> */}
            <label htmlFor="imageUpload" className="imgBtn">
              이미지 추가하기
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <button className="imgBtn">단색으로 설정하기</button>
          </div>
        </div>
        <div className="TeamInfoInput">
          <span>팀명(10자 이내)</span>
          <input type="text" name="teamName" />
          <span>팀 소개(30자 이내)</span>
          <input type="text" name="teamIntro" />
        </div>
      </div>
      <div>
        <Button className="nextButton" onClick={handleNextButtonClick}>
          다음
        </Button>
      </div>
    </div>
  );

  const CreateTeamComponent2 = () => (
    //상세정보 작성
    <div className="CreateTeamComponent">
      <h1>상세정보를 작성해주세요</h1>
      <div>
        <span>주요 활동 지역</span>
      </div>
      <div>
        <span>활동하는 경기장 </span>
      </div>
      <div className="Inforfix-div">
        <label className="Inforfix-label">주요 활동 시간</label>
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
      <div>
        <Button className="prevButton" onClick={handlePrevButtonClick}>
          이전
        </Button>
        <Button className="nextButton" onClick={handleNextButtonClick}>
          다음
        </Button>
      </div>
    </div>
  );

  const CreateTeamComponent3 = () => (
    //상세정보 작성
    <div className="CreateTeamComponent">
      <h1>상세정보를 작성해주세요</h1>
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
        </div>
        <label className="Inforfix-label">팀 레벨(실력)</label>
        <Button className="nextButton" onClick={handleNextButtonClick}>
          완료{" "}
        </Button>
      </div>
    </div>
  );

  const CreateTeamComponent4 = () => (
    //팀 초대
    <div className="CreateTeamComponent">
      <h1>7명 이상 가입이 완료되면 팀이 생성돼요.</h1>
      <h1>초대 코드로 팀원을 초대하세요!</h1>
      <div>
        <span>초대코드</span>
      </div>
      <div>
        <Button className="">복사하기</Button>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      {createTeamStep === 1 && <CreateTeamComponent />}
      {createTeamStep === 2 && <CreateTeamComponent2 />}
      {createTeamStep === 3 && <CreateTeamComponent3 />}
      {createTeamStep === 4 && <CreateTeamComponent4 />}
      <Navigationbar />
    </div>
  );
}

export default CreateTeampage;
