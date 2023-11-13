import Footer from "@/components/HomePage Components/Footer Section/Footer";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import AcademicBlock1 from "@/components/Infrastructure Components/AcademicBlock1 Section/AcademicBlock1";
import AcademicBlock2 from "@/components/Infrastructure Components/AcademicBlock2 Section/AcademicBlock2";
import AcademicBlocks from "@/components/Infrastructure Components/AcademicBlocks Section/AcademicBlocks";
import CentralBlock from "@/components/Infrastructure Components/CentralBlock Section/CentralBlock";
import StudentActivity from "@/components/Infrastructure Components/StudentActivity Section/StudentActivity";


const InfrastructurePage = () => {
    return (
        <>
            <NavbarUpper />
            <NavbarBottom />
            <AcademicBlocks />
            <AcademicBlock1 />
            <CentralBlock />
            <AcademicBlock2 />
            <StudentActivity />
            <Footer />
        </>
    );
}

export default InfrastructurePage;
