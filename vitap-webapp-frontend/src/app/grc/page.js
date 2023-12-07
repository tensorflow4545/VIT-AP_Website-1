import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import GRC from "@/components/GRC Components/GRC";
import Footer from "@/components/HomePage Components/Footer Section/Footer";
import FooterComponent from "@/components/HomePage Components/Footer Section/Component"

const Page = () => {
    return (
        <div>
            <NavbarUpper/>
            <NavbarBottom/>
            <GRC/>
            <FooterComponent/>
            <Footer/>
        </div>
    )
};

export default Page;