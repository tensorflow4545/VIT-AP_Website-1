import FotterComponent from "@/components/HomePage Components/Footer Section/Component";
import Footer from "@/components/HomePage Components/Footer Section/Footer";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import AboutUs from "@/components/SchoolPage Components/AboutUs Section/AboutUs";
import AcheivementsSection from "@/components/SchoolPage Components/Acheivements Section/AcheivementsSection";
import AnnouncementsPage from "@/components/SchoolPage Components/Announcements Section/Announcements";
import ContactSection from "@/components/SchoolPage Components/Contact Section/contact";
import FacultySection from "@/components/SchoolPage Components/Faculty Section/FacultySection";
import GallerySection from "@/components/SchoolPage Components/Gallary Section/gallary";
import Header from "@/components/SchoolPage Components/Header Section/Header";
import Mous from "@/components/SchoolPage Components/Mous/Mous";
import News from "@/components/SchoolPage Components/News Section/News";
import Programoffered from "@/components/SchoolPage Components/Program Offered Section/Programoffered";
import Research from "@/components/SchoolPage Components/Research Section/Research";
import Testimonials from "@/components/SchoolPage Components/testimonials folder/Testimonials";

import "./index.css";
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
            <News/>
            <Research/>
            <Mous/>
            <Testimonials/>
            <GallerySection/>
            <ContactSection/>
            <FotterComponent/>
            <Footer/>
        </>
     );
}
 
export default SchoolsPage;
