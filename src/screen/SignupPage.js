import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";
import Navigationbar from "../component/navigationbar";
import Button from "../component/Button";
import Button2 from "../component/Button2";
import WeekButton from "../component/weekButton";
import TimeOption from "../component/TimeOption";
import "../component/css/SignupPage.css";

import "../index.css";

function SignupPage() {
  const [signupStep, setSignupStep] = useState(1);

  const handleNextButtonClick = () => {
    //다음 버튼 클릭 시
    setSignupStep(signupStep + 1);
  };

  const handlePrevButtonClick = () => {
    //이전 버튼 클릭 시
    if (signupStep > 1) {
      setSignupStep(signupStep - 1);
    }
  };

  const SignupComponent = ({ onClick }) => (
    //본인인증 (이름, 생년월일, 휴대폰)
    <div className="SignupPage">
      <h1>본인 인증을 해주세요</h1>
      <div className="SignupComponentBox1">
        {/* 이름 */}
        <span>이름</span>
        <div className="NameGender SignupComponentInner">
          <input type="text" placeholder="홍길동" />
          <div className="gender">
            <button className="genderBtn" onClick={onClick}>
              남
            </button>
            <button className="genderBtn" onClick={onClick}>
              여
            </button>
          </div>
        </div>

        {/* 생년월일 */}
        <span>생년월일</span>
        <div className="SignupComponentInner">
          <input type="text" placeholder="ex) 001225" />
        </div>

        {/* 휴대폰 번호 */}
        <span>휴대폰 번호</span>
        <div className="SignupComponentInner">
          <input type="text" placeholder="ex) 01012345678" />
          <Button>문자받기</Button>
        </div>

        {/* 인증번호 */}
        <span>인증번호</span>
        <div className="SignupComponentInner">
          <input type="text" placeholder="0000" />
          <Button>인증하기</Button>
        </div>
      </div>
      <div>
        <Button className="nextButton" onClick={handleNextButtonClick}>
          다음
        </Button>
      </div>
    </div>
  );

  const SignupComponent2 = () => (
    //이메일 및 비밀번호
    <div className="SignupPage">
      <h1>
        닉네임, 이메일과 비밀번호를
        <br /> 입력해주세요
      </h1>
      <div className="SignupComponentBox2">
        {/* 이메일 주소 */}
        <span>이메일 주소</span>
        <div className="signupEmail SignupComponentInner">
          <input type="text" placeholder="이메일 주소를 입력하세요" />
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
        <div className="SignupComponentInner signuPassword">
          <input type="text" placeholder="영문, 숫자, 특수문자 포함 8자 이상" />
        </div>
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

  const SignupComponent3 = () => (
    //추가정보 (1)
    <div className="SignupPage">
      <h1>추가정보를 적어주세요. (1/2)</h1>
      <div className="SignupComponentBox3">
        {/* 추가 정보 입력 */}
        <h3>선수 경험</h3>
        <div className="SignupComponentInner">
          <Button2>선수 경험이 있습니다</Button2>
          <Button2>없습니다</Button2>
        </div>
        <h3>포지션 (최대 3개)</h3>
        <div className="signupPositionBox">
          <span>골기퍼</span>
          <div className="positionBtn">
            <Button2>GK</Button2>
          </div>

          <span>수비</span>
          <div className="positionBtn">
            <Button2>LB</Button2>
            <Button2>CB</Button2>
            <Button2>RB</Button2>
          </div>

          <span>미드필더</span>
          <div className="positionBtn">
            <Button2>LM</Button2>
            <Button2>CM</Button2>
            <Button2>RB</Button2>
          </div>

          <span>공격</span>
          <div className="positionBtn">
            <Button2>LW</Button2>
            <Button2>RW</Button2>
            <Button2>CF</Button2>
          </div>
        </div>
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

  const SignupComponent4 = () => (
    //추가정보 (2)
    <div className="SignupPage">
      <h1>추가정보를 적어주세요. (2/2)</h1>
      <div>
        <div className="SignupComponentBox4">
          <h3>가능한 요일(중복가능)</h3>
          {/* 요일 버튼 */}
          <WeekButton />
          <h3>가능한 시간대(중복가능)</h3>
          <div className="signupTimeOption">
            <div className="signupTimeOption1">
              <span>시작시간</span>
              <span> 끝시간</span>
            </div>
            <div className="signupTimeOption2">
              <TimeOption />
              <span>~</span>
              <TimeOption />
            </div>
          </div>
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
    </div>
  );

  const SignupComponent5 = () => (
    //서비스 약관 동의
    <div className="SignupPage">
      <h1>서비스 약관에 동의해주세요.</h1>
      <div>
        <div className="SignupComponentBox5">
          <div className="checkboxContainer">
            <input type="checkbox" />
            <span>네, 모두 동의합니다.</span>
          </div>
          <hr />
          <div className="checkboxContainer">
            <input type="checkbox" />
            <span>(필수) 만 14세 이상입니다.</span>
          </div>
          <div className="checkboxContainer">
            <input type="checkbox" />
            <span>(필수) 서비스 이용약관에 동의</span>
          </div>
          <div className="checkboxContainer">
            <input type="checkbox" />
            <span>(필수) 개인정보 수집 이용에 동의</span>
          </div>
          <div className="checkboxContainer">
            <input type="checkbox" />
            <span>(선택) 야간 혜택 수신에 동의</span>
          </div>
          <div className="checkboxContainer">
            <input type="checkbox" />
            <span>(선택) 홍보 및 마케팅 이용에 동의</span>
          </div>
          <div className="checkboxContainer">
            <input type="checkbox" />
            <span>(선택) 마케팅 개인정보 제3자 제공 동의</span>
          </div>
        </div>

        <div>
          <Button className="prevButton" onClick={handlePrevButtonClick}>
            이전
          </Button>
          <Button className="nextButton" onClick={handleNextButtonClick}>
            완료
          </Button>
        </div>
      </div>
    </div>
  );

  const SignupComponent6 = () => (
    //회원가입 완료창
    <div className="SignupPage">
      <h1>회원가입이 완료되었습니다.</h1>
      <div className="SignupComponentBox6">
        <Button className="SignupSuccessBtn">
          <Link to="/login" className="link">
            로그인 하러가기
          </Link>
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      {signupStep === 1 && <SignupComponent />}
      {signupStep === 2 && <SignupComponent2 />}
      {signupStep === 3 && <SignupComponent3 />}
      {signupStep === 4 && <SignupComponent4 />}
      {signupStep === 5 && <SignupComponent5 />}
      {signupStep === 6 && <SignupComponent6 />}
      <Navigationbar />
    </div>
  );
}

export default SignupPage;
