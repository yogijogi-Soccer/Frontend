import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./css/searchBar.css";
import "../index.css";

import { BsSearch } from "react-icons/bs"; //npm install react-icons --save 해당 라이브러리 설치 필요

function SearchBar({ autoFocus }) {
  return (
    <div className="searchBar">
      {autoFocus ? (
        <input
          type="text"
          placeholder="팀이름, 연령대, 지역으로 찾기"
          autoFocus
        />
      ) : (
        <input type="text" placeholder="팀이름, 연령대, 지역으로 찾기" />
      )}
      <button>
        <BsSearch />
      </button>
    </div>
  );
}

export default SearchBar;
