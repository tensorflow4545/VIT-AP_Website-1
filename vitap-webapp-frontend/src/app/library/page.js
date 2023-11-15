import Component from '@/components/HomePage Components/Footer Section/Component'
import Footer from '@/components/HomePage Components/Footer Section/Footer'
import NavbarBottom from '@/components/HomePage Components/Navbar/NavbarBottom'
import NavbarUpper from '@/components/HomePage Components/Navbar/NavbarUpper'
import LibBanner from '@/components/Library Components/Banner Section/Banner'
import Gallery from '@/components/Library Components/Gallery Section/Gallery'
import Hours from '@/components/Library Components/Hours Section/Hours'
import Infrastructure from '@/components/Library Components/Infrastructure Section/Infrastructure'
import LibHeader from '@/components/Library Components/LibHeader Section/LibHeader'
import Membership from '@/components/Library Components/Membership Section/Membership'
import React from 'react'

const page = () => {
    return (
        <div>
            <NavbarUpper />
            <NavbarBottom />
            <LibHeader />
            <LibBanner />
            <Infrastructure />
            <Hours />
            <Membership />
            <Gallery />
            <Component />
            <Footer />
        </div>
    )
}

export default page
