import React from 'react';
import "./css/SelectBar.css";

function SelectBar() {
 const renderOptions = () => {
   const options = [];
   for (let i = 0; i < 24; i += 3) {
     const startHour = i < 10 ? `0${i}` : `${i}`;
     const endHour = i + 3 < 10 ? `0${i + 3}` : `${i + 3}`;
     options.push(<option key={`${startHour}-${endHour}`} value={`${startHour}-${endHour}`}>{`${startHour}:00 - ${endHour}:00`}</option>);
   }
   return options;
 };

 return (
   <div className='SelectBar'>
     <div className="AreaBar">
       <select>
         <option value="AreaBar1">지역</option>
         <option value="서울특별시">서울특별시</option>
         <option value="부산광역시">부산광역시</option>
         <option value="대구광역시">대구광역시</option>
         <option value="인천광역시">인천광역시</option>
         <option value="광주광역시">광주광역시</option>
         <option value="대전광역시">대전광역시</option>
         <option value="울산광역시">울산광역시</option>
         <option value="세종특별자치시">세종특별자치시</option>
         <option value="경기도">경기도</option>
         <option value="강원도">강원도</option>
         <option value="충청북도">충청북도</option>
         <option value="충청남도">충청남도</option>
         <option value="전라북도">전라북도</option>
         <option value="전라남도">전라남도</option>
         <option value="경상북도">경상북도</option>
         <option value="경상남도">경상남도</option>
         <option value="제주특별자치도">제주특별자치도</option>
       </select>
     </div>
     <div className="AgeBar">
       <select>
         <option value="AgeBar1">나이</option>
         {[...Array(7)].map((_, index) => (
           <option key={index} value={`${index * 10 + 10}대`}>{index * 10 + 10}대</option>
         ))}
       </select>
     </div>
     <div className="GenderBar">
       <select>
         <option value="GenderBar1">성별</option>
         <option value="GenderBar2">남</option>
         <option value="GenderBar3">여</option>
       </select>
     </div>
     <div className="DateBar">
       <select>
         <option value="DateBar">요일</option>
         <option value="DateBar1">월</option>
         <option value="DateBar2">화</option>
         <option value="DateBar3">수</option>
         <option value="DateBar4">목</option>
         <option value="DateBar5">금</option>
         <option value="DateBar6">토</option>
         <option value="DateBar7">일</option>
       </select>
     </div>
     <div className="TimeBar">
       <select>
         <option value="TimeBar">시간대</option>
         {renderOptions()}
       </select>
     </div>
     <div className="SkillBar">
       <select>
         <option value="SkillBar">실력</option>
         <option value="상">상</option>
         <option value="중">중</option>
         <option value="하">하</option>
       </select>
     </div>
   </div>
 )
}

export default SelectBar;
