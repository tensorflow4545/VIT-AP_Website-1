"use client";
import React, { Component } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai';
import img1 from "../../assets/images/newsPhotos/paper1.png";
import img2 from "../../assets/images/newsPhotos/paper2.png";
import i1 from "../../assets/images/newsPhotos/img1.png";
import i2 from "../../assets/images/newsPhotos/img2.png";
import i3 from "../../assets/images/newsPhotos/img3.png";
import i4 from "../../assets/images/newsPhotos/img4.png";
import i5 from "../../assets/images/newsPhotos/img5.png";
import tr from "../../assets/images/newsPhotos/triangle.png";
import Allnews from "../../assets/images/newsPhotos/allnews.png";
import Link from "next/link";
import styles from "../../styles/AllNews.module.css";

const AllNews = () => {
  const [numactive, setNumactive] = useState(1);
  const leftClick = () => {
    { numactive === 1 ? setNumactive(roundedNumItems) : setNumactive(numactive - 1) }
  }

  const rightClick = () => {
    {
      numactive === roundedNumItems ? setNumactive(1) : setNumactive(numactive + 1);
    }
  }
  const News = [
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    },
    {
      Date: "04 April",
      Title: "V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV "
    }
  ];
  const numItems = News.length;
  const roundedNumItems = Math.ceil(numItems / 15);
  const numArray = Array.from({ length: roundedNumItems }, (_, index) => index + 1);
  const maxPagesToShow = 4;
  return (
    <>
      <div className={`${styles.container} bg-white relative`}>

        <div
          className={`${styles.head} flex overflow-hidden h-[750px] relative  bg-[#e6cfcf]`}
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

        {/* <div className="h-[338px] bg-[#e6cfcf]"></div> */}

        <div
          className={`${styles.newsdiv1}  mt-[440px] relative flex `}
        >

          <div className='grid md:grid-cols-3 max-w-[1250px] md:mx-auto items-center justify-center grid-cols-3 gap-5 mx-[30px]'>
            {News.slice((numactive - 1) * 9, numactive * 9).map((element) => {
              return <div>
                <Link href="/news/newsdetail">
                  <div
                    className={`${styles.div1} w-[384px] h-[428px] border border-black rounded bg-white hover:shadow-2xl cursor-pointer`}
                  >
                    <div className="w-[100%] h-[279px] overflow-hidden absolute p-[2px]">
                      <Image src={Allnews} alt="News Image" width={376} height={279} className={`${styles.newsimg} absolute rounded-[10px]`} />
                    </div>
                    <Image src={tr} className="absolute" />
                    <p className="font-Emilio text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                      {element.Date}
                    </p>
                    <p
                      className={`${styles.divtext} font-Emilio text-[20px] mt-[300px] text-center text-[#600912] font-semibold`}
                    >
                      {element.Title}
                    </p>
                  </div>
                </Link></div>

            })}
          </div>
        </div>


        <div
          className={`${styles.pinkbg} bg-[#E6CFCF] h-[200px] relative mt-[1850px] w-[100%] justify-center items-center`}
        >
          <div class="flex flex-row justify-center">
            <div className="cursor-pointer" onClick={leftClick}>
              <AiOutlineArrowLeft size={30} />
            </div>

            <div>
              {numArray.length > maxPagesToShow && (
                <>
                  {numArray.slice(numactive - 1, numactive + maxPagesToShow - 1).map((num) => (
                    <div
                      key={num}
                      className={`w-[40px] h-[40px] p-[5px] rounded-lg ${numactive === num ? 'bg-black text-white' : 'bg-white text-black'
                        } flex justify-center items-center cursor-pointer`}
                      onClick={() => setNumactive(num)}
                    >
                      {num}
                    </div>
                  ))}
                  <div
                    key="ellipsis"
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg bg-[#F9C6CB] text-black flex justify-center items-center`}
                  >
                    ......
                  </div>
                </>
              )}
            </div>

            <div className="cursor-pointer" onClick={rightClick}>
              <AiOutlineArrowRight size={30} />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AllNews;
