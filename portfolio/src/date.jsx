import {useState, useEffect } from 'react'
import './data.css'

export function Data() {
    const [ miss, setMiss ] = useState([])

    useEffect (() => {
        fetch('https://api.weatherapi.com/v1/current.json?key=dcf27b0a701c4de5907162206241601&q=Mississauga&aqi=no')
        .then(response => response.json())
        .then(miss => setMiss(miss))
        .catch(error => console.error('Error:', error));
    }, [])
    
    return(
        

                <div className="time__wrapper">
                    <div className="sec-contaier">

                        { (<p className='size'>{ miss.current && miss.current.temp_c}<span className='small'>°C</span></p>)}
                
                        { (<p className='padding-top padding-sides min-width'>Last updated at:<br />{ miss.location && miss.location.localtime}</p>)}
                    
                    </div>
                </div>

    
    )
}