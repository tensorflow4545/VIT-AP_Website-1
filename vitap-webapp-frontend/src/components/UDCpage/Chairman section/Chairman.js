
import Image from "next/image";
export default function Chairman(){
    const chairman=[
         {
            name:"Dr. Banerji Chakka",
            School:"VSL",
            img:"/udc.png"
         },
         {
            name:"Dr. R Thahiya Afzal",
            School:"VISH",
            img:"/udc.png"
         },
         {
            name:"Dr. B Srinivasa Rao",
            School:"SCOPE",
            img:"/udc.png"
         }
    ];
    return(
        <>
            {/* desktop view */}
            <div class="md:grid hidden">

             <div class="w-full h-max bg-indigo-50 ">
               
               <div class="pr-[15px] py-[96px] px-[98px] relative">
               <p class="text-[48px] text-emilio text-red-950 font-bold">VIT-AP University Disciplinary Committee</p>
               <p class="text-[32px] text-black font-medium text-emilio pt-[15px]">The UDC comprises of following members:</p>
               <p class="text-[24px] font-semibold text-black pt-[24px] pb-[10px]">Chairman & Co-Chairman</p>
               
               <div className='grid grid-cols-2 lg:grid lg:grid-cols-3 justify-center items-center gap-5 text-center'>
                            <div className='shadow-xl bg-white max-w-[300px] w-[100%] '>
                                <Image src={"/udc.png"} width={300} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[14px] lg:text-[24px] text-[#650010] font-semibold'>Dr. Banerji Chakka</h1>
                                    <h1 className='text-[14px] lg:text-[16px] text-[#650010] font-semibold pb-3'>VSL</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[300px] w-[100%]'>
                                <Image src={"/udc.png"} width={300} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[14px] lg:text-[24px] text-[#650010] font-semibold'>Dr. R Thahiya Afzal</h1>
                                    <h1 className='text-[14px] lg:text-[16px] text-[#650010] font-semibold pb-3'>VISH</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[300px] w-[100%]'>
                                <Image src={"/udc.png"} width={300} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[14px] lg:text-[24px] text-[#650010] font-semibold'>Dr. B Srinivasa Rao</h1>
                                    <h1 className='text-[14px] lg:text-[16px] text-[#650010] font-semibold pb-3'>SCOPE</h1>
                                </div>
                            </div>
                        </div>
                        </div>
               </div>

            </div>

            {/* mobile view */}
            <div class="sm:hidden">
               <div class="w-full h-max bg-indigo-50 px-[20px] py-[50px]">
               <p class="text-[24px] text-emilio text-red-950 font-bold">VIT-AP University Disciplinary Committee</p>
               <p class="text-[18px] text-black font-medium text-emilio pt-[15px]">The UDC comprises of following members:</p>
               <p class="text-[20px] font-semibold text-black pt-[24px] pb-[10px]">Chairman & Co-Chairman</p>
               
               <div className='grid grid-cols-2 justify-center items-center gap-5 text-center'>
                            <div className='shadow-xl bg-white max-w-[300px] w-[100%] '>
                                <Image src={"/udc.png"} width={300} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[14px] lg:text-[24px] text-[#650010] font-semibold'>Dr. Banerji Chakka</h1>
                                    <h1 className='text-[14px] lg:text-[16px] text-[#650010] font-semibold pb-3'>VSL</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[300px] w-[100%]'>
                                <Image src={"/udc.png"} width={300} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[14px] lg:text-[24px] text-[#650010] font-semibold'>Dr. R Thahiya Afzal</h1>
                                    <h1 className='text-[14px] lg:text-[16px] text-[#650010] font-semibold pb-3'>VISH</h1>
                                </div>
                            </div>
                            <div className=' shadow-xl bg-white max-w-[300px] w-[100%]'>
                                <Image src={"/udc.png"} width={300} height={220} alt='faculty' className='p-3' />
                                <div>
                                    <h1 className='text-[14px] lg:text-[24px] text-[#650010] font-semibold'>Dr. B Srinivasa Rao</h1>
                                    <h1 className='text-[14px] lg:text-[16px] text-[#650010] font-semibold pb-3'>SCOPE</h1>
                                </div>
                            </div>
                        </div>

               </div>
            </div>
        </>
    )
}