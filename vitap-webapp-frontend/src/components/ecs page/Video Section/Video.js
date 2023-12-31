
export default function video(){
    return (
        <>

           {/* desktop view */}
          <div className="md:grid hidden">
          <div className="w-full h-max bg-white justify-center item-center pt-[40px] pb-[70px] px-[54px]">
            <div className={`w-full flex justify-center item-center`}><div className="w-[880px] h-[400px]">
            <iframe 
           width="853"  
           height="479"
           src="https://www.youtube.com/watch?v=wKajpIyy_yA"
           frameborder="0"
           allowfullscreen
           ></iframe>
           <div className="w-[853px] h-[20px] bg-red-900"></div>
            </div></div>

            <div className="w-full h-max bg-red-200 px-[54px] pb-[32px]">
                <p className="text-red-950 text-[32px] text-emilio pt-[140px] font-bold">Engineering Clinics Salient Features:</p>
                <p className="text-dark text-[20px] text-montserrat pt-[16px] font-normal">✩ Project-based learning courses offered every semester.</p>
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Themed, hands-on learning with credits.</p> 
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Encourages interdisciplinary collaboration of students from all programs.</p>
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Faculty mentors guide and evaluate each group.</p>
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Engineering Clinics Expo showcases projects at the end of each semester.</p>

                <p className="text-red-950 text-[32px] text-emilio pt-[36px] font-bold">Benefits to students:</p>
                <p className="text-dark text-[20px] text-montserrat pt-[16px] font-normal">✩ Increased engagement and motivation</p>
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Deeper learning and understanding of content </p> 
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Improved critical thinking and problem-solving skills</p>
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Enhanced creativity and innovation</p>
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Increased collaboration and teamwork skills</p>
                <p className="text-dark text-[20px] text-montserrat pt-[16px] font-normal">✩ Chance to improve communication and presentation skills</p>
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Hands-on experience with engineering concepts and principles </p> 
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Opportunity to showcase student talent</p>
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Networking opportunities with students, researchers, and industry experts </p>
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Chance to convert ideas to prototypes, prototypes to products</p>
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Chance to convert ideas to patents and startups</p>
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Chance to publish their research findings</p>
                <p className="text-dark text-[20px] text-montserrat pt-[10px] font-normal">✩ Enhance the chances of winning prizes at hackathons and makethons</p>         
            </div>
          </div>
          </div>

          {/* mobile view */}
          <div className="sm:hidden relative">
             <div className="w-full h-max bg-white  jusitfy-center pt-[40px]">

             <div className="w-full h-[100px] bg-white">
             <div className={`w-full flex justify-center item-center`}><div className="w-[301px] h-[170px]">
            <iframe 
           width="301"  
           height="170"
           src="https://www.youtube.com/watch?v=wKajpIyy_yA"
           frameborder="0"
           allowfullscreen
           ></iframe>
           <div className="w-[301px] h-[20px] bg-red-900"></div>
            </div></div>
             </div>
          

          <div className="w-full h-max bg-red-100 px-[22px] pb-[40px]">
          <p className="text-red-950 text-[18px] text-emilio font-bold pt-[100px] pb-[11px]">Engineering Clinics Salient Features:</p>
                <p className="text-dark text-[16px] text-montserrat pt-[16px] font-normal">✩ Project-based learning courses offered every semester.</p>
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Themed, hands-on learning with credits.</p> 
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Encourages interdisciplinary collaboration of students from all programs.</p>
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Faculty mentors guide and evaluate each group.</p>
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Engineering Clinics Expo showcases projects at the end of each semester.</p>

                <p className="text-red-950 text-[18px] text-emilio pt-[36px] font-bold">Benefits to students:</p>
                <p className="text-dark text-[16px] text-montserrat pt-[16px] font-normal">✩ Increased engagement and motivation</p>
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Deeper learning and understanding of content </p> 
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Improved critical thinking and problem-solving skills</p>
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Enhanced creativity and innovation</p>
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Increased collaboration and teamwork skills</p>
                <p className="text-dark text-[16px] text-montserrat pt-[16px] font-normal">✩ Chance to improve communication and presentation skills</p>
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Hands-on experience with engineering concepts and principles </p> 
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Opportunity to showcase student talent</p>
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Networking opportunities with students, researchers, and industry experts </p>
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Chance to convert ideas to prototypes, prototypes to products</p>
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Chance to convert ideas to patents and startups</p>
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Chance to publish their research findings</p>
                <p className="text-dark text-[16px] text-montserrat pt-[10px] font-normal">✩ Enhance the chances of winning prizes at hackathons and makethons</p>
          </div>

          </div>
          </div>


        </>
    )
}