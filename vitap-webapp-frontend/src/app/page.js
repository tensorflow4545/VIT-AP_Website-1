"use client";
import React, { useState, useEffect } from "react";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import axios from "axios";
import Image from "next/image";
import HeroSection from "@/components/HomePage Components/Hero Section/HeroSection";
import ResearchInnovation from "@/components/HomePage Components/Research and Innovation Section/ResearchInnovation";
import OurEvents from "@/components/HomePage Components/Our Events Section/OurEvents";
import About from "@/components/HomePage Components/About VIT-AP Section/About";
import OurSchools from "@/components/HomePage Components/Our Schools Section/OurSchools";
import ProgrammesOffered from "@/components/HomePage Components/Programmes Offered Section/ProgrammesOffered";

export default function Home() {
  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://localhost:1337/api/home-page-hero-sections")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <NavbarUpper />
      <NavbarBottom />
      <HeroSection />
      <About />
      <OurSchools />
      <ProgrammesOffered />
      <OurEvents />
      <ResearchInnovation />
    </>
  );
}
