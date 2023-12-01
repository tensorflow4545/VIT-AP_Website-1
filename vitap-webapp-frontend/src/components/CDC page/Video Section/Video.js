import ReactPlayer from 'react-player'
export default function Video() {
  return (
    <>
      <div class="max-w-[1560px] w-[100%] h-max bg-white flex flex-col justify-center items-center pt-[40px]">
        <div class={`max-w-[780px] w-[100%] flex justify-center item-center`}><div class="px-[50px] lx:px-[0px] max-w-[763px] w-[100%] max-h-[400px] h-[100%]">
          <div className='relative flex justify-center items-center'>
            <iframe
              width="753" 
              height="479"
              src="https://www.youtube.com/watch?v=wKajpIyy_yA"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <div className='absolute w-full h-[50px] left-0 bottom-0 border-14 border-[#650010] border-t-0'></div>
          </div>
        </div></div>

        <div class="w-full h-max bg-[#FCE3E5]">
          <p class="text-dark text-[18px] text- montserrat px-[75px] pt-[100px] pb-[50px]">The VIT placement Cell is committed to offer its students a variety of opportunities to get placed with companies of their choice once their course gets over. Through arranging meetings with professional trainers and VIT alumni, the centre helps the students to prepare themselves for placement interviews in technical and HR aspects and also get well prepared for group discussions. The Career Development Centre (CDC) makes sure that the students get well-versed in Coding and aptitude skills, to perform better in tests and interviews.</p>
        </div>
      </div>
    </>
  )
}
