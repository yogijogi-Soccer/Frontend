import React from 'react';
import { Link } from "react-router-dom";
import "../index.css";

function header(){
    return (
        <header className="header">
            <Link to="/">요기조기</Link>
        </header>
    )
    
}

export default header;