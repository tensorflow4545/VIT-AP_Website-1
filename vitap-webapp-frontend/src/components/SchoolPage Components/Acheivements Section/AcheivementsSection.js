"use client";

import axios from 'axios';
import Image from 'next/image';
import React, { useState,useEffect } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import { acheivements } from '@/constants';

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
    const isLastSlide = index === acheivements.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };
  

  const [acheivements, setacheivements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/school-page-achievements?populate=*`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        });
        if (response.data && Array.isArray(response.data.data)) {
          const extractedAttributes = response.data.data.map((item) => item.attributes);
          setacheivements(extractedAttributes);
        } else {
          console.error('The "data" property in the API response is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

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
            <div className="max-w-[500px] w-[100%] max-h-[400px] h-[100%] bg-white max-md:min-w-[450px] max-lx:min-w-[370px] shadow-2xl flex flex-col justify-center items-start p-[25px] gap-[25px] z-20 ">
              <h2 className="text-left flex justify-start text-[#5C0E14] text-[22px] font-bold">
                {acheivements[index]?.Date}
              </h2>
              <p className="max-w-[500px] mx-auto text-[24px] font-semibold">
                {acheivements[index]?.Title}
              </p>
              <p className="max-w-[500px] mx-auto text-[16px] font-normal overflow-hidden text-justify">
                {acheivements[index]?.Description}
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
                src={`${process.env.NEXT_PUBLIC_API_URL}${acheivements[index]?.Image.data.attributes.url}`} 
                alt={acheivements[index]?.Image.data.attributes.alternativeText || 'Alt Text'}
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcheivementsSection
