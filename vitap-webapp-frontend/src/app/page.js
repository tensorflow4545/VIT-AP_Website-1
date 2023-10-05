"use client";
import React, { useState, useEffect } from "react";
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import axios from "axios";
import Image from "next/image";
import HeroSection from "@/components/HomePage Components/Hero Section/HeroSection";

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
      <HeroSection/>

    </>
  );
}
