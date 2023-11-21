"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const UREtable = () => {

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
                <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>URE(Undergraduate Research Experience) Projects</h1>
                <p className='text-[20px] font-Montserrat text-[#000]'>The following is the list of URE001 (Undergraduate Research Experience) projects that have been successfully defended before the evaluation panels and recommended for the award of URE001 to be printed in their grade sheet.</p>
            </div>

            <div className='grid grid-rows-10 mt-[20px] max-h-[800px] h-[100%]'>
                <div className='grid grid-cols-5 text-center bg-[#650010] text-white p-5 text-[22px] font-semibold'>
                    <h1>S.No</h1>
                    <h1>Project Code</h1>
                    <h1>Project Name</h1>
                    <h1>Students</h1>
                    <h1>Guide</h1>
                </div>
                <div className='grid grid-cols-5 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>1</h1>
                    <h1>URE001201901</h1>
                    <h1>Analysis of Architectures: Memristor Bridge Synapse</h1>
                    <h1>Rohit Bhargav Peesa</h1>
                    <h1>Dr. Santanu Mandal</h1>
                </div>
                <div className='grid grid-cols-5 text-center bg-white text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>1</h1>
                    <h1>URE001201901</h1>
                    <h1>Analysis of Architectures: Memristor Bridge Synapse</h1>
                    <h1>Rohit Bhargav Peesa</h1>
                    <h1>Dr. Santanu Mandal</h1>
                </div>
                <div className='grid grid-cols-5 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>1</h1>
                    <h1>URE001201901</h1>
                    <h1>Analysis of Architectures: Memristor Bridge Synapse</h1>
                    <h1>Rohit Bhargav Peesa</h1>
                    <h1>Dr. Santanu Mandal</h1>
                </div>
                <div className='grid grid-cols-5 text-center bg-white text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>1</h1>
                    <h1>URE001201901</h1>
                    <h1>Analysis of Architectures: Memristor Bridge Synapse</h1>
                    <h1>Rohit Bhargav Peesa</h1>
                    <h1>Dr. Santanu Mandal</h1>
                </div>
                <div className='grid grid-cols-5 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>1</h1>
                    <h1>URE001201901</h1>
                    <h1>Analysis of Architectures: Memristor Bridge Synapse</h1>
                    <h1>Rohit Bhargav Peesa</h1>
                    <h1>Dr. Santanu Mandal</h1>
                </div>
                <div className='grid grid-cols-5 text-center bg-white text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>1</h1>
                    <h1>URE001201901</h1>
                    <h1>Analysis of Architectures: Memristor Bridge Synapse</h1>
                    <h1>Rohit Bhargav Peesa</h1>
                    <h1>Dr. Santanu Mandal</h1>
                </div>
                <div className='grid grid-cols-5 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>1</h1>
                    <h1>URE001201901</h1>
                    <h1>Analysis of Architectures: Memristor Bridge Synapse</h1>
                    <h1>Rohit Bhargav Peesa</h1>
                    <h1>Dr. Santanu Mandal</h1>
                </div>
                <div className='grid grid-cols-5 text-center bg-white text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>1</h1>
                    <h1>URE001201901</h1>
                    <h1>Analysis of Architectures: Memristor Bridge Synapse</h1>
                    <h1>Rohit Bhargav Peesa</h1>
                    <h1>Dr. Santanu Mandal</h1>
                </div>
                <div className='grid grid-cols-5 text-center bg-backgroundRed text-[#000] p-5 text-[18px] font-semibold'>
                    <h1>1</h1>
                    <h1>URE001201901</h1>
                    <h1>Analysis of Architectures: Memristor Bridge Synapse</h1>
                    <h1>Rohit Bhargav Peesa</h1>
                    <h1>Dr. Santanu Mandal</h1>
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

export default UREtable 
