import DepartmentFacultyPage from '@/components/FacultyPage Components/FacultyPage Section/DepartmentWiseFaculty'
import Component from '@/components/HomePage Components/Footer Section/Component'
import Footer from '@/components/HomePage Components/Footer Section/Footer'
import NavbarBottom from '@/components/HomePage Components/Navbar/NavbarBottom'
import NavbarUpper from '@/components/HomePage Components/Navbar/NavbarUpper'
import React from 'react'

const page = (params) => {
    return (
        <div>
            <NavbarUpper />
            <NavbarBottom />
            <DepartmentFacultyPage department={params.params.department} />
            <Component />
            <Footer />
        </div>
    );
};

export default page