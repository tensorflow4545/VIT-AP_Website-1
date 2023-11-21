import ReactPlayer from 'react-player'
import style from "./video.module.css";
export default function video(){
    return (
        <>
          <div class="w-full h-max bg-white justify-center item-center pt-[40px] px-[35px]">
            <div class={`w-full flex justify-center item-center`}><div class="w-[880px] h-[400px]">
            <iframe 
           width="853"  // Adjust the width and height as needed
           height="479"
           src="https://www.youtube.com/watch?v=wKajpIyy_yA"
           frameborder="0"
           allowfullscreen
           ></iframe>
           <div class="w-[853px] h-[20px] bg-red-900"></div>
            </div></div>

            <div class="w-full h-max bg-red-200">
                <p class="text-dark text-[18px] text- montserrat px-[75px] pt-[150px] pb-[50px]">The VIT placement Cell is committed to offer its students a variety of opportunities to get placed with companies of their choice once their course gets over. Through arranging meetings with professional trainers and VIT alumni, the centre helps the students to prepare themselves for placement interviews in technical and HR aspects and also get well prepared for group discussions. The Career Development Centre (CDC) makes sure that the students get well-versed in Coding and aptitude skills, to perform better in tests and interviews.</p>
            </div>
          </div>
        </>
    )
}
