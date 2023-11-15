import Image from 'next/image'
import React from 'react'

const Gallery = () => {
    return (
        <div className='max-w-[1560px] w-[100%] min-h-[500px] h-[100%] '>
            <div className='px-[50px] md:px-[100px] py-[50px] flex flex-col gap-4'>
                <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>Gallery</h1>
                <div className='flex flex-wrap gap-6 justify-center items-center'>
                    <div className='max-w-[290px] md:max-w-[330px] w-[100%] min-h-[220px] h-[100%] relative'>
                        <Image src={"/libgallery1.jpeg"} alt='libgallery' fill/>
                    </div>
                    <div className='max-w-[290px] md:max-w-[330px] w-[100%] min-h-[220px] h-[100%] relative'>
                        <Image src={"/libgallery1.jpeg"} alt='libgallery' fill />
                    </div>
                    <div className='max-w-[290px] md:max-w-[330px] w-[100%] min-h-[220px] h-[100%] relative'>
                        <Image src={"/libgallery1.jpeg"} alt='libgallery' fill />
                    </div>
                    <div className='max-w-[290px] md:max-w-[330px] w-[100%] min-h-[220px] h-[100%] relative'>
                        <Image src={"/libgallery1.jpeg"} alt='libgallery' fill />
                    </div>
                    <div className='max-w-[290px] md:max-w-[330px] w-[100%] min-h-[220px] h-[100%] relative'>
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
