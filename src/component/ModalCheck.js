//"예, 아니오" 버튼이 있는 모달창
import ReactDOM from "react-dom";
import "./css/modal.css";
import React, { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
//open : boolean 타입. modal 열기
//onClose : boolean 타입. modal 닫기
//title : string 타입. 모달에 들어갈 제목
//context : string 타입. 모달에 들어갈 내용
//completeContext : string 타입. 예/아니오 modal 다음에 닫기 modal의 context로 들어갈 내용
//noComplete : 확인모달 뒤에 오는 그냥 모달창 안나오게 하기
//next : 확인모달창에서 예를 누르면 넘어가는 링크
//completeNext : 확인모달 뒤에 오는 그냥 모달창에서 닫기 누르면 넘어가는 링크
const ModalCheck = ({
  list,
  open,
  onClose,
  context,
  title,
  completeContext,
  noComplete,
  next,
  completeNext,
}) => {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const OpenModal = () => {
    if (noComplete === true) {
      setIsModal(true);
      navigate(-1);
    }
    setIsModal(true);
    if (next !== undefined) navigate(next);
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
            navigate(completeNext);
          }}
        />
      </div>
    </>,
    portalElement
  );
};

export default ModalCheck;
