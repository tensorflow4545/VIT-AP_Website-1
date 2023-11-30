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
        <div className="relative">
          <Image src={banner} className="w-[100%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 opacity-50"></div>
          <div className="absolute inset-0">
            <p className="absolute font-Emilo text-white opacity-100 font-bold text-[44px] mt-[274px] ml-[34px]">
              Statistics
            </p>
            <div className="absolute w-[327px] h-[2px] bg-white mt-[333px] ml-[34px]"></div>
          </div>
        </div>
        <div>
          <p className="text-[58px] text-[#51060D] font-Emilo mt-[96px] ml-[108px]">
            Statistics
          </p>
          <div className="flex ml-[108px] mt-[36px]">
            <Image src={img1} />
            <Image src={img2} width={554} height={393} className="ml-[134px]" />
          </div>
        </div>
        <div className="mt-[70px] bg-[#F3F4F8] flex items-center justify-center border">
          <div>
            <p className="text-[58px] text-[#51060D] font-Emilo mt-[96px]">
              Average CTC
            </p>
            <Image src={s1} className="mt-[36px]" />
          </div>
        </div>
        <div className="mt-[70px] flex items-center justify-center border">
          <div>
            <p className="text-[58px] text-[#51060D] font-Emilo mt-[96px]">
              Super Dream Offers
            </p>
            <Image src={s2} className="mt-[36px]" />
          </div>
        </div>
        <div className="mt-[70px] bg-[#F3F4F8] flex items-center justify-center border">
          <div>
            <p className="text-[58px] text-[#51060D] font-Emilo mt-[96px]">
              Total Students Placed
            </p>
            <Image src={s3} className="mt-[36px]" />
          </div>
        </div>
        <div className="mt-[70px] flex items-center justify-center border-b-0">
          <div>
            <p className="text-[58px] text-[#51060D] font-Emilo mt-[96px]">
              Number of Companies Visited
            </p>
            <Image src={s4} className="mt-[36px]" />
          </div>
        </div>
        <div className="mt-[70px] bg-[#F3F4F8] flex items-center justify-center border">
          <div>
            <p className="text-[58px] text-[#51060D] font-Emilo mt-[96px]">
              Visited Dream Offers
            </p>
            <Image src={s5} className="mt-[36px]" />
          </div>
        </div>
        <div className="mt-[70px] flex items-center justify-center border-b-0">
          <div>
            <p className="text-[58px] text-[#51060D] font-Emilo mt-[96px]">
              Recruiters
            </p>
            <Image src={companies} className="mt-[36px]" />
          </div>
        </div>
        <div className="relative">
          <div className="h-[227px] mt-[289px] bg-[#E6CFCF]"></div>
          <div className="flex ml-[10%] absolute mt-[-420px]">
            <div className="w-[240px] h-[350px] transform bg-gray-300 border -skew-x-6">
              <Image src={sd} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Overview</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div className="w-[240px] h-[350px] transform bg-gray-300 border -skew-x-6 ml-[10px]">
              <Image src={sd} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Super Dream Offer</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div className="w-[240px] h-[350px] transform bg-gray-300 border -skew-x-6 ml-[10px]">
              <Image src={dr} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Dream Offer</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div className="w-[240px] h-[350px] transform bg-gray-300 border -skew-x-6 ml-[10px]">
              <Image src={st} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Statistics</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div className="w-[240px] h-[350px] transform bg-gray-300 border -skew-x-6 ml-[10px]">
              <Image src={cdc} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">C.D.C Office</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
