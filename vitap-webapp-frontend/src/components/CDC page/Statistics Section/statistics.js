import Image from "next/image";
export default function statistics(){
    return(
        <>
            <div class="w-full h-[550px] bg-white pr-[120px]">
               <div class="w-full h-[275px]">
                  
                  {/* flex */}
                  <div class="flex flex-row pl-[108px] pt-[100px]">
                    
                    {/* basis */}
                    <div class="basis-1/5">
                      <div class="w-[200px] h-[290px]"><Image width={240} height={290} src="/SuperDream.png" alt="Image"></Image></div>
                      <div class="w-[200px] h-[50px] bg-red-900">
                        <p class="text-[18px] text-emilio text-white pl-[16px]">Super dream offer</p>
                        <p class="text-[11px] text-montserrat  text-white pl-[17px]">Explore Now</p>
                      </div>
                    </div>

                    {/* basis */}
                    <div class="basis-1/5">
                      <div class="w-[200px] h-[290px]"><Image width={240} height={290} src="/SuperDream.png" alt="Image"></Image></div>
                      <div class="w-[200px] h-[50px] bg-red-900">
                      <p class="text-[18px] text-emilio text-white pl-[16px]">Dream offer</p>
                      <p class="text-[11px] text-montserrat  text-white pl-[17px]">Explore Now</p>
                      </div>
                    </div>

                    {/* basis */}
                    <div class="basis-1/5">
                      <div class="w-[200px] h-[290px]"><Image width={240} height={290} src="/SuperDream.png" alt="Image"></Image></div>
                      <div class="w-[200px] h-[50px] bg-red-900">
                      <p class="text-[18px] text-emilio text-white pl-[16px]">Internship</p>
                      <p class="text-[11px] text-montserrat  text-white pl-[17px]">Explore Now</p>
                      </div>
                    </div>

                    {/* basis */}
                    <div class="basis-1/5">
                      <div class="w-[200px] h-[290px]"><Image width={240} height={290} src="/SuperDream.png" alt="Image"></Image></div>
                      <div class="w-[200px] h-[50px] bg-red-900">
                      <p class="text-[18px] text-emilio text-white pl-[16px]">Statistics</p>
                      <p class="text-[11px] text-montserrat  text-white pl-[17px]">Explore Now</p>
                      </div>
                    </div>

                    {/* basis */}
                    <div class="basis-1/5">
                      <div class="w-[200px] h-[290px]"><Image width={240} height={290} src="/SuperDream.png" alt="Image"></Image></div>
                      <div class="w-[200px] h-[50px] bg-red-900">
                      <p class="text-[18px] text-emilio text-white pl-[16px]">C.D.C Office</p>
                      <p class="text-[11px] text-montserrat  text-white pl-[17px]">Explore Now</p>
                      </div>
                    </div>

                  </div>

               </div>
               <div class="w-full h-[275px] bg-fuchsia-200">

               </div>
            </div>
        </>
    )
}