//팀 멤버관리 페이지
import React from "react";
import Header from "../../component/Header";
import Navigationbar from "../../component/Navigationbar";
import "../css/teamdetail.css";
import "../../index.css";
import TeamNav from "../../component/TeamNav";

function PositionCount(props) {
  //총 공격수
  const striker = props.list.filter((item) => item["position"] === "공격수");
  //총 수비수
  const defender = props.list.filter((item) => item["position"] === "수비수");
  //총 골키퍼 수
  const goalkeeper = props.list.filter((item) => item["position"] === "골키퍼");
  //총 미드필더 수
  const midfielder = props.list.filter(
    (item) => item["position"] === "미드필더"
  );

  return (
    <div>
      <div>
        <p className="Member_div-striker">공격수 ({striker.length}명)</p>
        <div>
          <Teamcard list={striker} />
        </div>
      </div>
      <div>
        <p className="Member_div-defender">수비수 ({defender.length}명)</p>
        <Teamcard list={defender} />
      </div>
      <div>
        <p className="Member_div-goalkeeper">골키퍼 ({goalkeeper.length}명)</p>
        <Teamcard list={goalkeeper} />
      </div>
      <div>
        <p className="Member_div-midfielder">
          미드필더 ({midfielder.length}명)
        </p>
        <Teamcard list={midfielder} />
      </div>
    </div>
  );
}

function Teamcard(props) {
  const card = props.list.map((el) => {
    return (
      <div className={"teamcard_div " + el.position}>
        <div className="teamcard_blur">
          <div className="teamcard-text">
            <img
              className="teamcard_div-img"
              src="../img/profile.png"
              alt="프로필사진"
            />
            <div className="teamcard_div-name">{maskingStr(el.name)}</div>
            <div className="teamcard_div-yellowcard">
              경고 {el.yellowcard} 회
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="teamcard wrap-vertical">{card}</div>;
}

function maskingStr(str) {
  let originStr = str;
  let maskingStr;
  let masking = "";

  for (let i = 1; i < str.length - 1; i++) {
    masking += "*";
  }
  maskingStr =
    originStr.substring(0, 1) +
    masking +
    originStr.substring(str.length - 1, str.length);

  return maskingStr;
}

function TeamMemberpage() {
  const teamlist = [
    { name: "이지현", yellowcard: 2, position: "공격수" },
    { name: "이지현", yellowcard: 2, position: "공격수" },
    { name: "이지현", yellowcard: 2, position: "공격수" },
    { name: "이지현", yellowcard: 2, position: "공격수" },
    { name: "이지현", yellowcard: 2, position: "공격수" },
    { name: "이서현", yellowcard: 1, position: "수비수" },
    { name: "이서현", yellowcard: 1, position: "수비수" },
    { name: "이서현", yellowcard: 1, position: "골키퍼" },
    { name: "안젤리나", yellowcard: 1, position: "골키퍼" },
    { name: "김유성", yellowcard: 1, position: "미드필더" },
  ];

  return (
    <div>
      <Header />
      <div className="div-page">
        <TeamNav menu="멤버관리" />
        <PositionCount list={teamlist} />
      </div>
      <Navigationbar />
    </div>
  );
}

export default TeamMemberpage;
