import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Mainpage from "./screen/Mainpage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./screen/SignupPage";
import CreateTeampage from "./screen/CreateTeampage";
import FindTeampage from "./screen/FindTeampage";
import Loginpage from "./screen/Loginpage";
import Mypage from "./screen/Mypage";
import Searchpage from "./screen/Searchpage";
import TeamDetailpage from "./screen/team/TeamDetailpage";
import TeamNoticepage from "./screen/team/TeamNoticepage";
import TeamMemberpage from "./screen/team/TeamMemberpage";
import NoticeWritepage from "./screen/team/NoticeWritepage";
import TeamInforFixpage from "./screen/team/TeamInforFixpage";
import ScrollToTop from "./scrollTop";
import TeamApprovalpage from "./screen/team/TeamApprovalpage";
import TeamOutpage from "./screen/team/TeamOutpage";
import TeamCreateGamepage from "./screen/team/TeamCreateGamepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/create" element={<CreateTeampage />} />
        <Route path="/find" element={<FindTeampage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/my" element={<Mypage />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/team" element={<TeamDetailpage />} />
        <Route path="/team/notice" element={<TeamNoticepage />} />
        <Route path="/team/member" element={<TeamMemberpage />} />
        <Route path="/manager/write" element={<NoticeWritepage />} />
        <Route path="/team/fix" element={<TeamInforFixpage />} />
        <Route path="/team/approval" element={<TeamApprovalpage />} />
        <Route path="/team/out" element={<TeamOutpage />} />
        <Route path="/team/newgame" element={<TeamCreateGamepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
