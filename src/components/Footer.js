import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import '../styles/Footer.css'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <div className='footer'>
      <div className="content">
        <div className="socialMedia">
           <Link to='https://www.instagram.com/mouaubot'> <FaInstagram /></Link>
           <Link to='https://www.facebook.com/profile.php?id=100090979067225'> <FaFacebook /></Link>
           <Link to='https://wa.link/17aztg'><FaWhatsapp /></Link>
           <Link to='#'><FaTwitter /></Link>   
        </div>
        <div className="infos">
          <ul>
            <li><p>SAY NO TO HARD DRUGS!</p></li>
            <li><p>EVEN WHEN SCHOOL'S ON STRIKE, WE'VE GOT YOUR ACADEMIC SPIRIT COVERED!</p>
        </li>
        <li><p>For Enquires, Please contact 08169900811
        </p></li>
          </ul>
        </div>
      </div>
      <p style={{fontStyle: 'italic'}}>...MOUAU BOT, the student's academic assistant</p>
      <p>&copy; 2023 mouaubot.com</p>
    </div>
  )
}

export default Footer
