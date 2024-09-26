import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import './scss/products.scss'
import Product1 from '../assets/images/product1.png'
import Product2 from '../assets/images/product2.png'

export default function Products() {
    const products = [
        {
          title: 'Elevate Your Coffee Experience with Starbucks',
          description: 'Indulge in the Signature Starbucks Flavors: Discover Our Premium Coffee, Handcrafted Beverages, and Delectable Food Options that Enhance Your Day',
          image: Product1
        },
        {
          title: 'Explore the Starbucks Difference: Premium Coffee', 
          description: 'Savor the Starbucks Difference: Premium Coffee, Handcrafted Beverages, and Delectable Food Options to Elevate Your Day', 
          image: Product2},
        {
          title: 'Elevate Your Coffee Experience with Starbucks',
          description: 'Indulge in the Signature Starbucks Flavors: Discover Our Premium Coffee, Handcrafted Beverages, and Delectable Food Options that Enhance Your Day',
          image: Product1
        },
        {
          title: 'Explore the Starbucks Difference: Premium Coffee', 
          description: 'Savor the Starbucks Difference: Premium Coffee, Handcrafted Beverages, and Delectable Food Options to Elevate Your Day', 
          image: Product2}
    ]

  useEffect(() => {
    ScrollReveal().reveal('#prod-h1', '#product-btn', {
      duration: 1200,
      distance: '250px',
      easing: 'ease-in-out',
      reset: false,
      opacity: 0,
      origin: 'left',
      mobile: false,
    })
    ScrollReveal().reveal('.product-item', {
      duration: 1300,
      distance: '250px',
      easing: 'ease-in-out',
      reset: false,
      opacity: 0,
      origin: 'right',
      mobile: false,
    })
    ScrollReveal().reveal('#product-btn', {
      duration: 400,
      distance: '250px',
      easing: 'ease-in-out',
      reset: false,
      opacity: 0,
      origin: 'bottom',
      mobile: false,
    })
  }, [])

  return (
    <div className='products-container'>
    <div id='products-box'>
      <h1 id='prod-h1'>Welcome to Starbucks</h1>
      <div id='products-items'>
        {products.map((product, index) => (
          <div key={index} className='product-item'>
            <img src={product.image} alt="Copo starbucks" />
            <div id="product-desc">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div id="product-btn">
        <button>
          <span>Learn More</span>
        </button>
      </div>
    </div>
  </div>
  )
}
