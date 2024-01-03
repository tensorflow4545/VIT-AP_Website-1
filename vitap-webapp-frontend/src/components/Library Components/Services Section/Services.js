import React from 'react'
import { FaBook } from 'react-icons/fa6'

const Services = () => {
    return (
        <>
            <div className='max-w-[1560px] w-[100%] min-h-[700px] h-[100%] bg-backgroundRed2 px-[50px] md:px-[100px] py-[40px] lg:flex -z-10 gap-3 mt-[50px] hidden'>
                <div className='flex-1 flex flex-col items-start justify-center'>
                    <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>Library Services</h1>
                    <p className='text-[22px] font-Montserrat text-[#000]'>Take advantage of these services offered by the library.</p>
                </div>
                <div className='flex-1 bg-[#FFF8F8] z-10 flex relative'>
                    <div className='flex-1 my-[40px] border border-gray-600 px-[20px] border-l-0 border-b-0 border-t-0 grid grid-rows-6 items-center justify-center'>
                        <div className='flex gap-2 items-center justify-start'>
                            <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                            <p className='text-[18px] font-Montserrat text-[#000]'>Lending Services </p>
                        </div>
                        <div className='flex gap-2 items-center justify-start'>
                            <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                            <p className='text-[18px] font-Montserrat text-[#000]'>Digital Resources Services</p>
                        </div>
                        <div className='flex gap-2 items-center justify-start'>
                            <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                            <p className='text-[18px] font-Montserrat text-[#000]'>OPAC/Web OPAC</p>
                        </div>
                        <div className='flex gap-2 items-center justify-start'>
                            <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                            <p className='text-[18px] font-Montserrat text-[#000]'>Library Orientation</p>
                        </div>
                        <div className='flex gap-2 items-center justify-start'>
                            <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                            <p className='text-[18px] font-Montserrat text-[#000]'>CAS/SDI</p>
                        </div>
                        <div className='flex gap-2 items-center justify-start'>
                            <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                            <p className='text-[18px] font-Montserrat text-[#000]'>Institutional Repository</p>
                        </div>
                    </div>

                    <div className='flex-1 my-[40px] grid grid-rows-6 items-center justify-center pl-[10px]'>
                        <div className='flex gap-2 items-center justify-start'>
                            <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                            <p className='text-[18px] font-Montserrat text-[#000]'>Reference Services </p>
                        </div>
                        <div className='flex gap-2 items-center justify-start'>
                            <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                            <p className='text-[18px] font-Montserrat text-[#000]'>Printing/Scanning</p>
                        </div>
                        <div className='flex gap-2  items-center justify-start'>
                            <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                            <p className='text-[18px] font-Montserrat text-[#000]'>Inter library loan (Through DELNET) </p>
                        </div>
                        <div className='flex gap-2 items-center justify-start'>
                            <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                            <p className='text-[18px] font-Montserrat text-[#000]'>New Arrival information</p>
                        </div>
                        <div className='flex gap-2 items-center justify-start'>
                            <p className='bg-backgroundRed2 p-2 rounded-full'><FaBook /></p>
                            <p className='text-[18px] font-Montserrat text-[#000]'>NPTEL</p>
                        </div>
                    </div>

                    <div className='max-w-[100px] w-[100%] h-full absolute top-0 right-0 border-2 border-[#650010] border-l-0'>

                    </div>
                </div>
            </div>

            <div className='w-full max-h-[600px] bg-backgroundRed2 block lg:hidden'>
                <div className='flex flex-col gap-2 px-[30px] py-[20px]'>
                    <h1 className='text-[24px] font-Emilio text-[#650010] font-bold justify-start items-center'>Library Services</h1>
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
            </div>
        </>
    )
}

export default Services
