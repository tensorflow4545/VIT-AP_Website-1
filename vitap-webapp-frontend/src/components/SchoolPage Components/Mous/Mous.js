"use client"

import React,{useState} from "react";
import Image from "next/image";
import img1 from "@/assets/images/Mous/MoU.jpg";
import stanford from "@/assets/images/Mous/stanford.png";
import mit from "@/assets/images/Mous/mit.png";
import oxford from "@/assets/images/Mous/oxford.png";
import mou1 from "@/assets/images/Mous/Juniper.png";
import mou2 from "@/assets/images/Mous/IDS-Blockchain-academy.png"

const Mous = () => {
  const images = [
    {
      Image:mou1,
    },
    {
      Image:mou2,
    }
  ]

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide
      ? images.length - 1
      : index - 1;
    setIndex(newIndex);
  };
  
  const nextSlide = () => {
    const isLastSlide = index === images.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[100%] h-[80%] flex justify-end bg-[#FFE9EB]">
          <div className="absolute w-full h-full">
            <div className="absolute left-[150px] w-[535px] h-full border-l-[3px] border-l-[#FFFFFF]">

              <div className="relative top-[150px] left-[42px] w-[493px] h-[297px] flex justify-center items-center">
                <Image src={images[index].Image} />
              </div>

              <div className="relative top-[180px] left-[234px]">
                <button className="border border-black w-[54px] h-[54px] text-[30px] text-[#5C0E14] hover:text-white hover:bg-primary" onClick={prevSlide}>
                  &lt;
                </button>
                <button className="border border-black w-[54px] h-[54px] text-[30px] text-[#5C0E14] hover:text-white hover:bg-primary" onClick={nextSlide}>
                  &gt;
                </button>
              </div>
            </div>
          </div>
          <div className="flex relative w-[50%] h-[100%]">
            <Image src={img1} />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#282727] opacity-80">
              <div>
                <h1 className="absolute font-Emilio text-[#FFFFFF] text-[45px] left-[36px] leading-[50px] top-[180px]">
                  MoU's and Collaborations
                </h1>
              </div>
              <div className="relative w-[70%] ml-[36px] top-1/2">
                <p className="text-[#FFFFFF] font-Montserrat">
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur amet consectetur.Lorem ipsum dolor sit amet
                  consectetur.Lorem ipsum dolor sit amet consectetur amet
                  consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mous;
