import React from 'react'
import Footer from '../Components/Footer/Footer'
import LocationMap from '../Components/MapLocation/LocationMap'
import Brand from '../Components/Brand/Brand'

const HomePage = () => {
  return (
    <div>
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