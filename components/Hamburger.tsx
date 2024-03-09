import React from 'react'
import '../styles/navbar.module.css';

const Hamburger = () => {
  return (
    <div>
      <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
      </label>
    </div>
  )
}

export default Hamburger