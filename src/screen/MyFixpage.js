//팀 정보 수정 페이지
import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Navigationbar from "../component/Navigationbar";
import "./css/notice.css";
import "../index.css";
import "./css/teamdetail.css";
import "./css/inforfix.css";
import "../component/Button/Button.css";
import GroupButton from "../component/Button/GroupButton";
import ContrySelectBtn from "../component/Button/CountrySelectBtn";
import KakaoAddressPopup from "../component/KakaoAddressPopup";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "../component/PhoneInput";
import EmailInput from "../component/EmailInput";
import ModalCheck from "../component/Modal/ModalCheck";

function MyFixpage() {
  const [phoneNumber, setPhoneNumber] = useState("");

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
  const [selectedImage, setSelectedImage] = useState(null);
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

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <div>
      <Header cancel={true} />
      <div className="div-page">
        {/* 팀 이름, 팀 사진, 프로필 사진 수정 */}
        <div className="TeamDetail-profile">
          <div className="CreateTeamComponentProfile TeamDetail-profile_img">
            {selectedImage && <img src={selectedImage} alt="Selected" />}
          </div>
          <div className="TeamDetail-profile_box">
            <div className="Inforfix-profile_title">사용자 이름</div>
            <div
              style={{
                borderTop: "1px solid var(--color-normal6)",
                marginTop: "1vh",
                paddingTop: "1vh",
                color: "var(--color-normal8)",
              }}
            >
              내 포지션 : CB, GK
              <div style={{ marginTop: "1vh" }}>
                <label className="button_sub green" htmlFor="imageUpload">
                  프로필 사진 변경하기
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="Inforfix-content">
          <div className="Inforfix-div">
            <label className="Inforfix-label">휴대폰 번호</label>
            <div>
              <PhoneInput />
              <button className="button_sub green">인증받기</button>
            </div>
          </div>
          <div className="Inforfix-div">
            <label className="Inforfix-label">이메일 주소</label>
            <EmailInput />
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
              borderRadius={"100vw"}
              fontSize={"15px"}
              display={"flex"}
            />
            <GroupButton
              list={time}
              result={setTimeResult}
              width={"17vw"}
              height={"17vw"}
              borderRadius={"100vw"}
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
              borderRadius={"100vw"}
            />
          </div>
          <div className="Inforfix-div">
            <label className="Inforfix-label">나이대</label>
            <GroupButton
              list={age}
              result={setAgeResult}
              width={"28vw"}
              height={"8vw"}
              borderRadius={"100vw"}
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
                borderRadius={"100vw"}
              />
            </div>
          </div>

          <button
            style={{ margin: "auto" }}
            className="button_main applegreen"
            onClick={() => {
              setIsOpen(true);
              console.log(isOpen);
            }}
          >
            수정완료
          </button>

          <ModalCheck
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            next={"/my"}
            title={"수정하시겠습니까?"}
            completeContext={"수정이 완료되었습니다."}
          />
        </div>
      </div>
      <Navigationbar />
    </div>
  );
}

export default MyFixpage;
