"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import axios from "axios";

export default function News() {
  // const News = [
  //   {
  //     img: "/news.png",
  //     head: "Meet and Greet’23",
  //     desc: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur."
  //   }, 
  //   {
  //     img: "/news.png",
  //     head: "Meet and Greet’23",
  //     desc: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur."
  //   },
  //   {
  //     img: "/news.png",
  //     head: "Meet and Greet’23",
  //     desc: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur."
  //   }
  // ];
  const [News, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/events-datas?populate=*`,{
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

  return (
    <>
      <div class="w-full h-[800px] bg-white">

      <div className="w-full h-[400px] bg-red-100 pt-[66px] px-[108px]">
          <div className="flex flex-row items-center justify-between mb-10">
            <h1 className="w-fit sm:text-[48px] font-bold font-Emilio lx:ml-4  ls:w-fit ls:text-left sm:text-center ">
              News and Events
            </h1>
            <div className="flex flex-row relative items-center justify-end w-[100px] transition-all duration-300 ease-in group mr-[30px] ">
              <div className="Rectangle91 w-[32px] h-[30px] left-[40px] top-[-3px] absolute bg-white bg-opacity-30 transition-transform group-hover:bg-white group-hover:bg-opacity-30 group-hover:left-[-10px] group-hover:w-[90px] group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out "></div>
              <Link href={"/"} className="mr-2 text-primary font-bold">
                See All
              </Link>
              <hr className=" h-[4px] w-[36px] font-bold bg-primary max-lx:w-[28px]" />
            </div>
          </div>
          {/* flex */}
          <div className="flex flex-row pt-[63px] justify-center items-center">

            {News.map((news) => {
              return <div>
                {/* card */}

                <div className="basis w-[350px] h-[450px] bg-white rounded-sm mr-[24px] trasnition duration-1000 hover:-translate-y-5 ">
                  <Link href={"/"}>
                    <div className="w-[350px] h-[241px] relative overflow-hidden">
                      <Image className="absolute z-0" width={350} height={241} src={`${process.env.NEXT_PUBLIC_API_URL}${news?.Image.data[0].attributes.url}`} alt={news?.Image.data[0].attributes.alternativeText || 'Alt Text'}></Image>
                      <div className="w-[53px] h-[72px] bg-red-900 absolute z-10 right-5 top-7 rounded-md text-center justify-center items-center">
                        <p className="text-[16px] text-white text-emilio font-semibold pt-[8px] px-[11px] text-center">{news.Date}</p>
                        {/* <p className="text-[28px] text-white text-emilio font-semibold px-[11px]">23</p> */}
                      </div>
                    </div>

                    <p className="text-[28px] w-[350px] h-[100px] text-dark font-[600px] font-Emilio pt-[16px] overflow-hidden text-ellipsis">{news.Title}</p>
                    <p className="text-[18px] w-[350px] h-[90px] text-zinc-400 text-montserrat font-[400px] pt-[9px] overflow-hidden text-ellipsis">{news.Description}</p>
                    <p className="text-[18px] text-red-950 font-medium text-montserrat pt-[16px]">Know More</p>
                  </Link>
                </div>
              </div>
            })}


          </div>

        </div>

      </div>

    </>
  )
}
