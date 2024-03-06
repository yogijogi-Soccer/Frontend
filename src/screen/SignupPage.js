import React, { useState } from 'react';
import Header from '../component/header';
import Navigationbar from '../component/navigationbar';
import Button from '../component/Button';
import Button2 from '../component/Button2';

import "../component/css/SignupPage.css";

function SignupPage() {
  const [signupStep, setSignupStep] = useState(1);

  const handleNextButtonClick = () => {
    setSignupStep(signupStep + 1);
  };

  const handlePrevButtonClick = () => {
    if (signupStep > 1) {
      setSignupStep(signupStep - 1);
    }
  };

  const SignupComponent = () => ( //본인인증 (이름, 생년월일, 휴대폰)
    <div className='SignupPage'>
      <h1>본인 인증을 해주세요</h1>
      <div className='SignupComponentBox1'>
        <div className='MemberInfo'>
          {/* 이름 */}
          <span>이름</span>
          <div>
            <input type='text' placeholder='홍길동'/>
            <div className='gender'>
              <Button2>남</Button2>
              <Button2>여</Button2>
            </div>
            {/* 생년월일 */}
            <span>생년월일</span>
          </div>
          <input type='text' placeholder='ex) 001225'/>
        </div>
        <div className='authentication'>
          {/* 휴대폰 번호 */}
          <span>휴대폰 번호</span>
          <div>
            <input type='text' placeholder='ex) 01012345678' />
            <Button>문자받기</Button>
          </div>
          {/* 인증번호 */}
          <span>인증번호</span>
          <div>
            <input type='text' placeholder='0000'/>
            <Button>인증하기</Button>
          </div>
        </div>
      </div>
      <div>
        <Button className="nextButton" onClick={handleNextButtonClick}>다음</Button>
      </div>
    </div>
  );

  const SignupComponent2 = () => ( //이메일 및 비밀번호
    <div className='SignupPage'>
      <h1>닉네임, 이메일과 비밀번호를 입력해주세요</h1>
      <div className='SignupComponentBox2'>
        {/* 이메일 주소 */}
        <span>이메일 주소</span>
        <div className='email'>
          <input type='text' placeholder='이메일 주소를 입력하세요' />
          <span>@</span>
          <select>
            <option>naver.com</option>
            <option>gmail.com</option>
            <option>daum.net</option>
            <option>nate.com</option>
            <option>yahoo.com</option>
            <option>tistory.com</option>
          </select>
        </div>
        {/* 비밀번호 */}
        <span>비밀번호</span>
        <div>
          <input type='text' placeholder='영문, 숫자, 특수문자 포함 8자 이상'/>
        </div>
      </div>
      <div>
        <Button className="prevButton" onClick={handlePrevButtonClick}>이전</Button>
        <Button className="nextButton" onClick={handleNextButtonClick}>다음</Button>
      </div>
    </div>
  );

  const SignupComponent3 = () => ( //추가정보
    <div className='SignupPage'>
      <h1>추가정보를 적어주세요. (1/2)</h1>
      <div className='SignupComponentBox3'>
        {/* 추가 정보 입력 */}
      </div>
      <div>
        <Button className="prevButton" onClick={handlePrevButtonClick}>이전</Button>
        <Button className="nextButton">다음</Button>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      {signupStep === 1 && <SignupComponent />}
      {signupStep === 2 && <SignupComponent2 />}
      {signupStep === 3 && <SignupComponent3 />}
      <Navigationbar />
    </div>
  );
}

export default SignupPage;
