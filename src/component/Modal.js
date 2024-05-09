//"닫기" 버튼만 있는 모달창
import ReactDOM from "react-dom";
import "./css/modal.css";
import React from "react";

//open : boolean 타입. modal 열기
//onClose : boolean 타입. modal 닫기
//context : string 타입. 모달에 들어갈 내용
const Modal = ({ open, onClose, context }) => {
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
        <div className="modal_title">{context}</div>
        <div className="modal_div_button">
          <button className="modal_button" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </>,
    portalElement
  );
};

export default Modal;
