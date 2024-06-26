import React from "react";
import "./css/component.css";
import "../index.css";
import { Link } from "react-router-dom";

function Divbox(props) {
  const scount = 0;
  const ItemList =
    props.item &&
    props.item.map((el) => {
      // 공지사항 divbox
      if (!el.btn && el.date) {
        return (
          <div key={el.title} className="divbox_div-content_notice">
            <p className="divbox_content-title">{el.title}</p>
            <p className="divbox_content-date">{el.date}</p>
          </div>
        );
      }

      // 경기일정 divbox
      if (el.btn && !el.date && el.place) {
        return (
          <div key={el.title} className="divbox_div-content_game">
            <p className="divbox_content-title">{el.title}</p>
            <p>{el.place}</p>
            <p className="divbox_content-date">
              <Link
                to={"game1"}
                style={{
                  color: "var(--color-normal9)",
                  textDecoration: "none",
                }}
              >
                {el.btn}
              </Link>
            </p>
          </div>
        );
      }

      if (el.position) {
        <div className="divbox_div-content_team">
          {props.item.map((el) => {
            return (
              <div className="divbox_content-position">
                <p className="content_position-p">{el.position}</p>
                <div className={"content_" + el.position}>
                  <p className="content_count">{el.count}</p>
                </div>
              </div>
            );
          })}
          {scount}
        </div>;
      }
    });

  return (
    <div className="divbox">
      <div className="divbox_div-title">
        <p className="divbox_title">{props.title}</p>
        {!props.link ? (
          ""
        ) : (
          <Link to={props.link} className="divbox_button">
            {props.button}
          </Link>
        )}
      </div>
      {!ItemList ? "" : ItemList}
    </div>
  );
}

export default Divbox;
