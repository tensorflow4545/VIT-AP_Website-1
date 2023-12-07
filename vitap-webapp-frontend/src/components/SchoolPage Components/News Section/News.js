import Image from "next/image";
import Link from "next/link";
const  News = () => {
    return(
      <>
        <div class="w-full h-[800px] bg-white">
        
        <div class="w-full h-[400px] bg-primary pt-[66px] px-[108px]">
        <div className="flex flex-row justify-between">
        <p class="text-[48px] text-white font-Emilio font-bold text-emilio">News and Events</p>
          
          <div className="flex flex-row relative items-center justify-end w-[100px] transition-all duration-300 ease-in group mr-[30px] ">
            <div className="Rectangle91 w-[32px] h-[30px] left-[40px] top-[21px] absolute bg-white opacity-20 transition-transform group-hover:left-[-10px] group-hover:w-[90px] group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out "></div>
            <Link href={"/"} className="mr-2 text-white font-medium font-Montserrat">
              See All
            </Link>
            <hr className=" h-[4px] w-[36px] font-bold bg-white max-lx:w-[28px]" />
          </div>
        </div>


          {/* flex */}
          <div class="flex flex-row pt-[63px]">
           
           {/* card */}
           <div class="basis w-[350px] h-[424px] bg-white rounded-sm mr-[24px]">
           <div class="w-[350px] h-[241px] relative">
            <Image class="absolute z-0" width={350} height={241} src="/news.png" alt="Event Image"></Image>
            <div class="w-[53px] h-[72px] bg-primary absolute z-10 right-5 top-7 rounded-md">
                <p class="text-[16px] text-white text-emilio font-semibold pt-[8px] px-[13px]">Oct</p>
                <p class="text-[28px] text-white text-emilio font-semibold px-[11px]">23</p>
            </div>           
           </div>

           <p class="text-[28px] text-dark font-[600px] font-Emilio pt-[16px]">Meet and Greet’23</p>
           <p class="text-[18px] text-zinc-400 font-Montserrat font-[400px] pt-[9px]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.</p>
           <p class="text-[18px] text-primary font-medium font-Montserrat pt-[16px]">Know More</p>
           </div>

           {/* card */}
           <div class="basis w-[350px] h-[424px] bg-white rounded-sm mr-[24px]">
           <div class="w-[350px] h-[241px] relative">
            <Image class="absolute z-0" width={350} height={241} src="/news.png" alt="Event Image"></Image>
            <div class="w-[53px] h-[72px] bg-primary absolute z-10 right-5 top-7 rounded-md">
                <p class="text-[16px] text-white text-emilio font-semibold pt-[8px] px-[13px]">Oct</p>
                <p class="text-[28px] text-white text-emilio font-semibold px-[11px]">23</p>
            </div>           
           </div>

           <p class="text-[28px] text-dark font-[600px] font-Emilio pt-[16px]">Meet and Greet’23</p>
           <p class="text-[18px] font-Montserrat font-[400px] pt-[9px]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.</p>
           <p class="text-[18px] text-primary font-medium font-Montserrat pt-[16px]">Know More</p>
           </div>

           {/* card */}
           <div class="basis w-[350px] h-[424px] bg-white rounded-sm">
           <div class="w-[350px] h-[241px] relative">
            <Image class="absolute z-0" width={350} height={241} src="/news.png" alt="Event Image"></Image>
            <div class="w-[53px] h-[72px] bg-primary absolute z-10 right-5 top-7 rounded-md">
                <p class="text-[16px] text-white text-emilio font-semibold pt-[8px] px-[13px]">Oct</p>
                <p class="text-[28px] text-white text-emilio font-semibold px-[11px]">23</p>
            </div>           
           </div>

           <p class="text-[28px] text-dark font-[600px] font-Emilio pt-[16px]">Meet and Greet’23</p>
           <p class="text-[18px] font-Montserrat font-[400px] pt-[9px]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.</p>
           <p class="text-[18px] text-primary font-medium font-Montserrat pt-[16px]">Know More</p>
           </div>

          </div>

        </div>
        
        </div>

      </>
    )
}

export default News;