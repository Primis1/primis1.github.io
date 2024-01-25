import './data.css'
import React from 'react';

export function St(props) {
    return (
        <div className="st__wrapper">
             <div className="third-container">
                <img src={props.icon} alt="" className='small__image'/>
                <p className='mini__small__size '>{ props.avgtemp_c }<span className='mini__small__size'>°C</span></p>
                <p className='mini__size padding-sides'>{ props.day.date }</p>
             </div>
        </div>
    )
}
