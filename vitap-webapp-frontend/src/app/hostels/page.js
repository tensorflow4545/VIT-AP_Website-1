import Component from '@/components/HomePage Components/Footer Section/Component'
import Footer from '@/components/HomePage Components/Footer Section/Footer'
import NavbarBottom from '@/components/HomePage Components/Navbar/NavbarBottom'
import NavbarUpper from '@/components/HomePage Components/Navbar/NavbarUpper'
import Fee from '@/components/hostel page/Fee Section/Fee'
import Hero from '@/components/hostel page/Hero Section/Hero'
import Hostel from '@/components/hostel page/Hostel Section/Hostel'
import Rules from '@/components/hostel page/Rules Section/Rules'
import Testimonial from '@/components/hostel page/Testimonial section/Testtimonial'
import Facility from '@/components/hostel page/facility section/Facility'
import Gallary from '@/components/hostel page/gallary section/Gallary'
import React from 'react'

const page = () => {
    return(
        <>
        <NavbarUpper/>
        <NavbarBottom/>
        <Hero/>
        <Facility/>
        <Fee/>
        <Gallary/>
        <Hostel/>
        <Rules/>
        <Component/>
        <Footer/>
        </>
    )
};

export default page;