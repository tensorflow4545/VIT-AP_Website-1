import Link from 'next/link'
import React from 'react'

const SubgalleryHeader = () => {
    return (
        <div className='w-full h-[178px] ls:h-[338px] bg-[#E6CFCF] flex justify-center items-end'>
            <div className='mx-[50px] lg:mx-[100px] my-[60px] w-full flex items-end justify-between'>
                <div>
                    <h1 className='text-[30px] ls:text-[72px] lg:text-[96px] text-[#5C0E14] font-Emilio font-bold capitalize'>Gallery</h1>
                    <div className='flex items-center justify-center gap-2 lg:gap-4'>
                        <Link href="/" className='text-[10px] ls:text-[16px] lg:text-[18px] font-Montserrat'>Events at VIT- Main Gallery</Link>
                        <div className='flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                                <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538407 1.31946 0.538407 0.928933 0.928932C0.538408 1.31946 0.538408 1.95262 0.928933 2.34315L6.58579 8L0.928932 13.6569C0.538407 14.0474 0.538407 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9L8 9L8 7L7 7L7 9Z" fill="black" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                                <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538407 1.31946 0.538407 0.928933 0.928932C0.538408 1.31946 0.538408 1.95262 0.928933 2.34315L6.58579 8L0.928932 13.6569C0.538407 14.0474 0.538407 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9L8 9L8 7L7 7L7 9Z" fill="black" />
                            </svg>
                        </div>
                        <Link href={"/"} className='text-[10px] ls:text-[16px] lg:text-[18px] font-Montserrat'>Campus Info</Link>
                    </div>
                </div>
                <div className='bg-black -mb-[30px]'>
                    <button className='w-[142px] text-[12px] rounded-xl ls:rounded-none p-3 ls:p-0 ls:text-[16px] ls:w-[255px] h-[32px] ls:h-[51px] bg-[#650010] flex items-center justify-center gap-2 ls:gap-6 text-white'>Show Slideshow <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                        <path d="M16 9.5L0.25 18.5933L0.25 0.406734L16 9.5Z" fill="white" />
                    </svg></button>
                </div>
            </div>
        </div>
    )
}

export default SubgalleryHeader
