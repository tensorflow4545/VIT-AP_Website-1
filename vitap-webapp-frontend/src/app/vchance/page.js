import Component from '@/components/HomePage Components/Footer Section/Component';
import Footer from '@/components/HomePage Components/Footer Section/Footer';
import NavbarBottom from '@/components/HomePage Components/Navbar/NavbarBottom';
import NavbarUpper from '@/components/HomePage Components/Navbar/NavbarUpper';
import Description from '@/components/Vchance page/Description';
import Hero from '@/components/Vchance page/Hero';
import Property from '@/components/Vchance page/Property';
import Team from '@/components/Vchance page/Team';

const page = () => {
    return(
        <>
        <NavbarUpper/>
        <NavbarBottom/>
        <Hero/>
        <Description />
        <Property />
        <Team />
        <Component/>
        <Footer/>
        </>
    )
};

export default page;