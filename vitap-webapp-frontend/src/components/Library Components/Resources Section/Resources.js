import React from 'react'
import { FaBook } from 'react-icons/fa6'

const Resources = () => {
    return (
        <div className='max-w-[1560px] w-[100%] min-h-[500px] h-[100%] bg-backgroundRed2 px-[50px] md:px-[100px] py-[40px] flex -z-10 gap-3'>
            <div className='flex-1 flex flex-col items-start justify-center'>
                <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>Library Resources</h1>
                <p className='text-[22px] font-Montserrat text-[#000]'>Discover a wide range of resources to support your studies.</p>
            </div>
            <div className='flex-1 bg-[#FFF8F8] z-10 flex relative'>
                <div className='flex-1 my-[40px] border border-gray-600 px-[20px] border-l-0 border-b-0 border-t-0 grid grid-rows-4 items-center justify-center'>
                    <div className='flex gap-2 items-center justify-start'>
                        <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                        <p className='text-[18px] font-Montserrat text-[#000]'>Books (Text and References)</p>
                    </div>
                    <div className='flex gap-2 items-center justify-start'>
                        <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                        <p className='text-[18px] font-Montserrat text-[#000]'>EBooks</p>
                    </div>
                    <div className='flex gap-2 items-center justify-start'>
                        <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                        <p className='text-[18px] font-Montserrat text-[#000]'>Print Journals</p>
                    </div>
                    <div className='flex gap-2 items-center justify-start'>
                        <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                        <p className='text-[18px] font-Montserrat text-[#000]'>E Journals</p>
                    </div>
                </div>

                <div className='flex-1 my-[40px] grid grid-rows-4 items-center justify-center'>
                    <div className='flex gap-2 items-center justify-start'>
                        <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                        <p className='text-[18px] font-Montserrat text-[#000]'>CD & DVDs</p>
                    </div>
                    <div className='flex gap-2 items-center justify-start'>
                        <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                        <p className='text-[18px] font-Montserrat text-[#000]'>Magazines</p>
                    </div>
                    <div className='flex gap-2  items-center justify-start'>
                        <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                        <p className='text-[18px] font-Montserrat text-[#000]'>New Papers </p>
                    </div>
                    <div className='flex gap-2 items-center justify-start'>
                        <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                        <p className='text-[18px] font-Montserrat text-[#000]'>Back Volumes</p>
                    </div>
                </div>

                <div className='max-w-[100px] w-[100%] h-full absolute top-0 right-0 border-2 border-[#650010] border-l-0'>

                </div>
            </div>
        </div>
    )
}

export default Resources
