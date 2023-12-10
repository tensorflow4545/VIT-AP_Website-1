export default function gallary() {
    return(
        <>
        <div className="pr-[108px] pl-[108px] pt-[50px] pb-[40px]">
        <div class="flex flex-row pb-10">
          <div class="basis-1/3">
           <p className="text-primary font-Emilio text-[48px] font-bold capitalize pb-[10px]">Gallery</p>
           <p className="text-black font-Montserrat text-[18px] font-normal leading-[27px] pb-[100px] pr-[5px]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
           <button className="w-[232px] h-[50px] border-[1.5px] border-primary font-primary font-Montserrat font-[20px] font-medium leading-[140.4%] hover:bg-primary hover:border-[1.5px] hover:border-white hover:text-white">Visit Gallery Room</button>
         </div>
         <div className="basis-1/3 w-392 h-361 mr-5 bg-[url('/gallary5.jpeg')] bg-w-[392px] bg-h-[361px] bg-no-repeat">

         </div>
         <div className="basis-1/3 w-392 h-361 bg-[url('/gallary5.jpeg')] bg-w-[392px] bg-h-[361px] bg-no-repeat">
           
         </div>
         </div>


         <div class="flex flex-row pb-10">
         <div className = "basis-2/3 w-[808px] h-[261px] mr-5 bg-[url('/gallary5.jpeg')] bg-w-[808px] bg-h-[361px] bg-no-repeat">
           
         </div>
         <div className="basis-1/3 w-320 h-261 bg-[url('/gallary5.jpeg')] bg-w-[392px] bg-h-[361px] bg-no-repeat">
           
         </div>
         </div>

         
         </div>
         <div className="w-[100%] h-[44px] flex-shrink-0 bg-[#550E13]"></div>
        </>
    )
}
