import "./css/Button.css"
import React from 'react';

function Button2({children, onClick}){
    return (
        <button className="Button2" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button2;