import Image from 'next/image'
import React from 'react'

const AcademicBlock1 = () => {
    return (
        <div className="max-w-[1560px] w-[100%] max-h-[600px] h-[100%] py-[30px] mx-auto bg-backgroundRed2 mt-10 flex justify-center items-center">
            <div className="flex justify-between items-center gap-4 max-w-[1200px] md:mx-auto h-[calc(60vh-60px)] mx-[30px]">
                <div className='flex-1 flex-col gap-2 '>
                    <h1 className='text-[42px] font-Emilio text-[#000] capitalize px-[15px]'>Academic Block-1</h1>
                    <p className='mx-auto font-Montserrat text-[16px] font-normal pl-[15px] pr-[45px]'>The Sarvepalli Radhakrishnan Block now has the major administrative offices like the Chancellor's Office, Admissions Office, Finance Office, and other Offices which are responsible for addressing student issues. Apart from these, it also houses the VIT-School of Business (VSB). All the major departments, like the Department of Computer Science, Department of Mechanical Engineering and Department of Electrical Engineering exist here. This block also consists of classrooms and well-designed labs providing the best facilities to students</p>
                </div>
                <div className='flex-1 bg-white z-10 max-w-[500px] w-[100%] max-h-[350px] h-[100%] relative rounded-lg'>
                    <Image src={"/ab1.png"} alt='' fill className='p-[7px]' />
                    <div className='absolute -left-10 -bottom-5 bg-white rounded-lg'>
                        <Image src={"/ab1.png"} alt='' width={200} height={150} className='p-[5px]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcademicBlock1
