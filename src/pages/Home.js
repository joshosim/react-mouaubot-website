import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/chatbot.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ 
      backgroundImage: `url(${BannerImage})`
      }}>
      <div className="headerContainer" >
        <h1>MOUAU BOT</h1>
        <p>Come now to register!</p>
        <Link to='https://wa.link/17aztg'>
        <button>JOIN NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
