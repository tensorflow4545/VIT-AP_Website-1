import React from "react";
import Image from "next/image";
import news1 from "../../../assets/images/newsPhotos/1.png";
import news2 from "../../../assets/images/newsPhotos/2.jpg";
import news3 from "../../../assets/images/newsPhotos/3.jpg";
import news4 from "../../../assets/images/newsPhotos/4.jpeg";

import circle from "../../../assets/images/newsPhotos/circle.png";
import arrow from "../../../assets/images/newsPhotos/Vector.png";

const NewsAboutVITAP = () => {
  return (
    <>
      <div className="bg-[#51060D] h-[864px]">
        <div className="flex">
          <div className="ml-[108px] mt-[80px]">
            <h2 className="text-[#FFFFFF] font-Emilo text-[60px] w-[550px]">
              News about VIT-AP
            </h2>
          </div>
          <div className="flex justify-end pt-[100px] ml-[674px]">
            <h1 className="text-[#FFFFFF] text-[25px]">See all</h1>
          </div>
        </div>
        <div className="flex ml-[108px] mt-[40px]">
          <div className="w-[350px] h-[439px] bg-[#FFE1E3] shadow-2xl">
            <Image
              src={news1}
              width={350}
              height={200}
              className="top-[123px] left-[108px] object-cover"
            />
            <h3 className="text-[#1B1C1E] font-Emilo font-bold ml-[11px] mt-[10px] text-[28px]">
              Honorable CM to VIT-AP
            </h3>
            <p className="pl-[13px] mt-[10px] leading-5 text-left">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consectetur amet consectetur
            </p>
            <button className="flex ml-[24px] mt-[87px] rounded-full hover:bg-[#5C0E14] group">
              <div className="w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]"></div>
              <Image
                src={arrow}
                className="absolute mt-[13px] ml-[11px] group-hover:opacity-0"
              />
              <p className="ml-[16px] mt-[9px]  font-semibold text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute">
                EXPLORE NEWS
              </p>
            </button>
          </div>
          <div className="w-[350px] h-[439px] bg-[#FFE1E3] shadow-2xl ml-[100px]">
            <div className="w-[350px]  h-[280px]">
            <Image
              src={news4}
              width={300}
              height={180}
              className="top-[123px] left-[108px] object-cover"
            />
            </div>
      
            <h3 className="text-[#1B1C1E] font-Emilo font-bold ml-[11px] mt-[10px] text-[28px] leading-8">
           AI Musical Concert
            </h3>
            <p className="pl-[13px] mt-[10px] leading-5 text-left">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consectetur amet consectetur
            </p>
          </div>

          <div className="w-[350px] h-[439px] bg-[#FFE1E3] shadow-2xl ml-[100px] ">
            <Image
              src={news3}
              width={350}
              height={200}
              className="top-[123px] left-[108px] object-cover"
            />
            <h3 className="text-[#1B1C1E] font-Emilo font-bold ml-[11px] mt-[10px] text-[28px]">
             Convocation at VIT-AP
            </h3>
            <p className="pl-[13px] mt-[10px] leading-5 text-left">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consectetur amet consectetur
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAboutVITAP;
