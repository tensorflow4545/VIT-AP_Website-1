import Image from 'next/image'
import React from 'react'

const AcademicBlock2 = () => {
    return (
        <div className="max-w-[1560px] w-[100%] min-h-[500px] ls:max-h-[900px] ls:h-[100%] py-[30px] mx-auto bg-backgroundRed2 flex justify-center items-center">
            <div className="flex flex-col-reverse ls:flex-row-reverse justify-between items-center gap-4 max-w-[1200px] md:mx-auto mx-[30px] h-[calc(60vh-60px)]">
                <div className='flex-1 flex-col gap-2 '>
                    <h1 className='text-[24px] ls:text-[36px] lx:text-[48px] font-Emilio text-[#000] capitalize px-[15px]'>Academic Block-2</h1>
                    <p className='mx-auto font-Montserrat text-[16px] ls:text-[18px] font-normal pl-[15px] pr-[45px]'>The APJ Abdul Kalam has School of Sciences and Languages, which comprise of the Departments of Mathematics, Physics, and Languages. This block also has classrooms, labs, space for the auditorium.</p>
                </div>
                <div className='flex-1 bg-white z-10 max-w-[400px] w-[100%] min-h-[190px] ls:max-w-[600px] ls:w-[100%] ls:max-h-[390px] ls:h-[100%] relative rounded-lg'>
                    <Image src={"/ab1.png"} alt='' fill className='p-[7px]' />
                    <div className='absolute -right-5 ls:-right-10 -bottom-5 bg-white rounded-lg'>
                        <Image src={"/ab1.png"} alt='' width={294} height={185} className='p-[5px] hidden ls:block' />
                        <Image src={"/ab1.png"} alt='' width={141} height={88} className='p-[5px] block ls:hidden' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcademicBlock2
