import FacultyPage from '@/components/FacultyPage Components/FacultyPage Section/FacultyPage'
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
            <FacultyPage />
            <Component />
            <Footer />
        </div>
    )
}

export default page
