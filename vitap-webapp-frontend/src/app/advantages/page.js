import AdvantageBanner from '@/components/Advantages Components/Advantage Banner/AdvantageBanner'
import AdvantageFeatures from '@/components/Advantages Components/Advantage Features/AdvantageFeatures'
import AdvantageHeader from '@/components/Advantages Components/Advantage Header/AdvantageHeader'
import AdvantagesFacilities from '@/components/Advantages Components/AdvantagesFacilities/AdvantagesFacilities'
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
            <AdvantageHeader />
            <AdvantageBanner />
            <AdvantagesFacilities />
            <AdvantageFeatures />
            <Component />
            {/* <Footer /> */}
        </div>
    )
}

export default page
