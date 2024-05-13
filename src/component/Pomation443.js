//팀 목록 페이지
import React from "react";

function Pomation443() {
  const pomation_name = ["open", "dlwlgus", "dkiiosa", "apple"];

  const pomation_xy = [
    ["0%", "0%"],
    ["50%", "50%"],
    ["70%", "70%"],
    ["100%", "100%"],
  ];
  return (
    <div
      style={{
        position: "absolute",
        width: "85%",
        height: "90%",
      }}
    >
      {pomation_xy.map((el, index) => {
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
              {pomation_name[index]}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Pomation443;
