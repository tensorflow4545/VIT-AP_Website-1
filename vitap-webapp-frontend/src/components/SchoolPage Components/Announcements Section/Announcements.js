"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const data  = [
  {id:1,
    title: "DYDO",
    message: "Discover a unique academic path at VIT-AP with our Interdisciplinary Studies degree. Customize your education, explore various fields, and shape your future with endless possibilities and exciting opportunities."
  },
  {id:2,
    title: "MINOR",
    message: "Exciting news at VIT-AP! We've given our classes a makeover. Our updated curriculum brings fresh subjects, diverse viewpoints, and an overall awesome learning experience. Join us as we explore new horizons together and make your educational journey even more inspiring. It's time for a new chapter in learning! "
  },
  {id:3,
    title: "NEW CRICULLUM",
    message: "VIT-AP introduces minors to enrich your specialization. Enhance your academic journey by incorporating a minor into your major, broadening your knowledge, and refining your career options. Explore diverse interests, tailor your education, and achieve a well-rounded skill set for your unique goals."
  },
  {id:4,
    title: "NEW CRICULLUM",
    message: "VIT-AP introduces minors to enrich your specialization. Enhance your academic journey by incorporating a minor into your major, broadening your knowledge, and refining your career options. Explore diverse interests, tailor your education, and achieve a well-rounded skill set for your unique goals."
  },
  // {id:5,
  //   title: "",
  //   message: ""
  // }
  
]

function AnnouncementCard({ title, message }) {
  return (
    <div className="bg-white p-4 shadow-md  m-2 h-auto text-center overflow-hidden">
      <h3 className="  sm:text-[30px]  text-[26px]  font-semibold mb-2 font-Emilio text-primary mt-[30px]">
        {title}
      </h3>
      <p className="text-[16px] sm:text-base md:text-lg  font-Montserrat text-secondary mt-[30px]">
        {message}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-primary text-white p-4 ls:p-6 lx:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col justify-center min-h-[591px] font-Emilio">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between mb-10">
          <h1 className=" sm:text-[48px] text-[30px] font-bold  md:ml-4  lg:w-[300px] md:text-left sm:text-center ">
            Announcements
          </h1>
          <div className="flex flex-row relative items-center justify-end w-fit transition-all duration-300 ease-in group mr-[30px] ">
            <div className="Rectangle91 w-[32px] h-[30px] left-[40px] top-[-3px] absolute bg-white opacity-20 transition-transform group-hover:left-[-10px] group-hover:w-[90px] group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out "></div>
            <Link href={"/"} className="mr-2 text-[18px] text-white font-bold">
              See All
            </Link>
            <hr className=" h-[4px] w-[36px] font-bold bg-white max-lg:w-[28px]" />
          </div>
        </div>

        <div className="grid xl:grid-rows-1 xl:grid-cols-3  ">
          {data.map((item) => <AnnouncementCard key={item.id} title={item.title} message={item.message}/>)}
        </div>
      </div>
    </div>
  );
}
