"use client";

import Image from 'next/image'
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "./SuperdreamOffers.css"
import { homeCDC } from '@/constants';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Link from 'next/link';

const CDCHeader = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/home-page-cdc-scroll-images?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                    },
                });
                if (response.data && Array.isArray(response.data.data)) {
                    const extractedAttributes = response.data.data.map((item) => item.attributes);
                    setImages(extractedAttributes);
                } else {
                    console.error('The "data" property in the API response is not an array:', response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    const [index, setIndex] = useState(0);
    console.log(images);

    return (
        <>
            <div className="max-w-[1560px] w-[100%] min-h-[450px] h-[100%] mx-auto hidden lg:flex justify-center items-center mt-[30px] relative ">
                <div className='absolute max-w-[100px] lx:max-w-[150px] md:max-w-[200px] w-[100%] h-full top-0 left-16 bg-[#650010]'></div>
                <div className='absolute max-w-[300px] w-[100%] max-h-[20px] h-[100%] right-24 lx:right-36 bottom-0 bg-[#650010] text-white text-[22px] flex justify-center items-center'></div>
                <div className='max-w-[1400px] w-[100%] min-h-[420px] h-[100%] p-5 flex '>
                    <div className='flex-1 flex justify-start items-center'>
                        <div className='max-w-[400px] min-h-[370px] h-[100%] w-[100%] relative left-[7%]'>
                            <Image src={homeCDC[index].imgUrl} alt='glance' fill className='p-7' />
                            <div className='absolute right-0 bottom-0 max-h-[50px] max-w-[50px] w-[100%] h-[100%] border-4 border-[#650010] border-t-0 border-l-0'></div>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col justify-center items-start gap-2 mr-[0px] -ml-[0px] lx:-ml-[100px] md:-ml-[300px] lx:mr-[20px]md:mr-[50px]'>
                        <h1 className='text-[#000] text-[36px] lx:text-[48px] font-bold font-Emilio'>Number At Glance</h1>
                        <p className='text-[#000] text-[18px] lx:text-[20px] '>
                        VIT-AP University proudly showcases its exceptional placements achievements, reflecting a commitment to nurturing industry-ready professionals. Boasting a stellar track record, our students have secured coveted positions in leading companies. The testament to our rigorous academic curriculum and holistic development approach is evident in the remarkable success stories of our graduates.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1560px] w-[100%] min-h-[350px] lg:min-h-[350px] h-[100%] mx-auto bg-[#FCE3E5] hidden lg:flex flex-col relative overflow-hidden justify-center items-center">
                <div className='absolute max-w-[100px] lx:max-w-[150px] md:max-w-[200px] w-[100%] h-full top-0 left-16 bg-[#650010]'></div>
                <div className='absolute bottom-8 right-32 max-w-[80px] w-[100%] max-h-[40px] h-[100%] flex justify-between items-center'>
                    <button className='bg-white rounded-full' onClick={() => setIndex(index - 1)}><GrFormPrevious size={35} /></button>
                    <button className='bg-white rounded-full' onClick={() => setIndex(index + 1)}><MdNavigateNext size={35} /></button>
                </div>
                <div className='absolute max-w-[300px] w-[100%] max-h-[50px] h-[100%] right-24 lx:right-36 top-0 bg-[#650010] text-white text-[22px] flex justify-center items-start hover:cursor-pointer'>
                    <button>Top Recruiters</button>
                </div>
                <div className='flex justify-center items-center gap-2 slide-track'>
                    {images.map((image, index) => (
                        <div key={index} className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out' onClick={() => setIndex(index)}>
                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${image?.Image.data.attributes.url}`} fill alt='package' className='group-hover:scale-110' />
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full max-h-[800px] block lg:hidden'>
                <div className='px-[20px] py-[30px] flex flex-col gap-4'>
                    <div>
                        <h1 className='font-Emilio text-[24px] text-[#650010] font-semibold'>Number At Glance</h1>
                    </div>
                    <div className='min-h-[150px] flex relative'>
                        <div className='basis-1/3 bg-[#E6CFCF] flex justify-end items-center'>
                            <div className='max-w-[106px] min-h-[80px] w-[100%] relative -mr-[30px]'>
                                <Image src={homeCDC[index].imgUrl} fill alt='mobileglance'/>
                            </div>
                        </div>
                        <div className='basis-2/3  flex flex-col justify-center items-center'>
                            <div className='pl-[40px] pr-[10px] flex flex-col justify-center items-start gap-2'>
                                <div>
                                    <h1 className='text-[24px] text-[#650010] font-bold font-Emilio leading-7'>1560 <br /> Total Offers</h1>
                                </div>
                                <div>
                                    <p className='text-[10px] font-normal font-Montserrat'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum</p>
                                </div>
                                <div className='flex flex-row gap-4 items-center justify-center'>
                                    <Link href={"/"} className='text-[#000] text-[7px] font-Montserrat font-normal'>Explore now</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
                                        <path d="M2.91367 0.109883C2.99216 0.0395214 3.09856 0 3.2095 0C3.32044 0 3.42684 0.0395214 3.50533 0.109883L5.87757 2.23901C5.95597 2.30946 6 2.40496 6 2.50453C6 2.6041 5.95597 2.69959 5.87757 2.77004L3.50533 4.89917C3.42593 4.9655 3.32096 5.00163 3.2125 4.99994C3.10403 4.99826 3.00052 4.95891 2.92371 4.89015C2.84711 4.82122 2.80326 4.72831 2.80139 4.63097C2.79951 4.53362 2.83976 4.43941 2.91367 4.36814L4.57144 2.88026L0.41863 2.88026C0.307602 2.88026 0.201122 2.84067 0.122614 2.77021C0.0441055 2.69974 0 2.60418 0 2.50453C0 2.40488 0.0441055 2.30931 0.122614 2.23885C0.201122 2.16838 0.307602 2.1288 0.41863 2.1288L4.57144 2.1288L2.91367 0.640913C2.83527 0.570464 2.79124 0.474966 2.79124 0.375398C2.79124 0.27583 2.83527 0.180332 2.91367 0.109883Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div className='absolute -ml-[10px] top-[40%] left-0 max-w-[80px] w-[100%] max-h-[40px] h-[100%] flex justify-between items-center text-[#650010]'>
                                    <button className='bg-[#E6CFCF] rounded-xl' onClick={() => setIndex(index - 1)}><GrFormPrevious size={35} /></button>
                                </div>
                                <div className='absolute top-[40%] -mr-[40px] right-0 max-w-[80px] w-[100%] max-h-[40px] h-[100%] flex justify-between items-center text-[#650010]'>
                                    <button className='bg-[#E6CFCF] rounded-xl' onClick={() => setIndex(index + 1)}><MdNavigateNext size={35} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CDCHeader
