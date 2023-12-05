import Footer from "@/components/HomePage Components/Footer Section/Footer";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import ProgrammesOffered from "@/components/HomePage Components/Programmes Offered Section/ProgrammesOffered";
import News from "@/components/HomePage Components/News about VIT-AP Section/NewsAboutVITAP";
import AcheivementsSection from "@/components/SchoolPage Components/Acheivements Section/AcheivementsSection";
import FacultySection from "@/components/SchoolPage Components/Faculty Section/FacultySection";
import ContactSection from "@/components/SchoolPage Components/Contact Section/contact";
import GallerySection from "@/components/SchoolPage Components/Gallary Section/gallary";
import Mous from "@/components/SchoolPage Components/Mous/Mous";
import Header from "@/components/SchoolPage Components/Header Section/Header";
import AboutUs from "@/components/SchoolPage Components/AboutUs Section/AboutUs";
import AnnouncementsPage from "@/components/SchoolPage Components/Announcements Section/Announcements";
import FotterComponent from "@/components/HomePage Components/Footer Section/Component"
import Programoffered from "@/components/SchoolPage Components/Program Offered Section/Programoffered";
import NavbarUpperPages from "@/components/HomePage Components/Navbar/NavbarUpperPages";
import NavbarBottomPages from "@/components/HomePage Components/Navbar/NavbarBottomPages";
import Testimonials from "@/components/SchoolPage Components/testimonials folder/Testimonials";
import ResearchInnovation from "@/components/HomePage Components/Research and Innovation Section/ResearchInnovation";

const SchoolsPage = () => {
    return ( 
        <>
            <NavbarUpperPages/>
            <NavbarBottomPages/>
            <Header/>
            <AboutUs/>
            <AnnouncementsPage/>
            <Programoffered/>
            <FacultySection/>
            <AcheivementsSection/>
            <News/>
            <ResearchInnovation/>
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
