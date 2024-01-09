import Footer from "@/components/HomePage Components/Footer Section/Footer";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import AllNews from "@/components/NewsPage Components/AllNews";
import NewsHeader from "@/components/NewsPage Components/NewsHeader";
import NewsPage2 from "@/components/NewsPage Components/NewsPage";

const NewsPage = () => {
    return ( 
        <>
            <NavbarUpper/>
            <NavbarBottom/>
            {/* <AllNews/> */}
            <NewsHeader />
            {/* <NewsPage /> */}
            <NewsPage2 />
            <Footer/>
        </>
     );
}
 
export default NewsPage;