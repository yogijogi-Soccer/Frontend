//팀 멤버관리 페이지
import React from "react";
import { useState, useEffect } from "react";
import Header from "../../component/header";
import Navigationbar from "../../component/navigationbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import Pomation443 from "../../component/Pomation443";

function TeamCreateGamepage() {
  const [mode, setMode] = useState("");
  const gamemode = ["4-4-3", "2-2-2"];
  return (
    <div>
      <Header />
      <div className="div-page">
        경기 생성 페이지
        <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
          <InputLabel id="demo-select-small-label">게임 포지션</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={gamemode}
            label="gamemode"
            onChange={(e) => setMode(e.target.value)}
          >
            {gamemode.map((el) => {
              return <MenuItem>{el}</MenuItem>;
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
          <Pomation443 />
        </div>
      </div>
      <Navigationbar />
    </div>
  );
}

export default TeamCreateGamepage;
