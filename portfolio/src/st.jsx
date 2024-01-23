import './data.css'

export function St(props) {
    return (
        <div className="st__wrapper">
             
             <div className="third-container">
                <img src={props.icon} alt="" className='small__image'/>
                <p className='mini__size'>{ props.temp }<span className='mini__small__size'>°C</span></p>
                <p className='mini__size'>{ props.date }</p>
             </div>

        </div>
    )
}