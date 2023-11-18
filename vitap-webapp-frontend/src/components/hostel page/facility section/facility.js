import style from "./facility.module.css";
export default function facility(){
    return(
        <>
            <div class="w-full h-[800px] bg-white">

            <div class="pt-[60px] pb-[119px] pl-[150px] pr-[70px]">
                
                {/* flex */}
               <div class="flex flex-row">

               {/* basis */}
               <div class="basis-1/2 w-[550px] h-[570px] relative overflow-hidden ">
                <div class={`w-[440px] h-[570px] ${style.img1} relative z-1 border-4 border-white rounded-lg `}></div>
                <div class={`w-[260px] h-[260px] ${style.img2} absolute bottom-20 border-4 border-white rounded-xl right-0 z-10 float-right shadow-2xl`}></div>
               </div>

               {/* basis */}
               <div class="basis-1/2 pl-[50px]">
                <p class="text-dark text-[20px] font-[400px] text-montserrat">AMENETIES</p>
                <p class="text-dark text-[48px] font-[600px] text-montserrat">Comfortable facilities around hostels</p>
                <p class="text-dark text-[16px] font-[400px] text-montserrat">We provide our students the best facilities to study and enjoy their college life</p>
                 
                 {/* Inner flex */}
                 <div class="flex flex-row pt-[25px] w-[620px] pb-[10px]">
                  {/* basis */}
                  <div class="basis">
                    <p class="text-[38px]">🍽️</p>
                  </div>
                  {/* basis */}
                  <div class="basis pl-[16px] w-[400px]">
                   <p class="text-dark text-[20px] font-[400px] text-montserrat">Night Canteen</p>
                   <p class="text-dark-300 text-[14px] font-[400px] text-montserrat">Open until late night</p>
                  </div>
                  {/* basis */}
                  <div class="basis">
                  <p class="text-dark text-dark font-semibold float-right">Variety of delicious food</p>
                  </div>
                 </div>

                 <hr></hr>

                 {/* Inner flex */}
                 <div class="flex flex-row pt-[25px] w-[620px] pb-[10px]">
                  {/* basis */}
                  <div class="basis">
                    <p class="text-[38px]">📚</p>
                  </div>
                  {/* basis */}
                  <div class="basis pl-[16px] w-[500px]">
                   <p class="text-dark text-[20px] font-[400px] text-montserrat">Library</p>
                   <p class="text-dark-300 text-[14px] font-[400px] text-montserrat">24/7 access</p>
                  </div>
                  {/* basis */}
                  <div class="basis">
                  <p class="text-dark text-dark font-semibold float-right">Quiet study environment</p>
                  </div>
                 </div>

                 <hr></hr>

                 {/* Inner flex */}
                 <div class="flex flex-row pt-[25px] w-[620px] pb-[10px]">
                  {/* basis */}
                  <div class="basis">
                    <p class="text-[38px]">🎮</p>
                  </div>
                  {/* basis */}
                  <div class="basis pl-[16px] w-[550px]">
                   <p class="text-dark text-[20px] font-[400px] text-montserrat">Indoor Games</p>
                   <p class="text-dark-300 text-[14px] font-[400px] text-montserrat">Table tennis, foosball, and more</p>
                  </div>
                  {/* basis */}
                  <div class="basis">
                  <p class="text-dark text-dark font-semibold float-right">Recreation and entertainment</p>
                  </div>
                 </div>

                 <hr></hr>

               </div>

               </div>

            </div>

            </div>
        </>
    )
}