"use client";

import { eventsMain } from '@/constants';
import React, { useState } from 'react'
import Card from './Card';

const OurEvents = () => {

  const [active, setActive] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-[800px] max-xxl:min-h-[1100px] max-md:min-h-[1200px] max-lx:min-h-[1300px]">
        <div className="w-full bg-backgroundRed h-[420px] px-[110px] max-md:px-[40px]  max-ls:px-[30px] py-2">
          <div className="flex justify-between items-center">
            <h1 className="text-[#51060D] text-[48px] font-bold max-lx:text-[32px]">
              Our Events
            </h1>
            <div className="flex flex-row gap-2 items-center justify-center hover:bg-white transition-all duration-300 ease-in">
              <h1 className="text-[#5C0E14] text-[18px] font-semibold max-lx:text-[15px]">
                See all
              </h1>
              <hr className=" h-[2px] w-[36px] bg-[#5C0E14] max-lx:w-[28px]" />
            </div>
          </div>
          <h1 className="font-Montserrant text-[18px] text-secondary max-w-[787px] pt-3">
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.
          </h1>
          <div className="flex gap-5 max-ls:gap-4 justify-center items-center mt-[38px] max-ls:flex-col flex-wrap">
            {eventsMain.map((event) => (
              <Card
                imgUrl={event.imgUrl}
                date={event.date}
                index={event.id}
                title={event.title}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-[50px] max-lx:flex-col max-lx:text-[12px]">
            <div className="max-w-[370px] min-h-[125px] flex gap-4">
              <div className="flex flex-1 items-center justify-center text-center h-[65px] w-[65px] p-[15px] bg-[#5C0E14] text-white text-[20px]">
                <h1>04 Apr</h1>
              </div>
              <div className="flex-2 w-full">
                <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4 ">
                  CSI Meet’n Greet’23
                </h1>
                <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. A nulla donec cursus
                  tincidunt
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[125px] flex gap-5">
              <div className="flex flex-1 items-center justify-center text-center h-[65px] w-[65px] p-[15px] bg-[#5C0E14] text-white text-[20px]">
                <h1>04 Apr</h1>
              </div>
              <div className="flex-2 w-full">
                <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4">
                  CSI Meet’n Greet’23
                </h1>
                <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. A nulla donec cursus
                  tincidunt
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[125px] flex gap-5">
              <div className="flex flex-1 items-center justify-center text-center h-[65px] w-[65px] p-[15px] bg-[#5C0E14] text-white text-[20px]">
                <h1>04 Apr</h1>
              </div>
              <div className="flex-2 w-full">
                <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4">
                  CSI Meet’n Greet’23
                </h1>
                <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. A nulla donec cursus
                  tincidunt
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[125px] flex gap-5 max-lx:hidden">
              <div className="flex flex-1 items-center justify-center text-center h-[65px] w-[65px] p-[15px] bg-[#5C0E14] text-white text-[20px]">
                <h1>04 Apr</h1>
              </div>
              <div className="flex-2 w-full">
                <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4">
                  CSI Meet’n Greet’23
                </h1>
                <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. A nulla donec cursus
                  tincidunt
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[125px] flex gap-5 max-lx:hidden">
              <div className="flex flex-1 items-center justify-center text-center h-[65px] w-[65px] p-[15px] bg-[#5C0E14] text-white text-[20px]">
                <h1>04 Apr</h1>
              </div>
              <div className="flex-2 w-full">
                <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4">
                  CSI Meet’n Greet’23
                </h1>
                <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. A nulla donec cursus
                  tincidunt
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[125px] flex gap-5 max-lx:hidden">
              <div className="flex flex-1 items-center justify-center text-center h-[65px] w-[65px] p-[15px] bg-[#5C0E14] text-white text-[20px]">
                <h1>04 Apr</h1>
              </div>
              <div className="flex-2 w-full">
                <h1 className="font-bold text-[18px] hover:underline hover:underline-offset-4">
                  CSI Meet’n Greet’23
                </h1>
                <p className="max-w-[280px] max-lx:max-w-[360px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. A nulla donec cursus
                  tincidunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurEvents
