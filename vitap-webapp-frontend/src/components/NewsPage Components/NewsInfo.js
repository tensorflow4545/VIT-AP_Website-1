import React from "react";
import Image from "next/image";
import banner from "../../assets/images/newsPhotos/banner.png";
import img from "../../assets/images/newsPhotos/news.png";

const NewsInfo = () => {
  return (
    <>
      <div>
        <div className="relative">
          <Image src={banner} className="w-[100%]" />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <p className="font-Emilo text-[61px] font-bold text-white">News</p>
          </div>
        </div>
        <div className="mt-[90px] relative">
          <Image src={img} className="ml-[25%] absolute mt-[-270px]" />
          <div className="h-[709px] mt-[360px] bg-[#650010]">
            <p className="font-Emilo text-[40px] text-white font-semibold mt-[500px] ml-[120px] absolute">
              VIT-AP stands as highly sought-after campus for recruiters across
              nation{" "}
            </p>
          </div>
        </div>
        <div className="bg-[#E6CFCF] h-[51px]"></div>
      </div>
    </>
  );
};

export default NewsInfo;
