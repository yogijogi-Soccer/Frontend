//검색 페이지
import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Navigationbar from "../component/Navigationbar";
import SearchBar from "../component/SarchBar";

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
