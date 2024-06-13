//팀 생성 페이지
import React, { useState } from "react";
import Header from "../component/header";
import Navigationbar from "../component/navigationbar";
import Button from "../component/Button";
// import Button2 from "../component/Button2";
// import WeekButton from "../component/weekButton";
// import TimeButton from "../component/timeButton";
// import MemberFeeButton from "../component/memberFeeButton";
// import GenderButton from "../component/genderButton";
// import AgeGroupButton from "../component/ageGroupButton";
import GroupButton from "../component/GroupButton";
import KakaoAddressPopup from "../component/KakaoAddressPopup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ModalCheck from "../component/ModalCheck";

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

  const [teamName, setTeamName] = useState("");
  const [teamIntro, setTeamIntro] = useState("");
  //  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleImageUpload = (event) => {
    //이미지 업로드 버튼
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMainNextButtonClick = () => {
    const newErrors = {};
    if (teamName.length === 0 || teamName.length > 10) {
      newErrors.teamName = "팀명을 10자 이내로 작성해주세요.";
    }
    if (teamIntro.length === 0 || teamIntro.length > 30) {
      newErrors.teamIntro = "팀 소개를 30자 이내로 작성해주세요.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      //팀명 및 팀 소개 입력을 충족했을 경우 다음 페이지로 이동
      setCreateTeamStep(createTeamStep + 1);
    }
  };

  //주요 활동 지역
  const [city, setCities] = useState("서울특별시");
  const handleCityChange = (event) => {
    const { value } = event.target;
    setCities(value);
  };
  const cities = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
  ];

  //행정 구역
  const [district, setDistrict] = useState("관악구");
  const handleDistrictChange = (event) => {
    const { value } = event.target;
    setDistrict(value);
  };
  const districts = [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];

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

  //월 회비
  const ability = ["상", "중", "하"];
  const [abilityResult, setAbilityResult] = useState("");

  //복사하기 버튼 클릭
  const [invitationCodePopup, setInvitationCodePopup] = useState(false);
  const clickCopyBtn = () => {
    setInvitationCodePopup(true);
  };

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
          <input
            type="text"
            name="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          {errors.teamName && <p style={{ color: "red" }}>{errors.teamName}</p>}
          <span>팀 소개(30자 이내)</span>
          <input
            type="text"
            name="teamIntro"
            value={teamIntro}
            onChange={(e) => setTeamIntro(e.target.value)}
          />
          {errors.teamIntro && (
            <p style={{ color: "red" }}>{errors.teamIntro}</p>
          )}
        </div>
      </div>
      <div>
        <div style={{ textAlign: "center", marginTop: "2vh" }}>
          <Button className="nextButton" onClick={handleMainNextButtonClick}>
            다음
          </Button>
        </div>
      </div>
    </div>
  );

  const CreateTeamComponent2 = () => (
    //상세정보 작성
    <div className="CreateTeamComponent">
      <h1>상세정보를 작성해주세요</h1>
      <div className="CreateTeamComponent2">
        <div className="Inforfix-div">
          <label className="Inforfix-label">주요 활동 지역</label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormControl sx={{ m: 1, flex: 1 }} fullWidth size="small">
              <Select value={""} onChange={handleCityChange}>
                {cities.map((citiesOption) => (
                  <MenuItem key={citiesOption} value={citiesOption}>
                    {citiesOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, flex: 1 }} fullWidth size="small">
              <Select value={""} onChange={handleDistrictChange}>
                {districts.map((districtsOption) => (
                  <MenuItem key={districtsOption} value={districtsOption}>
                    {districtsOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="Inforfix-div">
          <label className="Inforfix-label">활동하는 경기장</label>
          <KakaoAddressPopup />
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
      </div>
      <div style={{ textAlign: "center", marginTop: "2vh" }}>
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
      <div className="CreateTeamComponent3">
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
          <div>
            <GroupButton
              list={ability}
              result={setAbilityResult}
              display={"flex"}
              width={"30vw"}
              height={"8vw"}
              borderRadius={"20px"}
            />
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "2vh" }}>
          <Button className="nextButton" onClick={handleNextButtonClick}>
            완료{" "}
          </Button>
        </div>
      </div>
    </div>
  );

  const CreateTeamComponent4 = () => (
    //팀 초대
    <div className="CreateTeamComponent">
      <h1>7명 이상 가입이 완료되면</h1>
      <h1>팀이 생성돼요.</h1>
      <h1>초대 코드로 팀원을 초대하세요!</h1>
      <div className="CreateTeamComponent4">
        <span>초대코드</span>
        <textarea
          type="text"
          style={{
            width: "100%",
            fontSize: "1.5vh",
            borderRadius: "5px",
            marginTop: "1vh",
            height: "3vh",
            padding: "0.5vh",
          }}
          maxLength="50"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "2vh" }}>
        <Button onClick={clickCopyBtn}>복사하기</Button>
      </div>
      <ModalCheck
        open={invitationCodePopup}
        title={"초대 코드를 복사하시겠습니까?"}
        onClose={() => setInvitationCodePopup(false)}
        completeContext={"초대코드가 복사되었습니다."}
      />
    </div>
  );

  return (
    <div>
      <Header main={true} />
      {createTeamStep === 1 && <CreateTeamComponent />}
      {createTeamStep === 2 && <CreateTeamComponent2 />}
      {createTeamStep === 3 && <CreateTeamComponent3 />}
      {createTeamStep === 4 && <CreateTeamComponent4 />}
      <Navigationbar />
    </div>
  );
}

export default CreateTeampage;
