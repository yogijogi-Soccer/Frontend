import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import React, { useRef, useState } from "react";

function EditorBox() {
  const editerRef = useState();

  const onChange = () => {
    const data = editerRef.current.getInstance().getHTML();
    console.log(data);
  };

  const onUploadImage = async (blob, callback) => {
    const url = await onUploadImage(blob);
    callback(url, "alt text");
    return false;
  };
  return (
    <div>
      <Editor
        initialValue="hello react editor"
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        hideModeSwitch={true}
        ref={editerRef}
        hooks={{ addImageBlobHook: onUploadImage }}
      />
      <button onClick={onChange}>전송</button>
    </div>
  );
}

export default EditorBox;
