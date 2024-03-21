import React, { useState } from 'react';
import Header from '../component/header';
import Navigationbar from '../component/navigationbar';
import Button from '../component/Button';
import KakaoLogin from '../component//KakaoLogin';
import "../component/css/Loginpage.css";
import { Link } from "react-router-dom";

function Loginpage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState(false); // 로그인 에러 상태

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const phoneNumRegExp = /^010([0-9]{8})$/; // - 제외 11자리 숫자
    setPhoneNumber(value);
    if (phoneNumRegExp.test(value)) {
      setPhoneNumberError('');
    } else {
      setPhoneNumberError(errMsg.mobile);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const pwRegExp = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if (pwRegExp.test(value)) {
      setPasswordError('');
    } else {
      setPasswordError(errMsg.pw);
    }
  };

  const handleLoginButtonClick = () => {
    // 여기에 로그인 버튼 클릭 시 실행되는 로직을 추가
    // 로그인 실패 시 에러 메시지 표시
    if (phoneNumber !== '올바른 휴대폰 번호' || password !== '올바른 비밀번호') {
      setLoginError(true);
    }
  };

  // 에러 메세지 객체
  const errMsg = {
    pw: "8~20자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요",
    mobile: "‘-’ 제외 11자리를 입력해주세요"
  };

  // const kakaoLogin = ()=> {
  //     const Rest_api_key='947bb0721b6df0ee8869d2df3904662b' //REST API KEY
  //     const redirect_uri = 'https://localhost:3000/login' //Redirect URI
  //     // oauth 요청 URL
  //     const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
  //     const handleLogin = ()=>{
  //         window.location.href = kakaoURL
  //     }
  //     return(
  //     <>
  //     <button onClick={handleLogin}>카카오 로그인</button>
  //     </>
  //     )
  // }

  // <script>
  //   {/* 	14f48d8c4a5f885c0da0c781a0dbb5e0 */}
  // </script>

  return (
    <div>
      <Header />
      <div className='LoginCompoent'>
        <div className='LoginBox1'>
          <h1>요기조기 이용을 위해<br/>로그인 해주세요!</h1>
          <input
            type='number'
            placeholder='휴대폰 번호'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            style={{ borderColor: phoneNumberError ? 'red' : '' }}
          />
          {phoneNumberError && <span className="error-msg">{phoneNumberError}</span>}
          <br />
          <input
            type='password'
            placeholder='비밀번호'
            value={password}
            onChange={handlePasswordChange}
            style={{ borderColor: passwordError ? 'red' : '' }}
          />
          {passwordError && <span className="error-msg">{passwordError}</span>}
          <br />
          <Button onClick={handleLoginButtonClick}>로그인</Button>
          {loginError && <span className="error-msg">로그인에 실패했습니다. 다시 시도해주세요.</span>}
          <br />
        </div>

        <div className='LoginBox2'>
          <div className='memberInfo'>
            <Link><button type="button">아이디 찾기</button></Link>
            <span> | </span>
            <Link><button type="button">비밀번호 찾기</button></Link>
            <span> | </span>
            <Link to="/signup"><button type="button">회원가입 하기</button></Link>
          </div>
          <hr />
          <KakaoLogin />
        </div>
      </div>
      <Navigationbar />
    </div>
  );
}

export default Loginpage;
