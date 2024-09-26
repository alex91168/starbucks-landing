import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import './scss/section.scss'
import Banner1 from '../assets/images/banner1.png'
import Banner2 from '../assets/images/banner2.png'

export default function Section() {
  useEffect(() => {
    ScrollReveal().reveal('#section-text', {
      duration: 1000,
      distance: '150px',
      easing: 'ease-in-out',
      reset: false,
      opacity: 0,
      origin: 'left',
      mobile: false,
    })
    ScrollReveal().reveal('#section-img', {
      duration: 1250,
      distance: '150px',
      easing: 'ease-in-out',
      reset: false,
      opacity: 0,
      origin: 'bottom',
      mobile: false,
    })
  })
  return (
    <section>
    <div id='section-container'>
      <div id="section-text">
      <p style={{fontSize: '17px'}}>Discover Starbucks</p>
      <h1>Elevate Your Coffee</h1>
      <p style={{fontSize: '20px'}}>Immerse Yourself in the Starbucks Ambiance: Savor the Aroma of Freshly Brewed Coffee, Indulge in Our Signature Beverages, and Enjoy the Cozy Atmosphere as You Unwind and Recharge</p>
      </div>
      <div id='section-img'>
        <img src={Banner1} alt="Copo starbucks" />
        <img src={Banner2} alt="Copo starbucks" />
      </div>
    </div>
  </section>
  )
}
