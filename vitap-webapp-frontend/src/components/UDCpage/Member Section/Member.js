import Image from "next/image";
export default function Member() {
    return (
        <>

            {/* Desktop view */}
            <div className="md:grid hidden">
                <div className="w-full h-max bg-indigo-50 px-[96px] pb-[50px]">
                    <p className="text-[24px] text-black font-semibold pb-[42px]">Members</p>

                    <div className='grid grid-cols-4 justify-center items-center gap-5 text-center'>
                        <div className=' shadow-xl max-w-[250px] bg-white w-[100%]'>
                            <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                            <div>
                                <h1 className='text-[16px] text-[#650010] font-semibold'>Prof. Anjali Yadav</h1>
                                <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>VSL</h1>
                            </div>
                        </div>
                        <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                            <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                            <div>
                                <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Priyanka Ghosh</h1>
                                <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>VISH</h1>
                            </div>

                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Priyanka Ghosh</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>VISH</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Aby Abraham</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>VISH</h1>

                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. P C Lisna</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>SAS</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Manoj Kumar Gupta</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>SMEC</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Kanaka Himabindu Pottumuthu</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>VISH</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Prabhakaran Thandapani</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>SAS</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Karishma Bisht</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>VISH</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Mr. K Prakash Rao</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>SECURITY</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Ms. P Haritha</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>HR</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Mobile view */}
                <div className="sm:hidden">
                    <div className="w-full h-max bg-indigo-50 px-[20px] py-[50px]">
                        <p className="text-[20px] text-black font-semibold pb-[42px]">Members</p>



                        <div className='grid grid-cols-2 justify-center items-center gap-5 text-center'>
                            <div className=' shadow-xl max-w-[250px] bg-white w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Prof. Anjali Yadav</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>VSL</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Priyanka Ghosh</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>VISH</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Aby Abraham</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>VISH</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. P C Lisna</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>SAS</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Manoj Kumar Gupta</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>SMEC</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Kanaka Himabindu Pottumuthu</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>VISH</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Prabhakaran Thandapani</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>SAS</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Dr. Karishma Bisht</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>VISH</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Mr. K Prakash Rao</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>SECURITY</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[250px] w-[100%]'>
                                <Image src={"/udc.png"} width={250} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[16px] text-[#650010] font-semibold'>Ms. P Haritha</h1>
                                    <h1 className='text-[16px] text-[#650010] font-semibold pb-3'>HR</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}