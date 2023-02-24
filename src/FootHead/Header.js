import React from 'react'
import {NavLink} from 'react-router-dom';
import './header.css';
function Header() {
  return (
    <div className='header'>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
        </nav>
    </div>
  )
}

export default Header;