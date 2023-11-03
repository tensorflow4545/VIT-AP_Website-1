import Image from 'next/image';
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const AcheivementsSection = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url("/acheivementsbg.png")` }}
        className="max-w-[1560px] w-full h-full bg-center mx-auto "
      >
        <div className="max-w-[1440px] mx-auto w-full h-[100vh] px-[120px] pt-[60px] pb-[30px] flex justify-center bg-center">
          <div className="flex flex-col justify-between ">
            <div className="">
              <h1 className="text-[white] text-[36px] font-bold">
                Acheivements
              </h1>
            </div>
            <div className="min-w-[500px] max-h-[400px] w-full h-full bg-white max-md:min-w-[450px] max-lx:min-w-[370px] shadow-2xl flex flex-col justify-center items-start p-[25px] gap-[25px] z-20">
              <h2 className="text-left flex justify-start text-[#5C0E14] text-[22px] font-bold">
                11 Sep 2023
              </h2>
              <p className="max-w-[500px] mx-auto text-[24px] font-semibold">
                50,000 seed Balls aerially dispersed In Vijayawada District ,
                Andhra Pradesh in Collaboration with Indian Navy
              </p>
              <p className="max-w-[500px] mx-auto text-[16px] font-normal">
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur amet consectetur.Lorem ipsum dolor sit amet
                consectetur.Lorem ipsum dolor sit amet consectetur amet
                consectetur.
              </p>
            </div>
            <div className="text-[#5C0E14] flex justify-end items-end mr-[120px] max-md:mr-[70px] gap-2">
              <div className="border border-red-900 p-[6px] rounded-sm">
                <AiOutlineArrowLeft size={25} />
              </div>
              <div className="border border-red-900 p-[6px] rounded-sm">
                <AiOutlineArrowRight size={25} />
              </div>
            </div>
          </div>
          <div className="z-10 w-[500px] h-[650px] relative ml-[-100px] max-md:ml-[-60px]">
            <div>
              <Image
                src={"/acheivements1.jpeg"}
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
