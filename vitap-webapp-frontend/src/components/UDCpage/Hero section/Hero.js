<<<<<<< HEAD
import Image from "next/image";
import style from "./hero.module.css";
export default function hero(){
    return(
        <>
             {/* desktop view */}
            <div className="md:grid hidden">
            <div className={`w-full h-[362px] overflow-hidden grid place-items-center  ${style.hero}`}>
                 <p className="text-white text-emilio text-[24px] font-bold">VIT-AP University Disciplinary Committee (UDC)</p>
             </div>
            </div>

             {/* mobile view */}
             <div className="sm:hidden relative">

             <div className={`w-full h-[182px] overflow-hidden grid place-items-center  ${style.mhero}`}>
                 <p className="text-white text-emilio text-[24px] font-bold">UDC</p>
             </div>
             </div>
        </>
    )
=======
import Image from "next/image";
import style from "./hero.module.css";
export default function hero(){
    return(
        <>
             {/* desktop view */}
            <div className="md:grid hidden">
            <div className={`w-full h-[362px] overflow-hidden grid place-items-center  ${style.hero}`}>
                 <p className="text-white text-emilio text-[24px] font-bold">VIT-AP University Disciplinary Committee (UDC)</p>
             </div>
            </div>

             {/* mobile view */}
             <div className="sm:hidden relative">

             <div className={`w-full h-[182px] overflow-hidden grid place-items-center  ${style.mhero}`}>
                 <p className="text-white text-emilio text-[24px] font-bold">UDC</p>
             </div>
             </div>
        </>
    )
>>>>>>> 50200700b9973ffcc5c2874fc565ebc048466bc5
}
