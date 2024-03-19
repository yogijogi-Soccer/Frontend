import React from "react";
import "./css/component.css";

//공지사항 목록

function Noticelist(props) {
  const list = props.list.map((el) => {
    return (
      <div className="Notice_div">
        <p className="Notice_div-title">{el.title}</p>
        <div className="Notice_div-update">
          <img src="/img/eye.png" alt="눈이미지" width="20vw" />
          <p>{el.update}</p>
        </div>
        <p className="Notice_div-date">{el.date}</p>
      </div>
    );
  });
  return <div>{list}</div>;
}

export default Noticelist;
