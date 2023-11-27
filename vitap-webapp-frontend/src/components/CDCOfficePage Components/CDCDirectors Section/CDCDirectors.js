import Image from 'next/image'
import React from 'react'

const CDCDirectors = () => {
    return (
        <div className='max-w-[1560px] w-[100%] min-h-[420px] lx:min-h-[500px] h-[100%]'>
            <div className='relative'>
                <div className='flex max-w-[1560px] w-[100%] min-h-[420px] lx:min-h-[500px] h-[100%] absolute top-0 left-0 px-[50px] md:px-[100px] py-[40px] gap-3 md:gap-5 flex-col'>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='text-[46px] font-Emilio text-[#650010] font-bold pb-2'>Director & Assistant Director</h1>
                    </div>
                    <div className='grid grid-cols-3 justify-center items-center gap-5 text-center'>
                        <div className=' shadow-xl max-w-[300px] w-[100%] '>
                            <Image src={"/faculty1.jpeg"} width={300} height={220} alt='faculty' className='p-3'/>
                            <div>
                                <h1 className='text-[16px] text-[#650010] font-semibold'>Dr Ashish Kumar</h1>
                                <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>Trainer, CDC</h1>
                            </div>
                        </div>
                        <div className=' shadow-xl max-w-[300px] w-[100%]'>
                            <Image src={"/faculty1.jpeg"} width={300} height={220} alt='faculty' className='p-3' />
                            <div>
                                <h1 className='text-[16px] text-[#650010] font-semibold'>Dr Ashish Kumar</h1>
                                <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>Trainer, CDC</h1>
                            </div>
                        </div>
                        <div className=' shadow-xl max-w-[300px] w-[100%]'>
                            <Image src={"/faculty1.jpeg"} width={300} height={220} alt='faculty' className='p-3' />
                            <div>
                                <h1 className='text-[16px] text-[#650010] font-semibold'>Dr Ashish Kumar</h1>
                                <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>Trainer, CDC</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CDCDirectors
