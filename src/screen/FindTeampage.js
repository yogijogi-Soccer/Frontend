//팀 목록 페이지
import React from 'react';
import { Link } from "react-router-dom";
import Header from '../component/header'
import Navigationbar from '../component/navigationbar';
import SearchBar from '../component/searchBar';
import SelectBar from '../component/SelectBar';
import TeamBox from '../component/TeamBox';

function FindTeampage(){
  return (
    <div className='FindTeampage'>
      <Header />
      <SearchBar />
      <SelectBar />
      <Link to="/TeamDetail" className="link"><TeamBox /></Link>
      <Link to="/TeamDetail" className="link"><TeamBox /></Link>
      <Navigationbar />
    </div>
  )

}

export default FindTeampage;