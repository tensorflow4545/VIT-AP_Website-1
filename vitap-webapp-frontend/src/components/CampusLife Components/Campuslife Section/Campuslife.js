import Image from 'next/image'
import React from 'react'

const Campuslife = () => {
    return (
        <div className = "max-w-[1560px] w-[100%] min-h-[1300px] h-[100%] mx-auto overflow-hidden">
            <div className='max-w-[1560px] w-[100%] min-h-[100px] h-[100%] bg-backgroundRed2 md:px-[100px] px-[50px] flex justify-start items-center'>
                <h1 className='text-[#650010] font-Emilio text-[42px] font-bold'>Campus Life</h1>
            </div>
            <div className='max-w-[1560px] w-[100%]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="227" viewBox="0 0 1440 227" fill="none">
                    <path d="M0 0H1440V1C1385.28 4.68271 222.281 83.472 0 227V0Z" fill="rgba(249, 198, 203, 0.25)" />
                </svg>
            </div>
            <div className='flex max-w-[1560px] w-[100%] min-h-[450px] gap-4 h-[100%] relative md:px-[100px] px-[50px] -mt-[220px] border-r-8 border-r-[#650010] '>
                <div className='flex-1 relative max-w-[700px] w-[100%] overflow-hidden group'>
                    <Image src={"/campuslife1.png"} alt='campuslife1' fill className='group-hover:scale-110 transition-all duration-500 ease-in-out'/>
                    <div className='absolute bottom-10 left-10 text-black'>
                        <h1 className='text-[#fff] font-Emilio text-[32px] font-semibold'>Sports</h1>
                        <p className='text-[#fff] text-[24px] font-Emilio transition-all duration-300 ease-in-out cursor-pointer'>Explore More</p>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-4 max-w-[500px] w-[100%]'>
                    <div className='flex-1 relative overflow-hidden group'>
                        <Image src={"/campuslife2.png"} alt='campuslife1' fill className='group-hover:scale-110 transition-all duration-500 ease-in-out'/>
                        <div className='absolute bottom-5 left-10 leading-10 text-black'>
                            <h1 className='text-[#fff] font-Emilio text-[26px] font-semibold'>Clubs&Chapters</h1>
                            <p className='text-[#fff] text-[21px] font-Emilio transition-all duration-300 ease-in-out cursor-pointer'>Explore More</p>
                        </div>
                    </div>
                    <div className='flex-1 relative overflow-hidden  group'>
                        <Image src={"/campuslife2.png"} alt='campuslife1' fill className='group-hover:scale-110 transition-all duration-500 ease-in-out' />
                        <div className='absolute bottom-5 left-10 leading-10 text-black'>
                            <h1 className='text-[#fff] font-Emilio text-[26px] font-semibold'>Library</h1>
                            <p className='text-[#fff] text-[21px] font-Emilio transition-all duration-300 ease-in-out cursor-pointer'>Explore More</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex max-w-[1560px] w-[100%] min-h-[450px] gap-4 h-[100%] relative md:px-[100px] px-[50px] border-l-8 border-l-[#650010] mt-[20px]'>
                <div className=' relative max-w-[1210px] w-[100%] overflow-hidden group'>
                    <Image src={"/campuscafeteria.png"} alt='campuslife1' fill className='group-hover:scale-110 transition-all duration-500 ease-in-out' />
                    <div className='absolute bottom-10 left-10 text-black'>
                        <h1 className='text-[#fff] font-Emilio text-[32px] font-semibold'>Cafeteria</h1>
                        <p className='text-[#fff] text-[24px] font-Emilio transition-all duration-300 ease-in-out cursor-pointer'>Explore More</p>
                    </div>
                </div>
            </div>
            <div className='flex max-w-[1560px] w-[100%] min-h-[350px] gap-4 h-[100%] relative md:px-[100px] px-[50px] border-r-8 border-r-[#650010] mt-[20px]'>
                <div className='flex-1 relative max-w-[700px] w-[100%] overflow-hidden group'>
                    <Image src={"/campushostels.png"} alt='campuslife1' fill className='group-hover:scale-110 transition-all duration-500 ease-in-out' />
                    <div className='absolute bottom-10 left-10 text-black'>
                        <h1 className='text-[#fff] font-Emilio text-[32px] font-semibold'>Hostel</h1>
                        <p className='text-[#fff] text-[24px] font-Emilio transition-all duration-300 ease-in-out cursor-pointer'>Explore More</p>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-4 max-w-[500px] w-[100%]'>
                    <div className='h-full relative overflow-hidden group'>
                        <Image src={"/campuslife2.png"} alt='campuslife1' fill className='group-hover:scale-110 transition-all duration-500 ease-in-out' />
                        <div className='absolute bottom-5 left-10 leading-10 text-black'>
                            <h1 className='text-[#fff] font-Emilio text-[26px] font-semibold'>Celebrations</h1>
                            <p className='text-[#fff] text-[21px] font-Emilio transition-all duration-300 ease-in-out cursor-pointer'>Explore More</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1560px] w-[100%] ml-[100px] -mt-[250px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="227" viewBox="0 0 1440 227" fill="none">
                    <path d="M1440 227L0 227V226C54.7194 222.317 1217.72 143.528 1440 0V227Z" fill="rgba(249, 198, 203, 0.25)" />
                </svg>
            </div>
            <div className='max-w-[1560px] w-[100%] min-h-[100px] h-[100%] bg-backgroundRed2 md:px-[100px] px-[50px] flex justify-start items-center'>
            </div>
        </div>
    )
}

export default Campuslife
