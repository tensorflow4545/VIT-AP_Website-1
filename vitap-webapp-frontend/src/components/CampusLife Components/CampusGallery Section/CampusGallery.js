"use client";

import Image from 'next/image'
import React, { useState } from 'react'

const CampusGallery = () => {

    const imagePath = [
        {id: 1, url: "/gallary1.jpeg"},
        {id: 2, url: "/campusgallery2.png"},
        {id: 3, url: "/campusgallery3.jpeg"}
    ];

    const [sliderData, setSliderData] = useState(imagePath[1]);

    const handleClick = (index) => {
        console.log(index);
        const slider = imagePath[index];
        setSliderData(slider);
    }

    return (
        <div className="max-w-[1560px] w-[100%] min-h-[650px] h-[100%] mx-auto overflow-hidden flex flex-col justify-center gap-10 items-center">
            <h1 className='text-[#650010] font-Emilio text-[42px] font-bold'>Gallery</h1>
            <Image src={sliderData.url} height={300} width={500} alt=''/>
            <div className='flex gap-4'>
                {
                    imagePath.map((data, i) => (
                        <Image key={data.id} src={data.url} height={100} width={150} onClick={() => handleClick(i)} alt='' className={`${sliderData.id === data.id ? "-translate-y-4" : ""} transition-all ease-in-out duration-300`}/>
                    ))
                }
            </div>
            <div className='flex justify-center items-center'>
                <button className='border border-[#650010] text-[#650010] p-5 hover:bg-gradient-to-r hover:from-[#650010] hover:to-red-700 transition-all duration-300 hover:text-white hover:border-none text-semibold text-[16px] font-Montserrat'>Visit Gallery Room</button>
            </div>
        </div>
    )
}

export default CampusGallery
