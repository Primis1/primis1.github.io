import './reset.css'
import './index.css'
import './gr.css'
import { St } from './st.jsx'
import {useState, useEffect } from 'react'



export function Gr() {
    const [ miss, setMiss ] = useState([])

    useEffect (() => {
        fetch('https://api.weatherapi.com/v1/forecast.json?key=dcf27b0a701c4de5907162206241601&q=Mississauga&days=7&aqi=yes&alerts=no')
        .then(response => response.json())
        .then(miss => setMiss(miss))
        .catch(error => console.error('Error:', error));
    }, [])
                    // miss.forecast && miss.forecast.forecastday.map((fr));
                    

    return (
            <div className="gr__wrapper ">
                <h1>Forecast</h1>
                <div className="st_container">
                    <St />
                </div>
            </div>
    )
}
