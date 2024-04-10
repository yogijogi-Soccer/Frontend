//여러 개 중에 하나만 선택되는 버튼

import React, { useState } from "react";
import "../index.css";

function GroupButton(props) {
  const [isIndexSelet, setIsIndexSelect] = useState(false);

  // list 값을 가져온다.
  const list = props.list;

  //결과값으로 부모 컴포넌트한테 넘겨줄 것
  const result = props.result;

  //배경 색상 : props.bgcolor 값이 있는가? 있으면 해당 값으로, 없으면 뒤에 값으로 배경 색상 설정
  let bgColor = props.bgcolor ? props.bgcolor : "#CED4DA";

  //클릭했을 때 배경 색상 : props.pointbgcolor 값이 있는가? 있으면 해당 값으로, 없으면 뒤에 값으로 클릭 배경 색상 설정
  let pointBgColor = props.pointbgcolor ? props.pointbgcolor : "#25A18E";

  //width
  let Width = props.width ? props.width : "";

  //height
  let Height = props.height ? props.height : "";

  //border-radius
  let bRadius = props.borderRadius ? props.borderRadius : "5px";

  //클릭했을 때 이벤트
  const handleClick = (idx) => {
    const newArr = Array(list.length).fill(false);
    newArr[idx] = true;
    setIsIndexSelect(newArr);
    result(list[idx]);
  };

  return (
    <div>
      {props.list.map((el, index) => {
        return (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={
              isIndexSelet[index]
                ? {
                    backgroundColor: pointBgColor,
                    width: Width,
                    height: Height,
                    borderRadius: bRadius,
                  }
                : {
                    backgroundColor: bgColor,
                    width: Width,
                    height: Height,
                    borderRadius: bRadius,
                  }
            }
          >
            {el}
          </button>
        );
      })}
    </div>
  );
}

export default GroupButton;
