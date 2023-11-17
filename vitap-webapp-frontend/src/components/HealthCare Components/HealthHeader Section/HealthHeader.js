import Image from 'next/image'
import React from 'react'

const HealthHeader = () => {
    return (
        <div className="max-w-[1560px] w-[100%] min-h-[650px] h-[100%] mx-auto">
            <div
                style={{ backgroundImage: `url("/announcements.png")` }}
                className="relative max-w-[1560px] w-full h-[300px] bg-center mx-auto flex items-center justify-center"
            >
                <h1 className="text-white text-[45px] font-semibold text-center flex justify-center items-center">
                    Health Care
                </h1>
            </div>

            <div className='max-w-[1560px] w-[100%] flex flex-col min-h-[500px] h-[100%]'>
                <div className='flex-1'>

                </div>
                <div className='flex-1 bg-backgroundRed2 md:px-[100px] px-[50px] flex justify-center items-center md:gap-0 gap-4'>
                    <div className='flex-1 flex justify-center items-center relative -mt-[150px]'>
                        <Image src={"/healthcare.png"} width={500} height={300}  alt='healthcare'/>
                    </div>
                    <div className='flex-1 flex flex-col justify-center items-start'>
                        <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>Health Care</h1>
                        <p className='text-[16px] font-Montserrat text-[#000]'>The medical needs of the students are taken care by a fully equipped Health Centre on campus along with ambulance facility in Association with Manipal Hospitals, Vijayawada.</p>
                    </div>
                </div>      
            </div>
        </div>
    )
}

export default HealthHeader
