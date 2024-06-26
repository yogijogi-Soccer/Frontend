import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useRef, useState, useEffect } from "react";
import "../../screen/css/notice.css";
import "../Button/Button.css";
import ModalCheck from "../Modal/ModalCheck";
import { useNavigate } from "react-router-dom";

//글쓰기 컴포넌트

// 사용하고 싶은 옵션, 나열 되었으면 하는 순서대로 나열
const toolbarOptions = [
  ["link", "image"],
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
];

// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "image",
  "video",
  "width",
];

const modules = {
  toolbar: {
    container: toolbarOptions,
  },
};

const EditorQuill = ({ placeholder, value, ...rest }) => {
  const [editorValue, setEditorValue] = useState();
  const quillRef = useRef(null);

  const onChange = () => {
    // const data = editerRef.current.getInstance().getHTML();
    console.log(editorValue);
    setModalCheckOpen(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const quill = quillRef.current;
    console.log(quill);

    //이미지 핸들로직
  });

  //모달 State
  const [modalCheckOpen, setModalCheckOpen] = useState(false);

  return (
    <div className="editorPage">
      <div className="editor_title">
        <p className="editor_title-p">제목</p>
        <input type="text" className="editor_title-input" width="100" />
      </div>

      <ReactQuill
        {...rest}
        theme="snow"
        placeholder={placeholder}
        modules={modules}
        formats={formats}
        onChange={setEditorValue}
        ref={quillRef}
        style={{ height: "300px" }}
      />
      <button
        onClick={onChange}
        className="editor_sendBtn button_main applegreen"
      >
        등록하기
      </button>
      <div
        dangerouslySetInnerHTML={{
          __html: editorValue,
        }}
        style={{
          marginTop: "30px",
          overflow: "hidden",
          whiteSpace: "pre-wrap",
        }}
      />
      <ModalCheck
        open={modalCheckOpen}
        onClose={() => {
          setModalCheckOpen(false);
          navigate("/team/notice");
        }}
        title={"등록하시겠습니까?"}
        completeContext={"등록되었습니다"}
        completeNext={"/team/notice"}
      />
    </div>
  );
};

export default EditorQuill;
