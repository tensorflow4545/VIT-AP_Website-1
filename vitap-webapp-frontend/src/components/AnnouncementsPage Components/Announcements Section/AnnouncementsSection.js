"use client";

import React, { useEffect, useState } from 'react'
import Card from './Card';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { announcements, announcements2 } from '@/constants/index'

const AnnouncementsSection = () => {

  const [active, setActive] = useState(1);

  const leftClick = () => {
    {active === 1 ? setActive(4) :  setActive(active-1)}
  }

  const rightClick = () => {
    {
      active === 4 ? setActive(1) : setActive(active + 1);
    }
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = () => {
      {
        active === 1 ? setData(announcements) : setData(announcements2);
      }
    };
    userData();
  }, [active]);

  return (
    <div className="max-w-[1560px] w-[100%] max-h-[1300px] h-[100%] mx-auto">
      <div
        style={{ backgroundImage: `url("/announcements.png")` }}
        className="relative max-w-[1560px] w-full h-[300px] bg-center mx-auto flex items-center justify-center"
      >
        <h1 className="text-white text-[45px] font-semibold text-center flex justify-center items-center">
          Announcements
        </h1>
      </div>

      <div className="my-[50px] max-w-[1560px] w-full flex flex-wrap gap-5 justify-center items-center">
        {data?.map((announcement) => (
          <Card key={announcement.id} content={announcement.content} />
        ))}
      </div>

      <div className="w-[100%] bg-[#E6CFCF] h-[150px] mt-[-100px] -z-10 flex justify-center items-center gap-5 pt-[20px]">
        <div className="cursor-pointer" onClick={() => leftClick()}>
          <AiOutlineArrowLeft size={30} />
        </div>
        <div
          className={`w-[40px] h-[40px] p-[5px] rounded-lg ${
            active === 1 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`
          } flex justify-center items-center  cursor-pointer`}
          onClick={() => setActive(1)}
        >
          1
        </div>
        <div
          className={`w-[40px] h-[40px] p-[5px] rounded-lg ${
            active === 2 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`
          } flex justify-center items-center  cursor-pointer`}
          onClick={() => setActive(2)}
        >
          2
        </div>
        <div
          className={`w-[40px] h-[40px] p-[5px] rounded-lg ${
            active === 3 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`
          }  flex justify-center items-center  cursor-pointer`}
          onClick={() => setActive(3)}
        >
          3
        </div>
        <div
          className={`w-[40px] h-[40px] p-[5px] rounded-lg ${
            active === 4 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`
          } flex justify-center items-center  cursor-pointer`}
          onClick={() => setActive(4)}
        >
          4
        </div>
        <div className="cursor-pointer" onClick={() => rightClick()}>
          <AiOutlineArrowRight size={30} />
        </div>
      </div>
    </div>
  );
}

export default AnnouncementsSection
