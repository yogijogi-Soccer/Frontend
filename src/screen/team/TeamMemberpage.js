//팀 멤버관리 페이지
import React from "react";
import Header from "../../component/header";
import Navigationbar from "../../component/navigationbar";
import "../css/teamdetail.css";
import "../../index.css";
import TeamNav from "../../component/teamNav";

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

  // const containerRef = useRef<HTMLElement>(null);
  // //요소를 드래그 하고 있는가?
  // const [isDragging, setIsDragging] = useState<boolean>(false);
  // //드래그 시작 시점의 x축 좌표값
  // const [startX, setStartX] = useState<number>(0);
  // //드래그 시작 시점의 스크롤 포지션이 포함된 x축 좌표값
  // const [totalX, setTotalX] = useState<number>(0);

  // const onDragStart = (e: MouseEvent) => {};
  // const onDragMove = (e: MouseEvent) => {};
  // const onDragEnd = (e: MouseEvent) => {};

  return (
    <div>
      <div>
        <p>공격수 {striker.length} 명</p>
        <div>
          <Teamcard list={striker} />
        </div>
      </div>
      <div>
        <p>수비수 {defender.length} 명</p>
        <Teamcard list={defender} />
      </div>
      <div>
        <p>골키퍼 {goalkeeper.length} 명</p>
        <Teamcard list={goalkeeper} />
      </div>
      <div>
        <p>미드필더 {midfielder.length} 명</p>
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
            <div className="teamcard_div-name">{el.name}</div>
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
    { name: "이서현", yellowcard: 1, position: "골키퍼" },
    { name: "이서현", yellowcard: 1, position: "미드필더" },
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
