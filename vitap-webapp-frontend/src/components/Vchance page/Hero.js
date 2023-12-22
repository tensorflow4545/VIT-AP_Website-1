import style from './hero.module.css'

export default function Hero(){
  return(
    <>
        {/* desktop view */}
        <div  className="sm:grid hidden">
        <div className={`w-full h-[400px] ${style.welcome}`}>

        </div>

        <div className="bg-white h-[550px]">
        <div className="w-full h-[400px] flex items-center justify-center">
        <div className={`w-[560px] h-[300px] ${style.vlogo}`}></div>
        </div>
        <div className="pt-[20px]">
          <p className="flex items-center justify-center font-bold"><span className="text-red-900">V</span>IT-AP <span className="pl-2 text-red-900">C</span>enter for <span className="pl-2 text-red-900">H</span>ealing, <span className="pl-2 text-red-900">A</span>wareness and <span className="pl-2 text-red-900">N</span>urturing through</p>
          <p className="flex items-center justify-center font-bold"><span className="pl-2 text-red-900">C</span>ounseling and <span className="pl-2 text-red-900">E</span>mpowerment </p>
          <p className="flex items-center justify-center font-bold">(V-CHANCE)</p>
        </div>

        </div>
        </div>

        {/* mobile view */}
        <div className="sm:hidden relative">
         <div className={`w-full h-[144px] ${style.mwelcome}`}>
           
         </div>

         <div className="bg-white h-[550px]">
        <div className="w-full h-[400px] flex items-center justify-center">
        <div className={`w-[200px] h-[107px] ${style.mvlogo}`}></div>
        </div>
        <div className="pl-[50px] pr-[50px]">
          <p className="flex items-center justify-center font-bold"><span className="text-red-900">V</span>IT-AP <span className="pl-2 text-red-900">C</span>enter for <span className="pl-2 text-red-900">H</span>ealing, </p>
          <p className="flex items-center justify-center font-bold"><span className="pl-2 text-red-900">A</span>wareness and <span className="pl-2 text-red-900">N</span>urturing through</p>
          <p className="flex items-center justify-center font-bold"><span className="pl-2 text-red-900">C</span>ounseling and <span className="pl-2 text-red-900">E</span>mpowerment </p>
          <p className="flex items-center justify-center font-bold">(V-CHANCE)</p>
        </div>

        </div>

        </div>
    </>
  )
}
