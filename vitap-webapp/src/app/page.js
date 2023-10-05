"use client"
import React, { useState, useEffect } from 'react';
import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import axios from 'axios';
import Image from "next/image";
import headerimage from "../assets/images/Homepage Images/HeaderImage.png";

export default function Home() {
  const [heroSections, setHeroSections] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:1337/api/home-page-hero-sections')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <NavbarUpper />
      <NavbarBottom/>

      <div className="w-full h-[960px] object-cover">
        {/* Display the first item's createdAt attribute */}

        <Image src={headerimage} alt="university image" className="w-full h-full" />
      </div>
    </>
  );
}
