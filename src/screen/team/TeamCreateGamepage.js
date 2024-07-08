//팀 멤버관리 페이지
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Header from "../../component/Header";
import Navigationbar from "../../component/Navigationbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import "../css/inforfix.css";
import KakaoAddressPopup from "../../component/KakaoAddressPopup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

import { Link } from "react-router-dom";

import Formation343 from "../../component/Formation/Formation343";
import Formation352 from "../../component/Formation/Formation352";
import Formation433 from "../../component/Formation/Formation433";
import Formation442 from "../../component/Formation/Formation442";
import Formation532 from "../../component/Formation/Formation532";
import Formation541 from "../../component/Formation/Formation541";
import Formation4123 from "../../component/Formation/Formation4123";
import Formation4222 from "../../component/Formation/Formation4222";
import Formation4231 from "../../component/Formation/Formation4231";
import Formation4321 from "../../component/Formation/Formation4321";
import Formation41212 from "../../component/Formation/Formation41212";

function TeamCreateGamepage() {
  const [mode, setMode] = useState("");
  const gamemode = [
    "3-4-3",
    "3-5-2",
    "4-1-2-3",
    "4-1-2-1-2",
    "4-2-3-1",
    "4-2-2-2",
    "4-3-2-1",
    "4-3-3",
    "4-4-2",
    "5-3-2",
    "5-4-1",
  ];
  const [strategy, setStrategy] = useState("");
  const strategyChange = (e) => {
    setStrategy(e.target.value);
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <Header />
      <div className="div-page">
        <p
          style={{ fontSize: "2vh", fontWeight: "bold", paddingBottom: "5vh" }}
        >
          경기 일정을 알려주세요!
        </p>
        <div className="Inforfix-content">
          <div className="Inforfix-div">
            <label className="Inforfix-label">어디서 경기하나요?</label>
            <KakaoAddressPopup />
          </div>
          <div className="Inforfix-div">
            <label className="Inforfix-label">언제 경기하나요?</label>
            <DatePicker
              locale={ko}
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy년 MM월 dd일"
              className="Datepicker_custom"
              minDate={new Date()}
            />
          </div>
          <div className="Inforfix-div">
            <label className="Inforfix-label">몇 시에 경기하나요?</label>
            <input
              aria-label="Time"
              type="time"
              style={{
                width: "15vh",
                height: "3vh",
                fontSize: "1.8vh",
                fontWeight: "bold",
              }}
            />
          </div>
          <div className="Inforfix-div">
            <label className="Inforfix-label">상대팀은 누군가요?</label>
            <input type="string" style={{ height: "3vh" }}></input>
          </div>
          <div className="Inforfix-div">
            <label className="Inforfix-label">
              전술을 작성해주세요. ( {strategy.length} / 500자 )
            </label>
            <textarea
              type="string"
              style={{ height: "8vh" }}
              onChange={strategyChange}
            />
          </div>
        </div>
        <div className="Inforfix-div">
          <label className="Inforfix-label">포지션을 정해주세요.</label>
          <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
            <InputLabel id="demo-select-small-label">게임 포메이션</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={mode}
              label="게임 포메이션"
              onChange={(e) => setMode(e.target.value)}
            >
              {gamemode.map((el) => {
                return <MenuItem value={el}>{el}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <div
            style={{
              display: "flex",
              width: "100%",
              position: "relative",
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/field.png`}
              position="relative"
              style={{ maxWidth: "100%" }}
            />
            {mode === "3-4-3" && <Formation343 />}
            {mode === "3-5-2" && <Formation352 />}
            {mode === "4-3-3" && <Formation433 />}
            {mode === "4-4-2" && <Formation442 />}
            {mode === "5-3-2" && <Formation532 />}
            {mode === "5-4-1" && <Formation541 />}
            {mode === "4-1-2-3" && <Formation4123 />}
            {mode === "4-2-2-2" && <Formation4222 />}
            {mode === "4-2-3-1" && <Formation4231 />}
            {mode === "4-3-2-1" && <Formation4321 />}
            {mode === "4-1-2-1-2" && <Formation41212 />}
          </div>
          <Link to="/team" style={{ textAlign: "center" }}>
            <button className="button_main applegreen">등록하기</button>
          </Link>
        </div>
      </div>

      <Navigationbar />
    </div>
  );
}

export default TeamCreateGamepage;
