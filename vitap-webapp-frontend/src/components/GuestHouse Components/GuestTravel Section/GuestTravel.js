import React from 'react'
import { guestTravel } from '@/constants'

const GuestTravel = () => {
    return (
<<<<<<< HEAD
        <div className='max-w-screen w-[100%] min-h-[600px] h-[100%] flex justify-center items-center'>
=======
        <div className='max-w-[1560px] w-[100%] min-h-[600px] h-[100%] flex justify-center items-center'>
>>>>>>> aws-build-branch
            <div className='max-w-[1340px] w-[100%] min-h-[500px] h-[100%] flex flex-col gap-4 text-start justify-center items-start p-[50px] md:p-0'>
                <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>Travel</h1>
                <div className='flex flex-col gap-4'>
                    {
                        guestTravel?.map((travel) => (
                            <p className='text-[#000] text-[20px]' key={travel.id}>{travel.info}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GuestTravel
