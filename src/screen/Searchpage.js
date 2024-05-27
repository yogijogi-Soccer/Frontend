//검색 페이지
import React, { useEffect, useRef, useState } from "react";
import Header from "../component/header";
import Navigationbar from "../component/navigationbar";
import SearchBar from "../component/searchBar";

function Searchpage() {
  const [isStart, setIsStart] = useState(false);
  useEffect(() => {
    if (isStart === false) {
      setIsStart(true);
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="div-page">
        <SearchBar autoFocus={true} />
      </div>
      <Navigationbar />
    </div>
  );
}

export default Searchpage;
