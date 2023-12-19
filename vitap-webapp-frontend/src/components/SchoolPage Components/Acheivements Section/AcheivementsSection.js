"use client";

import Image from 'next/image';
import React, { useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { acheivements } from '@/constants';

const AcheivementsSection = () => {

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide
      ? acheivements.length - 1
      : index - 1;
    setIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = index === 2;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url("/acheivementsbg.png")` }}
        className="max-w-screen w-full h-full bg-center mx-auto relative"
      >
        <div className="absolute top-[5%] left-[6%] w-fit font-Emilio">
          <h1 className="text-[white] text-[48px] font-bold">
            Acheivements
          </h1>
        </div>
        <div className="max-w-[1440px] mx-auto w-full h-[100vh] px-[120px] pt-[30px] pb-[30px] flex justify-center items-center bg-center font-Emilo">
          <div className="flex flex-col justify-between ">
            <div className="max-w-[500px] w-[100%] max-h-[400px] h-[100%] bg-white max-md:min-w-[450px] max-lx:min-w-[370px] shadow-2xl flex flex-col justify-center items-start p-[25px] gap-[25px] z-20">
              <h2 className="text-left flex justify-start text-[#5C0E14] text-[22px] font-bold">
                {acheivements[index].date}
              </h2>
              <p className="max-w-[500px] mx-auto text-[24px] font-semibold">
                {acheivements[index].heading}
              </p>
              <p className="max-w-[500px] mx-auto text-[16px] font-normal">
                {acheivements[index].description}
              </p>
            </div>
            <div className="text-[#5C0E14] flex justify-end items-end mr-[120px] max-md:mr-[70px] gap-2 mt-[10px]">
              <div className="border border-red-900 p-[6px] rounded-sm cursor-pointer hover:bg-primary hover:text-white">
                <AiOutlineArrowLeft size={25} onClick={prevSlide} />
              </div>
              <div className="border border-red-900 p-[6px] rounded-sm cursor-pointer hover:bg-primary hover:text-white">
                <AiOutlineArrowRight size={25} onClick={nextSlide} />
              </div>
            </div>
          </div>
          <div className="z-10 w-[500px] max-h-[650px] h-[100%] flex justify-center items-center relative ml-[-100px] max-md:ml-[-60px]">
            <div>
              <Image
                src={"/acheivements1.jpeg"}
                fill={true}
                className="object-cover"
                alt='acheivementimg'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcheivementsSection
