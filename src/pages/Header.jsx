import React, {useEffect, useState} from 'react'
import Logo from '../assets/images/logo.png'
import './scss/header.scss'
export default function Header() {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(prev => !prev);
  }
  return (
    <header>
        <div id='header-logo'>
        <img src={Logo} alt="Starbucks Logo" />
        <span>Starbucks</span>
        </div>
        <nav>
        <ol>
            <li><a href="/">Home</a></li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
            <div id='faq-btn'>
                <li>FAQ</li>
            </div>
        </ol>
            <div id="mobile-nav" onClick={openMenu}>
              <span id='open' className={open? 'active' : null}><i class="bi bi-list"></i></span>
              <span id="close" className={open? 'active' : null}><i class="bi bi-x-lg"></i></span>
              <div id="menu-mobile" className={open? 'active' : null}>
                  <ol id='ol-mobile'>
                    <li><a href="/">Home</a></li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                    <div id='faq-btn'>
                        <li>FAQ</li>
                    </div>
                  </ol>
              </div>
            </div>
        </nav>
  </header>
  )
}
