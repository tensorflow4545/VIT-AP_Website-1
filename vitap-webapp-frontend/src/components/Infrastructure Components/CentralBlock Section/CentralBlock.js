import Image from 'next/image'
import React from 'react'

const CentralBlock = () => {
    return (
        <div className="max-w-[1560px] w-[100%] h-[700px] mx-auto">
            <div className='flex flex-col gap-4 max-w-[1200px] md:mx-auto h-[calc(100vh-100px)] mt-10 mx-[30px]'>
                <div className='flex flex-col text-center gap-2 pt-[30px]'>
                    <h1 className='text-[42px] font-Emilio text-[#000] capitalize px-[15px]'>Central Block</h1>
                    <p className='max-w-[1000px] mx-auto font-Montserrat text-[16px] font-normal px-[15px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='max-w-[1000px] max-h-[500px] w-[100%] h-[100%] relative mx-auto px-[15px]'>
                    <Image src={"/cb.png"} alt=''fill/>
                </div>
            </div>
        </div>
    )
}

export default CentralBlock
