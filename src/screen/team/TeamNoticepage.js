//팀 공지사항 페이지
import React from "react";
import Header from "../../component/Header";
import Navigationbar from "../../component/Navigationbar";
import "../css/notice.css";
import "../../index.css";
import TeamNav from "../../component/TeamNav";
import { Link, useNavigate } from "react-router-dom";
import Notice from "../../data/Notice";
import { BsEyeFill } from "react-icons/bs";

function TeamNoticepage() {
  let role = true;

  return (
    <div>
      <Header />
      <div className="div-page">
        <TeamNav menu="공지사항" />
        <div className="Noticebtn_div">
          {role ? (
            <Link to="/manager/write" className="Noticediv-link">
              글쓰기
            </Link>
          ) : (
            ""
          )}
        </div>

        <Noticelist list={Notice} />
      </div>
      <Navigationbar />
    </div>
  );
}

//공지사항 리스트
function Noticelist(props) {
  const navigate = useNavigate();
  const list = props.list.map((el) => {
    return (
      <div
        onClick={() => {
          navigate("/team/notice/1");
        }}
        className="Notice_div"
      >
        <p className="Notice_div-title">{el.title}</p>
        <div className="Notice_div-update">
          <BsEyeFill size={"3vw"} />
          <p>{el.count}</p>
        </div>
        <p className="Notice_div-date">{el.date}</p>
      </div>
    );
  });
  return list;
}

export default TeamNoticepage;
