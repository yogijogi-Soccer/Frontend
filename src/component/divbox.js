import React from 'react';
import "./css/component.css"
import "../index.css"

function divbox(props){
    const ItemList = props.item.map((el)=>(
        <div className='divbox_div-content'>
            <p className='divbox_content-title'>{el.title}</p>
            <p className='divbox_content-date'>{el.date}</p>
        </div>
    ))

    return (
        <div className='divbox'>
            <div className='divbox_div-title'>
                <p className='divbox_title'>{props.title}</p>
                <button className='divbox_button'>{props.button}</button>
            </div>
            {ItemList}
        </div>
    )
    
}

export default divbox;