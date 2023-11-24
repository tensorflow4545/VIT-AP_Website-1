import Footer from "@/components/HomePage Components/Footer Section/Footer";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import Programoffered from "@/components/SchoolPage Components/Program Offered Section/Programoffered";
import AcheivementsSection from "@/components/SchoolPage Components/Acheivements Section/AcheivementsSection";
import FacultySection from "@/components/SchoolPage Components/Faculty Section/FacultySection";
import ContactSection from "@/components/SchoolPage Components/Contact Section/contact";
import GallerySection from "@/components/SchoolPage Components/Gallary Section/gallary";
import Mous from "@/components/SchoolPage Components/Mous/Mous";
import Header from "@/components/SchoolPage Components/Header Section/Header";
import AboutUs from "@/components/SchoolPage Components/AboutUs Section/AboutUs";
import AnnouncementsPage from "@/components/SchoolPage Components/Announcements Section/Announcements";

const SchoolsPage = () => {
    return ( 
        <>
            <NavbarUpper/>
            <NavbarBottom/>
            <Header/>
            <AboutUs/>
            <AnnouncementsPage/>
            <Programoffered/>
            <FacultySection/>
            <AcheivementsSection/>
            <Mous/>
            <GallerySection/>
            <ContactSection/>
            <Footer/>
        </>
     );
}
 
export default SchoolsPage;
