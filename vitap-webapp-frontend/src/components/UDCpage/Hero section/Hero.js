import Image from "next/image";
import style from "./hero.module.css";
export default function hero(){
    return(
        <>
             {/* desktop view */}
            <div class="md:grid hidden">
            <div class={`w-full h-[362px] overflow-hidden grid place-items-center  ${style.hero}`}>
                 <p class="text-white text-emilio text-[24px] font-bold">VIT-AP University Disciplinary Committee (UDC)</p>
             </div>
            </div>

             {/* mobile view */}
             <div class="sm:hidden relative">

             <div class={`w-full h-[182px] overflow-hidden grid place-items-center  ${style.mhero}`}>
                 <p class="text-white text-emilio text-[24px] font-bold">UDC</p>
             </div>
             </div>
        </>
    )
}