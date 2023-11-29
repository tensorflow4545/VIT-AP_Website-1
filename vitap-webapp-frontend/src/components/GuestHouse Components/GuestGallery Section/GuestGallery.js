import Image from 'next/image'
import React from 'react'

const GuestGallery = () => {
    return (
        <div className='max-w-[1560px] w-[100%] min-h-[500px] lx:min-h-[700px] h-[100%]'>
            <div className='relative'>
                <div className='flex max-w-[1560px] w-[100%] min-h-[700px] lx:min-h-[900px] h-[100%] absolute top-0 left-0 px-[50px] md:px-[100px] py-[40px] gap-3 md:gap-5 flex-col mt-5'>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='text-[46px] font-Emilio text-[#650010] font-bold pb-2'>Gallery</h1>
                    </div>
                    <div className='grid grid-cols-4 justify-center items-center gap-5 text-center'>
                        <div className=' shadow-xl max-w-[300px] w-[100%]'>
                            <Image src={"/guesthouse.png"} width={300} height={220} alt='faculty' className='p-3' />
                            <div>
                                <h1 className='text-[16px] text-[#650010] font-semibold pb-5'>Corridor 1</h1>
                            </div>
                        </div>
                        <div className=' shadow-xl max-w-[300px] w-[100%]'>
                            <Image src={"/guesthouse.png"} width={300} height={220} alt='faculty' className='p-3' />
                            <div>
                                <h1 className='text-[16px] text-[#650010] font-semibold pb-5'>Corridor 1</h1>
                            </div>
                        </div>
                        <div className=' shadow-xl max-w-[300px] w-[100%]'>
                            <Image src={"/guesthouse.png"} width={300} height={220} alt='faculty' className='p-3' />
                            <div>
                                <h1 className='text-[16px] text-[#650010] font-semibold pb-5'>Corridor 1</h1>
                            </div>
                        </div>
                        <div className=' shadow-xl max-w-[300px] w-[100%]'>
                            <Image src={"/guesthouse.png"} width={300} height={220} alt='faculty' className='p-3' />
                            <div>
                                <h1 className='text-[16px] text-[#650010] font-semibold pb-5'>Corridor 1</h1>
                            </div>
                        </div>
                        <div className=' shadow-xl max-w-[300px] w-[100%]'>
                            <Image src={"/guesthouse.png"} width={300} height={220} alt='faculty' className='p-3' />
                            <div>
                                <h1 className='text-[16px] text-[#650010] font-semibold pb-5'>Corridor 1</h1>
                            </div>
                        </div>
                        <div className=' shadow-xl max-w-[300px] w-[100%]'>
                            <Image src={"/guesthouse.png"} width={300} height={220} alt='faculty' className='p-3' />
                            <div>
                                <h1 className='text-[16px] text-[#650010] font-semibold pb-5'>Corridor 1</h1>
                            </div>
                        </div>
                        <div className=' shadow-xl max-w-[300px] w-[100%]'>
                            <Image src={"/guesthouse.png"} width={300} height={220} alt='faculty' className='p-3' />
                            <div>
                                <h1 className='text-[16px] text-[#650010] font-semibold pb-5'>Corridor 1</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuestGallery
