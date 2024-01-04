"use client";

import { healthCare } from '@/constants';
import Image from 'next/image'
import React, { useState } from 'react'
import { GrFormPrevious } from 'react-icons/gr'
import { MdNavigateNext } from 'react-icons/md'

const HealthHeader = () => {

    const [index, setIndex] = useState(0);

    return (
        <div className="max-w-[1560px] w-[100%] min-h-[650px] h-[100%] mx-auto">
            <div
                style={{ backgroundImage: `url("/announcements.png")` }}
                className="relative max-w-[1560px] w-full h-[300px] bg-center mx-auto flex items-center justify-center"
            >
                <h1 className="text-white text-[32px] lg:text-[45px] font-semibold font-Emilio text-center flex justify-center items-center">
                    Health Care
                </h1>
            </div>

            <div className='max-w-[1560px] w-[100%] flex flex-col min-h-[500px] h-[100%]'>
                <div className='flex-1 pt-[70px]'>

                </div>
                <div className='flex-1 bg-backgroundRed2 md:px-[100px] px-[50px]  flex flex-col lg:flex-row justify-center items-center md:gap-0 gap-4'>
                    <div className='flex-1 flex justify-center items-center relative overflow-hidden -mt-[100px] lg:-mt-[150px]'>
                        <div className='max-w-[600px] min-h-[400px] w-full h-full overflow-hidden relative hidden lg:block'>
                            <Image src={healthCare[index].imgUrl} fill  alt='healthcare' className=''/>
                        </div>
                        <div className='min-w-[300px] min-h-[200px] w-full h-full overflow-hidden relative block lg:hidden'>
                            <Image src={healthCare[index].imgUrl} fill  alt='healthcare' className=''/>
                        </div>
                        <div className='absolute bottom-[5%] right-[10%] max-w-[80px] w-[100%] max-h-[60px] h-[100%] flex justify-between items-center'>
                            <button className='bg-[#FBE0E4] rounded-xl' onClick={() => setIndex(index-1)}><GrFormPrevious size={35} /></button>
                            <button className='bg-[#FBE0E4] rounded-xl' onClick={() => setIndex(index+1)}><MdNavigateNext size={35} /></button>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col justify-center items-start pl-[15px]'>
                        <h1 className='text-[44px] font-Emilio text-[#650010] font-bold'>Health Care</h1>
                        <p className='text-[18px] font-Montserrat text-[#000]'>The medical needs of the students are taken care by a fully equipped Health Centre on campus along with ambulance facility in Association with Manipal Hospitals, Vijayawada.</p>
                    </div>
                </div>      
            </div>
        </div>
    )
}

export default HealthHeader
