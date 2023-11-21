import AnnouncementsSection from "@/components/AnnouncementsPage Components/Announcements Section/AnnouncementsSection";
import Footer from "@/components/HomePage Components/Footer Section/Footer";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";

const AnnouncementsPage = () => {
    return ( 
        <>
            <NavbarUpper/>
            <NavbarBottom/>
            <AnnouncementsSection/>
            <Footer/>
        </>
     );
}
 
export default AnnouncementsPage;