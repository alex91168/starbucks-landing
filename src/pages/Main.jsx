import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import './scss/main.scss'
import Copo from '../assets/images/copo.png'
export default function Main() {
  useEffect(() => {
    ScrollReveal().reveal('#main-text', {
      duration: 1250,
      distance: '150px',
      easing: 'ease-in-out',
      reset: false,
      opacity: 0,
      origin: 'left',
    });
    ScrollReveal().reveal('#main-img', {
      duration: 1250,
      distance: '150px',
      easing: 'ease-in-out',
      reset: false,
      opacity: 0,
      origin: 'right',
    });
  })
  return (
    <main>
        <div id='container-main'>
            <div id="main-text">
                <p style={{fontSize: '17px'}}>Discover the Starbucks Experience</p>
                <h1>Elevate Your Coffee Ritual with Starbucks</h1>
                <p style={{fontSize: '20px'}}>Indulge in the Delightful Flavors of Starbucks: Dive into our Extensive Menu of Premium Coffee Beverages, Handcrafted Drinks, and Delectable Food Options to Elevate Your Day</p>
                <button><span>Explore Our Menu</span></button>
            </div>
            <div id='main-img'>
                <img src={Copo} alt="Copo starbucks" />
            </div>
        </div>
    </main>
  )
}
