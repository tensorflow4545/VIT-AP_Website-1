"use client";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
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
    <div className="w-full h-[800px] bg-primary pl-[40px]">
      <div className="w-full h-[800px] bg-white">
        <p className="text-[48px] text-primary font-bold text-emilio pt-[68px] pl-[73px]">Research and Innovation</p>

        {/* flex */}
        <div className="flex flex-row pt-[63px] pl-[80px]">
          {Research.map((research, index) => (
            <div key={index} className="basis w-[350px] h-[550px] bg-white rounded-sm mr-[24px] rounded hover:shadow-xl">
              <div className="w-[350px] h-[311px] relative">
                <Image className="absolute z-0" width={350} height={311} src={research.img} alt="Event Image" />
              </div>

              <p className="text-[28px] text-dark font-medium text-emilio pt-[16px] pl-[20px]">{research.head}</p>
              <p className="text-[18px] text-zinc-400 text-montserrat font-[400px] pt-[9px] pl-[20px] pb-[10px]">{research.desc}</p>
              <Link href="/">
                <div className="w-[200px] h-[50px] bg-white hover:bg-red-950 rounded-full px-[10px] py-[10px] ml-[20px] justify-center hover:text-white text-red-950">
                  <div className="flex flex-row">
                    <p className="text-[18px] text-red-950 text-montserrat text-center pl-[5px] pt-[3px]"><FaArrowRight /></p>
                    <p className="text-[18px] text-montserrat text-center pl-[5px]">EXPLORE MORE</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
