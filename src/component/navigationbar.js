import React from 'react';
import { Link } from "react-router-dom";
import "../index.css"
import Button from "./Button";

function navigationbar(){
    return(
        <div>
            <div className="navigationbar">
                <div className='HomeIcon'><img src='img/homeIcon.png' alt="icon"/><Link to="/" className="link">홈</Link></div>
                <div className='FindIcon'><img src='img/findIcon.png' alt="icon"/><Link to="/find" className="link">팀 찾기</Link></div>
                <div className='CreateIcon'><img src='img/createIcon.png' alt="icon"/><Link to="/create" className="link">팀 생성</Link></div>
                <div className='UserIconIcon'><img src='img/userIcon.png' alt="icon"/><Link to="/login" className="link">로그인</Link></div>
            </div>
        </div>
    )
}

export default navigationbar;
