import Guestabout from '@/components/GuestHouse Components/GuestAbout Section/Guestabout'
import GuestFacilities from '@/components/GuestHouse Components/GuestFacilities Section/GuestFacilities'
import Guestbanner from '@/components/GuestHouse Components/GuestHousebanner Section/Guestbanner'
import Guestheader from '@/components/GuestHouse Components/GuestHouseheader Section/Guestheader'
import GuestPolicies from '@/components/GuestHouse Components/GuestPolicies Section/GuestPolicies'
import GuestReservation from '@/components/GuestHouse Components/GuestReservations Section/GuestReservation'
import GuestTable from '@/components/GuestHouse Components/GuestTable Section/GuestTable'
import GuestTourism from '@/components/GuestHouse Components/GuestTourism Section/GuestTourism'
import GuestTravel from '@/components/GuestHouse Components/GuestTravel Section/GuestTravel'
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
            <Guestheader />
            <Guestbanner />
            <Guestabout />
            <GuestTable />
            <GuestFacilities />
            <GuestReservation />
            <GuestPolicies />
            <GuestTravel />
            <GuestTourism />
            <Component />
            <Footer />
        </div>
    )
}

export default page
