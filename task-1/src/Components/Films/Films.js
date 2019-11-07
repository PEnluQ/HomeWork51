import React from "react";
import './Films.css';

function Films(props) {
    return (
    <div className='film-blocks'>
            <img className='film-blocks__img' src={props.img} alt='films-blocks__img'/>
            <h4 className='film-blocks__title'>{props.name}</h4>
            <p className='film-blocks__date'>{props.date} г.</p>
    </div>
    )
}

export default Films;