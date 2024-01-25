import './reset.css'
import './index.css'
import './gr.css'
import { St } from './st.jsx'
import { useEffect, useState } from 'react'

export function Gr() {
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
      fetch('https://api.weatherapi.com/v1/forecast.json?key=dcf27b0a701c4de5907162206241601&q=Mississauga&days=7&aqi=yes&alerts=no')
        .then(response => response.json())
        .then(data => setForecast(data.forecast))
        .catch(error => console.error(error));
    }, []);

    return (
        <div className="gr__wrapper ">
            <h1 className='forecast'>Forecast</h1>
            <div className="st_container">
                {forecast && forecast.forecastday && forecast.forecastday.map((date, index) => (
                     <St 
                     key={index} 
                     day={date}
                     avgtemp_c={date.day.avgtemp_c}
                     icon={date.day.condition.icon}
                     />
                 ))}
            </div>

        </div>
    )
}

