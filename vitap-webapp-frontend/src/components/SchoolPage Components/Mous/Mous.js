import React from "react";
import Image from "next/image";
import img1 from "../../../assets/images/Mous/mou.png";
import stanford from "../../../assets/images/Mous/stanford.png";
import mit from "../../../assets/images/Mous/mit.png";
import oxford from "../../../assets/images/Mous/oxford.png";

const Mous = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[100%] h-[80%] flex justify-end bg-[#FFE9EB]">
          <div className="w-1/5 flex flex-col border-l-[3px] border-l-[#FFFFFF]">
            <div className="border-b-[3px] border-b-[#FFFFFF] h-1/3 flex items-center justify-center">
              <Image src={stanford} />
            </div>
            <div className="border-b-[3px] border-b-[#FFFFFF] h-1/3 flex items-center justify-center">
              <Image src={mit} />
            </div>
            <div className="border border-b-[#FFFFFF] h-1/3 flex items-center justify-center">
              <Image src={oxford} />
            </div>
          </div>
          <div className="w-1/5 flex flex-col border-l-[3px] border-l-[#FFFFFF]">
            <div className="border-b-[3px] border-b-[#FFFFFF] h-1/3 flex items-center justify-center">
              <Image src={stanford} />
            </div>
            <div className="border-b-[3px] border-b-[#FFFFFF] h-1/3 flex items-center justify-center">
              <Image src={oxford} />
            </div>
            <div className="border border-b-[#FFFFFF] h-1/3 flex items-center justify-center">
              <Image src={mit} />
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
