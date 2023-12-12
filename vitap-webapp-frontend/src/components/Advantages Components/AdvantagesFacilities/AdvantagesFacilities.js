import Image from 'next/image'
import React from 'react'
import FacilityCard from './FacilityCard'
import { advantagesFacilities } from '@/constants'

const AdvantagesFacilities = () => {
    return (
        <div className='max-w-[1560px] w-[100%] mx-auto max-h-[1200px] bg-[#FCE3E5]'>
            <div className='mx-[100px] py-[50px]'>
                <div className='grid grid-cols-4 gap-3 justify-center items-center'>
                    {
                        advantagesFacilities.map((facility) => (
                            <FacilityCard key={facility.id} imgUrl={facility.imgUrl} title={facility.title}/>
                        ))
                    }
                </div>
            </div>  
        </div>
    )
}

export default AdvantagesFacilities
