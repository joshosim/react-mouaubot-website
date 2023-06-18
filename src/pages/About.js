import React from 'react'
import VictorImage from '../assets/victor.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='contact'>
      <div className="leftSide" style={{backgroundImage: `url(${VictorImage})`}}></div>
      <div className="rightSide">
        <h1> VICTORIFIC OSIM</h1>
        <p>A 200L Fisheries Student of Micheal Okpara University of Agriculture, 
          Umudike(MOUAU), is the CEO of MOUAU BOT Co.<br />
          He is a devoted Lover of Christ!<br />
          Contact: <br />
          08169900811<br />
          </p>
      </div>
    </div>
  )
}

export default About
