import React from 'react'

const CDCOfficeBanner = () => {
    return (
        <div className='max-w-[1560px] w-[100%] min-h-[400px] h-[100%]'>
            <div className='relative'>
                {/* <div className='overflow-hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1560" height="328" viewBox="0 0 1560 328" fill="none">
                        <path d="M0 1V0H1560V1V328C814.126 68.5 983.666 328 0 1Z" fill="#FFF3F4" />
                    </svg>
                </div> */}

                <div className='flex max-w-[1560px] w-[100%] min-h-[400px] h-[100%] absolute top-0 left-0 px-[50px] md:px-[100px] py-[40px] gap-3 md:gap-5'>
                    <div className='flex-1 flex flex-col justify-center items-start'>
                        <h1 className='text-[46px] font-Emilio text-[#650010] font-bold pb-5'>Career Development Center</h1>
                        <p className='text-[16px] font-Montserrat text-[#000] pb-3'>Vellore Institute of Technology promises all its students’ placements in established MNCs. The Career Development Centre Cell of VIT, or CDC Office, offers students a variety of opportunities in placement of jobs to choose from, after their course comes to an end. The Career Development Centre plays an integral role in creating the illustrious placement record of VIT. It ensures smooth functioning of the placement activities in the campus. The centre further facilitates training activities of the students and makes sure they get placed in the best of both national and international companies.</p>
                        <p className='text-[16px] font-Montserrat text-[#000] pb-3'>In 2020-21 alone, CDC has brought more than 800 companies on campus for placements. Last year, the highest offer made was 39 lakhs per year by Microsoft. Over the recent years, many reputed companies such as Intel, Ebay, Amazon, Dell, GE, Texas Instruments, Schneider Electric, DE Shaw & Co, Hitachi, HP, PayPal, Tata Motors, L&T, Dr. Reddy’s, Bosch, Deloitte, Morgan Stanley, Qualcomm, Ashok Leyland, Honda, Ford, Global Analytics, TCS, Cognizant, Accenture, Wipro and InfoSys have participated in hiring from VIT.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CDCOfficeBanner
