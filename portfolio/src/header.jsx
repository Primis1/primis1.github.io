import './reset.css'
import './index.css'
import './header.css'
import Logo from './assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Header() {
      
    return (
        <header>
          <div className='container'>
            <div className="header__inner">
              <div className='logo__inner' title='Yes it is my logo'><img src={Logo} className="logo" alt="" /></div>
            
              <div className='items'>
                <ul><a href="https://github.com/Primis1" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></ul>
                <ul><a href="https://www.instagram.com/o_olb_/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></ul>
                <ul><a href="https://t.me/o_odone" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTelegram} /></a></ul>

                <div className='btn__inner'><button>Blog</button></div>
              </div>
            </div>
          </div>
        </header>
    )
  }

export default Header