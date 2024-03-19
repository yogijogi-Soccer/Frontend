//팀 목록 페이지
import React from 'react';
<<<<<<< HEAD

import { Link } from "react-router-dom";
import Header from '../component/header'
import Navigationbar from '../component/navigationbar';
import SearchBar from '../component/searchBar';
import SelectBar from '../component/SelectBar';
import TeamBox from '../component/TeamBox';
import "../component/css/FindTeamPage.css"
=======
import Teamlist from "../component/teamlist";
import Textbox from "../component/textbox";
>>>>>>> teamdetail

function FindTeampage(){
  return (
    <div>
      <Header />
      <div className='FindTeampage'>
        <SearchBar />
        <SelectBar />
        <Link to="/TeamDetail" className="link"><TeamBox /></Link>
        <Link to="/TeamDetail" className="link"><TeamBox /></Link>
      </div>
      <Navigationbar />
    </div>
  )
}

export default FindTeampage;