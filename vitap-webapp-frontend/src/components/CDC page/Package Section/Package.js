"use client";
import { useState } from 'react';
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
export default function Package() {
  const imglink = [
    "/microsoft.png", "/microsoft.png", "/hero.jpeg", "/hero.jpeg", "/microsoft.png", "/microsoft.png", "/microsoft.png"
  ];

  const [Index, setIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = Index === 0;
    const newIndex = isFirstSlide ? imglink.length - 1 : Index - 1;
    setIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = Index + 3 === imglink.length - 1;
    const newIndex = isLastSlide ? 0 : Index + 1;
    setIndex(newIndex);
  };

  return (
    <>
      <div class="w-full min-h-[800px] h-[100%] bg-white">

        <div class="w-full h-[420px] bg-fuchsia-100 px-[30px] ls:px-[108px] pt-[25px] ls:pt-[66px]">
          <p class="text-emilio text-red-950 text-[28px] ls:text-[48px] text-extrabold">High Salary Packages</p>
          <p class="text-dark text-montserrat text-[16px] ls:text-[20px] text-light pt-[20px] ls:pt-[29px]">Company CTC: Microsoft: 44.00 Lakhs, Appdynamics: 39.20 Lakhs, D. E. Shaw India Private Limited: 35.20 Lakhs, Udaan: 35 Lakhs, Work India: 35 Lakhs, Cloudera: 31.30 Lakhs, Amazon: 29.50 Lakhs, CISCO: 29.17 Lakhs, Swiggy: 28. 2 Lakhs, Motorq: 26 Lakh, Morgan Stanley Advantage Services: 25.33 Lakhs, Codenation: 25 Lakhs, PayPal: 23.80 Lakhs, Commvault: 20 Lakhs, WellsFargoEGS India: 20 Lakhs, Indian Oil Corporation (Core): 17.30 Lakhs.</p>

          {/* flex */}
          <div class="flex flex-row overflow-hidden">

            <div class="basis pt-[50px] pr-[20px]">
              <div class="w-[360px] h-[247px] bg-white relative group transition-all duration-300 ease-in-out">
                <Image width={390} height={250} alt="Company Image" src={imglink[Index]}></Image>
                <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
                  <div className='m-5 hidden group-hover:flex border-2 border-white'>
                    <div className='w-[320px] h-[207px] flex items-center justify-center'>
                      <h1 className='text-white text-[26px] font-semibold'>44 Lakhs CTC</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="basis pt-[50px] pr-[20px]">
              <div class="w-[360px] h-[247px] bg-white relative group transition-all duration-300 ease-in-out">
                <Image width={390} height={250} alt="Company Image" src={imglink[Index + 1]}></Image>
                <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
                  <div className='m-5 hidden group-hover:flex border-2 border-white'>
                    <div className='w-[320px] h-[207px] flex items-center justify-center'>
                      <h1 className='text-white text-[26px] font-semibold'>44 Lakhs CTC</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="basis pt-[50px] pr-[20px]">
              <div class="w-[360px] h-[247px] bg-white relative group transition-all duration-300 ease-in-out">
                <Image width={390} height={250} alt="Company Image" src={imglink[Index + 2]}></Image>
                <div className='absolute w-full h-0 top-0 left-0 bg-[#650010] opacity-50 group-hover:h-full flex flex-col justify-between items-start'>
                  <div className='m-5 hidden group-hover:flex border-2 border-white'>
                    <div className='w-[320px] h-[207px] flex items-center justify-center'>
                      <h1 className='text-white text-[26px] font-semibold'>44 Lakhs CTC</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* icons */}
          <div class="flex flex-row float-right">
            <div class="basis w-[36px] h-[36px] bg-red-200 mr-[12px] rounded-md float-center pt-[10px] pl-[10px]" onClick={prevSlide}><IoIosArrowBack /></div>
            <div class="basis w-[36px] h-[36px] bg-red-200 rounded-md pt-[10px] pl-[10px]" onClick={nextSlide}><IoIosArrowForward /></div>
          </div>

        </div>

      </div>
    </>
  )
}