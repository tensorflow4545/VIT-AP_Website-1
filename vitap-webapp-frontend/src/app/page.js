import React from "react";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import HeroSection from "@/components/HomePage Components/Hero Section/HeroSection";
import ResearchInnovation from "@/components/HomePage Components/Research and Innovation Section/ResearchInnovation";
import OurEvents from "@/components/HomePage Components/Our Events Section/OurEvents";
import About from "@/components/HomePage Components/About VIT-AP Section/About";
import OurSchools from "@/components/HomePage Components/Our Schools Section/OurSchools";
import ProgrammesOffered from "@/components/HomePage Components/Programmes Offered Section/ProgrammesOffered";

import config from "@/config";
import Image from "next/image";
import LifeAtVITAP from "@/components/HomePage Components/Life at VIT-AP Section/LifeAtVITAP";
import NewsAboutVITAP from "@/components/HomePage Components/News about VIT-AP Section/NewsAboutVITAP";
import WallOfSocials from "@/components/HomePage Components/Wall of Socials VIT-AP Section/WallOfSocials";
import NumberAtGlance from "@/components/HomePage Components/Number at a Glance Section/NumberAtGlance";
import Footer from "@/components/HomePage Components/Footer Section/Footer";

const fetchdata = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  };

    const response = await fetch(`${config.api}/api/posts?populate=*`, reqOptions);
    const data = await response.json();
    return data;

};

const Home = async () => {
// const data = await fetchdata();
// const url = data.data[0].attributes.image.data.attributes.url
// console.log(`The Image URL is Here ${url}`)
  return (
    <>
      {/* <Image src={`${config.api}${data.data[0].attributes.image.data.attributes.url}`} width={400} height={100}/> */}
      <NavbarUpper />
      <NavbarBottom />
      <HeroSection /> 
      <About />
      <OurSchools />
      {/* <ProgrammesOffered />  */}
      {/* <OurEvents />  */}
      <ResearchInnovation />
      <LifeAtVITAP/>
      <NewsAboutVITAP/>
      <WallOfSocials/>
      <NumberAtGlance/>
      <Footer/>
    </>
  );
}

export default Home;
