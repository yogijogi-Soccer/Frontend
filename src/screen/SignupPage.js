import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";
import Navigationbar from "../component/navigationbar";
import Button from "../component/Button";
import Button2 from "../component/Button2";
import WeekButton from "../component/weekButton";
import TimeOption from "../component/TimeOption";
import GroupButton from "../component/GroupButton";
import "../component/css/SignupPage.css";
import "../index.css";

function SignupPage() {
  const [signupStep, setSignupStep] = useState(1); //페이지 조정
  const [smsMessage, setSmsMessage] = useState(""); //인증번호 전송 메세지
  const [verificationMessage, setVerificationMessage] = useState(""); // 인증 완료 메세지
  const [allChecked, setAllChecked] = useState(false); //모든 체크 박스 활성화
  const [checkboxes, setCheckboxes] = useState({
    //서비스 약관 체크박스
    age: false,
    terms: false,
    privacy: false,
    nightBenefit: false,
    marketing: false,
    thirdParty: false,
  });

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

  const handleSendSMSClick = () => {
    setSmsMessage("인증번호가 전송되었습니다.");
  };

  const handleVerifyClick = () => {
    setVerificationMessage("인증이 완료되었습니다.");
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prev) => ({ ...prev, [name]: checked }));
  };

  //일주일
  const week = ["월", "화", "수", "목", "금", "토", "일"];
  const [weekResult, setWeekResult] = useState("");
  console.log("요일 : " + weekResult);

  const handleAllCheckboxChange = (event) => {
    const { checked } = event.target;
    setAllChecked(checked);
    setCheckboxes({
      age: checked,
      terms: checked,
      privacy: checked,
      nightBenefit: checked,
      marketing: checked,
      thirdParty: checked,
    });
  };

  const SignupComponent = ({ onClick }) => (
    //본인인증 (이름, 생년월일, 휴대폰)
    <div className="SignupPage">
      <h1>본인 인증을 해주세요</h1>
      <div className="SignupComponentBox1">
        {/* 이름 */}
        <span>이름</span>
        <div className="NameGender SignupComponentInner">
          <div className="inputContainer">
            <input type="text" placeholder="홍길동" />
          </div>
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
          <div className="inputContainer">
            <input type="text" placeholder="ex) 001225" />
          </div>
        </div>

        {/* 휴대폰 번호 */}
        <span>휴대폰 번호</span>
        <div className="SignupComponentInner">
          <div className="inputContainer">
            <input type="text" placeholder="ex) 01012345678" />
            {smsMessage && <span className="success-msg">{smsMessage}</span>}
          </div>
          <Button onClick={handleSendSMSClick}>문자받기</Button>
        </div>

        {/* 인증번호 */}
        <span>인증번호</span>
        <div className="SignupComponentInner">
          <div className="inputContainer">
            <input type="text" placeholder="0000" />
            {verificationMessage && (
              <span className="success-msg">{verificationMessage}</span>
            )}
          </div>
          <Button onClick={handleVerifyClick}>인증하기</Button>
        </div>
      </div>
      <div className="buttonContainer">
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
        <div className="SignupComponentInner signupEmail">
          <input type="text" placeholder="abc" />
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
      <div className="buttonContainer">
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
      <div className="buttonContainer">
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
          <GroupButton
            list={week}
            result={setWeekResult}
            width={"12vw"}
            height={"12vw"}
            borderRadius={"50px"}
            fontSize={"15px"}
            display={"flex"}
          />
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
        <div className="buttonContainer">
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
            <input
              type="checkbox"
              checked={allChecked}
              onChange={handleAllCheckboxChange}
            />
            <span>네, 모두 동의합니다.</span>
          </div>
          <hr />
          <div className="checkboxContainer">
            <input
              type="checkbox"
              name="age"
              checked={checkboxes.age}
              onChange={handleCheckboxChange}
            />
            <span>(필수) 만 14세 이상입니다.</span>
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              name="terms"
              checked={checkboxes.terms}
              onChange={handleCheckboxChange}
            />
            <span>(필수) 서비스 이용약관에 동의</span>
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              name="privacy"
              checked={checkboxes.privacy}
              onChange={handleCheckboxChange}
            />
            <span>(필수) 개인정보 수집 이용에 동의</span>
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              name="nightBenefit"
              checked={checkboxes.nightBenefit}
              onChange={handleCheckboxChange}
            />
            <span>(선택) 야간 혜택 수신에 동의</span>
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              name="marketing"
              checked={checkboxes.marketing}
              onChange={handleCheckboxChange}
            />
            <span>(선택) 홍보 및 마케팅 이용에 동의</span>
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              name="thirdParty"
              checked={checkboxes.thirdParty}
              onChange={handleCheckboxChange}
            />
            <span>(선택) 마케팅 개인정보 제3자 제공 동의</span>
          </div>
        </div>

        <div className="buttonContainer">
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
