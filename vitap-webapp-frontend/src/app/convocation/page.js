import ConvocationSection from "@/components/AnnouncementsPage Components/Convocation Section/ConvocationSection";
import Footer from "@/components/HomePage Components/Footer Section/Footer";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";

const ConvocationPage = () => {
    return ( 
        <>  
        <NavbarUpper/>
            <NavbarBottom/>
            <ConvocationSection/>
            <Footer/>
        </>
     );
}
 
export default ConvocationPage;