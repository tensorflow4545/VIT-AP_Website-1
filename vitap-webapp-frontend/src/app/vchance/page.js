import Component from '@/components/HomePage Components/Footer Section/Component'
import Footer from '@/components/HomePage Components/Footer Section/Footer'
import NavbarBottom from '@/components/HomePage Components/Navbar/NavbarBottom'
import NavbarUpper from '@/components/HomePage Components/Navbar/NavbarUpper'
import Hero from '@/components/Vchance page/Hero';
import React from 'react'

const page = () => {
    return(
        <>
        <NavbarUpper/>
        <NavbarBottom/>
        <Hero/>
        <Component/>
        <Footer/>
        </>
    )
};

export default page;