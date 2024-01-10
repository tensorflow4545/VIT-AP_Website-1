"use client";

import React, { useState } from 'react'
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const NewsPage2 = () => {

    const [active, setActive] = useState(1);

    const leftClick = () => {
        { active === 1 ? setActive(4) : setActive(active - 1) }
    }

    const rightClick = () => {
        {
            active === 4 ? setActive(1) : setActive(active + 1);
        }
    };

    return (
        <div className='w-full max-h-[2500px]'>
            <div className='h-[85px] sm:h-[220px] w-full bg-[#E6CFCF]'></div>
            <div className='h-[160px] w-full bg-gradient-to-b from-[#E6CFCF] to-white'></div>
            <div className='grid grid-cols-2 sm:grid-cols-3 px-[25px] md:px-[50px] lg:px-[100px] -mt-[180px] sm:-mt-[220px] gap-[24px]'>
                <div className="min-h-[230px] sm:min-h-[425px] border border-black bg-white rounded-md relative">
                    <div className=" w-full h-[70%] relative">
                        <Image src={"/newsSection.png"} fill />
                    </div>
                    <Image src={"/newsPolygon.png"} height={103} width={150} className='absolute top-0 left-0 hidden sm:block' />
                    <Image src={"/newsPolygon.png"} height={60} width={79} className='absolute top-0 left-0 block sm:hidden' />
                    <p className='absolute top-4 font-Emilio text-[8px] sm:text-[18px] font-semibold text-white left-4 z-10'>04 <br /> April</p>
                    <div className='flex justify-center items-center w-full h-[30%] text-left p-[3px] sm:p-[10px] lg:p-[20px] text-[10px] md:text-[16px] lg:text-[20px] font-semibold text-[#650010]'>
                        <p>V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV</p>
                    </div>

                </div>

                <div className="min-h-[230px] sm:min-h-[425px] border border-black bg-white rounded-md relative">
                    <div className=" w-full h-[70%] relative">
                        <Image src={"/newsSection.png"} fill />
                    </div>
                    <Image src={"/newsPolygon.png"} height={103} width={150} className='absolute top-0 left-0 hidden sm:block' />
                    <Image src={"/newsPolygon.png"} height={60} width={79} className='absolute top-0 left-0 block sm:hidden' />
                    <p className='absolute top-4 font-Emilio text-[8px] sm:text-[18px] font-semibold text-white left-4 z-10'>04 <br /> April</p>
                    <div className='flex justify-center items-center w-full h-[30%] text-left p-[3px] sm:p-[10px] lg:p-[20px] text-[10px] md:text-[16px] lg:text-[20px] font-semibold text-[#650010]'>
                        <p>V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV</p>
                    </div>

                </div>

                <div className="min-h-[230px] sm:min-h-[425px] border border-black bg-white rounded-md relative">
                    <div className=" w-full h-[70%] relative">
                        <Image src={"/newsSection.png"} fill />
                    </div>
                    <Image src={"/newsPolygon.png"} height={103} width={150} className='absolute top-0 left-0 hidden sm:block' />
                    <Image src={"/newsPolygon.png"} height={60} width={79} className='absolute top-0 left-0 block sm:hidden' />
                    <p className='absolute top-4 font-Emilio text-[8px] sm:text-[18px] font-semibold text-white left-4 z-10'>04 <br /> April</p>
                    <div className='flex justify-center items-center w-full h-[30%] text-left p-[3px] sm:p-[10px] lg:p-[20px] text-[10px] md:text-[16px] lg:text-[20px] font-semibold text-[#650010]'>
                        <p>V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV</p>
                    </div>

                </div>

                <div className="min-h-[230px] sm:min-h-[425px] border border-black bg-white rounded-md relative">
                    <div className=" w-full h-[70%] relative">
                        <Image src={"/newsSection.png"} fill />
                    </div>
                    <Image src={"/newsPolygon.png"} height={103} width={150} className='absolute top-0 left-0 hidden sm:block' />
                    <Image src={"/newsPolygon.png"} height={60} width={79} className='absolute top-0 left-0 block sm:hidden' />
                    <p className='absolute top-4 font-Emilio text-[8px] sm:text-[18px] font-semibold text-white left-4 z-10'>04 <br /> April</p>
                    <div className='flex justify-center items-center w-full h-[30%] text-left p-[3px] sm:p-[10px] lg:p-[20px] text-[10px] md:text-[16px] lg:text-[20px] font-semibold text-[#650010]'>
                        <p>V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV</p>
                    </div>

                </div>

                <div className="min-h-[230px] sm:min-h-[425px] border border-black bg-white rounded-md relative">
                    <div className=" w-full h-[70%] relative">
                        <Image src={"/newsSection.png"} fill />
                    </div>
                    <Image src={"/newsPolygon.png"} height={103} width={150} className='absolute top-0 left-0 hidden sm:block' />
                    <Image src={"/newsPolygon.png"} height={60} width={79} className='absolute top-0 left-0 block sm:hidden' />
                    <p className='absolute top-4 font-Emilio text-[8px] sm:text-[18px] font-semibold text-white left-4 z-10'>04 <br /> April</p>
                    <div className='flex justify-center items-center w-full h-[30%] text-left p-[3px] sm:p-[10px] lg:p-[20px] text-[10px] md:text-[16px] lg:text-[20px] font-semibold text-[#650010]'>
                        <p>V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV</p>
                    </div>

                </div>

                <div className="min-h-[230px] sm:min-h-[425px] border border-black bg-white rounded-md relative">
                    <div className=" w-full h-[70%] relative">
                        <Image src={"/newsSection.png"} fill />
                    </div>
                    <Image src={"/newsPolygon.png"} height={103} width={150} className='absolute top-0 left-0 hidden sm:block' />
                    <Image src={"/newsPolygon.png"} height={60} width={79} className='absolute top-0 left-0 block sm:hidden' />
                    <p className='absolute top-4 font-Emilio text-[8px] sm:text-[18px] font-semibold text-white left-4 z-10'>04 <br /> April</p>
                    <div className='flex justify-center items-center w-full h-[30%] text-left p-[3px] sm:p-[10px] lg:p-[20px] text-[10px] md:text-[16px] lg:text-[20px] font-semibold text-[#650010]'>
                        <p>V - Launch pad ujs hfuLaunch padV Launch pad ujs hfuLaunch pad ujs hfuLaunch padV</p>
                    </div>

                </div>
                
            </div>

            <div className="w-[100%] bg-[#E6CFCF] h-[220px] -mt-[50px] -z-10 flex justify-center items-center gap-5 pt-[20px]">
                <div className="cursor-pointer" onClick={() => leftClick()}>
                    <AiOutlineArrowLeft size={30} />
                </div>
                <div
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg ${active === 1 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`
                        } flex justify-center items-center  cursor-pointer`}
                    onClick={() => setActive(1)}
                >
                    1
                </div>
                <div
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg ${active === 2 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`
                        } flex justify-center items-center  cursor-pointer`}
                    onClick={() => setActive(2)}
                >
                    2
                </div>
                <div
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg ${active === 3 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`
                        }  flex justify-center items-center  cursor-pointer`}
                    onClick={() => setActive(3)}
                >
                    3
                </div>
                <div
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg ${active === 4 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`
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
    )
}

export default NewsPage2
