//팀 가입 페이지

import React from "react";
import Header from "../component/header";
import Navigationbar from "../component/navigationbar";
import TeamDetailOption from "../../component/TeamDetailOption";

function TeamDetailPage() {
  return (
    <div>
      <Header />
      <TeamDetailOption />
      {/* <JoinForm /> */}
      <Navigationbar />
    </div>
  );
}

export default TeamDetailPage;
