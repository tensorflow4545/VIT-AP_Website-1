import CDCHeader from '@/components/CDC page/CDCHeader Section/CDCHeader'
import Conclusion from '@/components/CDC page/Conclusion Section/Conclusion'
import Hero from '@/components/CDC page/Hero Section/Hero'
import Info from '@/components/CDC page/Info Section/Info'
import Package from '@/components/CDC page/Package Section/Package'
import ProfileCard from '@/components/CDC page/Package Section/ProfileCard'
import Statistics from '@/components/CDC page/Statistics Section/Statistics'
import Video from '@/components/CDC page/Video Section/Video'
import Component from '@/components/HomePage Components/Footer Section/Component'
import Footer from '@/components/HomePage Components/Footer Section/Footer'
import NavbarBottom from '@/components/HomePage Components/Navbar/NavbarBottom'
import NavbarUpper from '@/components/HomePage Components/Navbar/NavbarUpper'
import React from 'react'

const page = () => {
    return (
        <div>
            <NavbarUpper />
            <NavbarBottom />
            <CDCHeader />
            <Hero />
            <Video />
            <Package />
            {/* <Info /> */}
            <Statistics />
            <Conclusion />
            <Component />
            <Footer />
        </div>
    )
}

export default page
