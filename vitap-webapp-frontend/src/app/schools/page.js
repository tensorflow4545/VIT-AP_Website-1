import Footer from "@/components/HomePage Components/Footer Section/Footer";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import AcheivementsSection from "@/components/SchoolPage Components/Acheivements Section/AcheivementsSection";
import FacultySection from "@/components/SchoolPage Components/Faculty Section/FacultySection";

const SchoolsPage = () => {
    return ( 
        <>
            <NavbarUpper/>
            <NavbarBottom/>
            <AcheivementsSection/>
            <FacultySection/>
            <Footer/>
        </>
     );
}
 
export default SchoolsPage;
