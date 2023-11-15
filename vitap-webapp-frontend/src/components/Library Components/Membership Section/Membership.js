import Image from 'next/image'
import React from 'react'

const Membership = () => {
    return (
        <div className='max-w-[1560px] w-[100%] min-h-[300px] h-[100%]'>
            <div className='px-[50px] md:px-[100px] py-[50px] flex flex-col gap-4'>
                <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>Library Membership</h1>

                <div className='flex gap-4'>
                    <div className='flex-1 flex flex-col items-center justify-center gap-2'>
                        <Image src={"/liblogo1.png"} width={300} height={230} alt='liblogo' />
                        <h1 className='text-[24px] font-Montserrat'>DELNET (Development of Library Networks):</h1>
                    </div>
                    <div className='flex-1 flex flex-col items-center justify-center gap-2'>
                        <Image src={"/liblogo2.png"} width={300} height={230} alt='liblogo' />
                        <h1 className='text-[24px] font-Montserrat'>Web OPAC</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Membership
