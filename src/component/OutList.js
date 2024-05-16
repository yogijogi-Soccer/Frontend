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
    const reason = el.reason;
    return (
      <div
        style={{
          borderRadius: "1vh",
          backgroundColor: "var(--color-normal3)",
          marginTop: "1vh",
          display: "flex",
          justifyContent: "space-between",
          marginRight: "1vh",
          padding: "0.5vh",
          alignItems: "center",
          fontSize: "2vh",
        }}
      >
        <div style={{ fontSize: "1.6vh", marginLeft: "1vh" }}>
          <p style={{ marginBottom: "0.5vh" }}>
            {name}({position})
          </p>
          <p style={{ color: "var(--color-normal7)" }}>{reason}</p>
        </div>

        <div>
          <button
            style={{
              padding: "1.2vh",
              borderRadius: "1vh",
              backgroundColor: "var(--color-normal8)",
              color: "var(--color-normal1)",
            }}
            onClick={() => handleRefuseOpen(name, position)}
          >
            삭제
          </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      {list}
      <ModalCheck
        open={refuseOpen}
        title={"삭제하시겠습니까?"}
        context={"삭제 대상 : " + context}
        onClose={() => setRefuseOpen(false)}
        completeContext={"삭제가 완료되었습니다"}
      />
    </div>
  );
}

export default ApprovalList;
