import Image from 'next/image'
import React from 'react'

const LibBanner = () => {
    return (
        <>
            <div className='max-w-[1560px] w-[100%] min-h-[600px] xl:min-h-[500px] h-[100%] hidden lg:block'>
                <div className='relative'>
                    <div className='overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1560" height="328" viewBox="0 0 1560 328" fill="none">
                            <path d="M0 1V0H1560V1V328C814.126 68.5 983.666 328 0 1Z" fill="#FFF3F4" />
                        </svg>
                    </div>

                    {/* <div className='max-w-[1560px] w-[100%] min-h-[328px] h-[100%]' style={{ backgroundImage: 'url("/libbackground.svg")'}} >

                </div> */}

                    <div className='flex max-w-[1560px] w-[100%] min-h-[600px] xl:min-h-[500px] h-[100%] absolute top-0 left-0 px-[50px] md:px-[100px] py-[40px] gap-3 md:gap-5'>
                        <div className='flex-1 flex flex-col justify-center items-start'>
                            <h1 className='text-[46px] font-Emilio text-[#650010] font-bold'>About Library</h1>
                            <p className='text-[16px] font-Montserrat text-[#000]'>The VIT-AP University library a technology driven, user centric, innovative platform for the academic community which with the motto “Apply Knowledge and Improve life”. It maintains a perfect balance in providing priority to both traditional and modern concepts of library. The Library is well equipped with modem facilities and resources consisting of CDROMs, DVD-ROM, online databases, micro-documents, video cassettes, books, journals, etc. It has fully developed Digital Library equipped with necessary modern facilities in order to provide various digital mode Library services. It has rich collection of reference books, textbooks and research journals in electronic as well as in print form in the field of engineering, basic science and humanities, management, law and allied subjects. </p>
                        </div>
                        <div className='flex-1 flex justify-center items-center'>
                            <div className='max-w-[430px] w-[100%] max-h-[360px] h-[100%] relative'>
                                <Image fill src={"/libbanner.jpeg"} alt='libbanner' className='z-10' />
                                <div className='absolute -top-10 -right-10 w-full h-full bg-[#650010]'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full max-h-[900px] bg-[#FDFEFF] block lg:hidden'>
                <div className='flex flex-col px-[30px] py-[20px] gap-3'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[24px] font-Emilio text-[#650010] font-bold'>About Library</h1>
                        <p className='text-[14px] font-Montserrat text-[#000]'>The VIT-AP University library a technology driven, user centric, innovative platform for the academic community which with the motto “Apply Knowledge and Improve life”. It maintains a perfect balance in providing priority to both traditional and modern concepts of library. The Library is well equipped with modem facilities and resources consisting of CDROMs, DVD-ROM, online databases, micro-documents, video cassettes, books, journals, etc. It has fully developed Digital Library equipped with necessary modern facilities in order to provide various digital mode Library services. It has rich collection of reference books, textbooks and research journals in electronic as well as in print form in the field of engineering, basic science and humanities, management, law and allied subjects. </p>
                    </div>
                    <div>
                        <div className='max-w-[270px] mx-auto min-h-[250px] h-full w-full relative mt-9'>
                            <Image fill src={"/libbanner.jpeg"} alt='libbanner' className='z-10 ' />
                            <div className='absolute -top-10 -right-10 w-full h-full bg-[#650010]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LibBanner
