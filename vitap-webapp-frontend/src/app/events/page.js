'use client';
import Events from "@/components/EventsPage Folder/Events";
import Footer from "@/components/HomePage Components/Footer Section/Footer";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import FotterComponent from "@/components/HomePage Components/Footer Section/Component"

const EventsPage = () => {
    return ( 
        <>
            <NavbarUpper/>
            <NavbarBottom/>
            <Events/>
            <FotterComponent/>
            <Footer/>
        </>
     );
}
 
export default EventsPage;