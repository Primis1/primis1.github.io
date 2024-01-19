import {useState, useEffect } from 'react'
import './data.css'

export function Data() {
    const [ miss, setMiss ] = useState([])

    useEffect (() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=dcf27b0a701c4de5907162206241601&q=Mississauga&aqi=no')
        .then(response => response.json())
        .then(miss => setMiss(miss))
        .catch(error => console.error('Error:', error));
    },[])
    
    return(
        <section>
            <div className='container'>
                <div className="time__wrapper">
                    {/* working one */}
                    { miss ? (<p className='padding'>Last updated at:<br />{ miss.location && miss.location.localtime}</p>) : (<p className='padding'>No Data Found</p>)}


                    {/* issue one */}
                    {miss ? (<div className='padding'>{ miss.current.condition && miss.current.condition.text }</div>) : (<p className='padding'>No Data Found</p>)}
                </div>
            </div>
        </section>
    )
}