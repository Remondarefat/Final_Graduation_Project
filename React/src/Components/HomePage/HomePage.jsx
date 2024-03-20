import React from 'react'
import Navbar from '../MainNavbar/Navbar'
import Footer from '../MainFooter/Footer'
import Slider from '../HomeSlider/Slider'
import Testimonials from '../Testimonials/Testimonials'
import RegionsInHome from '../RegionsInHome/RegionsInHome'
import { Outlet } from 'react-router-dom'

export default function HomePage() {
    return <>     
        <Navbar />
        <Slider />
        <RegionsInHome />
        <Testimonials />
        <Outlet/>
        <Footer />
    </>
    
}

