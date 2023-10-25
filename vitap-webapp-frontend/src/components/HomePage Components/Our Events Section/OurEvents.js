"use client";

import { eventsMain } from '@/constants';
import React, { useState } from 'react'
import Card from './Card';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';
import { RxDotFilled } from 'react-icons/rx';

const OurEvents = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? eventsMain.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === eventsMain.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const [active, setActive] = useState(false);

  return (
    <>
      <div className="flex flex-col mt-[100px] min-h-[800px] max-xxl:min-h-[1100px] max-md:min-h-[1300px] max-lx:min-h-[1600px] max-ls:hidden ">
        <div className="w-full bg-backgroundRed h-[420px] px-[110px] max-md:px-[40px]  max-ls:px-[30px] py-2">
          <div className="flex justify-between items-center mt-[20px]">
            <h1 className="text-[#51060D] text-[48px] font-bold max-lx:text-[32px]">
              Our Events
            </h1>
            <div className="flex flex-row gap-2 items-center justify-center hover:bg-white transition-all duration-300 ease-in">
              <h1 className="text-[#5C0E14] text-[18px] font-semibold max-lx:text-[15px]">
                See all
              </h1>
              <hr className=" h-[2px] w-[36px] bg-[#5C0E14] max-lx:w-[28px]" />
            </div>
          </div>
          <h1 className="font-Montserrant text-[18px] text-secondary max-w-[787px] pt-3">
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.Lorem ipsum dolor sit amet consectetur.
          </h1>
          <div className="flex gap-5 max-ls:gap-4 justify-center items-center mt-[40px] max-ls:flex-col flex-wrap">
            {eventsMain.map((event) => (
              <Card
                imgUrl={event.imgUrl}
                date={event.date}
                index={event.id}
                title={event.title}
                key={event.id}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-[50px] max-lx:flex-col max-lx:text-[12px]">
            <div className="max-w-[370px] min-h-[125px] flex gap-4">
              <div className="flex flex-1 items-center justify-center text-center h-[65px] w-[65px] p-[15px] bg-[#5C0E14] text-white text-[20px]">
                <h1>04 Apr</h1>
              </div>
              <div className="flex-2 w-full">
                <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4 ">
                  A One Day Blockchain Event
                </h1>
                <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. A nulla donec cursus
                  tincidunt
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[125px] flex gap-5">
              <div className="flex flex-1 items-center justify-center text-center h-[65px] w-[65px] p-[15px] bg-[#5C0E14] text-white text-[20px]">
                <h1>04 Apr</h1>
              </div>
              <div className="flex-2 w-full">
                <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4">
                  One Week Days Workshop on HFSS
                </h1>
                <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. A nulla donec cursus
                  tincidunt
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[125px] flex gap-5">
              <div className="flex flex-1 items-center justify-center text-center h-[65px] w-[65px] p-[15px] bg-[#5C0E14] text-white text-[20px]">
                <h1>04 Apr</h1>
              </div>
              <div className="flex-2 w-full">
                <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4">
                  University Day Invitation 2023
                </h1>
                <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. A nulla donec cursus
                  tincidunt
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[125px] flex gap-5 max-lx:hidden">
              <div className="flex flex-1 items-center justify-center text-center h-[65px] w-[65px] p-[15px] bg-[#5C0E14] text-white text-[20px]">
                <h1>04 Apr</h1>
              </div>
              <div className="flex-2 w-full">
                <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4">
                  Athena 2023
                </h1>
                <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. A nulla donec cursus
                  tincidunt
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[125px] flex gap-5 max-lx:hidden">
              <div className="flex flex-1 items-center justify-center text-center h-[65px] w-[65px] p-[15px] bg-[#5C0E14] text-white text-[20px]">
                <h1>04 Apr</h1>
              </div>
              <div className="flex-2 w-full">
                <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4">
                  5 Days National Level Lecture Series
                </h1>
                <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. A nulla donec cursus
                  tincidunt
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[125px] flex gap-5 max-lx:hidden">
              <div className="flex flex-1 items-center justify-center text-center h-[65px] w-[65px] p-[15px] bg-[#5C0E14] text-white text-[20px]">
                <h1>04 Apr</h1>
              </div>
              <div className="flex-2 w-full">
                <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4">
                  ICADCML - 2024
                </h1>
                <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. A nulla donec cursus
                  tincidunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full min-h-[80vh] mx-auto py-[36px] px-[30px] relative bg-[#E6CFCF]  ls:hidden ">
        <div className="absolute top-[50%] left-0 bg-white p-2 rounded-xl z-20">
          <AiOutlineArrowLeft size={30} onClick={prevSlide} />
        </div>

        <div className="absolute top-[50%] right-0 bg-white p-2  rounded-xl z-20">
          <AiOutlineArrowRight size={30} onClick={nextSlide} />
        </div>

        <div className="flex flex-col  items-start gap-3">
          <div className="flex justify-between w-full items-center mt-[20px]">
            <h1 className="text-[#51060D] text-[25px] font-bold max-lx:text-[32px]">
              Our Events
            </h1>
            <div className="flex flex-row gap-2 items-center justify-center hover:bg-white transition-all duration-300 ease-in">
              <h1 className="text-[#5C0E14] text-[14px] font-semibold max-lx:text-[15px]">
                See all
              </h1>
              <hr className=" h-[2px] w-[36px] bg-[#5C0E14] max-lx:w-[28px]" />
            </div>
          </div>
          <p className="text-[14px] font-normal ">
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="min-h-[60vh] mt-3 rounded-xl overflow-hidden relative border border-zinc-700">
          <div className="w-full h-full absolute bg-white">
            <div className="w-full h-[50%] overflow-hidden rounded-xl absolute">
              <Image
                src={eventsMain[currentIndex].imgUrl}
                alt="img"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-[37%] translate-y-[37%] bg-[#51060D] w-[70px] h-[70px] pl-[15px] flex justify-center items-center ml-[20px] text-white text-[16px] font-bold rounded-xl">
              <h1>{eventsMain[currentIndex].date}</h1>
            </div>
            <div className="w-full h-[50%] overflow-hidden rounded-xl absolute bottom-2 flex flex-col justify-center items-center px-[10px]">
              <h1 className="text-[20px] text-center font-semibold text-[#51060D]">
                {eventsMain[currentIndex].title}
              </h1>
              <p className="text-center text-[16px] font-medium text-[#51060D]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                asperiores a debitis qui sunt dolorum?
              </p>
            </div>
          </div>
        </div>

        <div className="flex top-4 justify-center py-2">
          {eventsMain.map((event) => (
            <div
              key={event.id}
              onClick={() => goToSlide(event.id - 1)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled size={30} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurEvents
