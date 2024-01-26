import {Data} from './date.jsx'
import { Th } from './th.jsx'
import { Gr } from './gr.jsx'
import './wheather.css'

export function Wheather() {
    return(
        <section>
            <div className='container'>
                <div className="app__wrapper"> 

                    <div className="h1__wrapper">
                        <h1 className='forecast'>Forecast</h1>
                    </div>      

                    <div className="data"><Data /></div>
                    <div className="gr"><Gr /></div>
                    <div className="th"><Th /></div>
                                       
                     
                     

                 </div>
                
                
            </div>
        </section>

    )
}