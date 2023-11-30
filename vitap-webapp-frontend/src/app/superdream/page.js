import Statistics from '@/components/CDC page/Statistics Section/Statistics'
import SuperdreamBanner from '@/components/CDCSuperDream Components/SuperdreamBanner Section/SuperdreamBanner'
import SuperdreamHeader from '@/components/CDCSuperDream Components/SuperdreamHeader Section/SuperdreamHeader'
import SuperdreamOffers from '@/components/CDCSuperDream Components/SuperdreamOffers Section/SuperdreamOffers'
import SuperdreamPhoto from '@/components/CDCSuperDream Components/SuperdreamPhoto Section/SuperdreamPhoto'
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
            <SuperdreamHeader />
            <SuperdreamBanner />
            <SuperdreamPhoto />
            <SuperdreamOffers />
            <Statistics />
            <Component />
            <Footer /> 
        </div>
    )
}

export default page
