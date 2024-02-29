//팀 목록 페이지
import React from 'react';
import "./css/TeamBox.css"

function TeamBox(){
  return (
    <div className='TeamBox'>
      <div className='TeamBox1'><img src='' alt='TeamLogo'/></div>
      <div className='TeamBox2'>
       <span>팀 이름</span>
       <span>인원</span>
       <span>연령대</span>
       <span>시간대</span>
       <span>장소</span>
       </div>
       <div className='TeamBox3'>
        <span>지역</span>
       </div>
    </div>
  )

}

export default TeamBox;