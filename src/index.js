import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mainpage from './screen/Mainpage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Joinpage from './screen/Joinpage';
import CreateTeampage from './screen/CreateTeampage';
import FindTeampage from './screen/FindTeampage';
import Loginpage from './screen/Loginpage';
import Mypage from './screen/Mypage';
import Searchpage from './screen/Searchpage';
import TeamDetailpage from './screen/TeamDetailpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/create" element={<CreateTeampage/> } />
        <Route path="/find" element={<FindTeampage/>} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/join" element={<Joinpage/>} />
        <Route path="/my" element={<Mypage />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/detail" element={<TeamDetailpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
