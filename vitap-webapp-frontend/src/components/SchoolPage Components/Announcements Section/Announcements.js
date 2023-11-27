"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// components/AnnouncementCard.js
function AnnouncementCard({ title, children }) {
  return (
    <div className="bg-white p-4 shadow-md  m-2 h-80 ls:m-3 lx:m-4 md:m-5 lg:m-6 min-h-[326px] sm:min-w-[300px] ls:min-w-[200px] md:min-w-[390px] text-center overflow-hidden">
      <h3 className="text-base ls:text-[26px] sm:text-[26px]  lx:text-[26px]  md:text-[26px] lg:text-[26px]  font-semibold mb-2 font-Emilio text-primary mt-[30px]">
        {title}
      </h3>
      <p className="text-sm ls:text-base lx:text-lg md:text-xl font-Montserrat text-secondary mt-[30px]">
        {children}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-primary text-white p-4 ls:p-6 lx:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col justify-center min-h-[591px] font-Emilio">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between mb-10">
          <h1 className=" sm:text-4xl font-bold  lx:ml-4  w-[300px] ls:text-left sm:text-center ">
            Announcements
          </h1>
          <div className="flex flex-row relative items-center justify-end w-[100px] transition-all duration-300 ease-in group mr-[30px] ">
            <div className="Rectangle91 w-[32px] h-[30px] left-[40px] top-[-3px] absolute bg-white opacity-20 transition-transform group-hover:left-[-10px] group-hover:w-[90px] group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out "></div>
            <Link href={"/"} className="mr-2 text-white font-bold">
              See All
            </Link>
            <hr className=" h-[4px] w-[36px] font-bold bg-white max-lx:w-[28px]" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-stretch ls:flex-nowrap ls:justify-start">
          <AnnouncementCard title="Announcement-1">
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur amet consectetur.
          </AnnouncementCard>
          <AnnouncementCard title="Announcement-2">
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur amet consectetur.
          </AnnouncementCard>
          <AnnouncementCard title="Announcement-3">
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur amet consectetur.
          </AnnouncementCard>
        </div>
      </div>
    </div>
  );
}
