//"예, 아니오" 버튼이 있는 모달창
import ReactDOM from "react-dom";
import "./css/modal.css";
import React, { useState } from "react";
import Modal from "./Modal";

//open : boolean 타입. modal 열기
//onClose : boolean 타입. modal 닫기
//title : string 타입. 모달에 들어갈 제목
//context : string 타입. 모달에 들어갈 내용
//completeContext : string 타입. 예/아니오 modal 다음에 닫기 modal의 context로 들어갈 내용

const ModalCheck = ({ open, onClose, context, title, completeContext }) => {
  const [isModal, setIsModal] = useState(false);
  const OpenModal = () => {
    setIsModal(true);
  };
  if (!open) return null;

  // 포탈 박스 가져오기
  const portalElement = document.getElementById("portal");
  // 포탈 박스 없으면 null
  if (!portalElement) return null;
  // 포탈 박스 있으면 이동
  return ReactDOM.createPortal(
    <>
      <div className={"overlay"} />
      <div className={"modal"}>
        <div>
          <div className="modal_title">{title}</div>
          <div className="modal_context">{context}</div>
        </div>
        <div className="modal_div_button">
          <button className="modal_button" onClick={OpenModal}>
            예
          </button>
          <button className="cancel modal_button" onClick={onClose}>
            아니오
          </button>
        </div>

        <Modal
          open={isModal}
          context={completeContext}
          onClose={() => {
            setIsModal(false);
            onClose();
          }}
        />
      </div>
    </>,
    portalElement
  );
};

export default ModalCheck;