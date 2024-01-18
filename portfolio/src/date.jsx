import {useState, useEffect } from 'react'
import './data.css'

function Data() {
    const [ miss, setMiss ] = useState([])

    useEffect (() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=dcf27b0a701c4de5907162206241601&q=Mississauga&aqi=no')
        .then(response => response.json())
        .then(miss => setMiss(miss))
        .catch(error => console.error('Error:', error));
    })
    
    return(
        <section>
            <div className='container'>
                <div className="time__wrapper">
                    {miss ? (<Image className='cont'>{ miss.condition.icon}</Image>) : (<p>No Data Found</p>)}

                    { miss ? (<p className='padding'><p>Last updated at:</p><br />{ miss.location && miss.location.localtime}</p>) : (<p className='padding'>{miss.location.localtime}</p>)}
                </div>
            </div>
        </section>
    )
}

export default Data