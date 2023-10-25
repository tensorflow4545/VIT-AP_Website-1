"use client";

import React, { useEffect, useState } from "react";
import { researchInnovation, researchNumbers } from "@/constants";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { RxDotFilled } from "react-icons/rx";
import { Gothic_A1 } from "next/font/google";

const ResearchInnovation = () => {

  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? researchInnovation.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === 2;
    const newIndex = isLastSlide
      ? 0
      : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <>
      <div className="mt-[100px] max-w-[1440px] min-h-[800px] bg-[#FDFEFF] mx-auto pt-[56px] pl-[110px] flex flex-col max-xl:pl-[50px] max-xl:pr-[50px] max-md:mt-[70px] max-ls:hidden">
        <div className="flex flex-col justify-start items-start gap-5">
          <h1 className="text-[#51060D] text-[48px] font-bold max-lx:text-[32px] max-ls:text-[26px]">
            Research and Innovation
          </h1>
          <p className="text-[18px] font-normal ">
            We indulge in driving discoveries vital to our world, our health,
            and our intellectual life.
          </p>
        </div>
        <div className="relative">
          <div className="flex gap-[24px] mt-[53px] max-lx:flex-col flex-wrap max-xl:justify-center max-lx:items-center">
            {researchInnovation.map((research) => (
              <Image
                key={research.id}
                src={research.imgUrl}
                alt={research.id}
                width={"392"}
                height={"446"}
                className="object-cover"
              />
            ))}
          </div>
          <div className="absolute -bottom-10 left-[29%] min-w-[380px] mx-auto min-h-[60px] bg-[#650010] max-lx:left-[25%] max-ls:hidden">
            <h1 className="text-[#FFE9EB] text-[25px] p-[22px] max-lx:text-[20px]">
              Top Quality and Leading Experience
            </h1>
          </div>
        </div>
        <div className="flex max-ls:flex-col max-ls:justify-center max-ls:items-center flex-wrap max-w-[1240px] min-h-[240px] justify-between mt-[80px] max-ls:gap-5">
          {researchNumbers.map((item) => (
            <div key={item.id} className="flex-start">
              <h1 className="text-[#5C0E14] text-[48px] max-lx:text-[38px] max-ls:text-[32px] font-bold">
                {item.number} +
              </h1>
              <p className="text-[#5C0E14] text-[20px] font-normal max-lx:text-[17px] max-ls:text-[15px]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full min-h-[65vh] mx-auto py-[36px] px-[30px] relative ls:hidden">
        <div className="absolute top-[50%] left-0 bg-[#E6CFCF] p-2 rounded-xl">
          <AiOutlineArrowLeft onClick={prevSlide} size={30} />
        </div>

        <div className="absolute top-[50%] right-0 bg-[#E6CFCF] p-2  rounded-xl">
          <AiOutlineArrowRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex flex-col justify-start items-start gap-3">
          <h1 className="text-[#51060D] text-[26px] font-bold">
            Research and Innovation
          </h1>
          <p className="text-[14px] font-normal ">
            We indulge in driving discoveries vital to our world, our health,
            and our intellectual life.
          </p>
        </div>

        <div className="min-h-[40vh] my-7 rounded-xl overflow-hidden relative">
          <div
            style={{
              backgroundImage: `url(${researchInnovation[currentIndex].imgUrl})`,
            }}
            className="w-full h-full rounded-xl bg-center bg-cover duration-500 overflow-hidden absolute -z-10"
          >
            <div className="absolute bottom-5 left-5">
              <h1 className="text-[#51060D] text-[28px] font-bold">
                {researchNumbers[currentIndex].number}+
              </h1>
              <p className="text-[#51060D] text-[28px] font-bold">
                {researchNumbers[currentIndex].name}
              </p>
            </div>
          </div>
        </div>

        <div className="flex top-4 justify-center py-2">
          {
            researchInnovation.map((research) => (
              <div key={research.id} onClick={() => goToSlide(research.id-1)} className="text-2xl cursor-pointer"> 
                <RxDotFilled size={30}/>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default ResearchInnovation;
