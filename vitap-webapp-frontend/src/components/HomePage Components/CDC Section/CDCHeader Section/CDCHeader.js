"use client";
import Image from 'next/image'
import React, { useState,useEffect } from 'react';
import "./SuperdreamOffers.css"
import { homeCDC } from '@/constants';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const CDCHeader = () => {

    // const [index, setIndex] = useState(0);
    const images = [
        '/package.png',
        '/super-dream-offer 1.png',
        '/package.png',
        '/package.png',
        '/package.png',
        '/package.png',
        '/package.png',
        '/package.png',
        '/package.png',
        '/package.png',
        '/package.png',
        '/package.png',
        '/package.png',
        '/package.png',
        '/package.png',
        '/package.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % homeCDC.length);
        }, 3000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [currentIndex, homeCDC.length]);

    if (!homeCDC.length || currentIndex < 0 || currentIndex >= homeCDC.length) {
        return null; // or handle the case accordingly
      };

    return (
        <>
            <div className="max-w-[1560px] w-[100%] min-h-[450px] h-[100%] mx-auto flex justify-center items-center mt-[30px] relative">
                <div className='absolute max-w-[100px] lx:max-w-[150px] md:max-w-[200px] w-[100%] h-full top-0 left-16 bg-[#650010]'></div>
                <div className='absolute max-w-[300px] w-[100%] max-h-[20px] h-[100%] right-36 bottom-0 bg-[#650010] text-white text-[22px] flex justify-center items-center'></div>
                <div className='max-w-[1400px] w-[100%] min-h-[420px] h-[100%] p-5 flex '>
                    <div className='flex-1 flex justify-start items-center'>
                        <div className='max-w-[400px] min-h-[370px] h-[100%] w-[100%] relative'>
                            <Image src={homeCDC[currentIndex].imgUrl} alt='glance' fill className='p-7' />
                            <div className='absolute right-0 bottom-0 max-h-[50px] max-w-[50px] w-[100%] h-[100%] border-4 border-[#650010] border-t-0 border-l-0'></div>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col justify-center items-start gap-2 mr-[0px] lx:-ml-[100px] md:-ml-[200px] lx:mr-[20px]md:mr-[50px]'>
                        <h1 className='text-[#000] text-[38px] font-bold font-Emilio'>Placement Spotlight</h1>
                        <p className='text-[#000] text-[18px] '>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet onsectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1560px] w-[100%] min-h-[350px] lx:min-h-[350px] h-[100%] mx-auto bg-[#FCE3E5] flex flex-col relative overflow-hidden justify-center items-center">
                <div className='absolute max-w-[100px] lx:max-w-[150px] md:max-w-[200px] w-[100%] h-full top-0 left-16 bg-[#650010]'></div>
                <div className='absolute bottom-8 right-32 max-w-[80px] w-[100%] max-h-[40px] h-[100%] flex justify-between items-center'>
                    <button className='bg-white rounded-full' onClick={() => setIndex(index - 1)}><GrFormPrevious size={35} /></button>
                    <button className='bg-white rounded-full' onClick={() => setIndex(index + 1)}><MdNavigateNext size={35} /></button>
                </div>
                <div className='absolute max-w-[300px] w-[100%] max-h-[50px] h-[100%] right-36 top-0 bg-[#650010] text-white text-[22px] flex justify-center items-start'>
                    <button>Top Recruiters</button>
                </div>
                {/* <div className='flex justify-center items-center gap-2 slide-track'>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out' onClick={() => setIndex(0)}>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out' onClick={() => setIndex(1)}>
                        <Image src={"/super-dream-offer 1.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>

                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>

                </div> */}
                <div className='flex justify-center items-center gap-2 slide-track'>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out`}
                            onClick={() => {
                                // handleImageClick(index);
                                setCurrentIndex(index);
                            }}
                        >
                            <Image src={src} fill alt={`Image ${index + 1}`} className='group-hover:scale-110' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CDCHeader
