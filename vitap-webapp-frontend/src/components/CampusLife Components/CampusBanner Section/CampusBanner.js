import React from 'react'

const CampusBanner = () => {
    return (
        <div style={{ backgroundImage: `url("/acheivementsbg.png")` }} className="max-w-[1560px] w-full min-h-[600px] h-full bg-center mx-auto relative">
            <div className='flex justify-center items-start py-[40px]'>
                <h1 className='text-[46px] font-Emilio text-white font-bold'>Life At VIT-AP</h1>
            </div>
            <div className='absolute top-32 left-0 w-full flex justify-center items-center'>
                <div className='max-w-[700px] w-[100%] min-h-[400px] bg-gray-200 shadow-2xl'>

                </div>
            </div>
        </div>
    )
}

export default CampusBanner
