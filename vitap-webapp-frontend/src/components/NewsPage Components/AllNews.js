import React from "react";
import Image from "next/image";
import img1 from "../../assets/images/newsPhotos/paper1.png";
import img2 from "../../assets/images/newsPhotos/paper2.png";
import i1 from "../../assets/images/newsPhotos/img1.png";
import i2 from "../../assets/images/newsPhotos/img2.png";
import i3 from "../../assets/images/newsPhotos/img3.png";
import i4 from "../../assets/images/newsPhotos/img4.png";
import i5 from "../../assets/images/newsPhotos/img5.png";
import news from "../../assets/images/newsPhotos/allnews.png";
import tr from "../../assets/images/newsPhotos/triangle.png";
import info from "./NewsInfo";
import Link from "next/link";
import styles from "../../styles/AllNews.module.css";

const AllNews = () => {
  return (
    <>
      <div className={`${styles.container} bg-[#e6cfcf] relative`}>
        <div
          className={`${styles.head} flex overflow-hidden h-[750px] absolute bg-[#e6cfcf]`}
        >
          <Image src={img1} className={`${styles.img}`} />
          <Image src={img2} className={`${styles.img}`} />
          <p
            className={`${styles.heading} font-Emilio text-[96px] absolute font-bold text-[#5c0e14] mt-[229px] ml-[74px]`}
          >
            NEWS
          </p>
          <p
            className={`${styles.heading2} font-Emilio text-[48px] text-[#5C0E14] absolute ml-[74px] mt-[380px] font-semibold`}
          >
            About VIT-AP
          </p>
          <Image
            src={i1}
            className={`${styles.img1} absolute mt-[54px] ml-[550px]`}
          />
          <Image
            src={i2}
            className={`${styles.img2} absolute mt-[15px] ml-[1200px]`}
          />
          <Image
            src={i4}
            className={`${styles.img4} absolute ml-[600px] mt-[400px]`}
          />
          <Image
            src={i5}
            width={250}
            height={250}
            className={`${styles.img5} absolute mt-[384px] ml-[1150px]`}
          />
          <Image
            src={i3}
            width={300}
            height={450}
            className={`${styles.img3} absolute mt-[200px] ml-[900px]`}
          />
        </div>
        <div className="h-[338px] bg-[#e6cfcf]"></div>
        <div
          className={`${styles.newsdiv1} mt-[440px] absolute flex ml-[120px]`}
        >
          <Link href="/NewsInfo">
            <div
              className={`${styles.div1} w-[384px] h-[428px] border border-black rounded bg-white hover:shadow-2xl cursor-pointer`}
            >
              <Image src={news} className={`${styles.newsimg} absolute`} />
              <Image src={tr} className="absolute" />
              <p className="font-Emilio text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p
                className={`${styles.divtext} font-Emilio text-[20px] mt-[300px] text-center text-[#600912] font-semibold`}
              >
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
          <Link href="/NewsInfo">
            <div
              className={`${styles.div2} w-[384px] h-[428px] border border-black ml-[50px] rounded bg-white hover:shadow-2xl cursor-pointer`}
            >
              <Image src={news} className={`${styles.newsimg} absolute`} />
              <Image src={tr} className="absolute" />
              <p className="font-Emilio text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p
                className={`${styles.divtext} font-Emilio text-[20px] mt-[300px] text-center text-[#600912] font-semibold`}
              >
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
          <Link href="/NewsInfo">
            <div
              className={`${styles.div3} w-[384px] h-[428px] border border-black ml-[50px] rounded bg-white hover:shadow-2xl cursor-pointer`}
            >
              <Image src={news} className="absolute" />
              <Image src={tr} className="absolute" />
              <p className="font-Emilio text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p className="font-Emilio text-[20px] mt-[300px] text-center text-[#600912] font-semibold">
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
        </div>
        <div
          className={`${styles.newsdiv2} mt-[916px] absolute flex ml-[120px]`}
        >
          <Link href="/NewsInfo">
            <div
              className={`${styles.div1} w-[384px] h-[428px] border border-black rounded bg-white hover:shadow-2xl cursor-pointer`}
            >
              <Image src={news} className={`${styles.newsimg} absolute`} />
              <Image src={tr} className="absolute" />
              <p className="font-Emilio text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p
                className={`${styles.divtext} font-Emilio text-[20px] mt-[300px] text-center text-[#600912] font-semibold`}
              >
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
          <Link href="/NewsInfo">
            <div
              className={`${styles.div2} w-[384px] h-[428px] border border-black ml-[50px] rounded bg-white hover:shadow-2xl cursor-pointer`}
            >
              <Image src={news} className={`${styles.newsimg} absolute`} />
              <Image src={tr} className="absolute" />
              <p className="font-Emilio text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p
                className={`${styles.divtext} font-Emilio text-[20px] mt-[300px] text-center text-[#600912] font-semibold`}
              >
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
          <Link href="/NewsInfo">
            <div
              className={`${styles.div3} w-[384px] h-[428px] border border-black ml-[50px] rounded bg-white hover:shadow-2xl cursor-pointer`}
            >
              <Image src={news} className="absolute" />
              <Image src={tr} className="absolute" />
              <p className="font-Emilio text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p className="font-Emilio text-[20px] mt-[300px] text-center text-[#600912] font-semibold">
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
        </div>
        <div
          className={`${styles.pinkbg} bg-[#E6CFCF] h-[227px] absolute mt-[1750px] w-[100%]`}
        >
          <div
            className={`${styles.menu} flex items-center justify-center absolute ml-[47%] mt-[10%]`}
          >
            <ul className="flex list-none space-x-2">
              <li
                href="#"
                className="items-center justify-center w-[12px] h-[12px]"
              >
                <a>&lt;</a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center w-[12px] h-[12px] bg-white text-white rounded-full focus:outline-none focus:border-2 focus:border-black ml-[30px]"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center w-[12px] h-[12px] bg-white text-white rounded-full focus:outline-none focus:border-2 focus:border-black"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center w-[12px] h-[12px] bg-white text-white rounded-full focus:outline-none focus:border-2 focus:border-black mr-[30px]"
                ></a>
              </li>
              <li>
                <a>&gt;</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${styles.newsdiv} mt-[1392px] absolute flex ml-[120px]`}
        >
          <Link href="/NewsInfo">
            <div
              className={`${styles.div1} w-[384px] h-[428px] border border-black rounded bg-white hover:shadow-2xl cursor-pointer`}
            >
              <Image src={news} className={`${styles.newsimg} absolute`} />
              <Image src={tr} className="absolute" />
              <p className="font-Emilio text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p
                className={`${styles.divtext} font-Emilio text-[20px] mt-[300px] text-center text-[#600912] font-semibold`}
              >
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
          <Link href="/NewsInfo">
            <div
              className={`${styles.div2} w-[384px] h-[428px] border border-black ml-[50px] rounded bg-white hover:shadow-2xl cursor-pointer`}
            >
              <Image src={news} className={`${styles.newsimg} absolute`} />
              <Image src={tr} className="absolute" />
              <p className="font-Emilio text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p
                className={`${styles.divtext} font-Emilio text-[20px] mt-[300px] text-center text-[#600912] font-semibold`}
              >
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
          <Link href="/NewsInfo">
            <div
              className={`${styles.div3} w-[384px] h-[428px] border border-black ml-[50px] rounded bg-white hover:shadow-2xl cursor-pointer`}
            >
              <Image src={news} className="absolute" />
              <Image src={tr} className="absolute" />
              <p className="font-Emilio text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p className="font-Emilio text-[20px] mt-[300px] text-center text-[#600912] font-semibold">
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllNews;
