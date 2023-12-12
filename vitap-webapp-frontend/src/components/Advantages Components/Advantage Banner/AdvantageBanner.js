import React from 'react'

const AdvantageBanner = () => {
    return (
        <>
            <div className='max-w-[1560px] mx-auto w-[100%] min-h-[400px] h-[100%] ls:block hidden'>
                <div className='relative'>

                    <div className='flex max-w-[1560px] w-[100%] min-h-[400px] h-[100%] absolute top-0 left-0 px-[50px] md:px-[100px] py-[40px] gap-3 md:gap-5'>
                        <div className='flex-1 flex flex-col justify-center items-start'>
                            <h1 className='text-[42px] lx:text-[46px] font-Emilio text-[#650010] font-bold pb-5'>The VIT-AP Advantage</h1>
                            <p className='text-[16px] lx:text-[18px] font-Montserrat text-[#000] pb-3'>At VIT-AP, we are committed to providing a holistic environment for development. We inspire bright young minds from across the country and the world over to develop and harness their exceptional intellectual abilities in order to become socially responsible and skilled individuals.</p>
                            <p className='text-[16px] lx:text-[18px] font-Montserrat text-[#000] pb-3'>With flexible courses and a unique teaching-learning experience, a student-oriented mentoring scheme, extra-curricular activities, focus on continuous assessment and emphasis on practical learning, state-of-the art facilities, several international collaborations and placement opportunities and much more, VIT-AP ensures that students are informed, inspired, and engaged in an enriching experience at the institute.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='block ls:hidden w-full max-h-[700px]'>
                <div className='flex flex-col gap-4 px-[30px] py-[20px]'>
                    <div>
                        <h1 className='text-[24px] font-Emilio text-[#650010] font-bold pb-5'>The VIT-AP Advantage</h1>
                        <p className='text-[14px] font-Montserrat text-[#000] pb-3'>At VIT-AP, we are committed to providing a holistic environment for development. We inspire bright young minds from across the country and the world over to develop and harness their exceptional intellectual abilities in order to become socially responsible and skilled individuals.</p>
                    </div>
                    <div>
                        <p className='text-[14px] font-Montserrat text-[#000] pb-3'>With flexible courses and a unique teaching-learning experience, a student-oriented mentoring scheme, extra-curricular activities, focus on continuous assessment and emphasis on practical learning, state-of-the art facilities, several international collaborations and placement opportunities and much more, VIT-AP ensures that students are informed, inspired, and engaged in an enriching experience at the institute.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdvantageBanner
