import Component from '@/components/HomePage Components/Footer Section/Component'
import Footer from '@/components/HomePage Components/Footer Section/Footer'
import NavbarBottom from '@/components/HomePage Components/Navbar/NavbarBottom'
import NavbarUpper from '@/components/HomePage Components/Navbar/NavbarUpper'
import React from 'react'
import EachFaculty from "@/components/FacultyPage Components/EachFaculty Section/EachFaculty";

const page = (params) => {
    return (
        <div>
            <NavbarUpper />
            <NavbarBottom />
            <EachFaculty params={params} />
            <Component />
            <Footer />
        </div>
    );
};

export default page