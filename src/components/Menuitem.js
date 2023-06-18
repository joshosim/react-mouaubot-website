import React from 'react'

function Menuitem({image,content}) {
  return (
    <div className='menuItem'>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <p>{content}</p>
    </div>
  )
}

export default Menuitem
