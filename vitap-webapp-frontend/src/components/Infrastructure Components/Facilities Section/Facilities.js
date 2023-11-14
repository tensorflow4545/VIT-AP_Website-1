"use client";

import Image from 'next/image'
import React, { useState } from 'react'

const Facilities = () => {

    const [index, setIndex] = useState(0);

    return (
        <div className="max-w-[1560px] w-[100%] h-[700px] mx-auto bg-backgroundRed2 mt-5">
            <div className='max-w-[1350px] md:mx-auto mx-[30px] h-full pt-[50px] flex flex-col justify-center items-center'>
                <div className='text-center text-[42px] font-Emilio text-[#650010] capitalize max-w-[600px] w-[100%] leading-10'>
                    <h1>World Class Ameneties and Other Facilities</h1>
                </div>

                <div className='flex flex-wrap justify-center items-center md:grid md:grid-cols-7 gap-4 mt-4'>
                    <div className={`w-[140px] h-[65px] ${index === 0 ? 'bg-[#650010] text-white' : 'bg-white'} flex justify-center text-center items-center rounded-2xl cursor-pointer`} onClick={() => setIndex(0)}>
                        <h1>Hostels</h1>
                    </div>
                    <div className={`w-[140px] h-[65px] ${index === 1 ? 'bg-[#650010] text-white' : 'bg-white'} flex justify-center text-center items-center rounded-2xl cursor-pointer`} onClick={() => setIndex(1)}>
                        <h1>Library</h1>
                    </div>
                    <div className={`w-[140px] h-[65px] ${index === 2 ? 'bg-[#650010] text-white' : 'bg-white'} flex justify-center text-center items-center rounded-2xl cursor-pointer`} onClick={() => setIndex(2)}>
                        <h1>Labs</h1>
                    </div>
                    <div className={`w-[140px] h-[65px] ${index === 3 ? 'bg-[#650010] text-white' : 'bg-white'} flex justify-center text-center items-center rounded-2xl cursor-pointer`} onClick={() => setIndex(3)}>
                        <h1>Bank & ATM</h1>
                    </div>
                    <div className={`w-[140px] h-[65px] ${index === 4 ? 'bg-[#650010] text-white' : 'bg-white'} flex justify-center text-center items-center rounded-2xl cursor-pointer`} onClick={() => setIndex(4)}>
                        <h1>Cafeteria</h1>
                    </div>
                    <div className={`w-[140px] h-[65px] ${index === 5 ? 'bg-[#650010] text-white' : 'bg-white'} flex justify-center text-center items-center rounded-2xl cursor-pointer`} onClick={() => setIndex(5)}>
                        <h1>Transport</h1>
                    </div>
                    <div className={`w-[140px] h-[65px] ${index === 6 ? 'bg-[#650010] text-white' : 'bg-white'} flex justify-center text-center items-center rounded-2xl cursor-pointer`} onClick={() => setIndex(6)}>
                        <h1>Health Care</h1>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center gap-4 max-w-[1200px] mx-auto h-[400px]">
                        <div className='flex-1 flex-col gap-2 '>
                            <h1 className='text-[42px] font-Emilio text-[#000] capitalize px-[15px]'>VIT-AP Hostels</h1>
                            <p className='mx-auto font-Montserrat text-[16px] font-normal pl-[15px] pr-[45px]'>Our hostels are strategically located within the university campus, providing easy access to academic buildings and facilities. We prioritize the safety and well-being of our students, offering 24/7 security, comfortable living spaces, and a range of amenities.</p>
                            <button className='mx-[15px] mt-3 bg-[#650010] text-white p-3 rounded-xl'>Explore More</button>
                        </div>
                        <div className='flex-1 bg-white z-10 max-w-[470px] w-[100%] max-h-[250px] h-[100%] relative rounded-lg'>
                            <Image src={"/ab1.png"} alt='' fill className='p-[7px]' />
                            <div className='absolute -left-10 -bottom-5 bg-white rounded-lg'>
                                <Image src={"/ab1.png"} alt='' width={220} height={150} className='p-[5px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Facilities
