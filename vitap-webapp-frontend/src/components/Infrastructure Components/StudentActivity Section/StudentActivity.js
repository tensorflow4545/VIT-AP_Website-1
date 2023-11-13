import Image from 'next/image'
import React from 'react'

const StudentActivity = () => {
    return (
        <div className="max-w-[1560px] w-[100%] h-[60vh] mx-auto">
            <div className='max-w-[1200px] m-auto h-full pt-[20px] flex gap-4 justify-center items-center '>
                <div className='flex-1 max-h-[500px] my-auto'>
                    <h1 className='text-[42px] font-Emilio text-[#000] capitalize pb-3'>Student Activity Center</h1>
                    <ul>
                        <li>Well Equipped Indoor Sports And A/C Facilities</li>
                        <li>Gymnasium</li>
                        <li>Shuttle Court</li>
                        <li>BasketBall Court</li>
                        <li>Squash Court</li>
                        <li>Indoor Sports</li>
                        <li>Multi Cuisine Food Court</li>
                        <li>Guest House</li>
                        <li>Mini Multi Purpose Hall</li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <div className='grid grid-cols-2 gap-4 max-w-[450px] w-[100%] mx-auto '>
                        <div className='max-w-[200px] max-h-[250px] w-[100%] h-[100%] overflow-hidden bg-white shadow-2xl rounded-3xl rounded-tl-none rounded-br-none'>
                            <Image src={"/student1.png"} width={200} height={100} alt='' className='p-[9px] rounded-3xl rounded-tl-none rounded-br-none'/>
                        </div>
                        <div className='max-w-[200px] max-h-[250px] w-[100%] h-[100%] overflow-hidden bg-white shadow-2xl rounded-3xl rounded-tr-none rounded-bl-none'>
                            <Image src={"/student2.png"} width={200} height={100} alt='' className='p-[9px] rounded-3xl rounded-tr-none rounded-bl-none' />
                        </div>
                        <div className='max-w-[200px] max-h-[250px] w-[100%] h-[100%] overflow-hidden bg-white shadow-2xl rounded-3xl rounded-tr-none rounded-bl-none'>
                            <Image src={"/student3.png"} width={200} height={100} alt='' className='p-[9px] rounded-3xl rounded-tr-none rounded-bl-none' />
                        </div>
                        <div className='max-w-[200px] max-h-[250px] w-[100%] h-[100%] overflow-hidden bg-white shadow-2xl rounded-3xl rounded-tl-none rounded-br-none'>
                            <Image src={"/student4.png"} width={200} height={100} alt='' className='p-[9px] rounded-3xl rounded-tl-none rounded-br-none' />
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default StudentActivity
