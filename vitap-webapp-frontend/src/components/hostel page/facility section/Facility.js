import style from "./facility.module.css";
export default function Facility(){
    return(
        <>
            <div className="w-full h-[800px] bg-white">

            <div className="pt-[60px] pb-[119px] pl-[150px] pr-[70px]">
                
                {/* flex */}
               <div className="flex flex-row">

               {/* basis */}
               <div className="basis-1/2 w-[550px] h-[570px] relative overflow-hidden ">
                <div className={`w-[440px] h-[570px] ${style.img1} relative z-1 border-4 border-white rounded-lg `}></div>
                <div className={`w-[260px] h-[260px] ${style.img2} absolute bottom-20 border-4 border-white rounded-xl right-0 z-10 float-right shadow-2xl`}></div>
               </div>

               {/* basis */}
               <div className="basis-1/2 pl-[50px]">
                <p className="text-dark text-[20px] font-[400px] font-Montserrat">AMENETIES</p>
                <p className="text-dark text-[48px] font-[600px] font-Montserrat">Comfortable facilities around hostels</p>
                <p className="text-dark text-[16px] font-[400px] font-Montserrat">We provide our students the best facilities to study and enjoy their college life</p>
                 
                 {/* Inner flex */}
                 <div className="flex flex-row pt-[25px] w-[620px] pb-[10px]">
                  {/* basis */}
                  <div className="basis">
                    <p className="text-[38px]">🍽️</p>
                  </div>
                  {/* basis */}
                  <div className="basis pl-[16px] w-[400px]">
                   <p className="text-dark text-[20px] font-[400px] font-Montserrat">Night Canteen</p>
                   <p className="text-dark-300 text-[14px] font-[400px] font-Montserrat">Open until late night</p>
                  </div>
                  {/* basis */}
                  <div className="basis">
                  <p className="text-dark text-dark font-semibold float-right">Variety of delicious food</p>
                  </div>
                 </div>

                 <hr></hr>

                 {/* Inner flex */}
                 <div className="flex flex-row pt-[25px] w-[620px] pb-[10px]">
                  {/* basis */}
                  <div className="basis">
                    <p className="text-[38px]">📚</p>
                  </div>
                  {/* basis */}
                  <div className="basis pl-[16px] w-[500px]">
                   <p className="text-dark text-[20px] font-[400px] font-Montserrat">Library</p>
                   <p className="text-dark-300 text-[14px] font-[400px] font-Montserrat">24/7 access</p>
                  </div>
                  {/* basis */}
                  <div className="basis">
                  <p className="text-dark text-dark font-semibold float-right">Quiet study environment</p>
                  </div>
                 </div>

                 <hr></hr>

                 {/* Inner flex */}
                 <div className="flex flex-row pt-[25px] w-[620px] pb-[10px]">
                  {/* basis */}
                  <div className="basis">
                    <p className="text-[38px]">🎮</p>
                  </div>
                  {/* basis */}
                  <div className="basis pl-[16px] w-[550px]">
                   <p className="text-dark text-[20px] font-[400px] font-Montserrat">Indoor Games</p>
                   <p className="text-dark-300 text-[14px] font-[400px] font-Montserrat">Table tennis, foosball, and more</p>
                  </div>
                  {/* basis */}
                  <div className="basis">
                  <p className="text-dark text-dark font-semibold float-right">Recreation and entertainment</p>
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
