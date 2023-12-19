"use client";

import React, { useState } from 'react'
import Card from './Card';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';
import { RxDotFilled } from 'react-icons/rx';
import Link from 'next/link';

const OurEvents = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? Events.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Events.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const Events = [
    {
      date: '20 Nov',
      title: 'Industry Gues Lecture on Design Thinking',
      description: 'Industry Gues Lecture on Design Thinking From Insights to Viability',
      imgUrl: "/eventImages/1.jpeg"
    },
    {
      date: '23 Nov',
      title: 'Mentoring Event',
      description: 'Exhibition of Ideas & Linkage with Innovation ambassadors for Mentorship programme',
      imgUrl: "/eventImages/2.jpeg"
    },
    {
      date: '28 Oct',
      title: 'Electoral Reforms in India',
      description: 'Empowering Yout to Voting',
      imgUrl: "/eventImages/3.jpeg"
    },
    {
      date: '20 Nov',
      title: 'Industry Gues Lecture on Design Thinking',
      description: 'Industry Gues Lecture on Design Thinking From Insights to Viability',
      imgUrl: "/eventImages/1.jpeg"
    },
    {
      date: '23 Nov',
      title: 'Mentoring Event',
      description: 'Exhibition of Ideas & Linkage with Innovation ambassadors for Mentorship programme',
      imgUrl: "/eventImages/2.jpeg"
    },
    {
      date: '28 Oct',
      title: 'Electoral Reforms in India',
      description: 'Empowering Yout to Voting',
      imgUrl: "/eventImages/3.jpeg"
    },
    {
      imgUrl: "/eventImages/1.jpeg",
      title: "Industry Gues Lecture on Design Thinking",
      date: "20th Nov",
      description: 'Industry Gues Lecture on Design Thinking From Insights to Viability'
    },
    {
      imgUrl: "/eventImages/2.jpeg",
      title: "Mentoring Event",
      date: "23rd Nov",
      description: 'Exhibition of Ideas & Linkage with Innovation ambassadors for Mentorship programme'
    },
    {
      imgUrl: "/eventImages/3.jpeg",
      title: "Electoral Reforms in India",
      date: "28 Oct",
      description: 'Empowering Yout to Voting'
    },
  ];

  return (
    <>

      <div className="flex-col mt-[0px] hidden min-h-[1020px] ls:flex ">
        <div className="w-full bg-backgroundRed h-[420px] px-[110px] max-md:px-[40px]  max-ls:px-[30px] py-2">

          <div className="flex justify-between items-center mt-[20px] cursor-pointer">
            <h1 className="text-[#51060D] font-Emilio text-[48px] font-bold max-lx:text-[32px]">
              Events and Happenings
            </h1>
            <div className="flex flex-row items-center justify-center relative  transition-all duration-300 ease-in group">
              <div className="Rectangle91 w-[32px] h-[30px] left-[40px] top-[-3px] absolute bg-[#5C0E14] opacity-20 transition-transform group-hover:left-[-10px] group-hover:w-[90px] group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out "></div>
              <Link href={"/"} className="mr-2 text-[#5C0E14] font-bold">See All</Link>
              <hr className=" h-[4px] w-[36px] font-bold bg-[#5C0E14] max-lx:w-[28px]" />
            </div>
          </div>
          <h1 className="font-Montserrat text-[18px] text-secondary max-w-[787px] pt-3">
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.Lorem ipsum dolor sit amet consectetur.
          </h1>
          <div className="flex gap-5 max-ls:gap-4 justify-center items-center mt-[40px] ls:flex-row">
            {Events.slice(0, 3).map((event) => (
              <Card
                imgUrl={event.imgUrl}
                date={event.date}
                index={event.id}
                title={event.title}
                key={event.id}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 items-start justify-center gap-5 mt-[50px] max-lx:flex-col max-lx:text-[12px]">
            {Events.slice(3, 9).map((event, index) => (
              <div key={index} className={`ml-[13%] md:w-[370px] max-lx:w-[350px] min-h-[145px] flex gap-5 lx:flex`}>
                <div className="flex flex-1 items-center leading-[1.5rem] justify-center font-Emilio font-semi-bold text-center h-[65px] rounded-sm w-[65px] p-[15px] bg-[#5C0E14] text-white text-[18px]">
                  <h1 className='mx-[16px] my-[12px]'>{event.date}</h1>
                </div>
                <div className="flex-2 w-full">
                  <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4">
                    {event.title}
                  </h1>
                  <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
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
                src={Events[currentIndex].imgUrl}
                alt="img"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-[37%] translate-y-[37%] bg-[#51060D] w-[70px] h-[70px] pl-[15px] flex justify-center items-center ml-[20px] text-white text-[16px] font-bold rounded-xl">
              <h1>{Events[currentIndex].date}</h1>
            </div>
            <div className="w-full h-[50%] overflow-hidden rounded-xl absolute bottom-2 flex flex-col justify-center items-center px-[10px]">
              <h1 className="text-[20px] text-center font-semibold text-[#51060D]">
                {Events[currentIndex].title}
              </h1>
              <p className="text-center text-[16px] font-medium text-[#51060D]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                asperiores a debitis qui sunt dolorum?
              </p>
            </div>
          </div>
        </div>

        <div className="flex top-4 justify-center py-2">
          {Events.map((event) => (
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
