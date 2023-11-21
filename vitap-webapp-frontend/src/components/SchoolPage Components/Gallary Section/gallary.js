import style from "./gallary.module.css";

export default function gallary() {
    return(
        <>
        <div class={style.gallary}>
        <div class="flex flex-row pb-10">
         <div class={`basis-2/3 w-[808px] h-[261px] mr-5 ${style.back3}`}>
           
         </div>
         <div class={`basis-1/3 w-320 h-261 ${style.back4}`}>
           
         </div>
         </div>
        <div class="flex flex-row pb-10">
          <div class="basis-1/3">
           <p class={style.heading}>Gallery</p>
           <p class={`${style.text}`}>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
           <button class={`${style.button}`}>Visit Gallery Room</button>
         </div>
         <div class={`basis-1/3 w-392 h-361 mr-5 ${style.back1}`}>

         </div>
         <div class={`basis-1/3 w-392 h-361 ${style.back2}`}>
           
         </div>
         </div>
         
         </div>
         <div class={style.color}></div>
        </>
    )
}