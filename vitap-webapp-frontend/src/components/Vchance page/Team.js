import style from "./team.module.css";
import Image from 'next/image'
export default function team(){
    return(
        <>
    {/* desktop view */}
    <div className="sm:flex hidden">
    <div className="w-full h-max bg-white py-[50px] lg:px-[108px] md:px-[108px]">

    <h1 className="text-red-900 lg:text-[48px] text-center md:text-[48px] sm:text-[30px] text-emilio font-bold pb-[19px]">Meet Our Team</h1>

    <p className="text-black font-normal text-[20px] text-center pb-[36px]">Our team consists of skilled and empathetic counsellors who are dedicated to providing exceptional care and support. Each counsellor is professionally trained and brings a wealth of experience to the counselling process.</p>
    
     {/* flex 1 */}
    <div className="lg:flex lg:flex-row lg:pb-[40px]">

    {/* card */}
    <div className="lg:pr-[105px] md:pb-[50px] sm:pb-[30px]">
    <div className={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div className={`w-[40px] border-rounded ${style.empty}`}></div>
    <div className="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p className="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p className="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>

    {/* card */}
    <div className="lg:pr-[105px] md:pb-[50px] sm:pb-[30px]">
    <div className={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div className={`w-[20px] ${style.empty}`}></div>
    <div className="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p className="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p className="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>

    {/* card */}
    <div className="sm:pb-[30px]">
    <div className={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div className={`w-[40px] ${style.empty}`}></div>
    <div className="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p className="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p className="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>

    </div>


    {/* flex 2 */}
    <div className="lg:flex lg:flex-row">

    {/* card */}
    <div className="lg:pr-[105px] md:pb-[50px] sm:pb-[30px]">
    <div className={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div className={`w-[40px] border-rounded ${style.empty}`}></div>
    <div className="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p className="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p className="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>

    {/* card */}
    <div className="lg:pr-[105px] md:pb-[50px] sm:pb-[30px]">
    <div className={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div className={`w-[40px] ${style.empty}`}></div>
    <div className="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p className="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p className="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>

    {/* card */}
    <div className="sm:pb-[30px]">
    <div className={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div className={`w-[40px] ${style.empty}`}></div>
    <div className="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p className="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p className="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>
     
    </div>
    <h1 className="text-red-900 text-[30px] text-emilio font-bold pb-[19px]">Contact us +91 7901311655</h1>
    </div>
    </div>

    {/* mobile view */}
    <div className="sm:hidden relative">
    
    <div className="w-full h-max pb-[30px] bg-white">
    <h1 className="text-red-900 text-center text-[30px] text-emilio font-bold pb-[19px]">Meet Our Team</h1>
    <p className="text-black font-normal text-[20px] text-center pb-[36px] px-[50px]">Our team consists of skilled and empathetic counsellors who are dedicated to providing exceptional care and support. Each counsellor is professionally trained and brings a wealth of experience to the counselling process.</p>
    {/* cards */}
    <div className="px-[50px] pb-[30px]">
    <div className={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div className={`w-[40px] border-rounded ${style.empty}`}></div>
    <div className="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p className="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p className="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>
    {/* cards */}
    <div className="px-[50px] pb-[30px]">
    <div className={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div className={`w-[40px] border-rounded ${style.empty}`}></div>
    <div className="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p className="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p className="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>
    {/* cards */}
    <div className="px-[50px] pb-[30px]">
    <div className={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div className={`w-[40px] border-rounded ${style.empty}`}></div>
    <div className="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p className="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p className="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>
    {/* cards */}
    <div className="px-[50px] pb-[30px]">
    <div className={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div className={`w-[40px] border-rounded ${style.empty}`}></div>
    <div className="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p className="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p className="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>
    {/* cards */}
    <div className="px-[50px] pb-[30px]">
    <div className={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div className={`w-[40px] border-rounded ${style.empty}`}></div>
    <div className="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p className="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p className="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>
    {/* cards */}
    <div className="px-[50px] pb-[30px]">
    <div className={`lg:basis block max-w-sm w-[312px] h-max pb-[10px] bg-white border border-gray-200 shadow-lg`}>
    <div className={`w-[40px] border-rounded ${style.empty}`}></div>
    <div className="flex justify-center texts-center pb-[5px]"><Image src="/faculty.png"  width={120} height={218} alt="faculty Image"></Image></div>
    <p className="text-red-900 text-[24px] font-bold text-center">Dr. Ilakkiya L</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Head Counselor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Cabin No: 431-H 4th Floor</p>
    <p className="text-center text-[17.6px] font-medium font-inter">Mahatma Gandhi Block(CB)</p>
    <p className="text-center text-[17.6px] font-medium font-inter">head.counsellor@vitap.ac.in</p>
    </div>
    </div>
    <h1 className="text-red-900 text-center text-[25px] text-emilio font-bold pb-[19px]">Contact us +91 7901311655</h1>

    </div>
    </div>
        </>
    )
}
