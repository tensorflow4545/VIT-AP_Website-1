"use client";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"
import { useState } from "react";
import Link from "next/link";
export default function Research() {
  const Research = [
    {
      img: "/research.png",
      head: "Research Groups",
      desc: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur."
    },
    {
      img: "/research.png",
      head: "Research Groups",
      desc: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur."
    },
    {
      img: "/research.png",
      head: "Research Groups",
      desc: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur."
    }
  ];


  return (
    <>
      <div class="w-full h-[800px] bg-primary pl-[40px]">
        <div class="w-full h-[800px] bg-white">
          <p class="text-[48px] text-primary font-bold font-Emilio pt-[68px] pl-[73px]">Research and Innovation</p>

          {/* flex */}
          <div class="flex flex-row pt-[63px] pl-[80px] justify-center items-center">

            {Research.map((research) => {
              {/* card */ }
              return <div>
                <div class="basis w-[350px] h-[550px] bg-white rounded-sm mr-[24px] rounded group-hover:shadow-xl group">
                  <Link href={"/"}>
                    <div class="w-[350px] h-[311px] relative">
                      <Image class="absolute z-0" width={350} height={311} src={research.img} alt="Event Image"></Image>
                    </div>

                    <p class="text-[24px] text-dark font-semibold font-Emilio pt-[16px] pl-[20px]">{research.head}</p>
                    <p class="text-[18px] text-zinc-400 text-montserrat font-[400px] pt-[9px] pl-[20px] pb-[10px]">{research.desc}</p>
                    <div class={`w-[200px] h-[50px] bg-white group-hover:bg-primary rounded-full px-[10px] py-[10px] ml-[20px] justify-centers group-hover:text-white text-red-950`}>
                      <div class="flex flex-row"><p class="text-[18px] text-primary text-montserrat text-center pl-[5px] pt-[3px]"><FaArrowRight /></p>
                        <p class="text-[18px]  text-montserrat text-center pl-[5px]">EXPLORE MORE</p></div>
                    </div>
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