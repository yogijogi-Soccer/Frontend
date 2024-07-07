//팀 목록 페이지
import React from "react";
import { useState } from "react";

function Formation433() {
  const [modalOpen, setModalOpen] = useState(false);
  const formation_name = [
    "LW",
    "ST",
    "RW",
    "LM",
    "LCM",
    "RCM",
    "RM",
    "LB",
    "CB",
    "RB",
    "GK",
  ];

  const formation_xy = [
    ["25%", "20%"],
    ["20%", "48%"],
    ["25%", "78%"],
    ["45%", "10%"],
    ["45%", "35%"],
    ["45%", "62%"],
    ["45%", "88%"],
    ["65%", "20%"],
    ["65%", "48%"],
    ["65%", "78%"],
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

export default Formation433;
