"use client";

import Image from 'next/image'
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "./SuperdreamOffers.css"
import { homeCDC } from '@/constants';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

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
            <div className="max-w-[1560px] w-[100%] min-h-[450px] h-[100%] mx-auto flex justify-center items-center mt-[30px] relative">
                <div className='absolute max-w-[100px] lx:max-w-[150px] md:max-w-[200px] w-[100%] h-full top-0 left-16 bg-[#650010]'></div>
                <div className='absolute max-w-[300px] w-[100%] max-h-[20px] h-[100%] right-36 bottom-0 bg-[#650010] text-white text-[22px] flex justify-center items-center'></div>
                <div className='max-w-[1400px] w-[100%] min-h-[420px] h-[100%] p-5 flex '>
                    <div className='flex-1 flex justify-start items-center'>
                        <div className='max-w-[400px] min-h-[370px] h-[100%] w-[100%] relative left-[7%]'>
                            <Image src={homeCDC[index].imgUrl} alt='glance' fill className='p-7' />
                            <div className='absolute right-0 bottom-0 max-h-[50px] max-w-[50px] w-[100%] h-[100%] border-4 border-[#650010] border-t-0 border-l-0'></div>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col justify-center items-start gap-2 mr-[0px] lx:-ml-[100px] md:-ml-[200px] lx:mr-[20px]md:mr-[50px]'>
                        <h1 className='text-[#000] text-[38px] font-bold font-Emilio'>Number At Glance</h1>
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
                <div className='flex justify-center items-center gap-2 slide-track'>
                    {images.map((image, index) => (
                        <div key={index} className='lx:min-w-[200px] w-[100%] lx:min-h-[150px] h-[100%] min-w-[180px] min-h-[130px] relative slide overflow-hidden group transition-all duration-300 ease-in-out' onClick={() => setIndex(index)}>
                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${image?.Image.data.attributes.url}`} fill alt='package' className='group-hover:scale-110' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CDCHeader
