import React from 'react'
import './scss/footer.scss'
import Logo from '../assets/images/logo.png'

export default function Footer() {
  return (

    <footer> 
    <div id='footer-img'>
      <img src={Logo} alt="Logo starbucks" />
      <span>Todas imagens são meramente ilustrativas.
        Direitos reservados a Starbuks.
      </span>
    </div>
    <div id="footer-nav">
      <nav id='nav1-footer'>
        <ol>
          <h3>Quick links</h3>
          <li><a href="/">Home</a></li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ol>
      </nav>
      <nav id='nav2-footer'>
        <ol>
          <h3>Explore starbucks</h3>
          <li>Menu</li>
          <li>Locations</li>
          <li>Careers</li>
          <li>Community</li>
        </ol>
      </nav>
      <nav id='nav3-footer' className='nav3-mobile'>
        <ol>
          <h3>Connect with Us</h3>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Youtube</li>
        </ol>
      </nav>
    </div>
      <span id='footer-text-mobile'>Todas imagens são meramente ilustrativas.
        Direitos reservados a Starbuks.
      </span>
  </footer> 
  )
}
