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
      <Footer/>
    </>
  );
};

export default InternshipPage;
