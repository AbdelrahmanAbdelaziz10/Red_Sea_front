import React from 'react'
import Footer from '../Components/Footer/Footer'
import LocationMap from '../Components/MapLocation/LocationMap'
import Brand from '../Components/Brand/Brand'
import Products from '../Components/Products/Products'
import About from '../Components/About/About'
import { NavBar } from '../Components/NavBar/NavBar';
import Header from '../Components/Header/Header'

const HomePage = () => {
  return (
    <div className='Home'>
    {/* <NavBar /> */}
    <Header />
    <About />
    <Products />
    <Brand />
    <LocationMap />
    <div className='triangle_control'>
    <div className="triangle"/>
    </div>
        <Footer />
    </div>
  )
}

export default HomePage