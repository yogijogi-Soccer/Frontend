//팀 생성 페이지
import React, { useState } from 'react';
import Header from '../component/header';
import Navigationbar from '../component/navigationbar';
import Button from '../component/Button';
import Button2 from '../component/Button2'
import WeekButton from '../component/weekButton';
import TimeButton from '../component/timeButton';
import MemberFeeButton from '../component/memberFeeButton';
import GenderButton from '../component/genderButton';
import AgeGroupButton from '../component/ageGroupButton';

function CreateTeampage() {
  const [createTeamStep, setCreateTeamStep] = useState(1);

  const handleNextButtonClick = () => { //다음 버튼 클릭 시
  setCreateTeamStep(createTeamStep + 1);
  };

  const handlePrevButtonClick = () => { //이전 버튼 클릭 시
    if (createTeamStep > 1) {
      setCreateTeamStep(createTeamStep - 1);
    }
  };


  const CreateTeamComponent = () => ( //팀 프로필 작성
    <div className='CreateTeamComponent'>
        <h1>팀 프로필을 작성해주세요</h1>
        <div>
          <div><img src='' alt='' /></div>
          <div>
            <Button2>이미지 추가하기</Button2>
            <Button2>단색으로 설정하기</Button2>
          </div>
        </div>
        <div>
          <span>팀명(10자 이내)</span>
          <input type='text' />
          <span>팀 소개(30자 이내)</span>
          <input type='text' />
      </div>
      <div>
        <Button className="nextButton" onClick={handleNextButtonClick}>다음</Button>
      </div>
      </div>
  )

  const CreateTeamComponent2 = () => ( //상세정보 작성
  <div className='CreateTeamComponent'>
      <h1>상세정보를 작성해주세요</h1>
      <div>
        <div>
          <span>주요 활동 지역</span>
        </div>
        <div>
          <span>주요 활동 시간</span>
          <WeekButton />
          <TimeButton />
        </div>
        <div>
          <span>월 회비</span>
          <input type='text' />
          <MemberFeeButton />
        </div>
      </div>
      <div>
        <Button className="prevButton" onClick={handlePrevButtonClick}>이전</Button>
        <Button className="nextButton" onClick={handleNextButtonClick}>다음</Button>
      </div>
    </div>
  )

  const CreateTeamComponent3 = () => ( //상세정보 작성
    <div className='CreateTeamComponent'>
      <h1>상세정보를 작성해주세요</h1>
      <div>
        <div>
          <span>성별</span>
          <GenderButton />
        </div>
        <div>
          <span>나이대</span>
          <AgeGroupButton />
        </div>
      </div>
      <div>
        <Button className="nextButton" onClick={handleNextButtonClick}>완료 </Button>
      </div>
    </div>
  )

  const CreateTeamComponent4 = () => ( //팀 초대
    <div className='CreateTeamComponent'>
      <h1>7명 이상 가입이 완료되면 팀이 생성돼요.</h1>
      <h1>초대 코드로 팀원을 초대하세요!</h1>
      <div>
        <span>초대코드</span>
      </div>
      <div>
        <Button className="" >복사하기</Button>
      </div>
    </div>
  )




  return (
    <div>
      <Header />
      {createTeamStep === 1 && <CreateTeamComponent />}
      {createTeamStep === 2 && <CreateTeamComponent2 />}
      {createTeamStep === 3 && <CreateTeamComponent3 />}
      {createTeamStep === 4 && <CreateTeamComponent4 />}
      <Navigationbar />
    </div>
  )
    
}

export default CreateTeampage;