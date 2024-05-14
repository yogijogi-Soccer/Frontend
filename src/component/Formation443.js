//팀 목록 페이지
import React from "react";

function Formation443() {
  const formation_name = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ];

  const formation_xy = [
    ["30%", "10%"],
    ["30%", "35%"],
    ["30%", "60%"],
    ["30%", "90%"],
    ["50%", "10%"],
    ["50%", "35%"],
    ["50%", "60%"],
    ["50%", "90%"],
    ["70%", "20%"],
    ["70%", "50%"],
    ["70%", "80%"],
  ];
  return (
    <div
      style={{
        position: "absolute",
        width: "85%",
        height: "90%",
      }}
    >
      {formation_xy.map((el, index) => {
        var x = el[0];
        var y = el[1];
        return (
          <div
            id="circle"
            style={{
              width: "12vw",
              height: "12vw",
              borderRadius: "50%",
              backgroundColor: "tomato",
              display: "flex",
              alignItems: "center",
              position: "absolute",
              top: x,
              left: y,
            }}
          >
            <p style={{ fontSize: "2.5vw", margin: "auto" }}>
              {formation_name[index]}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Formation443;
