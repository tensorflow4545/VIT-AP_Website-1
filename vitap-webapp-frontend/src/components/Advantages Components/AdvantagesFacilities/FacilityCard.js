import Image from 'next/image'
import React from 'react'

const FacilityCard = ({ key, imgUrl, title }) => {
    return (
        <div key={key} className='flex flex-col justify-center items-center text-center ls:max-w-[290px] min-h-[60px] ls:min-h-[260px] bg-[#650010] hover:bg-gradient-to-r hover:from-primary hover:to-red-700 group cursor-pointer'>
            <div className='hidden ls:block max-w-[290px] w-[100%] min-h-[180px] relative overflow-hidden transition-all ease-in-out duration-300'>
                <Image src={imgUrl} fill alt='advantage' className='group-hover:scale-110 transition-all ease-in-out duration-300'/>
            </div>
            <div className='max-w-[290px] w-[100%] min-h-[80px] flex justify-center items-center '>
                <p className='text-[20px] text-white font-Emilio p-2'>{title}</p>
            </div>
        </div>
    )
}

export default FacilityCard
