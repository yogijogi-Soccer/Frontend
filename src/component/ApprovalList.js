import React from "react";
import "./css/component.css";
import { useState } from "react";
import ModalCheck from "./ModalCheck";

//가입승인 요청 목록

function ApprovalList(props) {
  const [approveOpen, setApproveOpen] = useState(false);
  const [refuseOpen, setRefuseOpen] = useState(false);
  const [context, setContext] = useState("");

  const handleApproveOpen = (name, position) => {
    setApproveOpen(true);
    setContext(name + position);
  };

  const handleRefuseOpen = (name, position) => {
    setRefuseOpen(true);
    setContext(name + position);
  };

  const list = props.list.map((el) => {
    const name = el.name;
    const position = el.position;
    return (
      <div
        style={{
          borderRadius: "1vh",
          backgroundColor: "var(--color-normal3)",
          marginTop: "1vh",
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5vh",
          alignItems: "center",
          fontSize: "1.8vh",
        }}
      >
        <p style={{ marginLeft: "0.5vh" }}>
          {name}({position})
        </p>
        <div>
          <button
            onClick={() => handleApproveOpen(name, position)}
            style={{
              padding: "1.2vh",
              borderRadius: "1vh",
              marginRight: "1vh",
              backgroundColor: "var(--color-point-green)",
              color: "var(--color-normal1)",
            }}
          >
            승인
          </button>
          <button
            style={{
              padding: "1.2vh",
              borderRadius: "1vh",
              backgroundColor: "var(--color-normal8)",
              color: "var(--color-normal1)",
            }}
            onClick={() => handleRefuseOpen(name, position)}
          >
            거절
          </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      {list}
      <ModalCheck
        onConfrimButtonClick={handleConfirmButtonClick}
        open={approveOpen}
        title={"가입을 승인하시겠습니까?"}
        context={"승인 대상 : " + context}
        onClose={() => setApproveOpen(false)}
        completeContext={"승인이 완료되었습니다"}
      />
      <ModalCheck
        open={refuseOpen}
        title={"가입을 거절하시겠습니까?"}
        context={"거절 대상 : " + context}
        onClose={() => setRefuseOpen(false)}
        completeContext={"거절이 완료되었습니다"}
      />
    </div>
  );
}

export default ApprovalList;
