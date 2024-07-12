import React, { useState } from "react";
import Header from "../component/Header";
import Navigationbar from "../component/Navigationbar";
import KakaoLogin from "../component/KakaoLogin";
import "../component/css/Loginpage.css";
import { Link } from "react-router-dom";

function Invitepage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(""); //휴대폰 번호 에러
  const [passwordError, setPasswordError] = useState(""); //패스워드 에러
  const [loginError, setLoginError] = useState(""); // 로그인 에러 상태

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const phoneNumRegExp = /^010([0-9]{8})$/; // - 제외 11자리 숫자
    setPhoneNumber(value);
    if (phoneNumRegExp.test(value)) {
      setPhoneNumberError("");
    } else {
      setPhoneNumberError(errMsg.mobile);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const pwRegExp =
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if (pwRegExp.test(value)) {
      setPasswordError("");
    } else {
      setPasswordError(errMsg.pw);
    }
  };

  const handleLoginButtonClick = () => {
    let isValid = true;

    // 여기에 실제 로그인 로직을 추가 (예: 서버와의 통신)
    if (
      phoneNumber === "올바른 휴대폰 번호" &&
      password === "올바른 비밀번호"
    ) {
      // 로그인 성공 로직
      setLoginError("");
      alert("로그인 성공");
    } else {
      // 로그인 실패 로직
      isValid = false;
    }

    // 휴대폰 번호 유효성 검사
    if (!phoneNumber.match(/^010([0-9]{8})$/)) {
      setPhoneNumberError(
        "입력한 휴대폰 번호가 존재하지 않습니다. 다시 시도해주세요."
      );
      isValid = false;
    }

    // 비밀번호 유효성 검사
    if (
      !password.match(
        /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      )
    ) {
      setPasswordError("비밀번호가 틀렸습니다. 다시 시도해주세요.");
      isValid = false;
    }

    // 유효성 검사 통과 시 로그인 실패 메시지 초기화
    if (isValid) {
      setLoginError("");
    }
  };

  // 에러 메세지 객체
  const errMsg = {
    pw: "8~20자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요",
    mobile: "‘-’ 제외 11자리를 입력해주세요",
  };

  return (
    <div>
      <Header />
      <div className="div-page" style={{ height: "100%", textAlign: "center" }}>
        <div className="invite">
          <div>
            초대코드를 받으셨나요?
            <br />
            받으신 초대코드를 입력해주세요
          </div>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            style={{ borderColor: phoneNumberError ? "red" : "" }}
          />
          {phoneNumberError && (
            <span className="error-msg">{phoneNumberError}</span>
          )}
          <br />
          <button
            className="button_main applegreen"
            onClick={handleLoginButtonClick}
          >
            초대코드 입력하기
          </button>
          {loginError && <span className="error-msg">{loginError}</span>}
          <br />
        </div>
      </div>
      <Navigationbar />
    </div>
  );
}

export default Invitepage;
