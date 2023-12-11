"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function News() {
  const News = [
    {
      img: "/news.png",
      head: "Meet and Greet’23",
      desc: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur."
    },
    {
      img:"/news.png",
      head:"Meet and Greet’23",
      desc:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur."
   },
   {
    img:"/news.png",
    head:"Meet and Greet’23",
    desc:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur."
 }
];
    return(
      <>
        <div class="w-full h-[800px] bg-white">

      
        <div class="w-full h-[400px] bg-red-100 pt-[66px] px-[108px]">
          <p class="text-[48px] text-red-950 font-bold text-emilio">News and Events</p>
          <div className="flex flex-row relative items-center float-right w-[100px] transition-all duration-300 ease-in group mr-[30px] ">
            <div className="Rectangle91 w-[32px] h-[30px] left-[40px] top-[-3px] absolute bg-white opacity-20 transition-transform group-hover:left-[-10px] group-hover:w-[90px] group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out "></div>
            <Link href={"/"} className="mr-2 text-red-950 font-bold">
              See All
            </Link>
            <hr className=" h-[4px] w-[36px] font-bold bg-red-950 max-lx:w-[28px]" />
          </div>
          {/* flex */}
          <div class="flex flex-row pt-[63px]">
            
            {News.map((news)=>{
               return <div>
               {/* card */}
               
           <div class="basis w-[350px] h-[450px] bg-white rounded-sm mr-[24px] trasnition duration-1000 hover:-translate-y-5 ">
           <div class="w-[350px] h-[241px] relative">

            <Image class="absolute z-0" width={350} height={241} src={news.img} alt="Event Image"></Image>
            <div class="w-[53px] h-[72px] bg-red-900 absolute z-10 right-5 top-7 rounded-md">
         
                <p class="text-[16px] text-white text-emilio font-semibold pt-[8px] px-[13px]">Oct</p>
                <p class="text-[28px] text-white text-emilio font-semibold px-[11px]">23</p>
            </div>           

           </div>
            })}


           <p class="text-[28px] text-dark font-[600px] text-emilio pt-[16px]">{news.head}</p>
           <p class="text-[18px] text-zinc-400 text-montserrat font-[400px] pt-[9px]">{news.desc}</p>
           <p class="text-[18px] text-red-950 font-medium text-montserrat pt-[16px]">Know More</p>
           </div>
           </div>
          </div>

        </div>

      </>
    )
}

export default News;

