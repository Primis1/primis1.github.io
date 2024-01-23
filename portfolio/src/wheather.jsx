import {Data} from './date.jsx'
import { Th } from './th.jsx'
import { Gr } from './gr.jsx'
import './wheather.css'

export function Wheather() {
    return(
        <section>
            <div className='container'>
                <div className="app__wrapper"> 
                    <Data />                     
                    <Gr />

                    <Th />
                 </div>
                
                
            </div>
        </section>

    )
}