"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Eresources = () => {

    const [active, setActive] = useState(0);

    const [numactive, setNumactive] = useState(1);

    const leftClick = () => {
        { numactive === 1 ? setNumactive(4) : setNumactive(numactive - 1) }
    }

    const rightClick = () => {
        {
            numactive === 4 ? setNumactive(1) : setNumactive(numactive + 1);
        }
    };

    return (
        <div className='max-w-[1560px] w-[100%] min-h-[800px] h-[100%] bg-backgroundRed2 px-[50px] md:px-[100px] py-[40px] flex -z-10 gap-3 mt-[50px] flex-col'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>E Resources</h1>
                <p className='text-[20px] font-Montserrat text-[#000]'>Library provides the different subjects e-resources to its users by subscribing institutionally or through the consortia basis.</p>
            </div>

            <div className='grid grid-rows-10 mt-[20px] max-h-[700px] h-[100%]'>
                <div className='grid grid-cols-4 text-center bg-[#650010] text-white p-5 text-[22px] font-semibold'>
                    <h1>S.No</h1>
                    <h1>Title</h1>
                    <h1>URL</h1>
                    <h1>No Of Journals/Books</h1>
                </div>
                <div className='grid grid-cols-4 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>1</h1>
                    <h1>Bentham Sciencet</h1>
                    <Link href={"http://www.eurekaselect.com"} className='cursor-pointer'>http://www.eurekaselect.com</Link>
                    <h1>E Journals</h1>
                </div>
                <div className='grid grid-cols-4 text-center bg-white text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>2</h1>
                    <h1>Bentham Sciencet</h1>
                    <Link href={"http://www.eurekaselect.com"} className='cursor-pointer'>http://www.eurekaselect.com</Link>
                    <h1>E Journals</h1>
                </div>
                <div className='grid grid-cols-4 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>3</h1>
                    <h1>Bentham Sciencet</h1>
                    <Link href={"http://www.eurekaselect.com"} className='cursor-pointer'>http://www.eurekaselect.com</Link>
                    <h1>E Journals</h1>
                </div>
                <div className='grid grid-cols-4 border text-center bg-white text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>4</h1>
                    <h1>Bentham Sciencet</h1>
                    <Link href={"http://www.eurekaselect.com"} className='cursor-pointer'>http://www.eurekaselect.com</Link>
                    <h1>E Journals</h1>
                </div>
                <div className='grid grid-cols-4 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>5</h1>
                    <h1>Bentham Sciencet</h1>
                    <Link href={"http://www.eurekaselect.com"} className='cursor-pointer'>http://www.eurekaselect.com</Link>
                    <h1>E Journals</h1>
                </div>
                <div className='grid grid-cols-4 text-center bg-white text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>6</h1>
                    <h1>Bentham Sciencet</h1>
                    <Link href={"http://www.eurekaselect.com"} className='cursor-pointer'>http://www.eurekaselect.com</Link>
                    <h1>E Journals</h1>
                </div>
                <div className='grid grid-cols-4 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>7</h1>
                    <h1>Bentham Sciencet</h1>
                    <Link href={"http://www.eurekaselect.com"} className='cursor-pointer'>http://www.eurekaselect.com</Link>
                    <h1>E Journals</h1>
                </div>
                <div className='grid grid-cols-4 text-center bg-white text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>8</h1>
                    <h1>Bentham Sciencet</h1>
                    <Link href={"http://www.eurekaselect.com"} className='cursor-pointer'>http://www.eurekaselect.com</Link>
                    <h1>E Journals</h1>
                </div>
                <div className='grid grid-cols-4 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>9</h1>
                    <h1>Bentham Sciencet</h1>
                    <Link href={"http://www.eurekaselect.com"} className='cursor-pointer'>http://www.eurekaselect.com</Link>
                    <h1>E Journals</h1>
                </div>
            </div>

            <div className="w-[100%] h-[100px] flex justify-center items-end gap-5 pb-[40px]">
                <div className="cursor-pointer" onClick={() => leftClick()}>
                    <AiOutlineArrowLeft size={30} />
                </div>
                <div
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg ${numactive === 1 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`} flex justify-center items-center  cursor-pointer`}
                    onClick={() => setNumactive(1)}
                >
                    1
                </div>
                <div
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg ${numactive === 2 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`} flex justify-center items-center  cursor-pointer`}
                    onClick={() => setNumactive(2)}
                >
                    2
                </div>
                <div
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg ${numactive === 3 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`}  flex justify-center items-center  cursor-pointer`}
                    onClick={() => setNumactive(3)}
                >
                    3
                </div>
                <div
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg ${numactive === 4 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`} flex justify-center items-center  cursor-pointer`}
                    onClick={() => setNumactive(4)}
                >
                    4
                </div>
                <div className="cursor-pointer" onClick={() => rightClick()}>
                    <AiOutlineArrowRight size={30} />
                </div>
            </div>
        </div>
    )
}

export default Eresources
