import "./css/Button.css"
import React from 'react';

function genderButton({onClick}){
    return (
      <div className="genderButton">
        <button onClick={onClick}>남자</button>
        <button onClick={onClick}>여자</button>
        <button onClick={onClick}>남녀 모두</button>
      </div>
    )
}

export default genderButton;