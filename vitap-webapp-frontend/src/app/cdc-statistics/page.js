import Statistics from "@/components/CDC Statistics Page/Statistics";
import Footer from "@/components/HomePage Components/Footer Section/Footer";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";

const CDCstatistics = () => {
    return ( 
        <>
            <NavbarUpper/>
            <NavbarBottom/>
            <Statistics/>
            <Footer/>
        </>
     );
}
 
export default CDCstatistics;