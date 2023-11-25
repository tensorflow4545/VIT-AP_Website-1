import style from "./team.module.css";
import Image from 'next/image'
export default function team(){
    return(
        <>
    <div class="w-full h-max bg-white py-[50px] px-[108px]">

    <h1 class="text-red-900 text-[48px] text-emilio font-bold pb-[19px]">Meet Our Team</h1>

    <p class="text-black font-normal text-[18px] pb-[36px]">Our team consists of skilled and empathetic counsellors who are dedicated to providing exceptional care and support. Each counsellor is professionally trained and brings a wealth of experience to the counselling process.</p>
    
     {/* flex 1 */}
    <div class="lg:flex lg:flex-row pb-[40px]">

    {/* card */}
    <div class="lg:pr-[105px] md:pb-[50px]">
    <div class={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div class={`w-[40px] border-rounded ${style.empty}`}></div>
    <div class="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p class="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p class="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>

    {/* card */}
    <div class="lg:pr-[105px] md:pb-[50px]">
    <div class={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div class={`w-[20px] ${style.empty}`}></div>
    <div class="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p class="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p class="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>

    {/* card */}
    <div class={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div class={`w-[40px] ${style.empty}`}></div>
    <div class="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p class="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p class="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>

    </div>


    {/* flex 2 */}
    <div class="lg:flex lg:flex-row">

    {/* card */}
    <div class="lg:pr-[105px] md:pb-[50px]">
    <div class={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div class={`w-[40px] border-rounded ${style.empty}`}></div>
    <div class="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p class="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p class="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>

    {/* card */}
    <div class="lg:pr-[105px] md:pb-[50px]">
    <div class={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div class={`w-[40px] ${style.empty}`}></div>
    <div class="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p class="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p class="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>

    {/* card */}
    <div class={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div class={`w-[40px] ${style.empty}`}></div>
    <div class="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p class="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p class="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p class="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>

    </div>

    </div>
        </>
    )
}
