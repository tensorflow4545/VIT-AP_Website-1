import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./FacultyPage.css"

const EachFaculty = () => {
    return (
        <>
            <div className="max-w-[1560px] w-[100%] h-[100%] mx-auto">
                <div
                    style={{ backgroundImage: `url("/facultybg.jpeg")` }}
                    className="relative max-w-[1560px] w-full h-[300px] bg-cover bg-no-repeat bg-center mx-auto flex items-center justify-center"
                >
                    <h1 className="text-white text-[24px] ls:text-[45px] font-semibold text-center flex justify-center items-center font-Emilio capitalize">
                        Faculty Profile (SCOPE)
                    </h1>
                </div>

                <div className='hidden ls:flex max-w-[1560px] w-[100%] min-h-[1000px] h-[100%] relative mb-[100px]'>
                    <div className='absolute w-[30%] h-[100%] bg-[#650010] overflow-visible '>
                        <div className=' bg-white ml-[100px] mt-[60px] shadow-2xl max-w-[450px] w-[100%] h-[800px] z-10 flex flex-col'>
                            <div className='flex-1 p-[25px]'>
                                <div className='flex justify-center items-center'>
                                    <Image src={"/facultyimg.png"} alt='facultyimg' width={150} height={120} className=' rounded-full shadow-xl' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-Emilio text-[24px] md:text-[32px]'>Dr. Saroj Kumar Panigrahy</h1>
                                    <p className='font-Inter text-[14px] md:text-[16px]'>Associate Professor</p>
                                    <h3 className='font-Inter text-[14px] md:text-[16px]'>School of Computer Science and Engineering (SCOPE) </h3>
                                    <p className='font-Inter text-[14px] md:text-[16px]'> <span className='text-[#650010]'>Office Address :</span> 329-B, AB-1</p>
                                    <p className='font-Inter text-[14px] md:text-[16px]'> <span className='text-[#650010]'>Contact No : </span> 700843963</p>
                                </div>
                                <div className='flex justify-center items-center pt-5 gap-4'>
                                    <Link href="/"><Image src={"/maillogo.png"} alt='linkedin' width={45} height={25}></Image></Link>
                                    <Link href="/"><Image src={"/weblogo.png"} alt='linkedin' width={45} height={25}></Image></Link>
                                    <Link href="/"><Image src={"/linkedinlogo.png"} alt='linkedin' width={35} height={25}></Image></Link>
                                </div>
                            </div>

                            <div className='flex-1 bg-backgroundRed grid grid-rows-6 items-center text-center'>
                                <div className=' bg-deep-orange-200 py-[17px] cursor-pointer hover:bg-gradient-to-r hover:from-[#650010] hover:to-red-600 hover:text-white'>Education</div>
                                <div className=' cursor-pointer py-[19px] hover:bg-gradient-to-r hover:from-[#650010] hover:to-red-600 hover:text-white'>Research</div>
                                <div className=' bg-deep-orange-200 py-[17px] cursor-pointer hover:bg-gradient-to-r hover:from-[#650010] hover:to-red-600 hover:text-white'>Project</div>
                                <div className=' cursor-pointer py-[19px] hover:bg-gradient-to-r hover:from-[#650010] hover:to-red-600 hover:text-white'>Patents</div>
                                <div className=' bg-deep-orange-200 py-[17px] cursor-pointer hover:bg-gradient-to-r hover:from-[#650010] hover:to-red-600 hover:text-white'>Awards and Recognitions</div>
                                <div className=' cursor-pointer py-[19px] hover:bg-gradient-to-r hover:from-[#650010] hover:to-red-600 hover:text-white'>Professional Memberhips</div>
                            </div>
                        </div>
                    </div>

                    <div className='absolute w-[70%] bg-white h-[100%] right-0 -z-10 pl-[150px] pt-[60px]'>
                        <div className=' max-w-[600px] w-[100%] h-[800px]'>
                            <div>
                                <h1 className='text-[#650010] text-[24px] md:text-[32px] font-Emilio'>Education</h1>
                                <h2 className='text-[18px] md:text-[20px] font-Emilio leading-5'>Doctorial Degree & University</h2>
                            </div>

                            <div className='mt-7 flex flex-col gap-2    '>
                                <div className='flex items-center gap-4'>
                                    <Image src={"/arrow.png"} alt='arrow' height={20} width={30} />
                                    <h1 className='font-Inter text-[14px] md:text-[18px]'>Computer Science, NIT Rourkela</h1>
                                </div>
                                <h1 className=' font-Montserrat text-[14px] md:text-[18px]' >Master Degree & University</h1>
                                <div className='flex items-center gap-4'>
                                    <Image src={"/arrow.png"} alt='arrow' height={20} width={30} />
                                    <h1 className='font-Inter text-[14px] md:text-[18px]'>M. Tech (Res), NIT Rourkela</h1>
                                </div>
                                <h1 className=' font-Montserrat text-[14px] md:text-[18px]' >Graduation & University</h1>
                                <div className='flex items-center gap-4'>
                                    <Image src={"/arrow.png"} alt='arrow' height={20} width={30} />
                                    <h1 className='font-Inter text-[14px] md:text-[18px]'>B.Tech., GIET University</h1>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <h1 className='text-[#650010] text-[24px] md:text-[32px] font-Emilio'>Research</h1>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col'>
                                    <h1 className='font-Montserrat text-[14px] md:text-[18px]'>Area of Specialization</h1>
                                    <p className='text-[12px] md:text-[16px] font-Inter'>Network Security, Device Authentication, Artificial Intelligence, Machine Learning, Deep Learning</p>
                                </div>

                                <div className='flex flex-col'>
                                    <h1 className='font-Montserrat text-[14px] md:text-[18px]'>ORCID</h1>
                                    <p className='text-[12px] md:text-[16px] font-Inter'>https://orcid.org/0000-0003-0613-175X</p>
                                </div>

                                <div className='flex flex-col'>
                                    <h1 className='font-Montserrat text-[14px] md:text-[18px]'>DBLP</h1>
                                    <p className='text-[12px] md:text-[16px] font-Inter'>https://dblp.org/pid/23/9553.html</p>
                                </div>

                                <div className='flex flex-col'>
                                    <h1 className='font-Montserrat text-[14px] md:text-[18px]'>SCOPUS</h1>
                                    <p className='text-[12px] md:text-[16px] font-Inter'>https://www.scopus.com/authid/detail.uri?authorId=37048485700</p>
                                </div>

                                <div className='flex flex-col'>
                                    <h1 className='font-Montserrat text-[14px] md:text-[18px]'>GOOGLE SCHOLAR</h1>
                                    <p className='text-[12px] md:text-[16px] font-Inter'>https://scholar.google.com/citations?user=dXo1I9UAAAAJ&hl=en&oi=ao</p>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <h1 className='text-[#650010] text-[24px] md:text-[32px] font-Emilio'>Professional Membership</h1>

                                <div className='mt-2 flex flex-col gap-1'>
                                    <div className='flex items-center gap-4'>
                                        <Image src={"/arrow.png"} alt='arrow' height={15} width={25} />
                                        <h1 className='font-Inter text-[12px] md:text-[14px]'>IEEE - 3 Years</h1>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <Image src={"/arrow.png"} alt='arrow' height={15} width={25} />
                                        <h1 className='font-Inter text-[12px] md:text-[14px]'>IEEE - 3 Years</h1>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <Image src={"/arrow.png"} alt='arrow' height={15} width={25} />
                                        <h1 className='font-Inter text-[12px] md:text-[14px]'>IEEE - 3 Years</h1>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <Image src={"/arrow.png"} alt='arrow' height={15} width={25} />
                                        <h1 className='font-Inter text-[12px] md:text-[14px]'>IEEE - 3 Years</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div>
                <div class="updated2">
                    <h1 class="updateheader">Keep Me Updated</h1>
                    <p class="updatetext">Fill out this box to be the <span class="person">First Person</span> to hear about our updates</p>

                    <form>
                        <div class="flex flex-row flex-wrap gap-5 md:gap-0">
                            <div class="basis-1/4">
                                <input class="input" placeholder="*NAME" for="grid-first-name" />
                            </div>
                            <div class="basis-1/4">
                                <input class="input" placeholder="*EMAIL ADDRESS" for="grid-first-name" />
                            </div>
                            <div class="basis-1/4">
                                <input class="input" placeholder="*PHONE NUMBER" for="grid-first-name" />
                            </div>
                            <div class="basis-1/4">
                                <button class="inputbutton"><span class="inputbuttontext">SUBSCRIBE</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
            </div>

            <div className='w-full max-h-[2000px]'>
                <div className='px-[20px] py-[30px]'>
                    <div className='w-full bg-white '>
                        <div className=' max-w-[600px] w-[100%] '>
                            <div>
                                <h1 className='text-[#650010] text-[24px] md:text-[32px] font-Emilio'>Education</h1>
                                <h2 className='text-[18px] md:text-[20px] font-Emilio leading-5'>Doctorial Degree & University</h2>
                            </div>

                            <div className='mt-7 flex flex-col gap-2    '>
                                <div className='flex items-center gap-4'>
                                    <Image src={"/arrow.png"} alt='arrow' height={20} width={30} />
                                    <h1 className='font-Inter text-[14px] md:text-[18px]'>Computer Science, NIT Rourkela</h1>
                                </div>
                                <h1 className=' font-Montserrat text-[14px] md:text-[18px]' >Master Degree & University</h1>
                                <div className='flex items-center gap-4'>
                                    <Image src={"/arrow.png"} alt='arrow' height={20} width={30} />
                                    <h1 className='font-Inter text-[14px] md:text-[18px]'>M. Tech (Res), NIT Rourkela</h1>
                                </div>
                                <h1 className=' font-Montserrat text-[14px] md:text-[18px]' >Graduation & University</h1>
                                <div className='flex items-center gap-4'>
                                    <Image src={"/arrow.png"} alt='arrow' height={20} width={30} />
                                    <h1 className='font-Inter text-[14px] md:text-[18px]'>B.Tech., GIET University</h1>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <h1 className='text-[#650010] text-[24px] md:text-[32px] font-Emilio'>Research</h1>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col'>
                                    <h1 className='font-Montserrat text-[14px] md:text-[18px]'>Area of Specialization</h1>
                                    <p className='text-[12px] md:text-[16px] font-Inter'>Network Security, Device Authentication, Artificial Intelligence, Machine Learning, Deep Learning</p>
                                </div>

                                <div className='flex flex-col'>
                                    <h1 className='font-Montserrat text-[14px] md:text-[18px]'>ORCID</h1>
                                    <p className='text-[12px] md:text-[16px] font-Inter'>https://orcid.org/0000-0003-0613-175X</p>
                                </div>

                                <div className='flex flex-col'>
                                    <h1 className='font-Montserrat text-[14px] md:text-[18px]'>DBLP</h1>
                                    <p className='text-[12px] md:text-[16px] font-Inter'>https://dblp.org/pid/23/9553.html</p>
                                </div>

                                <div className='flex flex-col'>
                                    <h1 className='font-Montserrat text-[14px] md:text-[18px]'>SCOPUS</h1>
                                    <p className='text-[12px] md:text-[16px] font-Inter'>https://www.scopus.com/authid/detail.uri?authorId=37048485700</p>
                                </div>

                                <div className='flex flex-col'>
                                    <h1 className='font-Montserrat text-[14px] md:text-[18px]'>GOOGLE SCHOLAR</h1>
                                    <p className='text-[12px] md:text-[16px] font-Inter'>https://scholar.google.com/citations?user=dXo1I9UAAAAJ&hl=en&oi=ao</p>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <h1 className='text-[#650010] text-[24px] md:text-[32px] font-Emilio'>Professional Membership</h1>

                                <div className='mt-2 flex flex-col gap-1'>
                                    <div className='flex items-center gap-4'>
                                        <Image src={"/arrow.png"} alt='arrow' height={15} width={25} />
                                        <h1 className='font-Inter text-[12px] md:text-[14px]'>IEEE - 3 Years</h1>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <Image src={"/arrow.png"} alt='arrow' height={15} width={25} />
                                        <h1 className='font-Inter text-[12px] md:text-[14px]'>IEEE - 3 Years</h1>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <Image src={"/arrow.png"} alt='arrow' height={15} width={25} />
                                        <h1 className='font-Inter text-[12px] md:text-[14px]'>IEEE - 3 Years</h1>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <Image src={"/arrow.png"} alt='arrow' height={15} width={25} />
                                        <h1 className='font-Inter text-[12px] md:text-[14px]'>IEEE - 3 Years</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EachFaculty
