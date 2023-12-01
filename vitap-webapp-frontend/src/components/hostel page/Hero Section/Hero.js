import style from "./hero.module.css";
import Image from 'next/image'
export default function hero(){
    return(
        <>
            <div class={`w-full h-[363px] h-screen flex items-center justify-center ${style.hero}`}>
                 <p class="text-white font-600 text-[44px]">Hostels</p>
            </div>

            {/* About Hostel */}
            <div class={`w-full h-[636px] pt-[60px] lg:pl-[156px] pb-[60px] lg:pr-[170px]`}>
            <div>
                 
                 {/* Basis */}
                <div class="lg:flex lg:flex-row">
                   
                   <div class="pt-[70px] pr-[20px]">
                   <div class="lg:basis-1/2">
                    <p class="text-dark text-[48px] font-[400px] leading-[48px] pb-[24px]">About VIT-AP Hostels</p>
                    <p class="font-montserrat text-[18px] font-[400px] pb-[15px]">The VIT-AP hostels are highly secure and well guarded. Only VITians & VIT authorized personnel are allowed inside. We aspire to make the hostel a ‘home away from home. Each hostel room is equipped with a cot, chair, study table and cupboard. Resident wardens are available 24×7. Provision stores are located in the hostel where students can buy essentials such as mattresses, pillows, buckets, mugs, locks, stationeries, books, soaps.</p>
                    <p class="font-montserrat text-[18px] font-[400px]">Both AC and Non-AC rooms are available. The type of room is allocated on the first-come first serve basis and availability once the hostel fee is paid in full</p>
                   </div>
                   </div>

                   {/* Basis */}
                   <div class="lg:basis-1/2">
                      
                      {/* card */}
                      <div class="pb-[40px]">
                      <div class="flex flex-row bg-white w-[488px] h-max shadow-xl rounded-[6px] border-current">
                       <div class="basis w-[80px] h-[80px] bg-red-300 mt-[16px] ml-[16px]"><Image class="pt-[10px] pl-[15px]" width={60} height={60} src="/location.png"></Image></div>
                       <div class="basis pt-[20px] pl-[10px] pb-[10px]">
                        <p class="font-montserrat text-dark text-[16px] font-[200px]">Location</p>
                        <p class="text-dark text-[12px] font-[400px]">Our hostels are located in the heart of the</p> 
                        <p class="text-dark text-[12px] font-[400px]">campus, ensuring easy access to classes, libraries, and other facilities.</p>
                       </div>                    
                      </div>
                      </div>

                      {/* card */}
                      <div class="pb-[40px]">
                      <div class="flex flex-row bg-white w-[488px] h-max shadow-xl rounded-[6px] border-current">
                       <div class="basis w-[80px] h-[80px] bg-red-300 mt-[16px] ml-[16px]"><Image class="pt-[10px] pl-[15px]" width={60} height={60} src="/location.png"></Image></div>
                       <div class="basis pt-[20px] pl-[10px] pb-[10px]">
                        <p class="font-montserrat text-dark text-[16px] font-[200px]">Location</p>
                        <p class="text-dark text-[12px] font-[400px]">Our hostels are located in the heart of the</p> 
                        <p class="text-dark text-[12px] font-[400px]">campus, ensuring easy access to classes, libraries, and other facilities.</p>
                       </div>                      
                      </div>
                      </div>

                      {/* card */}
                      <div class="pb-[40px]">
                      <div class="flex flex-row bg-white w-[488px] h-max shadow-xl rounded-[6px] border-current">
                       <div class="basis w-[80px] h-[80px] bg-red-300 mt-[16px] ml-[16px]"><Image class="pt-[10px] pl-[15px]" width={60} height={60} src="/location.png"></Image></div>
                       <div class="basis pt-[20px] pl-[10px] pb-[10px]">
                        <p class="font-montserrat text-dark text-[16px] font-[200px]">Location</p>
                        <p class="text-dark text-[12px] font-[400px]">Our hostels are located in the heart of the</p> 
                        <p class="text-dark text-[12px] font-[400px]">campus, ensuring easy access to classes, libraries, and other facilities.</p>
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
