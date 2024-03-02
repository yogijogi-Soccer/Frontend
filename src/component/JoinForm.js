import React from 'react';
import Button from './Button';
import "./css/JoinForm.css"

function JoinForm() {

return (
  <div className='JoinForm'>
    <div className='JoinFormBox1'><h1>가입신청서</h1></div>
    <div className='JoinFormBox2'>
     <div className='JoinFormBox3'>
      <span>
       해당 정보는 가입시 작성해주신 내용이에요. <br/>
       변경을 원하신다면, 마이페이지 &gt; 개인정보 수정 에서 변경해주세요.
      </span>
     </div>
     <div className='JoinFormBox4'>
      <span>이름 | </span>
      <span>나이 | </span>
      <span>주소 | </span>
      <span>포지션 | </span>
      <span>선수 경험 | </span>
      <span>선호 요일 | </span>
      <span>선호 시간대 | </span>
     </div>
     <div className='JoinFormBox5'>
      <span>추가적으로 전달하고 싶은 사항을 적어주세요.</span>
      <input type='text'/>
     </div>
     <div className='JoinFormBox6'>
      <span>
       가입신청서를 제출하면 제출 취소를 할 수 없어요.<br/>
       신중하게 가입해주세요.
      </span>
     </div>
     <div className='JoinFormBox7'>
     <input type="checkbox" className='confirm' name="confirm" value="confirm" />
     <label for="confirm">확인했습니다.</label>
     </div>
    </div>
    <div className='JoinFormBox8'><Button>제출하기</Button></div>
  </div>
)

}

export default JoinForm;