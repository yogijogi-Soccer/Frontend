import React from 'react';
import "./css/Button.css"

function GreenButton({children}){
    return (
        <button className="btn-green">
            {children}
        </button>
    )
    
}

export default GreenButton;