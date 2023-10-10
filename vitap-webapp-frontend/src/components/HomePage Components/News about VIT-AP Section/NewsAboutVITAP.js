import React from "react";
import Image from "next/image";
import news1 from "../assets/newsPhotos/news1.png";
import circle from "../assets/newsPhotos/circle.png";
import arrow from "../assets/newsPhotos/Vector.png";

const News = () => {
  return (
    <>
      <div className="bg-[#51060D] h-[964px]">
        <div>
          <h2 className="text-[#FFFFFF] font-Emilo text-[67px] ml-[108px] mt-[104px]">
            News about VIT-AP
          </h2>
        </div>
        <button className="text-[#FFFFFF] font-Montserrant ml-[1225px] relative">
          See all
        </button>
        <div className="flex">
          <div className="w-[392px] h-[639px] bg-[#FFE1E3] ml-[108px] mt-[52px]">
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
            <button className="flex ml-[24px] mt-[87px] rounded-full hover:bg-[#5C0E14]">
              <Image
                src={circle}
                className="relative transition-opacity hover:opacity-0"
              />
              <Image
                src={arrow}
                className="absolute mt-[13px] ml-[11px] hover:opacity-0"
              />
              <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold">
                EXPLORE NEWS
              </p>
            </button>
          </div>
          <div className="w-[392px] h-[639px] bg-[#FFE1E3] ml-[24px] mt-[52px]">
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
            <button className="flex ml-[24px] mt-[87px] rounded-full hover:bg-[#5C0E14]">
              <Image
                src={circle}
                className="relative transition-opacity hover:opacity-0"
              />
              <Image
                src={arrow}
                className="absolute mt-[13px] ml-[11px] hover:opacity-0"
              />
              <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold">
                EXPLORE NEWS
              </p>
            </button>
          </div>
          <div className="w-[392px] h-[639px] bg-[#FFE1E3] ml-[24px] mt-[52px]">
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
            <button className="flex ml-[24px] mt-[87px] rounded-full hover:bg-[#5C0E14]">
              <Image
                src={circle}
                className="relative transition-opacity hover:opacity-0"
              />
              <Image
                src={arrow}
                className="absolute mt-[13px] ml-[11px] hover:opacity-0"
              />
              <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold">
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
