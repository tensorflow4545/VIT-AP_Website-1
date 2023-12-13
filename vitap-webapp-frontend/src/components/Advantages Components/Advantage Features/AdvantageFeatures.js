import React from 'react'
import FeaturesCard from './FeaturesCard'
import Image from 'next/image'

const AdvantageFeatures = () => {
    return (
        <div className='max-w-[1560px] w-[100%] mx-auto max-h-[5000px] py-[40px]'>
                <h1 className='text-[42px] lx:text-[46px] font-Emilio text-[#650010] py-5 font-thin text-center'>Objectives Key Features</h1>
            <div className='flex flex-col items-center justify-center gap-3 mx-10 '>
                <div className='min-h-[400px] flex w-[100%] relative py-[40px]'>
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] ml-[100px] md:ml-[200px] relative mt-[60px]'>
                            <Image src={"/advantagefacility.jpeg"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 left-10 border-2 border-[#650010] -z-10'>

                            </div>
                        </div>
                    </div>
                    <div className='basis-2/3 max-h-[400px] bg-[#FCE3E5] flex justify-center items-center -z-20'>
                        <div className='flex-1 '></div>
                        <div className='flex-1 flex flex-col justify-center items-start -ml-[200px] px-[10px] md:px-[40px]'>
                            <h1 className='text-[26px] lx:text-[32px] font-Emilio text-[#650010]'>Unique Teaching-Learning Process</h1>
                            <p className='text-[#000] font-Montserrat text-[18px] font-thin text-left'>With a focus on Engineering and Technology competencies, identified by industry and professional societies, the teaching learning process at VIT-AP prepares the students for the future. Based on a meticulously designed curriculum with industry and international academia feedback, the students are part of a flexible credit system where their learning is continuously assessed.</p>
                        </div>
                    </div>
                </div>

                <div className='flex min-h-[400px] w-[100%] py-[40px]'>
                    <div className='basis-2/3 max-h-[400px] flex flex-col items-start justify-center border-2 border-[#655010]'>
                        <div className='max-w-[600px] px-[30px]'>
                            <h1 className='text-[32px] lx:text-[32px] font-Emilio text-[#650010]'>Fully Flexible Credit System (FFCS® )</h1>
                            <p className='text-[#000] font-Montserrat text-[18px] font-thin text-left'>The students are offered a range of diverse courses, and provided the opportunity to select courses, timings and faculty members based on their aspirations and interests.</p>
                        </div>
                    </div>
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] -ml-[250px] relative mt-[60px]'>
                            <Image src={"/advantagefacility.jpeg"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 right-10 bg-[#FCE3E5] -z-10'>

                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='min-h-[400px] flex w-[100%] relative py-[40px]'>
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] ml-[100px] md:ml-[200px] relative mt-[60px]'>
                            <Image src={"/advantagefacility.jpeg"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 left-10 border-2 border-[#650010] -z-10'>

                            </div>
                        </div>
                    </div>
                    <div className='basis-2/3 max-h-[400px] bg-[#FCE3E5] flex justify-center items-center -z-20'>
                        <div className='flex-1 '></div>
                        <div className='flex-1 flex flex-col justify-center items-start -ml-[200px] px-[10px] md:px-[40px]'>
                            <h1 className='text-[26px] lx:text-[32px] font-Emilio text-[#650010]'>Unique Teaching-Learning Process</h1>
                            <p className='text-[#000] font-Montserrat text-[18px] font-thin text-left'>With a focus on Engineering and Technology competencies, identified by industry and professional societies, the teaching learning process at VIT-AP prepares the students for the future. Based on a meticulously designed curriculum with industry and international academia feedback, the students are part of a flexible credit system where their learning is continuously assessed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvantageFeatures
