import style from './hero.module.css'

export default function hero(){
  return(
    <>
        {/* desktop view */}
        <div  class="sm:grid hidden">
        <div class={`w-full h-[400px] ${style.welcome}`}>

        </div>

        <div class="bg-white h-[550px]">
        <div class="w-full h-[400px] flex items-center justify-center">
        <div class={`w-[560px] h-[300px] ${style.vlogo}`}></div>
        </div>
        <div class="pt-[20px]">
          <p class="flex items-center justify-center font-bold"><span class="text-red-900">V</span>IT-AP <span class="pl-2 text-red-900">C</span>enter for <span class="pl-2 text-red-900">H</span>ealing, <span class="pl-2 text-red-900">A</span>wareness and <span class="pl-2 text-red-900">N</span>urturing through</p>
          <p class="flex items-center justify-center font-bold"><span class="pl-2 text-red-900">C</span>ounseling and <span class="pl-2 text-red-900">E</span>mpowerment </p>
          <p class="flex items-center justify-center font-bold">(V-CHANCE)</p>
        </div>

        </div>
        </div>

        {/* mobile view */}
        <div class="sm:hidden relative">
         <div class={`w-full h-[144px] ${style.mwelcome}`}>
           
         </div>

         <div class="bg-white h-[550px]">
        <div class="w-full h-[400px] flex items-center justify-center">
        <div class={`w-[200px] h-[107px] ${style.mvlogo}`}></div>
        </div>
        <div class="pl-[50px] pr-[50px]">
          <p class="flex items-center justify-center font-bold"><span class="text-red-900">V</span>IT-AP <span class="pl-2 text-red-900">C</span>enter for <span class="pl-2 text-red-900">H</span>ealing, </p>
          <p class="flex items-center justify-center font-bold"><span class="pl-2 text-red-900">A</span>wareness and <span class="pl-2 text-red-900">N</span>urturing through</p>
          <p class="flex items-center justify-center font-bold"><span class="pl-2 text-red-900">C</span>ounseling and <span class="pl-2 text-red-900">E</span>mpowerment </p>
          <p class="flex items-center justify-center font-bold">(V-CHANCE)</p>
        </div>

        </div>

        </div>
    </>
  )
}
