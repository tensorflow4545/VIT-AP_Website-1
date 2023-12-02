import React from "react";
import Image from "next/image";

import news2 from "@/assets/images/newsPhotos/3rd Annual Convocation - 2023.jpg";
import news1 from "@/assets/images/newsPhotos/aimusic.png";
import news3 from "@/assets/images/newsPhotos/basketball.png";
import news4 from "@/assets/images/newsPhotos/nationn.png";
import circle from "@/assets/images/newsPhotos/circle.png";
import arrow from "@/assets/images/newsPhotos/Vector.png";
import Link from "next/link";

const News = () => {
  return (
    <div className="bg-white h-screen">
      <div className="flex items-center justify-between">
        <h2 className="text-[#51060D] font-Emilio font-bold text-[48px] mt-[50px] ml-[100px] mb-[10px] text-left">
          Media Coverage
        </h2>
        {/* <div className="flex items-center justify-center mr-[50px] mt-10">
          <div className="Rectangle91 w-[50px] h-[30px] absolute bg-[#5C0E14] opacity-20 transition-transform hover:right-[90px] hover:w-[125px] "></div>
          <h1 className="text-[#5C0E14]">View More &nbsp;</h1>
          <div className="Arrow w-[50px] border-2 border-solid border-[#5C0E14]"></div>
        </div> */}
        <div className="flex flex-row items-center justify-center relative  transition-all duration-300 ease-in group right-[10%] mt-[3%]">
          <div className="Rectangle91 w-[32px] h-[30px] left-[40px] top-[-3px] absolute bg-[#5C0E14] opacity-20 transition-transform group-hover:left-[-10px] group-hover:w-[90px] group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out "></div>
          <Link href={"/"} className="mr-2 text-[#5C0E14] font-bold">See All</Link>
          <hr className=" h-[4px] w-[36px] font-bold bg-[#5C0E14] max-lx:w-[28px]" />
        </div>
      </div>
      <div className="relative">
        <div className="absolute w-[100%] max-h-[200px] h-[100%] bottom-0 left-0 bg-[#650010]"></div>
        <div className="flex max-w-[1250px] mx-auto w-[100%] mt-[20px] p-10 justify-center items-center relative">
          <div className="absolute max-w-[100px] w-[100%] max-h-[100px] h-[100%] top-0 left-0 border-4 border-[#650010] border-r-0 border-b-0 ml-5 mt-3"></div>
          <div className="absolute max-w-[100px] w-[100%] max-h-[100px] h-[100%] bottom-0 right-0 border-4 border-white border-l-0 border-t-0 mb-5 mr-5"></div>
          <div className="absolute max-w-[100px] w-[100%] max-h-[5px] h-[100%] bottom-0 right-[45%] border-4 border-t-0 border-r-0 border-l-0 border-white mb-5 mr-5"></div>
          <div className="absolute max-w-[100px] w-[100%] max-h-[5px] h-[100%] top-0 right-[45%] border-4 border-t-0 border-r-0 border-l-0 border-[#650010] mt-3"></div>
          <div className="w-[320px] h-[450px] bg-white ml-[24px] border-b shadow-2xl border-gray-800 section transition-transform transform hover:scale-105 group">
            <Image
              src={news1}
              width={392}
              height={311}
              className="top-[223px] left-[108px]"
            />
            <p className="ml-[24px] mt-[21px]">Date: 04.10.2023</p>
            <h3 className="text-[#1B1C1E] font-Emilo font-bold ml-[24px] mt-[21px] text-[20px]">
              First-ever AI musical concert held at VIT-AP University
            </h3>
            <button className="flex ml-[24px] mt-[50px] rounded-full hover:bg-[#5C0E14] group">
              <div className="w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]"></div>
              <Image
                src={arrow}
                className="absolute mt-[13px] ml-[11px] group-hover:opacity-0"
              />
              <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold group-hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute">
                EXPLORE NEWS
              </p>
            </button>
          </div>
          <div className="w-[320px] h-[450px] bg-white ml-[35px] border-b shadow-2xl border-gray-800 section transition-transform transform hover:scale-105 group">
            <Image
              src={news2}
              width={392}
              height={311}
              className="top-[223px] left-[108px]"
            />
            <p className="ml-[24px] mt-[21px]">Date: 27.09.2023</p>

            <h3 className="text-[#1B1C1E] font-Emilio font-bold ml-[24px] mt-[21px] text-[20px]">
              3rd Annual Convocation - 2023
            </h3>
            <button className="flex ml-[24px] mt-[70px] rounded-full hover-bg-[#5C0E14] group">
              <div className="w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]"></div>
              <Image
                alt="A descriptive text here"
                src={arrow}
                className="absolute mt-[13px] ml-[11px] group-hover:opacity-0"
              />
              <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold group-hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute">
                EXPLORE NEWS
              </p>
            </button>
          </div>
          <div className="w-[320px] h-[450px] bg-white ml-[35px] border-b shadow-2xl border-gray-800 section transition-transform transform hover:scale-105 group">
            <Image
              src={news3}
              width={392}
              height={311}
              className="top-[223px] left-[108px]"
            />
            <p className="ml-[24px] mt-[21px]">Date: 09.09.2023</p>

            <h3 className="text-[#1B1C1E] font-Emilio font-bold ml-[24px] mt-[21px] text-[20px]">
              VIT-AP Men's Basketball team wins gold medal
            </h3>
            <button className="flex ml-[24px] mt-[25px] rounded-full hover-bg-[#5C0E14] group">
              <div className="w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]"></div>
              <Image
                alt="A descriptive text here"
                src={arrow}
                className="absolute mt-[13px] ml-[11px] group-hover:opacity-0"
              />
              <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold group-hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute">
                EXPLORE NEWS
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
