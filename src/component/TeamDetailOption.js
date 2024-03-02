import React from 'react';
import "./css/TeamDetailOption.css"
import Button from './Button';

import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillMapFill } from "react-icons/bs"
import { BsClockFill } from "react-icons/bs";
import { BsFillAwardFill } from "react-icons/bs";
import { MdCake } from "react-icons/md";
import { MdMonetizationOn } from "react-icons/md";


function TeamDetailOption() {

return (
  <div className='TeamDetailOption'>
    <div className='TeamDetailOption1'>
      <div className='TeamLogoImg'><img src='' alt='TeamLogoImg'/></div>
      <div>
        <h1>팀이름</h1>
        <span>팀 소개 한 줄</span>
      </div>
    </div>
    <div className='TeamDetailOption2'>
      <div><BsFillPeopleFill /><span>15명</span></div>
      <div><BsFillAwardFill /><span>중 - 상</span></div>
      <div><MdMonetizationOn /><span>30,000원 / 월</span></div>
      <div><BsFillMapFill /><span>광진구</span></div>
      <div><BsClockFill /><span>평일 아침</span></div>
      <div><MdCake /><span>20대 / 30대</span></div>
    </div>
    <div className='TeamDetailOption3'>
      <span>가입요강</span>
      <span>업데이트 날짜</span>
    </div>
    <div className='TeamDetailOption4'>
      <Button className='JoinButton'>가입하기</Button>
    </div>
  </div>
)

}

export default TeamDetailOption;