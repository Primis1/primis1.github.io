import {useState, useEffect } from 'react'

function Wheather() {
    const [ miss, setMiss ] = useState([])

    useEffect (() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=dcf27b0a701c4de5907162206241601&q=Mississauga&aqi=no')
        .then(response => response.json())
        .then(miss => setMiss(miss))
        .catch(error => console.error('Error:', error));
    }, [])
    
    return(
        <>
            {miss.location && <h1>{miss.location.localtime}</h1>}
        </>
    )
}

export default Wheather