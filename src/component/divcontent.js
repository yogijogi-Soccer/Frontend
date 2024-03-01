import React from 'react';
import "./css/component.css"
import "../index.css"
import Divbox from './divbox';

function divcontent(props){
    const ItemList = props.item.map((el) => {
        <div className='divbox_div-content'>
            <p>{el.title}</p>
            <p>{el.date}</p>
        </div>
    })
    
    return (
        <Divbox>{ItemList}</Divbox>
    )
    
}

export default divcontent;