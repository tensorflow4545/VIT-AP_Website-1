import style from './hero.module.css'

export default function hero(){
  return(
    <>
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
    </>
  )
}