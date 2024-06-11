//팀 상세 페이지
import React, { useEffect, useReducer, useState, useRef } from "react";
import Header from "../component/header";
import Navigationbar from "../component/navigationbar";
import "./css/teamdetail.css";
import "../index.css";
import Button from "../component/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ModalCheck from "../component/ModalCheck";
import Modal from "../component/Modal";

const JoinCard = () => {
  const [introText, setIntroText] = useState("");
  const introChange = (e) => {
    setIntroText(e.target.value);
  };

  const checkChange = () => {
    document.getElementById("agreeCheck").checked =
      !document.getElementById("agreeCheck").checked;
    console.log(document.getElementById("agreeCheck").checked);
  };
  const [position, setPosition] = useState("");
  const positionList = [
    "GK",
    "LB",
    "CB",
    "RB",
    "LM",
    "CM",
    "RM",
    "LW",
    "RW",
    "CF",
  ];

  return (
    <div
      className="divbox"
      style={{
        backgroundColor: "var(--color-normal2)",
        fontWeight: "bold",
        marginTop: "3vh",
        border: "none",
      }}
    >
      <div className="divbox_div-title">가입 신청서</div>
      <div style={{ fontWeight: "normal" }}>
        <p>해당 정보는 가입 시 작성해주신 내용이에요</p>
        <br />
        <p>변경을 원하시면, '마이페이지 > 개인 정보 수정'에서 변경해주세요</p>
        <div
          style={{
            backgroundColor: "var(--color-normal4)",
            padding: "1vh",
            border: "1px solid var(--color-normal8)",
            borderRadius: "1vh",
            margin: "2vh",
          }}
        >
          <p style={{ padding: "0.2vh" }}>이름 : 이지현</p>
          <p style={{ padding: "0.2vh" }}>나이 : 24세</p>
          <p style={{ padding: "0.2vh" }}>주소 : 서울특별시 관악구</p>
          <p style={{ padding: "0.2vh" }}>선수 경험 : 없음</p>
          <p style={{ padding: "0.2vh" }}>선호 요일 : 토, 일</p>
          <p style={{ padding: "0.2vh" }}>
            선호 시간대 : 아침(9시~12시), 저녁(20시~22시)
          </p>
        </div>
        <div
          style={{ paddingRight: "2vh", paddingLeft: "1vh", paddingTop: "2vh" }}
        >
          포지션을 하나만 선택해주세요
          <div>
            <FormControl
              sx={{ m: 1, maxWidth: 100 }}
              fullWidth="true"
              size="small"
            >
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                style={{ backgroundColor: "white" }}
              >
                {positionList.map((el) => {
                  return <MenuItem value={el}>{el}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div
          style={{ paddingLeft: "1vh", paddingTop: "2vh", marginRight: "2vh" }}
        >
          추가적으로 전달하고 싶은 사항을 작성해주세요 ( {introText.length} /
          50자 )
          <textarea
            type="text"
            style={{
              width: "100%",
              fontSize: "1.5vh",
              borderRadius: "5px",
              marginTop: "1vh",
              height: "8vh",
              padding: "0.5vh",
            }}
            value={introText}
            onChange={introChange}
            placeholder="전달하고 싶은 말을 적어주세요"
            maxLength="50"
          />
        </div>
        <div style={{ marㅣginTop: "2vh" }}>
          <p>가입 신청서를 제출하면 제출을 취소할 수 없어요.</p>
          <br />
          <p>신중하게 가입해주세요.</p>
          <div
            style={{
              fontSize: "1.5vh",
              fontWeight: "bold",

              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              id="agreeCheck"
              style={{
                width: "1.8vh",
                height: "1.8vh",
                marginBottom: "0",
                marginLeft: "auto",
              }}
            />
            <p onClick={checkChange}>확인 했습니다</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function JoinTeampage() {
  //관리자인가 일반인가?
  const role = "manager";

  const [isVisible, setIsVisible] = useState(false);
  const JoinCardChange = () => {
    setIsVisible(true);
  };

  //제출하시겠습니까? 팝업 오픈인지 아닌지
  const [submitPopupOpen, setSubmitPopupOpen] = useState(false);
  //'확인했습니다' 체크 안했을 때, 체크해댤라는 팝업 오픈인지 아닌지
  const [checkPopupOpen, setCheckPopupOpen] = useState(false);
  const handlesubmit = () => {
    console.log("joincard : " + document.getElementById("agreeCheck").checked);
    if (document.getElementById("agreeCheck").checked === true) {
      setSubmitPopupOpen(true);
    } else {
      console.log("확인했습니다를 눌러주세요");
      setCheckPopupOpen(true);
    }
  };

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
            </div>
            <div className="TeamDetail-profile_introduce">팀 소개 한줄</div>
          </div>
        </div>
        <div className="divbox">
          <div className="divbox_div-title">팀 안내</div>
          <div style={{}}>
            <div>
              <div style={{ paddingBottom: "2vw" }}>총 인원 : 20명</div>
              <div style={{ paddingBottom: "2vw" }}>회비 : 30,000원 / 월</div>
              <div style={{ paddingBottom: "2vw" }}>
                활동 요일 : 월, 화, 수, 목, 금
              </div>
              <div style={{ paddingBottom: "2vw" }}>
                활동 시간 : 아침 (9시~12시)
              </div>
            </div>
            <div>
              <div style={{ paddingBottom: "2vw" }}>레벨 : 중</div>
              <div style={{ paddingBottom: "2vw" }}>장소 : 서울 광진구</div>
              <div style={{ paddingBottom: "2vw" }}>나이대 : 20대/30대</div>
            </div>
          </div>
        </div>
        <div className="divbox">
          <div className="divbox_div-title">가입요강</div>
        </div>
        {isVisible ? <JoinCard /> : ""}
        <div style={{ textAlign: "center", marginTop: "2vh" }}>
          {isVisible ? (
            <Button onClick={handlesubmit}>제출하기</Button>
          ) : (
            <Button onClick={JoinCardChange}>가입하기</Button>
          )}
        </div>
        <ModalCheck
          open={submitPopupOpen}
          title={"제출하시겠습니까?"}
          onClose={() => setSubmitPopupOpen(false)}
          completeContext={"제출이 완료되었습니다"}
        />
        <Modal
          open={checkPopupOpen}
          onClose={() => setCheckPopupOpen(false)}
          context={"확인했습니다를 체크해주세요"}
        />
      </div>

      <Navigationbar />
    </div>
  );
}

export default JoinTeampage;
