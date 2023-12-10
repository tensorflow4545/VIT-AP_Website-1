"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Content } from "next/font/google";
import { useEffect, useState } from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row md:px-[108px] md:py-[100px] justify-center md:justify-normal">



      {/* Left side with text */}
      <div className="flex-1 p-6 md:p-12 bg-white justify-center">
        <h1 className="text-[48px] font-[700] mb-4 text-primary font-Emilio">
          About School
        </h1>
        <p className=" font-Montserrat text-[20px] font-[420] max-w-[600px]">
          The Department of Computer Science and Engineering was established in
          2017. It has become the School of Computer Science and Engineering
          (SCOPE) in January 2019. At present, the School is headed by Dr. CH.
          Pradeep Reddy. The School has qualified and committed faculty members
          who offer impressive instruction in a variety of modes, exploring
          experiential learning approaches and new pedagogical methods in order
          to provide proper learning to students. The school provides the
          necessary infrastructure, hardware, and software to support the
          faculty for their continuous learning and research.
        </p>
      </div>

      <h1 className="text-[152px] md:block hidden absolute opacity-10 text-secondary top-[1000px] left-[130px]">
        SCOPE
      </h1>

      {/* Right side with image */}
      <div className="flex-1 relative max-w-[496px] h-[759px]">
        <div className="relative flex">
          <div className="bg-primary w-[300px] absolute h-[500px] top-0"></div>
          <Image
            className="z-10 top-10 mt-10 ml-10"
            width={496}
            height={759}
            src="/schools/image.jpg"
            alt="Computer Science Lab"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
