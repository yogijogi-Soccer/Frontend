 //팀 상세 페이지
 import React from 'react';
 import Header from '../component/header';
 import Navigationbar from '../component/navigationbar';
import Button from '../component/Button';
import GreenButton from '../component/GreenButton';
import "./css/teamdetail.css"
import "../index.css"
import Divbox from '../component/divbox';
 function TeamDetailpage(){
    const list = [
        {title: "제목1", date:"2020.03.18 12:00"},
        {title: "제목2", date:"2023.03.14 12:00"}
    ]

     return (
        <div>
            <Header />
            <div className='div-page'>
                <div className='TeamDetail-profile'>
                    <img className='TeamDetail-profile_img' src='../img/profile.png' />
                    <div className='TeamDetail-profile_box'>
                        <div className='TeamDetail-profile_title'>
                            <div>팀 이름</div>
                            <GreenButton>팀 탈퇴하기</GreenButton>
                        </div>
                        <div className='TeamDetail-profile_introduce'>팀 소개 한줄</div>
                    </div>
                </div>
                <Divbox title={"공지사항"} button={"더보기"} item={list}></Divbox>
            </div>
             
            <Navigationbar />
        </div>
     )
     
 }
 
 export default TeamDetailpage;