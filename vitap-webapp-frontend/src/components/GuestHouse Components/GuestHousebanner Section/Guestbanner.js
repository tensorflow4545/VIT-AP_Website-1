import Image from 'next/image'
import React from 'react'

const Guestbanner = () => {
    return (
        <div className='max-w-[1560px] w-[100%] min-h-[650px] md:min-h-[500px] h-[100%]'>
            <div className='relative'>
                <div className='overflow-hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1560" height="328" viewBox="0 0 1560 328" fill="none">
                        <path d="M0 1V0H1560V1V328C814.126 68.5 983.666 328 0 1Z" fill="#FFF3F4" />
                    </svg>
                </div>

                <div className='flex max-w-[1560px] w-[100%] min-h-[650px] md:min-h-[500px] h-[100%] absolute top-0 left-0 px-[50px] md:px-[100px] py-[40px] gap-3 md:gap-5'>
                    <div className='flex-1 flex flex-col justify-center items-start'>
                        <h1 className='text-[24px] sm:text-[46px] font-Emilio text-[#650010] font-bold pb-5'>Guest House</h1>
                        <p className='text-[16px] sm:text-[18px] lg:text-[20px] font-Montserrat text-[#3b3131] pb-3'>✧ We invite you to discover a home away from home at the VIT-AP GUEST HOUSE . The guesthouse is primarily meant for the visiting family members of students and for the official guests of the university. </p>
                        <p className='text-[16px] sm:text-[18px] lg:text-[20px] font-Montserrat text-[#000] pb-3'>✧ The contemporary, classy and sub tale feel and decor of the guesthouses, with their convenient and central location, makes the VIT-AP GUEST HOUSE the perfect choice for comfortable stay. With its clean and hygienic ambience, the guesthouse is professionally managed. It offers 24-hour check-in / check out facility for the convenience of the guests. </p>
                        <p className='text-[16px] sm:text-[18px] lg:text-[20px] font-Montserrat text-[#000]'>✧ If you are looking for home-like hospitality and comfort, and a classy atmosphere,VIT-AP GUEST HOUSE is the place to be in. We assure you of a personalized service and hospitality that will remain in your memory forever. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guestbanner
