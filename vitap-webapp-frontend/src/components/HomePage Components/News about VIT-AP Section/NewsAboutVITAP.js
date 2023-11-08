import React from "react";
import Image from "next/image";

import news2 from "@/assets/images/newsPhotos/3rd Annual Convocation - 2023.jpg";
import news1 from "@/assets/images/newsPhotos/aimusic.png";
import news3 from "@/assets/images/newsPhotos/basketball.png";
import news4 from "@/assets/images/newsPhotos/nationn.png";
import circle from "@/assets/images/newsPhotos/circle.png";
import arrow from "@/assets/images/newsPhotos/Vector.png";

const News = () => {
  return (
<<<<<<< HEAD
    <>
      <div className="bg-white h-screen">
        <div className="flex items-center justify-between">
          <h2 className="text-[#51060D] font-Emilo text-[60px] mt-[50px] ml-[100px] mb-[10px] text-left">
            News about VIT-AP
          </h2>
          <div className="flex items-center justify-center mr-[50px] mt-10 group">
            <div class="Rectangle91 w-[50px] h-[30px] absolute bg-[#5C0E14] opacity-20 transition-transform group-hover:right-[90px] group-hover:w-[125px] group-hover:transition-all group-hover:duration-300"></div>
            <h1 className="text-[#5C0E14]">View More &nbsp;</h1>
            <div class="Arrow w-[50px] border-2 border-solid border-[#5C0E14]"></div>
          </div>

        </div>

        {/* <div className="flex justify-end pt-[80px] ml-[674px]">
          <h1 className="text-[#FFFFFF] text-[25px]">See all</h1>
        </div> */}
=======
    <div className="bg-white h-screen">
      <div className="flex items-center justify-between">
        <h2 className="text-[#51060D] font-Emilio text-[60px] mt-[50px] ml-[100px] mb-[10px] text-left">
          News about VIT-AP
        </h2>
        <div className="flex items-center justify-center mr-[50px] mt-10">
          <div className="Rectangle91 w-[50px] h-[30px] absolute bg-[#5C0E14] opacity-20 transition-transform hover:right-[90px] hover:w-[125px] "></div>
          <h1 className="text-[#5C0E14]">View More &nbsp;</h1>
          <div className="Arrow w-[50px] border-2 border-solid border-[#5C0E14]"></div>
        </div>
      </div>
>>>>>>> bb81486f8b94d9c089ada71ba0a9328cae34a1ad

      <div className="flex ml-[240px] mt-[20px]">
        <div className="w-[320px] h-[450px] bg-white ml-[24px] border-b shadow-2xl border-gray-800 section">
          <Image
            src={news1}
            width={392}
            height={311}
            className="top-[223px] left-[108px]"
          />
          <h3 className="text-[#1B1C1E] font-Emilio font-bold ml-[24px] mt-[21px] text-[20px]">
            First-ever AI musical concert held at VIT-AP University
          </h3>
          <p className="ml-[24px] mt-[21px]">Date: 04.10.2023</p>
          <button className="flex ml-[24px] mt-[50px] rounded-full hover:bg-[#5C0E14] group">
            <div className="w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]"></div>
            <Image
              alt="A descriptive text here"
              src={arrow}
              className="absolute mt-[13px] ml-[11px] group-hover:opacity-0"
            />
            <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute">
              EXPLORE NEWS
            </p>
          </button>
        </div>
        <div className="w-[320px] h-[450px] bg-white ml-[35px] border-b shadow-2xl border-gray-800 section">
          <Image
            src={news2}
            width={392}
            height={311}
            className="top-[223px] left-[108px]"
          />
          <h3 className="text-[#1B1C1E] font-Emilio font-bold ml-[24px] mt-[21px] text-[20px]">
            3rd Annual Convocation - 2023
          </h3>
          <p className="ml-[24px] mt-[21px]">Date: 27.09.2023</p>
          <button className="flex ml-[24px] mt-[50px] rounded-full hover-bg-[#5C0E14] group">
            <div className="w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]"></div>
            <Image
              alt="A descriptive text here"
              src={arrow}
              className="absolute mt-[13px] ml-[11px] group-hover:opacity-0"
            />
            <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute">
              EXPLORE NEWS
            </p>
          </button>
        </div>
        <div className="w-[320px] h-[450px] bg-white ml-[35px] border-b shadow-2xl border-gray-800 section">
          <Image
            src={news3}
            width={392}
            height={311}
            className="top-[223px] left-[108px]"
          />
          <h3 className="text-[#1B1C1E] font-Emilio font-bold ml-[24px] mt-[21px] text-[20px]">
            VIT-AP Men's Basketball team wins gold medal
          </h3>
          <p className="ml-[24px] mt-[21px]">Date: 09.09.2023</p>
          <button className="flex ml-[24px] mt-[30px] rounded-full hover-bg-[#5C0E14] group">
            <div className="w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]"></div>
            <Image
              alt="A descriptive text here"
              src={arrow}
              className="absolute mt-[13px] ml-[11px] group-hover:opacity-0"
            />
            <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute">
              EXPLORE NEWS
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
