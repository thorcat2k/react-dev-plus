import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleDown, faClose } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />
import './Navbar.css'
import { useState } from 'react'
const Navbar = () => {
  const [open,setOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  const menuToggle = () =>{
    setOpen(!open)
  }
  const submenuToggle = () =>{
    setSubmenuOpen(!submenuOpen)
  }
  // const windowWidth = window.innerWidth;
  // console.log(windowWidth)
  return (
    <header>
      <nav class="navbar">
      
        <div className={`navbar-logo`}>
         <a href="#"> <img
          src="https://devplus.edu.vn/assets/images/Artboard_2.png"
          alt="website logo"
        /></a>
        </div>
        
        <div class={`navbar-links ${open ? 'navbar-open' : ''}`}>
          <li class="navbar-link"><a class="navbar-link-title" href="#">Home</a></li>
            <li class="navbar-link"><a class="navbar-link-title" href="#">About devplus</a></li>
            <li class="navbar-link">
                <div class="link">
                    <div class="title">
                        <p>Web Design</p>
                    </div>
                    <div class="submenu-open-btn" onClick={submenuToggle}><FontAwesomeIcon icon={faAngleDown} /></div>
                </div>
                
                <ul class={`submenu ${submenuOpen ? "submenu-open":""}`}>
                    <li><a href="#">One Plus Campus</a></li>
                    <li><a href="#">Two Plus Campus</a></li>
                    <li><a href="#">Three Plus Campus</a></li>
                    <div class="submenu-close-btn" onClick={submenuToggle}><FontAwesomeIcon icon={faClose} /> Close</div>
                  </ul>

                  
            </li>
            <li class="navbar-link"><a class="navbar-link-title" href="#">Devplus Activities</a></li>

        </div>
        
        <div class={`navbar-icons ${open ? "open" :""}`} onClick={menuToggle}>
          <div class="navbar-icon"></div>
        </div>
        </nav>
        </header>
  )
}

export default Navbar
