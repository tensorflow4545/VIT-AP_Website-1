import Component from '@/components/HomePage Components/Footer Section/Component'
import Footer from '@/components/HomePage Components/Footer Section/Footer'
import NavbarBottom from '@/components/HomePage Components/Navbar/NavbarBottom'
import NavbarUpper from '@/components/HomePage Components/Navbar/NavbarUpper'
import SubgalleryBanner from '@/components/Subgallery Components/SubgalleryBanner/SubgalleryBanner'
import SubgalleryHeader from '@/components/Subgallery Components/SubgalleryHeader/SubgalleryHeader'
import React from 'react'

const page = () => {
    return (
        <div>
            <NavbarUpper />
            <NavbarBottom />
            <SubgalleryHeader />
            <SubgalleryBanner />
            <Component />
            <Footer />
        </div>
    )
}

export default page
