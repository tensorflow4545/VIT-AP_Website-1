import React from "react";
import Image from "next/image";
import news2 from "@/assets/images/newsPhotos/3rd Annual Convocation - 2023.jpg";
import news1 from "@/assets/images/newsPhotos/aimusic.png";
import news4 from "@/assets/images/newsPhotos/2.jpg";
import circle from "@/assets/images/newsPhotos/circle.png";
import arrow from "@/assets/images/newsPhotos/Vector.png";
import styles from "../../../styles/News.module.css";
import Link from "next/link";

const News = () => {
  return (
    <>
      <div className={`${styles.container} bg-white h-screen w-screen`}>
        <div className={`${styles.head} top-0 flex justify-left items-left w-screen`}>
          <h2
            className={`${styles.heading} relative left-[100px] text-[#51060D] font-Emilio font-semibold text-[48px] w-[600px] mt-[50px] text-left`}
          >
            News
          </h2>
          <div className="flex flex-row items-center justify-center relative transition-all duration-300 ease-in group top-[25px] left-[45%]">
            <div className="Rectangle91 w-[32px] h-[30px] left-[40px] top-[45px] absolute bg-[#5C0E14] opacity-20 transition-transform group-hover:left-[-10px] group-hover:w-[90px] group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out "></div>
            <Link href={"/"} className="mr-2 text-[#5C0E14] font-bold">See All</Link>
            <hr className=" h-[4px] w-[36px] font-bold bg-[#5C0E14] max-lx:w-[28px]" />
          </div>
        </div>
        {/* <div className="flex justify-end pt-[80px] ml-[674px]">
          <h1 className="text-[#FFFFFF] text-[25px]">See all</h1>
        </div> */}
        <div className="h-[288px] bg-[#741D26] mt-[280px]"></div>
        <div
          className={`${styles.cardcontainer} flex mt-[-540px] max-w-[1150px] mx-auto justify-center items-center h-[520px] relative`}
        >
          <div className="absolute top-0 left-0 w-[100px] h-[100px] border-[#650010] border-4 border-r-0 border-b-0 "></div>
          <div className="absolute top-0 left-[45%] w-[100px] h-[100px] border-[#650010] border-4 border-r-0 border-b-0 border-l-0"></div>
          <div className="absolute bottom-0 left-[45%] w-[100px] h-[100px] border-[#fff] border-4 border-t-0 border-l-0 border-r-0"></div>
          <div className="absolute bottom-0 right-0 w-[100px] h-[100px] border-[#fff] border-4 border-l-0 border-t-0"></div>
          <div
            className={`${styles.card1} max-w-[320px] h-[450px] bg-white ml-[24px] border-b shadow-2xl border-gray-800 section transition-transform transform hover:scale-105 mt-[15px]  group`}
          >
            <Image
              src={news1}
              width={392}
              height={311}
              className={`${styles.img1} top-[223px] left-[108px]`}
            />
            <p className={`${styles.date} ml-[24px] mt-[21px]`}>
              Date: 04.10.2023
            </p>
            <h3
              className={`${styles.info} text-[#1B1C1E] font-Emilo font-bold ml-[24px] mt-[21px] text-[20px]`}
            >
              First-ever AI musical concert held at VIT-AP University
            </h3>
            <button
              className={`${styles.button} flex ml-[24px] mt-[50px] rounded-full group-hover:bg-[#5C0E14]`}
            >
              <div
                className={`${styles.circle} w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]`}
              ></div>
              <Image
                src={arrow}
                className={`${styles.arrow} absolute mt-[13px] ml-[11px] group-hover:opacity-0`}
              />
              <p
                className={`${styles.explore} ml-[16px] mt-[9px] text-[#5C0E14] font-semibold group-hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute`}
              >
                EXPLORE NEWS
              </p>
            </button>
          </div>
          <div
            className={`${styles.card2} max-w-[320px] h-[450px] bg-white ml-[24px] border-b shadow-2xl border-gray-800 section transition-transform transform hover:scale-105 mt-[15px] group`}
          >
            <Image
              src={news2}
              width={392}
              height={311}
              className={`${styles.img2} top-[223px] left-[108px]`}
            />
            <p className={`${styles.date} ml-[24px] mt-[21px]`}>
              Date: 27.09.2023
            </p>
            <h3
              className={`${styles.info} text-[#1B1C1E] font-Emilo font-bold ml-[24px] mt-[21px] text-[20px]`}
            >
              3rd Annual Convocation - 2023
            </h3>
            <button
              className={`${styles.button} flex ml-[24px] mt-[50px] rounded-full  group-hover:bg-[#5C0E14]`}
            >
              <div
                className={`${styles.circle} w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]`}
              ></div>
              <Image
                src={arrow}
                className={`${styles.arrow} absolute mt-[13px] ml-[11px] group-hover:opacity-0`}
              />
              <p
                className={`${styles.explore} ml-[16px] mt-[9px] text-[#5C0E14] font-semibold  group-hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute`}
              >
                EXPLORE NEWS
              </p>
            </button>
          </div>
          <div
            className={`${styles.card3} max-w-[320px] h-[450px] bg-white ml-[35px] border-b shadow-2xl border-gray-800 section transition-transform transform hover:scale-105 mt-[15px]  group overflow-hidden`}
          >
            <div className="overflow-hidden">
            <Image
              src={news4}
              width={392}
              height={311}
              className={`${styles.img3} top-[223px] left-[108px]`}
            /></div>
            <p className={`${styles.date} ml-[24px] mt-[21px]`}>
              Date: 09.09.2023
            </p>
            <h3
              className={`${styles.info} text-[#1B1C1E] font-Emilo font-bold ml-[24px] mt-[21px] text-[20px]`}
            >
              VIT-AP Men's basketball team
            </h3>
            <button
              className={`${styles.button} flex ml-[24px] mt-[75px] rounded-full  group-hover:bg-[#5C0E14]`}
            >
              <div
                className={`${styles.circle} w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]`}
              ></div>
              <Image
                src={arrow}
                className={`${styles.arrow} absolute mt-[13px] ml-[11px] group-hover:opacity-0`}
              />
              <p className={`${styles.explore} ml-[16px] mt-[9px] text-[#5C0E14] font-semibold  group-hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute`}>
                EXPLORE NEWS
              </p>
            </button>
          </div>
        </div>
        <button
          className={`${styles.b1} w-[60px] h-[60px] text-[30px] bg-[#E6CFCF] hidden`}
        >
          &lt;
        </button>
        <button
          className={`${styles.b2} w-[60px] h-[60px] text-[30px] bg-[#E6CFCF] hidden`}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default News;