import Conclusion from "@/components/CDC page/Conclusion Section/Conclusion";
import Component from "@/components/HomePage Components/Footer Section/Component";
import Footer from "@/components/HomePage Components/Footer Section/Footer";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarBottomItem from "@/components/HomePage Components/Navbar/NavbarBottomItem";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import Internships from "@/components/Internships/Internships";

const InternshipPage = () => {
  return (
    <>
      <NavbarUpper />
      <NavbarBottom />
      {/* <NavbarBottomItem /> */}
      <Internships />
      {/* <Conclusion /> */}
      <Component />
      <Footer/>
    </>
  );
};

export default InternshipPage;
