import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import BotLogo from '../assets/logobot.jpg'
import '../styles/Navbar.css'
import { FaBars } from 'react-icons/fa'

function Navbar() {

const [openLinks, setOpenLinks] = useState(false);
const toggleNavbar = () => {
    setOpenLinks(!openLinks);
}

  return (
    <div className='navbar'>
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={BotLogo}  alt='bot.logo'/>
        <div className="hiddenLinks">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/aboutcreator'>About Creator</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/aboutcreator'>About Creator</Link>
        <button onClick={toggleNavbar}>
         <FaBars />
      </button>
      </div>
    </div>
  )
}

export default Navbar
