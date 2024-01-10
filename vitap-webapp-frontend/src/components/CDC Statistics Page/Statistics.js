import React from "react";
import Image from "next/image";
import banner from "../../assets/images/CDC statistics/banner.png";
import img1 from "../../assets/images/CDC statistics/img1.png";
import img2 from "../../assets/images/CDC statistics/img2.png";
import s1 from "../../assets/images/CDC statistics/stats1.png";
import s2 from "../../assets/images/CDC statistics/stats2.png";
import s3 from "../../assets/images/CDC statistics/stats3.png";
import s4 from "../../assets/images/CDC statistics/stats4.png";
import s5 from "../../assets/images/CDC statistics/stats5.png";
import companies from "../../assets/images/CDC statistics/companies.png";
import sd from "../../assets/images/CDC statistics/superdream.png";
import dr from "../../assets/images/CDC statistics/dream.png";
import st from "../../assets/images/CDC statistics/statistics.png";
import cdc from "../../assets/images/CDC statistics/cdcoffice.png";

const Statistics = () => {
  return (
    <>
      <div>
        <div className="relative ">
          <Image src={banner} className="w-[100%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 opacity-50"></div>
          <div className="absolute inset-0 flex items-end justify-start p-[20px] sm:p-[40px]">
            <p className="fle font-Emilio text-white opacity-100 font-bold lg:text-[44px] sm:text-[26px]">
              Statistics
            </p>
            <div className="absolute w-[110px] sm:w-[327px] h-[2px] bg-white"></div>
          </div>
        </div>
        <div className="px-[25px] md:px-[50px] lg:px-[100px] lg:pt-[100px] lg:pb-[60px] sm:pt-[50px] sm:pb-[20px] pt-[20px]  max-h-[900px]">
          <p className="text-[24px] lg:text-[48px] sm:text-[34px] text-[#51060D] font-Emilio font-bold ">
            Statistics
          </p>
          <div className="pt-[36px] mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-[40px]">
            <Image src={img1} />
            <Image
              src={img2}
              className=""
            />
          </div>
        </div>
        <div className="bg-[#F3F4F8] flex items-center justify-center border px-[25px] md:px-[50px] lg:px-[100px] lg:pt-[100px] lg:pb-[60px] sm:pt-[50px] sm:pb-[20px] pt-[20px]  max-h-[900px]">
          <div>
            <p className="text-[24px] lg:text-[48px] sm:text-[34px] text-[#51060D] font-Emilio font-bold pt-[40px]">
              Average CTC
            </p>
            <Image src={s1} className="py-[40px] " />
          </div>
        </div>
        <div className="flex items-center justify-center border px-[25px] md:px-[50px] lg:px-[100px] lg:pt-[100px] lg:pb-[60px] sm:pt-[50px] sm:pb-[20px] pt-[20px]  max-h-[900px] ">
          <div>
            <p className="text-[24px] lg:text-[48px] sm:text-[34px] text-[#51060D] font-Emilio pt-[40px] font-bold">
              Super Dream Offers
            </p>
            <Image src={s2} className="py-[40px]" />
          </div>
        </div>
        <div className="bg-[#F3F4F8] flex items-center justify-center border px-[25px] md:px-[50px] lg:px-[100px] lg:pt-[100px] lg:pb-[60px] sm:pt-[50px] sm:pb-[20px] pt-[20px]  max-h-[900px]">
          <div>
            <p className="text-[24px] lg:text-[48px] sm:text-[34px] text-[#51060D] font-Emilio pt-[40px] font-bold">
              Total Students Placed
            </p>
            <Image src={s3} className="py-[40px]" />
          </div>
        </div>
        <div className="flex items-center justify-center border-b-0 px-[25px] md:px-[50px] lg:px-[100px] lg:pt-[100px] lg:pb-[60px] sm:pt-[50px] sm:pb-[20px] pt-[20px]  max-h-[900px]">
          <div>
            <p className="text-[24px] lg:text-[48px] sm:text-[34px] text-[#51060D] font-Emilio font-bold pt-[40px]">
              Number of Companies Visited
            </p>
            <Image src={s4} className="py-[40px]" />
          </div>
        </div>
        <div className=" bg-[#F3F4F8] flex items-center justify-center border px-[25px] md:px-[50px] lg:px-[100px] lg:pt-[100px] lg:pb-[60px] sm:pt-[50px] sm:pb-[20px] pt-[20px]  max-h-[900px]">
          <div>
            <p className="text-[24px] lg:text-[48px] sm:text-[34px] text-[#51060D] font-Emilio pt-[40px]">
              Visited Dream Offers
            </p>
            <Image src={s5} className="py-[40px]" />
          </div>
        </div>
        <div className="mt-[30px] flex items-center justify-center border-b-0 px-[25px] md:px-[50px] lg:px-[100px]">
          <div>
            <p className="lg:text-[48px] sm:text-[34px] text-[24px] text-[#51060D] font-Emilio lg:mt-[36px] font-bold">
              Recruiters
            </p>
            <Image src={companies} className="py-[40px]" />
          </div>
        </div>
        {/* <div className="relative items-center justify-center">
          <div className="lg:h-[227px] md:h-[227px] lg:mt-[289px] md:mt-[289px] bg-[#E6CFCF] sm:h-[670px] sm:mt-[250px]"></div>
          <div className="flex lg:mx-auto absolute mt-[-420px] md:mx-auto">
            <div className="md:max-w-[240px] md:max-h-[350px] lg:w-[240px] lg:h-[240px] transform bg-gray-300 border lg:relative md:relative lg:mt-0 md:mt-0 -skew-x-6 sm:mt-[-400px] sm:w-[151px] sm:h-[229px] sm:ml-[30px] sm:absolute">
              <Image src={sd} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Overview</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div className="md:max-w-[240px] md:max-h-[350px] lg:w-[240px] lg:h-[240px] transform bg-gray-300 border lg:relative md:relative lg:ml-[20px] lg:mt-0 md:mt-0 -skew-x-6 ml-[10px] sm:w-[150px] sm:absolute sm:h-[229px] mt-[-400px] sm:ml-[191px] ">
              <Image src={sd} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Super Dream Offer</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div className="md:max-w-[240px] md:max-h-[350px] lg:w-[240px] lg:h-[240px] transform bg-gray-300 border lg:relative md:relative lg:ml-[20px] lg:mt-0 md:mt-0 -skew-x-6 ml-[10px] sm:absolute sm:w-[150px] sm:h-[229px] sm:mt-[-150px] sm:ml-[20px]">
              <Image src={dr} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Dream Offer</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div className="md:max-w-[240px] md:max-h-[350px] lg:w-[240px] lg:h-[240px] transform bg-gray-300 border lg:relative md:relative lg:ml-[20px] lg:mt-0 md:mt-0 -skew-x-6 ml-[10px] sm:ml-[181px] sm:absolute sm:w-[150px] sm:h-[229px] mt-[-150px]">
              <Image src={st} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Statistics</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div className="md:max-w-[240px] md:max-h-[350px] lg:w-[240px] lg:h-[240px] transform bg-gray-300 border lg:relative md:relative lg:ml-[20px] lg:mt-0 md:mt-0 -skew-x-6 ml-[10px] sm:absolute sm:w-[150px] sm:mt-[100px] sm:ml-[20px]">
              <Image src={cdc} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">C.D.C Office</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
          </div>
        </div> */}  
      </div>
    </>
  );
};

export default Statistics;