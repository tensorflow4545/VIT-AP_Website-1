import Component from '@/components/HomePage Components/Footer Section/Component'
import Footer from '@/components/HomePage Components/Footer Section/Footer'
import NavbarBottom from '@/components/HomePage Components/Navbar/NavbarBottom'
import NavbarUpper from '@/components/HomePage Components/Navbar/NavbarUpper'
import UreHeader from '@/components/UREprojects Components/UREheader Section/Ureheader'
import UREtable from '@/components/UREprojects Components/UREtable Section/UREtable'
import React from 'react'

const page = () => {
    return (
        <div>
            <NavbarUpper />
            <NavbarBottom />
            <UreHeader />
            <UREtable />
            <Component />
            <Footer />
        </div>
    )
}

export default page
