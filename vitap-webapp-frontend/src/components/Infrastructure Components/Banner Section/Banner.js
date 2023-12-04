import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className="max-w-[1560px] w-[100%] min-h-[700px] h-[100%] mx-auto relative">
            <div className='max-w-[1560px] w-[100%] min-h-[500px] h-[100%] bg-[#F9C6CB]'></div>
            <div className='flex justify-center items-center w-full h-full'>
                <div className='max-w-[1250px] w-[100%] min-h-[700px] h-[100%] bg-white shadow-2xl translate-y-[7%] flex flex-col justify-center items-center text-center mt-[-500px] mx-[30px] md:none'>
                    <div className='max-w-[950px] w-[100%] flex-1 pt-[20px] flex flex-col gap-2'>
                        <h1 className='text-[42px] font-Emilio text-[#650010] capitalize px-[15px]'>Experience Excellence in Infrastructure</h1>
                        <p className=' font-Montserrat text-[18px] text-[#000]'>At VIT-AP, we are dedicated to offering our students an environment that supports both their academic pursuits and their personal enjoyment. Our world-class infrastructure sets the stage for a transformative college experience.</p>

                        <div className='flex flex-col gap-3 pt-[20px]'>
                            <h1 className='text-[24px] font-bold text-[#650010] font-Emilio'>Secured Environment</h1>
                            <p className=' font-Montserrat text-[18px] text-[#000]'>Our hostels are located in the heart of the university campus, ensuring easy access to classes, libraries, and other facilities.</p>
                        </div>
                    </div>
                    <div className='flex-1 relative max-w-[1200px] w-[100%] -mt-[350px]'>
                        <Image src={"/infrastructure.png"} fill alt='infrastructure' className='object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
