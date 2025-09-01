import React from 'react'
import Header from './Header.jsx'
import Awards from './Awards.jsx'
import Stats from './Stats.jsx'
import Pricing from './Pricing.jsx'
import Education from './Education.jsx'
import Openaccount from '../Openaccount.jsx'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
 
const Homepage = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <Openaccount/>
        <Footer/>
    </>
  )
}

export default Homepage