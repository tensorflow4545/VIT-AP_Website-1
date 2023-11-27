import CDCCoordinators from '@/components/CDCOfficePage Components/CDCCoordinators Section/CDCCordinators'
import CDCDirectors from '@/components/CDCOfficePage Components/CDCDirectors Section/CDCDirectors'
import CDCObjective from '@/components/CDCOfficePage Components/CDCObjective Section/CDCObjective'
import CDCOfficeBanner from '@/components/CDCOfficePage Components/CDCOfficeBanner Section/CDCOfficeBanner'
import CDCOfficeHeader from '@/components/CDCOfficePage Components/CDCOfficeHeader Section/CDCOfficeHeader'
import CDCPlacements from '@/components/CDCOfficePage Components/CDCPlacements Section/CDCPlacements'
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
            <CDCOfficeHeader />
            <CDCOfficeBanner />
            <CDCObjective />
            <CDCDirectors />
            <CDCCoordinators />
            <CDCPlacements />
            <Component />
            <Footer />
        </div>
    )
}

export default page
