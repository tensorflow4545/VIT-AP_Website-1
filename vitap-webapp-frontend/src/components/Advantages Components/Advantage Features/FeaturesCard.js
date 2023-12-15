import Image from 'next/image'
import React from 'react'

const FeaturesCard = () => {
    return (
        <div className='max-w-[1560px] w-[100%] mx-auto min-h-[400px] bg-[#FCE3E5] flex relative -z-20'>
            <div className='basis-1/3'></div>
            <div className='absolute top-24 -left-48'>
                <Image src={"/advantagefacility.jpeg"} alt='advantage' width={500} height={500}/>
            </div>
            <div className='absolute top-32 -left-40 border-2 border-[#650010] max-w-[510px] w-[100%] min-h-[300px] -z-10'>
                Hello
            </div>
            <div className='basis-2/3 flex flex-col justify-center p-5 items-start'>
                <h1 className='text-[26px] lx:text-[32px] font-Emilio text-[#650010]'>Unique Teaching-Learning Process</h1>
                <p className='text-[#000] font-Montserrat text-[18px] font-thin text-left'>With a focus on Engineering and Technology competencies, identified by industry and professional societies, the teaching learning process at VIT-AP prepares the students for the future. Based on a meticulously designed curriculum with industry and international academia feedback, the students are part of a flexible credit system where their learning is continuously assessed.</p>
            </div>
        </div>
    )
}

export default FeaturesCard
