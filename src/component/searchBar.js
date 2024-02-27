import React from 'react';
import { Link } from "react-router-dom";
import "./css/searchBar.css"
import { BsSearch } from "react-icons/bs"; //npm install react-icons --save 해당 라이브러리 설치 필요

function searchBar(){
    return (
        <div className="searchBar">
            <input type='text' placeholder='팀이름, 연령대, 지역으로 찾기' />
            <button><BsSearch /></button>
        </div>
    )
    
}

export default searchBar;