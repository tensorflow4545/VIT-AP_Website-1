import Image from 'next/image'
import React from 'react'

const Gallery = () => {
    return (
        <div className='max-w-[1560px] w-[100%] min-h-[500px] h-[100%] '>
            <div className='px-[10px] lg:px-[50px] md:px-[100px] py-[50px] flex flex-col gap-4'>
                <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>Gallery</h1>
                <div className='flex flex-wrap justify-center items-center gap-6'>
                    <div className='max-w-[150px] xl:max-w-[390px] w-[100%] min-h-[110px] lg:min-h-[230px] h-[100%] relative'>
                        <Image src={"/libgallery1.jpeg"} alt='libgallery' fill/>
                    </div>
                    <div className='max-w-[150px] xl:max-w-[390px] w-[100%] min-h-[110px] lg:min-h-[230px] h-[100%] relative'>
                        <Image src={"/libgallery1.jpeg"} alt='libgallery' fill />
                    </div>
                    <div className='max-w-[150px] xl:max-w-[390px] w-[100%] min-h-[110px] lg:min-h-[230px] h-[100%] relative'>
                        <Image src={"/libgallery1.jpeg"} alt='libgallery' fill />
                    </div>
                    <div className='max-w-[150px] xl:max-w-[390px] w-[100%] min-h-[110px] lg:min-h-[230px] h-[100%] relative'>
                        <Image src={"/libgallery1.jpeg"} alt='libgallery' fill />
                    </div>
                    <div className='max-w-[150px] xl:max-w-[390px] w-[100%] min-h-[110px] lg:min-h-[230px] h-[100%] relative'>
                        <Image src={"/libgallery1.jpeg"} alt='libgallery' fill />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='border border-[#650010] text-[#650010] p-5 hover:bg-gradient-to-r hover:from-[#650010] hover:to-red-700 transition-all duration-300 hover:text-white hover:border-none text-semibold text-[16px] font-Montserrat'>Visit Gallery Room</button>
                </div>
            </div>
        </div>
    )
}

export default Gallery
