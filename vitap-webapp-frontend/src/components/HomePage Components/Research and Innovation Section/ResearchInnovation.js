"use client";

import React, { useEffect, useState } from "react";
import { researchInnovation, researchNumbers } from "@/constants";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { RxDotFilled } from "react-icons/rx";
import { Gothic_A1 } from "next/font/google";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const ResearchInnovation = () => {

  const [currentIndex, setCurrentIndex] = useState(1);
  const [counterOn, setCounterOn] = useState(false);

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
      <div className="max-w-[1440px] mt-[100px] min-h-[800px]  mx-auto pt-[56px] px-[55px] hidden flex-col max-xl:px-[25px] max-xl:pr-[20px] max-md:mt-[70px] ls:flex">
        <div className="flex flex-col justify-start items-start gap-5">
          <h1 className="text-[#51060D] font-Emilo text-[48px] font-bold max-lx:text-[32px] max-ls:text-[26px]">
            Research and Innovation
          </h1>
          <p className="text-[18px] font-Montserrant font-normal ">
            We indulge in driving discoveries vital to our world, our health,
            and our intellectual life.
          </p>
        </div>
        <div className="relative">
          <div className="flex justify-center object-cover gap-[24px] mt-[53px] max-lx:flex-col flex-wrap max-xl:justify-center max-lx:items-center">
            {researchInnovation.map((research) => (
              <Image
                key={research.id}
                src={research.imgUrl}
                alt={research.id}
                width={"392"}
                height={"446"}
              />
            ))}
          </div>

          <div className="w-[100%] mt-[-50px] flex justify-center items-center text-center">
            <h1 className="text-[#FFE9EB] text-[25px] p-[22px] max-lx:text-[20px] text-center max-w-[480px] w-[100%] bg-[#650010] relative z-10">
              Top Quality and Leading Experience
            </h1>
            <div className="absolute bg-[#E6CFCF] max-w-[470px] w-[100%] min-h-[80px] -z-10 ml-5 mt-5">
              Hello
            </div>
          </div>
        </div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="flex max-ls:flex-col max-ls:justify-center max-ls:items-center flex-wrap max-w-[1100px] w-[100%] min-h-[240px] justify-between mt-[30px] max-ls:gap-1 ml-[120px] max-lg:ml-[70px] max-lg:max-w-[940px] max-md:ml-[40px]">
            {researchNumbers.map((item) => (
              <div key={item.id} className="flex-start">
                <h1 className="text-[#5C0E14] text-[48px] max-lx:text-[38px] max-ls:text-[32px] font-bold">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2}
                      delay={0}
                    />
                  )}
                  +{item.id === 3 ? "Cr" : ""}
                  {/* {item.number} + */}
                </h1>
                <p className="text-[#5C0E14] text-[20px] font-normal max-lx:text-[17px] max-ls:text-[15px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </ScrollTrigger>
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
          {researchInnovation.map((research) => (
            <div
              key={research.id}
              onClick={() => goToSlide(research.id - 1)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled size={30} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResearchInnovation;