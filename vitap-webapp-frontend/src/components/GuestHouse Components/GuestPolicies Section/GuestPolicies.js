import React from 'react'
import { guestPolicies } from '@/constants'

const GuestPolicies = () => {
    return (

        <div className='max-w-[1560px] w-[100%] min-h-[1200px] h-[100%] bg-[#FCE3E5] flex justify-center items-center'>
            <div className='max-w-[1340px] w-[100%] min-h-[1100px] h-[100%] flex flex-col gap-4 text-start justify-center items-start px-[50px] md:px-[100px] py-[40px]'>
                <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>Policies</h1>
                <div className='flex flex-col gap-4'>
                    {
                        guestPolicies?.map((policy) => (
                            <p className='text-[#000] text-[20px]' key={policy.id}>{policy.info}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GuestPolicies
