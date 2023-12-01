import React from 'react'
import { guestFacilities } from '@/constants'

const GuestFacilities = () => {
    return (
<<<<<<< HEAD
        <div className='max-w-screen w-[100%] min-h-[500px] h-[100%] bg-[#FCE3E5] flex justify-center items-center'>
=======
        <div className='max-w-[1560px] w-[100%] min-h-[500px] h-[100%] bg-[#FCE3E5] flex justify-center items-center'>
>>>>>>> aws-build-branch
            <div className='max-w-[1340px] w-[100%] min-h-[450px] h-[100%] flex flex-col gap-4 p-[50px] md:p-0'>
                <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>Facilities</h1>
                <div className='grid grid-cols-3 grid-rows-6 gap-0'>
                    {
                        guestFacilities?.map((facility) => (
                            <p className='text-[#000] text-[20px]' key={facility.id}>{facility.info}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GuestFacilities
