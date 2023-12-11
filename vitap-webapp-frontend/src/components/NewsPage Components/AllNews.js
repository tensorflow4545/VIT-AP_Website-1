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
import styles from "../../styles/News.module.css";

const AllNews = () => {
  return (
    <>
      <div className={`${styles.container} bg-[#e6cfcf] relative top-[100px]`}>
        <div
          className={`${styles.head} flex overflow-hidden h-[750px] absolute bg-[#e6cfcf]`}
        >
          <Image src={img1} />
          <Image src={img2} />
          <p className="font-Emilo text-[134px] absolute font-bold text-[#5c0e14] mt-[229px] ml-[74px]">
            NEWS
          </p>
          <p className="font-Emilo text-[67px] text-[#5C0E14] absolute ml-[74px] mt-[380px] font-semibold">
            About VIT-AP
          </p>
          <Image src={i1} className="absolute mt-[54px] ml-[550px]" />
          <Image src={i2} className="absolute mt-[15px] ml-[1200px]" />
          <Image src={i4} className="absolute ml-[600px] mt-[400px]" />
          <Image
            src={i5}
            width={250}
            height={250}
            className="absolute mt-[384px] ml-[1150px]"
          />
          <Image
            src={i3}
            width={300}
            height={450}
            className="absolute mt-[200px] ml-[900px]"
          />
        </div>
        <div className="h-[338px] bg-[#e6cfcf]"></div>
        <div className="mt-[440px] absolute flex ml-[120px]">
          <Link href="/NewsInfo">
            <div className="w-[384px] h-[428px] border border-black rounded bg-white hover:shadow-2xl cursor-pointer">
              <Image src={news} className="absolute" />
              <Image src={tr} className="absolute" />
              <p className="font-Emilo text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p className="font-Emilo text-[20px] mt-[300px] text-center text-[#600912] font-semibold">
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
          <Link href="/NewsInfo">
            <div className="w-[384px] h-[428px] border border-black ml-[50px] rounded bg-white hover:shadow-2xl cursor-pointer">
              <Image src={news} className="absolute" />
              <Image src={tr} className="absolute" />
              <p className="font-Emilo text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p className="font-Emilo text-[20px] mt-[300px] text-center text-[#600912] font-semibold">
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
          <Link href="/NewsInfo">
            <div className="w-[384px] h-[428px] border border-black ml-[50px] rounded bg-white hover:shadow-2xl cursor-pointer">
              <Image src={news} className="absolute" />
              <Image src={tr} className="absolute" />
              <p className="font-Emilo text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p className="font-Emilo text-[20px] mt-[300px] text-center text-[#600912] font-semibold">
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
        </div>
        <div className="mt-[916px] absolute flex ml-[120px]">
          <Link href="/NewsInfo">
            <div className="w-[384px] h-[428px] border border-black rounded bg-white hover:shadow-2xl cursor-pointer">
              <Image src={news} className="absolute" />
              <Image src={tr} className="absolute" />
              <p className="font-Emilo text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p className="font-Emilo text-[20px] mt-[300px] text-center text-[#600912] font-semibold">
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
          <Link href="/NewsInfo">
            <div className="w-[384px] h-[428px] border border-black ml-[50px] rounded bg-white hover:shadow-2xl cursor-pointer">
              <Image src={news} className="absolute" />
              <Image src={tr} className="absolute" />
              <p className="font-Emilo text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p className="font-Emilo text-[20px] mt-[300px] text-center text-[#600912] font-semibold">
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
          <Link href="/NewsInfo">
            <div className="w-[384px] h-[428px] border border-black ml-[50px] rounded bg-white hover:shadow-2xl cursor-pointer">
              <Image src={news} className="absolute" />
              <Image src={tr} className="absolute" />
              <p className="font-Emilo text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p className="font-Emilo text-[20px] mt-[300px] text-center text-[#600912] font-semibold">
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
        </div>
        <div className="bg-[#E6CFCF] h-[227px] absolute mt-[1750px] w-[100%]">
          <div className="flex items-center justify-center absolute ml-[47%] mt-[10%]">
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
        <div className="mt-[1392px] absolute flex ml-[120px]">
          <Link href="/NewsInfo">
            <div className="w-[384px] h-[428px] border border-black rounded bg-white hover:shadow-2xl cursor-pointer">
              <Image src={news} className="absolute" />
              <Image src={tr} className="absolute" />
              <p className="font-Emilo text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p className="font-Emilo text-[20px] mt-[300px] text-center text-[#600912] font-semibold">
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
          <Link href="/NewsInfo">
            <div className="w-[384px] h-[428px] border border-black ml-[50px] rounded bg-white hover:shadow-2xl cursor-pointer">
              <Image src={news} className="absolute" />
              <Image src={tr} className="absolute" />
              <p className="font-Emilo text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p className="font-Emilo text-[20px] mt-[300px] text-center text-[#600912] font-semibold">
                V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad
                ujs hfuLaunch padV{" "}
              </p>
            </div>
          </Link>
          <Link href="/NewsInfo">
            <div className="w-[384px] h-[428px] border border-black ml-[50px] rounded bg-white hover:shadow-2xl cursor-pointer">
              <Image src={news} className="absolute" />
              <Image src={tr} className="absolute" />
              <p className="font-Emilo text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                04 Apr
              </p>
              <p className="font-Emilo text-[20px] mt-[300px] text-center text-[#600912] font-semibold">
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
