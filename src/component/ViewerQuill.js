import React, { useState } from "react";
import EditorQuill from "./EditorQuill";

const ViewerQuill = () => {
  const [desc, setDesc] = useState("");
  function onEditorChange(value) {
    setDesc(value);
  }
  return (
    <>
      <EditorQuill value={desc} onChange={onEditorChange} />
    </>
  );
};
