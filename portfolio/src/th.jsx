import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import './index.css'
import './data.css'

  export function Th(){
    const [ miss, setMiss ] = useState([])

    useEffect (() => {
      fetch('https://api.weatherapi.com/v1/current.json?key=dcf27b0a701c4de5907162206241601&q=Mississauga&aqi=no')
        .then(response => response.json())
        .then(miss => setMiss(miss))
        .catch(error => console.error('Error:', error));
    },[])
    
    return(
            <div className='time__wrapper'>
              <div className="sec-contaier">

                  <FontAwesomeIcon icon={faCloudMoon}></FontAwesomeIcon>

                  {miss.current ? <p className='padding-top padding-sides min-width'>Wheather condition: <br />{miss.current.condition.text}</p> : <p className='padding-top padding-sides min-width'>Wheather condition:</p>}
              
              </div>
            </div>
    )
}
