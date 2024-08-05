import React from 'react'
import NavbarP from './Navbar'
import GalleryLayout from './GalleryLayout'
import  ControlledCarousel  from './Carousel'
import UnderCarousel from './UnderCarousel'
import Footer from './Footer'
function LandingPage() {
  return (
    <>
    <div className='main-container bg-body-tertiary'>
        <div className="nav-container">
        <NavbarP/>
        </div>

        <div className="main-heading text-center">
         <ControlledCarousel/>
        </div>

        <div className="under-carosuel">
          <UnderCarousel/>
        </div>

        <div className="under-carosuel">
          <Footer/>
        </div>
        {/* <div className="gallery-layout mt-5">
        <GalleryLayout/>
        </div> */}
    </div>
    </>
  )
}

export default LandingPage