import Image from 'next/image'
import React from 'react'

const AcademicBlocks = () => {
    return (
        <div className="max-w-[1560px] w-[100%] max-h-[600px] h-[100%] mx-auto">   
            <div className='flex flex-col gap-4 max-w-[1200px] mx-auto h-[calc(100vh-100px)] mt-10'>
                <div className='flex flex-col text-center gap-2 pt-[30px]'>
                    <h1 className='text-[42px] font-Emilio text-[#000] capitalize px-[15px]'>Academic Blocks</h1>
                    <p className='max-w-[1000px] mx-auto font-Montserrat text-[16px] font-normal px-[15px]'>Well-planned, aesthetically appealing and well - ventilated comprehensive infrastructure is the striking feature of VIT-AP.</p>
                </div>
                
                <div className='grid grid-cols-3 mt-10 gap-10'>
                    <div className=' h-full w-full bg-white shadow-2xl'>
                        <div>
                            <Image src={"/ab1.png"} width={500} height={400} alt=''/>
                        </div>
                        <div className='text-center py-3'>
                            <p className='text-[19px] text-[#650010]'>Academic Block-1</p> 
                            <p className='text-[14px] text-gray-600'>Area 179090.52 Sq.Ft.</p>
                            <p className='text-[14px] text-gray-900'>Sarvepalli Radhakrishnan Block</p>
                        </div>
                    </div>
                    <div className=' h-full w-full bg-white shadow-2xl'>
                        <div>
                            <Image src={"/cb.png"} width={500} height={400} alt='' />
                        </div>
                        <div className='text-center py-3'>
                            <p className='text-[19px] text-[#650010]'>Central Block</p>
                            <p className='text-[14px] text-gray-600'>Area 4,61,303 Sq.Ft.</p>
                            <p className='text-[14px] text-gray-900'>Mahatma Gandhi Block</p>
                        </div>
                    </div>
                    <div className=' h-full w-full bg-white shadow-2xl'>
                        <div>
                            <Image src={"/ab1.png"} width={500} height={400} alt='' />
                        </div>
                        <div className='text-center py-3'>
                            <p className='text-[19px] text-[#650010]'>Academic Block-2</p>
                            <p className='text-[14px] text-gray-600'>Area 183509.99 Sq.Ft.</p>
                            <p className='text-[14px] text-gray-900'>APJ Abdul Kalam Block</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcademicBlocks
