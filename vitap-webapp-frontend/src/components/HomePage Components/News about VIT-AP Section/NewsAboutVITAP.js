import React from "react";
import Image from "next/image";
import news2 from "@/assets/images/newsPhotos/3rd Annual Convocation - 2023.jpg";
import news1 from "@/assets/images/newsPhotos/aimusic.png";
import news3 from "@/assets/images/newsPhotos/basketball.png";
import news4 from "@/assets/images/newsPhotos/nationn.png";
import circle from "@/assets/images/newsPhotos/circle.png";
import arrow from "@/assets/images/newsPhotos/Vector.png";
import styles from "../../../styles/News.module.css";

const News = () => {
  return (
    <>
      <div className={`${styles.container} bg-white h-screen`}>
        <div className={`${styles.head} flex justify-center items-center`}>
          <h2
            className={`${styles.heading} text-[#51060D] font-Emilo text-[60px] w-[550px] mt-[50px] text-center`}
          >
            News about VIT-AP
          </h2>
        </div>
        {/* <div className="flex justify-end pt-[80px] ml-[674px]">
          <h1 className="text-[#FFFFFF] text-[25px]">See all</h1>
        </div> */}
        <div className="h-[288px] bg-[#741D26] mt-[280px]"></div>
        <div
          className={`${styles.cardcontainer} flex ml-[240px] mt-[-540px] border w-[1086px] h-[480px] absolute`}
        >
          <div
            className={`${styles.card1} w-[320px] h-[450px] bg-white ml-[24px] border-b shadow-2xl border-gray-800 section transition-transform transform hover:scale-105 mt-[15px]`}
          >
            <Image
              src={news1}
              width={392}
              height={311}
              className={`${styles.img1} top-[223px] left-[108px]`}
            />
            <h3
              className={`${styles.info} text-[#1B1C1E] font-Emilo font-bold ml-[24px] mt-[21px] text-[20px]`}
            >
              First-ever AI musical concert held at VIT-AP University
            </h3>
            <p className={`${styles.date} ml-[24px] mt-[21px]`}>
              Date: 04.10.2023
            </p>
            <button
              className={`${styles.button} flex ml-[24px] mt-[50px] rounded-full hover:bg-[#5C0E14] group`}
            >
              <div
                className={`${styles.circle} w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]`}
              ></div>
              <Image
                src={arrow}
                className={`${styles.arrow} absolute mt-[13px] ml-[11px] group-hover:opacity-0`}
              />
              <p
                className={`${styles.explore} ml-[16px] mt-[9px] text-[#5C0E14] font-semibold hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute`}
              >
                EXPLORE NEWS
              </p>
            </button>
          </div>
          <div
            className={`${styles.card2} w-[320px] h-[450px] bg-white ml-[35px] border-b shadow-2xl border-gray-800 section transition-transform transform hover:scale-105 mt-[15px]`}
          >
            <Image
              src={news2}
              width={392}
              height={311}
              className={`${styles.img2} top-[223px] left-[108px]`}
            />
            <h3
              className={`${styles.info} text-[#1B1C1E] font-Emilo font-bold ml-[24px] mt-[21px] text-[20px]`}
            >
              3rd Annual Convocation - 2023
            </h3>
            <p className={`${styles.date} ml-[24px] mt-[21px]`}>
              Date: 27.09.2023
            </p>
            <button
              className={`${styles.button} flex ml-[24px] mt-[70px] rounded-full hover:bg-[#5C0E14] group`}
            >
              <div
                className={`${styles.circle} w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]`}
              ></div>
              <Image
                src={arrow}
                className={`${styles.arrow} absolute mt-[13px] ml-[11px] group-hover:opacity-0`}
              />
              <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute">
                EXPLORE NEWS
              </p>
            </button>
          </div>
          <div
            className={`${styles.card3} w-[320px] h-[450px] bg-white ml-[35px] border-b shadow-2xl border-gray-800 section transition-transform transform hover:scale-105 mt-[15px]`}
          >
            <Image
              src={news3}
              width={392}
              height={311}
              className={`${styles.img3} top-[223px] left-[108px]`}
            />
            <h3
              className={`${styles.info} text-[#1B1C1E] font-Emilo font-bold ml-[24px] mt-[21px] text-[20px]`}
            >
              VIT-AP Men's Basketball team wins gold medal
            </h3>
            <p className={`${styles.date} ml-[24px] mt-[21px]`}>
              Date: 09.09.2023
            </p>
            <button
              className={`${styles.button} flex ml-[24px] mt-[25px] rounded-full hover:bg-[#5C0E14] group`}
            >
              <div
                className={`${styles.circle} w-[40px] h-[40px] bg-white rounded-full group-hover:w-[190px] group-hover:h-[40px] group-hover:bg-[#5C0E14]`}
              ></div>
              <Image
                src={arrow}
                className={`${styles.arrow} absolute mt-[13px] ml-[11px] group-hover:opacity-0`}
              />
              <p className="ml-[16px] mt-[9px] text-[#5C0E14] font-semibold hover:text-[#FDFEFF] group-hover:ml-[28px] group-hover:mt-[9px] group-hover:absolute">
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