import Image from 'next/image'
import React from 'react'

const Infrastructure = () => {
    return (
        <>
            <div className='max-w-[1560px] w-[100%] min-h-[500px] h-[100%] hidden lg:block'>
                <div className='relative'>

                    <div className='flex max-w-[1560px] w-[100%] min-h-[500px] h-[100%] absolute top-0 left-0 px-[50px] md:px-[100px] py-[40px] gap-3 md:gap-5'>
                        <div className='flex-1 flex flex-col justify-center items-start'>
                            <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>Library Infrastructure</h1>
                            <p className='text-[16px] font-Montserrat text-[#000]'>The library spreads on 1470 sq.mt. centrally air-conditioned and Wi-Fi enabled area with CCTV surveillance. The total seating capacity of the library is 430.It has three reading halls, one Reference cum periodical section, three discussion rooms, one digital library with 15 computers as major constituents of the library infrastructure. </p>
                        </div>
                        <div className='flex-1 flex justify-center items-center'>
                            <div className='max-w-[300px] w-[100%] max-h-[250px] h-[100%] relative'>
                                <Image fill src={"/libgallery1.jpeg"} alt='libbanner' className='z-10 rounded-3xl rounded-br-none rounded-tl-none ' />
                                <div className='absolute -top-15 -right-10 xl:-right-20 max-w-[250px] w-[100%] max-h-[250px] h-[100%] bg-[#650010] rotate-45 rounded-3xl shadow-2xl'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full max-h-[800px] block lg:hidden'>
                <div className='flex flex-col gap-3 px-[30px] py-[20px] overflow-hidden'>
                    <div className='flex flex-col gap-2 justify-center items-start'>
                        <h1 className='text-[24px] font-Emilio text-[#650010] font-bold'>Library Infrastructure</h1>
                        <p className='text-[15px] font-Montserrat text-[#000]'>The library spreads on 1470 sq.mt. centrally air-conditioned and Wi-Fi enabled area with CCTV surveillance. The total seating capacity of the library is 430.It has three reading halls, one Reference cum periodical section, three discussion rooms, one digital library with 15 computers as major constituents of the library infrastructure. </p>
                    </div>
                    <div className='max-w-[270px] mx-auto min-h-[220px] h-full w-full relative my-10'>
                        <Image fill src={"/libgallery1.jpeg"} alt='libbanner' className='z-10 rounded-3xl rounded-br-none rounded-tl-none ' />
                        <div className='absolute -top-15 -right-10 max-w-[220px] w-[100%] max-h-[200px] h-[100%] bg-[#650010] rotate-45 rounded-3xl shadow-2xl'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Infrastructure
