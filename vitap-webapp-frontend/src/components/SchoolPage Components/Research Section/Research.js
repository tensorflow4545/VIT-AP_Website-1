import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"
export default function Research(){
    return (
        <>
          <div class="w-full h-[800px] bg-red-900 pl-[40px]">
           <div class="w-full h-[800px] bg-white">
           <p class="text-[48px] text-red-950 font-bold text-emilio pt-[68px] pl-[73px]">Research and Innovation</p>
           
           {/* flex */}
          <div class="flex flex-row pt-[63px] pl-[80px]">
           
           {/* card */}
           <div class="basis w-[350px] h-[500px] bg-white rounded-sm mr-[24px]">
           <div class="w-[350px] h-[311px] relative">
            <Image class="absolute z-0" width={350} height={311} src="/research.png" alt="Event Image"></Image>          
           </div>

           <p class="text-[28px] text-dark font-medium text-emilio pt-[16px]">Research Groups</p>
           <p class="text-[18px] text-zinc-400 text-montserrat font-[400px] pt-[9px]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.</p>
           <p class="text-[18px] text-red-950 font-medium text-montserrat pt-[16px]">Explore more</p>
           </div>

           {/* card */}
           <div class="basis w-[350px] h-[500px] bg-white rounded-sm mr-[24px]">
           <div class="w-[350px] h-[311px] relative">
            <Image class="absolute z-0" width={350} height={311} src="/research.png" alt="Event Image"></Image>        
           </div>

           <p class="text-[28px] text-dark font-[600px] text-emilio pt-[16px]">Projects</p>
           <p class="text-[18px] text-zinc-400 text-montserrat font-[400px] pt-[9px]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.</p>
           <p class="text-[18px] text-red-950 font-medium text-montserrat pt-[16px]">Explore more</p>
           </div>

           {/* card */}
           <div class="basis w-[350px] h-[500px] bg-white rounded-sm">
           <div class="w-[350px] h-[311px] relative">
            <Image  width={350} height={311} src="/research.png" alt="Event Image"></Image>          
           </div>

           <p class="text-[28px] text-dark font-[600px] text-emilio pt-[16px]">Publications and Patents</p>
           <p class="text-[18px] text-zinc-400 text-montserrat font-[400px] pt-[9px]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.</p>
           <p class="text-[18px] text-red-950 font-medium text-montserrat pt-[16px]">Explore more</p>
           </div>

          </div>

           </div>
          </div>
        </>
    )
}