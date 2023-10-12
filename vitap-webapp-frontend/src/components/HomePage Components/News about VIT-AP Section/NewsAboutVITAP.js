import React from "react";
import Image from "next/image";
import news1 from "../assets/newsPhotos/news1.png";
import circle from "../assets/newsPhotos/circle.png";
import arrow from "../assets/newsPhotos/Vector.png";

const News = () => {
  return (
    <>
      <div className="bg-[#51060D] h-[964px]">
        <div className="flex">
          <div className="ml-[108px] mt-[104px]">
            <h2 className="text-[#FFFFFF] font-Emilo text-[67px] w-[550px]">
              News about VIT-AP
            </h2>
          </div>
          <div className="flex justify-end pt-[125px] ml-[674px]">
            <h1 className="text-[#FFFFFF] text-[25px]">See all</h1>
          </div>
        </div>
        <div className="flex ml-[108px] mt-[52px]">
          <div className="w-[392px] h-[639px] bg-[#FFE1E3]">
            <Image
              src={news1}
              width={392}
              height={311}
              className="top-[223px] left-[108px]"
            />
            <h3 className="text-[#1B1C1E] font-Emilo font-bold ml-[24px] mt-[21px] text-[30px]">
              Honorable CM to VIT-AP
            </h3>
            <p className="ml-[24px] mt-[21px]">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consectetur amet consectetur.Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <button className="flex ml-[24px] mt-[87px] rounded-full hover:bg-[#5C0E14] group">
              <div className="w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]"></div>
              <Image
                src={arrow}
                className="absolute mt-[13px] ml-[11px] group-hover:opacity-0"
              />
              <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute">
                EXPLORE NEWS
              </p>
            </button>
          </div>
          <div className="w-[392px] h-[639px] bg-[#FFE1E3] ml-[24px]">
            <Image
              src={news1}
              width={392}
              height={311}
              className="top-[223px] left-[108px]"
            />
            <h3 className="text-[#1B1C1E] font-Emilo font-bold ml-[24px] mt-[21px] text-[30px]">
              Honorable CM to VIT-AP
            </h3>
            <p className="ml-[24px] mt-[21px]">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consectetur amet consectetur.Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <button className="flex ml-[24px] mt-[87px] rounded-full hover:bg-[#5C0E14] group">
              <div className="w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]"></div>
              <Image
                src={arrow}
                className="absolute mt-[13px] ml-[11px] group-hover:opacity-0"
              />
              <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute">
                EXPLORE NEWS
              </p>
            </button>
          </div>
          <div className="w-[392px] h-[639px] bg-[#FFE1E3] ml-[24px]">
            <Image
              src={news1}
              width={392}
              height={311}
              className="top-[223px] left-[108px]"
            />
            <h3 className="text-[#1B1C1E] font-Emilo font-bold ml-[24px] mt-[21px] text-[30px]">
              Honorable CM to VIT-AP
            </h3>
            <p className="ml-[24px] mt-[21px]">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consectetur amet consectetur.Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <button className="flex ml-[24px] mt-[87px] rounded-full hover:bg-[#5C0E14] group">
              <div className="w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]"></div>
              <Image
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
    </>
  );
};

export default News;
