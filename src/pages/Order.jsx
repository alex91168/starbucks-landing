import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import './scss/order.scss'
import Order from '../assets/images/orderimg.png'

export default function Products() {
  useEffect(() => {
    ScrollReveal().reveal('.headline', {
      duration: 1000,
      distance: '150px',
      easing: 'ease-in-out',
      reset: false,
      origin: 'top',
      opacity: 0,
      mobile: false,
    });
  }, []);
  return (
    <div className='headline' id='product-order'>
        <div id="order-box">
            <img src={Order} alt="Copo starbucks" />
            <div id='order-text'>
                <p style={{fontSize: '17px'}}>Experience Starbucks</p>
                <h1>Explore Our Offerings</h1>
                <p style={{fontSize: '20px'}}>Savor the Starbucks Difference: Indulge in Our Premium Coffee Crafted with Passion, Delight in Our Handcrafted Beverages, and Discover a Wide Range of Delectable Food Options to Elevate Your Day</p>
                <button><span>Order Now</span></button>
            </div>
        </div>
  </div>
  )
}
