"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const CampusGallery = () => {

    const [active, setActive] = useState(1);

    const imagePath = [
        { id: 1, url: "/gallary1.jpeg" },
        { id: 2, url: "/campusgallery2.png" },
        { id: 3, url: "/campusgallery3.jpeg" }
    ];

    const [sliderData, setSliderData] = useState(imagePath[1]);

    const leftClick = () => {
        { 
            active === 1 ? setActive(3) : setActive(active - 1);
            const slider = imagePath[active];
            setSliderData(slider);
        }
    }

    const rightClick = () => {
        {
            active === 3 ? setActive(1) : setActive(active + 1);
            const slider = imagePath[active];
            setSliderData(slider);
        }
    };

    const handleClick = (index) => {
        setActive(index);
        const slider = imagePath[index];
        setSliderData(slider);
    }

    return (
        <div className="max-w-[1560px] w-[100%] max-h-[1050px] py-[60px] mx-auto overflow-hidden flex flex-col justify-center gap-10 items-center relative">
            <h1 className='text-[#650010] font-Emilio text-[42px] font-bold'>Gallery</h1>
            <div className='flex justify-center items-center gap-5'>
                <div className="cursor-pointer" onClick={() => leftClick()}>
                    <AiOutlineArrowLeft size={30} />
                </div>
                <div className='max-h-[450px] h-[100%] max-w-[1016px] overflow-hidden px-8 lg:px-0'>
                    <Image src={sliderData.url} height={452} width={1016} alt='' />
                </div>
                <div className="cursor-pointer" onClick={() => rightClick()}>
                    <AiOutlineArrowRight size={30} />
                </div>
            </div>
            <div className='flex gap-4 '>
                {
                    imagePath.map((data, i) => (
                        <Image key={data.id} src={data.url} height={208} width={208} onClick={() => handleClick(i)} alt='' className={`${sliderData.id === data.id ? "-translate-y-4" : ""} transition-all ease-in-out duration-300 shadow-2xl`}/>
                    ))
                }
            </div>
            
            <div className='w-full h-[211px] bg-[#650010] absolute top-[50%] left-0 -z-10'></div>
            <div className='flex justify-center items-center'>
                <button className='border border-[#650010] text-[#650010] p-5 hover:bg-gradient-to-r hover:from-[#650010] hover:to-red-700 transition-all duration-300 hover:text-white hover:border-none text-semibold text-[16px] font-Montserrat'>Visit Gallery Room</button>
            </div>
        </div>
    )
}

export default CampusGallery
