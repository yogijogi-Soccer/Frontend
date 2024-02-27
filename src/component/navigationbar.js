import React from 'react';
import { Link } from "react-router-dom";
import "./css/component.css"
import Button from "./Button";

function navigationbar(){
    return(
        <div>
            <div className="navigationbar">
                <Link to="/" className="link"><div className='naviIcon'><img src='img/homeIcon.png' alt="icon"/><span>홈</span></div></Link>
                <Link to="/find" className="link"><div className='naviIcon'><img src='img/findIcon.png' alt="icon"/><span>팀 찾기</span></div></Link>
                <Link to="/create" className="link"><div className='naviIcon'><img src='img/createIcon.png' alt="icon"/><span>팀 생성</span></div></Link>
                <Link to="/login" className="link"><div className='naviIcon'><img src='img/userIcon.png' alt="icon"/><span>로그인</span></div></Link>
            </div>
        </div>
    )
}

export default navigationbar;
