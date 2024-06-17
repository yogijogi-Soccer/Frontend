import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import ModalCheck from "./Modal/ModalCheck";

function Useheader({ main, cancel }) {
  console.log(true === cancel);
  return (
    <div>{main === true ? <MainHeader /> : <MenuHeader cancel={cancel} />}</div>
  );
}

//이전 버튼 없는 헤더 (제일 처음 메뉴 헤더)
function MainHeader() {
  return (
    <div className="mainHeader">
      <Link to="/" className="link">
        요기조기
      </Link>
    </div>
  );
}

//이전 버튼이 있는 헤더
function MenuHeader({ cancel }) {
  const navigate = useNavigate();
  const [headerIsOpen, setHeaderIsOpen] = useState(false);
  console.log("cancel: " + cancel);
  return (
    <div className="menuHeader">
      <BsFillCaretLeftFill
        style={{ marginLeft: "3vw", marginRight: "auto" }}
        onClick={() => {
          if (cancel === undefined) navigate(-1);
          if (cancel === true) {
            setHeaderIsOpen(true);
            console.log("true");
          }
        }}
      />

      <Link to="/" className="link">
        요기조기
      </Link>
      <ModalCheck
        open={headerIsOpen}
        onClose={() => {
          setHeaderIsOpen(false);
        }}
        title={"수정을 취소하시겠습니까?"}
        context={"수정사항이 저장되지 않습니다."}
        noComplete={true}
      />
    </div>
  );
}

export default Useheader;
