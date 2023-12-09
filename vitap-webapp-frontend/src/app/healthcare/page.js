import HealthDetails from '@/components/HealthCare Components/HealthDetails Section/HealthDetails'
import HealthHeader from '@/components/HealthCare Components/HealthHeader Section/HealthHeader'
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
            <HealthHeader />
            <HealthDetails />
            <Component />
            <Footer />
        </div>
    )
}

export default page
