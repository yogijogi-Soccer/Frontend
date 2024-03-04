import "./css/Button.css"
import React from 'react';

function Button({children, onClick}){
    return (
        <button className="Button" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;