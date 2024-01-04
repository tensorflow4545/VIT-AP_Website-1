import Image from 'next/image'
import React from 'react'

const AcademicBlock1 = () => {
    return (
        <div className="max-w-[1560px] w-[100%] min-h-[500px] lg:max-h-[900px] lg:h-[100%] py-[30px] mx-auto bg-backgroundRed2 mt-10 flex justify-center items-center">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4 max-w-[1200px] md:mx-auto h-[calc(70vh - 10px)]  lg:h-[calc(70vh-60px)] mx-[30px]">
                <div className='flex-1 flex-col gap-2 '>
                    <h1 className='text-[24px] lg:text-[36px] xl:text-[48px] font-Emilio text-[#000] capitalize px-[15px]'>Academic Block-1</h1>
                    <p className='mx-auto font-Montserrat text-[16px] lg:text-[18px] font-normal pl-[15px] pr-[45px]'>The Sarvepalli Radhakrishnan Block now has the major administrative offices like the Chancellor's Office, Admissions Office, Finance Office, and other Offices which are responsible for addressing student issues. Apart from these, it also houses the VIT-School of Business (VSB). All the major departments, like the Department of Computer Science, Department of Mechanical Engineering and Department of Electrical Engineering exist here. This block also consists of classrooms and well-designed labs providing the best facilities to students</p>
                </div>
                <div className='flex-1 bg-white z-10 max-w-[400px] w-[100%] min-h-[190px] lg:max-w-[600px] lg:w-[100%] lg:max-h-[390px] lg:h-[100%] relative rounded-lg'>
                    <Image src={"/ab1.png"} alt='' fill className='p-[7px]' />
                    <div className='absolute -left-5 lg:-left-10 -bottom-5 bg-white rounded-lg'>
                        <Image src={"/ab1.png"} alt='' width={294} height={185} className='p-[5px] hidden lg:block'/>
                        <Image src={"/ab1.png"} alt='' width={141} height={88} className='p-[5px] block lg:hidden'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcademicBlock1
