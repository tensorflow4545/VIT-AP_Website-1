import Image from 'next/image'
import React from 'react'

const SuperdreamPhoto = () => {
    return (
        <div className="max-w-[1560px] w-[100%] -mt-[30px] lg:-mt-[100px] xl:-mt-[150px] min-h-[450px] h-[100%] mx-auto flex justify-end items-start">
            <div className='lg:max-w-[920px] lg:w-[100%] max-w-[750px] w-[100%] min-h-[400px] h-[100%] relative mx-[50px] lg:mx-0 '>
                <Image src={"/super-dream-offer 1.png"} fill alt=''/>
            </div>
        </div>
    )
}

export default SuperdreamPhoto
