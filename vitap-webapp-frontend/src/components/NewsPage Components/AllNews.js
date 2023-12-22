"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai';
import img1 from "@/assets/images/newsPhotos/paper1.png";
import img2 from "@/assets/images/newsPhotos/paper2.png";
import i1 from "@/assets/images/newsPhotos/img1.png";
import i2 from "@/assets/images/newsPhotos/img2.png";
import i3 from "@/assets/images/newsPhotos/img3.png";
import i4 from "@/assets/images/newsPhotos/img4.png";
import i5 from "@/assets/images/newsPhotos/img5.png";
import tr from "@/assets/images/newsPhotos/triangle.png";
import Link from "next/link";
import styles from "@/styles/AllNews.module.css";
import Component from "../HomePage Components/Footer Section/Component";

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

  const [News, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/news-page-datas?populate=*`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        });

        if (response.data && Array.isArray(response.data.data)) {
          const extractedAttributes = response.data.data.map((item) => item.attributes);
          setNews(extractedAttributes);
        } else {
          console.error('The "data" property in the API response is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const numItems = News.length;
  const roundedNumItems = Math.ceil(numItems / 9);
  const numArray = Array.from({ length: roundedNumItems }, (_, index) => index + 1);
  const maxPagesToShow = 4;

  return (
    <>
      <div class=""></div>
      <div className={`${styles.container} bg-white relative`}>
        <div className={`${styles.head} flex overflow-hidden h-[750px] absolute bg-[#e6cfcf]`}>
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
        <div className={`ml-[30px] w-screen absolute mt-[440px] absolute flex ml-[120px] justify-center items-center`}>
          <div className='grid md:grid-cols-3 max-w-[1250px] md:mx-auto items-center justify-center grid-cols-3 gap-5 mx-[30px]'>
            {News.slice((numactive - 1) * 9, numactive * 9).map((element) => {
              return <div>
                <Link href="/news/newsdetail">
                  <div className={`${styles.div1} w-[384px] h-[428px] border border-black rounded bg-white hover:shadow-2xl cursor-pointer`}>
                    <div className="w-[100%] h-[279px] overflow-hidden absolute p-[2px]">
                      <Image src={`${process.env.NEXT_PUBLIC_API_URL}${element?.Image.data[0].attributes.url}`} alt={element?.Image.data[0].attributes.alternativeText} width={376} height={279} className={`${styles.newsimg} absolute rounded-[10px]`} />
                    </div>
                    <Image src={tr} className="absolute" />
                    <p className="font-Emilio text-bold absolute text-[#FDFEFF] text-[20px] w-[10px] text-center ml-[19px]">
                      {element?.Date}
                    </p>
                    <p className={`font-Emilio text-[20px] mt-[300px] text-center text-[#600912] font-semibold`}>
                      {element?.Title}
                    </p>
                  </div>
                </Link>
              </div>
            })}
          </div>
        </div>


        <div className={`relative bg-[#E6CFCF] h-[180px] top-[1850px] w-[100%] justify-center items-center`}>
          <div class="flex flex-row justify-center relative top-[50%]">
            <div className="cursor-pointer mr-[20px] mt-[5px]" onClick={leftClick}>
              <AiOutlineArrowLeft size={30} />
            </div>

            <div className="flex flex-wrap gap-5">
              {numArray.length > maxPagesToShow ? (
                <>
                  {numArray.slice(numactive - 1, numactive + maxPagesToShow - 1).map((num) => (
                    <div
                      key={num}
                      className={`w-[40px] h-[40px] p-[5px] rounded-lg mb-2 ${numactive === num ? 'bg-black text-white' : 'bg-white text-black'
                        } flex justify-center items-center cursor-pointer`}
                      onClick={() => setNumactive(num)}
                    >
                      {num}
                    </div>
                  ))}
                  <div
                    key="ellipsis"
                    className="w-[40px] h-[40px] p-[5px] rounded-lg mb-2 bg-[#F9C6CB] text-black flex justify-center items-center"
                  >
                    ......
                  </div>
                </>
              ) : (
                <>
                  {numArray.map((num) => (
                    <div
                      key={num}
                      className={`w-[40px] h-[40px] p-[5px] rounded-lg mb-2 ${numactive === num ? 'bg-black text-white' : 'bg-white text-black'
                        } flex justify-center items-center cursor-pointer`}
                      onClick={() => setNumactive(num)}
                    >
                      {num}
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="cursor-pointer ml-[20px] mt-[5px]" onClick={rightClick}>
              <AiOutlineArrowRight size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNews;