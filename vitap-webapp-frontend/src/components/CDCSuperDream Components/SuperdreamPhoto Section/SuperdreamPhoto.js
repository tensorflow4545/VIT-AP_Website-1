import Image from 'next/image'
import React from 'react'

const SuperdreamPhoto = () => {
    return (
        <div className="max-w-[1560px] w-[100%] -mt-[100px] lx:-mt-[150px] min-h-[450px] h-[100%] mx-auto flex justify-end items-start">
            <div className='lx:max-w-[920px] lx:w-[100%] max-w-[750px] w-[100%] min-h-[400px] h-[100%] relative'>
                <Image src={"/super-dream-offer 1.png"} fill alt=''/>
            </div>
        </div>
    )
}

export default SuperdreamPhoto
