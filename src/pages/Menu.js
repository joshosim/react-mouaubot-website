import React from 'react';
import { MenuList } from '../helpers/MenuList';
import Menuitem from '../components/Menuitem';
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>What MOUAU BOT does!</h1>
        <div className='menuList'>
          { MenuList.map((menuItem, key) => {
             return <Menuitem 
             key={key}
             image={menuItem.image}
              content={menuItem.content} />;
          })}
        </div>
    </div>
  )
}

export default Menu
