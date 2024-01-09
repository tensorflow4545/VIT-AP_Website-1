import Image from 'next/image'
import React from 'react'

const NewsHeader = () => {
    return (
        <div className='w-full h-[650px] relative overflow-hidden'>
            <div className='absolute -top-[70px] -z-10 right-0 w-[60%] h-full bg-no-repeat bg-cover' style={{ backgroundImage: `url("/newsImg.png")` }}></div>
            <div className='absolute top-0 left-0 -z-10 w-[60%] h-full bg-no-repeat bg-cover' style={{ backgroundImage: `url("/newsImg2.png")` }}></div>
            <div className='z-10'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="227" viewBox="0 0 1440 227" fill="none">
                    <path d="M0 0H1440V1C1385.28 4.68271 222.281 83.472 0 227V0Z" fill="#E6CFCF" />
                </svg>
            </div>
            <div>
                <div className='w-full h-full flex px-[25px] md:px-[50px] lg:px-[100px]'>
                    <div className=' basis-1/2 '>
                        <h1 className='text-[96px] text-[#650010] font-bold font-Emilio'>NEWS</h1>
                        <h1 className='text-[48px] text-[#650010] font-bold font-Emilio'>About VIT - AP</h1>
                    </div>
                    <div className='basis-1/2 z-10'>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='absolute max-w-[350px] xl:max-w-[454px] w-[100%] min-h-[238px] top-10 -z-0 left-[30%] bg-black'>
                    <Image src={"/newsHeader1.png"} fill className='z-10' />
                </div>
                <div className='absolute max-w-[190px] xl:max-w-[256px] w-[100%] -mt-[20px] min-h-[258px] top-10 -z-0 right-[13%] bg-black'>
                    <Image src={"/newsHeader2.png"} fill className='z-10' />
                </div>
                <div className='absolute max-w-[170px] xl:max-w-[231px] w-[100%] min-h-[284px] -mb-[50px] bottom-[37%] left-[55%] bg-black'>
                    <Image src={"/newsHeader3.png"} fill className='z-10' />
                </div>
                <div className='absolute max-w-[260px] xl:max-w-[328px] w-[100%] min-h-[328px] -mb-[50px] bottom-10 -z-0 left-[35%] bg-black'>
                    <Image src={"/newsHeader4.png"} fill className='z-10' />
                </div>
                <div className='absolute max-w-[145px] xl:max-w-[195px] w-[100%] -mt-[20px] min-h-[217px] bottom-10 -z-0 right-[20%] bg-black'>
                    <Image src={"/newsHeader5.png"} fill className='z-10' />
                </div>
            </div>
            <div className='absolute bottom-0 right-0 -z-10'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="227" viewBox="0 0 1440 227" fill="none">
                    <path d="M1440 227L0 227V226C54.7194 222.317 1217.72 143.528 1440 0V227Z" fill="#E6CFCF" />
                </svg>
            </div>
        </div>
    )
}

export default NewsHeader
