import Footer from "@/components/HomePage Components/Footer Section/Footer";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import AllNews from "@/components/NewsPage Components/AllNews";

const NewsPage = () => {
    return ( 
        <>
            <NavbarUpper/>
            <NavbarBottom/>
            <AllNews/>
            <Footer/>
        </>
     );
}
 
export default NewsPage;