//팀 목록 페이지
import React from "react";
import { useState } from "react";

function Formation41212() {
  const [modalOpen, setModalOpen] = useState(false);
  const formation_name = [
    "LS",
    "CAM",
    "RS",
    "LM",
    "CDM",
    "RM",
    "LB",
    "CB",
    "CB",
    "RB",
    "GK",
  ];

  const formation_xy = [
    ["15%", "28%"],
    ["30%", "48%"],
    ["15%", "68%"],
    ["40%", "18%"],
    ["50%", "48%"],
    ["40%", "78%"],
    ["65%", "10%"],
    ["65%", "35%"],
    ["65%", "62%"],
    ["65%", "88%"],

    ["85%", "48%"],
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
              width: "16vw",
              height: "16vw",
              borderRadius: "50%",
              backgroundColor: "tomato",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",

              position: "absolute",
              top: x,
              left: y,
            }}
            key={index}
          >
            <p style={{ fontSize: "3vw", margin: "auto", fontWeight: "bold" }}>
              {formation_name[index]}
            </p>

            <input
              type="text"
              style={{ width: "12vw", height: "3vw", marginBottom: "30%" }}
            ></input>
          </div>
        );
      })}
      {/* <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        ariaHideApp={false}
        contentLabel="Pop up Message"
        shouldCloseOnOverlayClick={false}
        style={{
          height: "10px",
          width: "70%",
        }}
      >
        <input type="text"></input>
      </Modal> */}
    </div>
  );
}

export default Formation41212;
