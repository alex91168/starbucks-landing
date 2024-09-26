import React, { useEffect } from 'react';
import './App.scss'
import Header from './pages/Header'
import Main from './pages/Main'
import Order from './pages/Order'
import Section from './pages/Section'
import Products from './pages/Products'
import Footer from './pages/Footer'


function App() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Order />
      <Section />
      <Products />
      <Footer />  
    </>
  )
}

export default App
