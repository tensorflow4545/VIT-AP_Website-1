import Image from "next/image";
export default function News(){
    return(
      <>
        <div class="w-full h-[800px] bg-white">
        
        <div class="w-full h-[400px] bg-red-100 pt-[66px] px-[108px]">
          <p class="text-[48px] text-red-950 font-bold text-emilio">News and Events</p>
          <p class="text-[25px] text-red-950 font-bold float-right">See all </p>
          {/* flex */}
          <div class="flex flex-row pt-[63px]">
           
           {/* card */}
           <div class="basis w-[350px] h-[424px] bg-white rounded-sm mr-[24px]">
           <div class="w-[350px] h-[241px] relative">
            <Image class="absolute z-0" width={350} height={241} src="/news.png" alt="Event Image"></Image>
            <div class="w-[53px] h-[72px] bg-red-900 absolute z-10 right-5 top-7 rounded-md">
                <p class="text-[16px] text-white text-emilio font-semibold pt-[8px] px-[13px]">Oct</p>
                <p class="text-[28px] text-white text-emilio font-semibold px-[11px]">23</p>
            </div>           
           </div>

           <p class="text-[28px] text-dark font-[600px] text-emilio pt-[16px]">Meet and Greet’23</p>
           <p class="text-[18px] text-zinc-400 text-montserrat font-[400px] pt-[9px]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.</p>
           <p class="text-[18px] text-red-950 font-medium text-montserrat pt-[16px]">Know More</p>
           </div>

           {/* card */}
           <div class="basis w-[350px] h-[424px] bg-white rounded-sm mr-[24px]">
           <div class="w-[350px] h-[241px] relative">
            <Image class="absolute z-0" width={350} height={241} src="/news.png" alt="Event Image"></Image>
            <div class="w-[53px] h-[72px] bg-red-900 absolute z-10 right-5 top-7 rounded-md">
                <p class="text-[16px] text-white text-emilio font-semibold pt-[8px] px-[13px]">Oct</p>
                <p class="text-[28px] text-white text-emilio font-semibold px-[11px]">23</p>
            </div>           
           </div>

           <p class="text-[28px] text-dark font-[600px] text-emilio pt-[16px]">Meet and Greet’23</p>
           <p class="text-[18px] text-zinc-400 text-montserrat font-[400px] pt-[9px]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.</p>
           <p class="text-[18px] text-red-950 font-medium text-montserrat pt-[16px]">Know More</p>
           </div>

           {/* card */}
           <div class="basis w-[350px] h-[424px] bg-white rounded-sm">
           <div class="w-[350px] h-[241px] relative">
            <Image class="absolute z-0" width={350} height={241} src="/news.png" alt="Event Image"></Image>
            <div class="w-[53px] h-[72px] bg-red-900 absolute z-10 right-5 top-7 rounded-md">
                <p class="text-[16px] text-white text-emilio font-semibold pt-[8px] px-[13px]">Oct</p>
                <p class="text-[28px] text-white text-emilio font-semibold px-[11px]">23</p>
            </div>           
           </div>

           <p class="text-[28px] text-dark font-[600px] text-emilio pt-[16px]">Meet and Greet’23</p>
           <p class="text-[18px] text-zinc-400 text-montserrat font-[400px] pt-[9px]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.</p>
           <p class="text-[18px] text-red-950 font-medium text-montserrat pt-[16px]">Know More</p>
           </div>

          </div>

        </div>
        
        </div>

      </>
    )
}