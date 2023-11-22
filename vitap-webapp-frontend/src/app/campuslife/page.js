import CampusBanner from '@/components/CampusLife Components/CampusBanner Section/CampusBanner'
// import CampusGallery from '@/components/CampusLife Components/CampusGallery Section/CampusGallery'
import CampusHeader from '@/components/CampusLife Components/CampusHeader Section/CampusHeader'
import Campuslife from '@/components/CampusLife Components/Campuslife Section/Campuslife'
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
            <CampusHeader />
            <CampusBanner />
            <Campuslife />
            <Component />
            <Footer />
        </div>
    )
}

export default page
