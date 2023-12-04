import Image from "next/image";
export default function rules(){
    return(
        <>
            <div class="w-full h-[468px] bg-purple-200">

            <div class="pl-[188px] pr-[188px] pt-[72px] pb-[72px]">
              <div class="flex flex-row">

               <div class="basis w-[235px] h-[335px]">
                   <Image width={235} height={335} src="/rules.png" alt="Rules Image"></Image>
                   <p class="text-[20px] font-[600px] tetx-emilio text-center pt-[10px]">Hostel Affidavit</p>
                </div>

                <div class="basis w-[235px] h-[335px] ml-[180px]">
                   <Image width={235} height={335} src="/rules.png" alt="Rules Image"></Image>
                   <p class="text-[20px] font-[600px] tetx-emilio text-center pt-[10px]">Hostel Affidavit</p>
                </div>

                <div class="basis w-[235px] h-[335px] ml-[180px]">
                   <Image width={235} height={335} src="/rules.png" alt="Rules Image"></Image>
                   <p class="text-[20px] font-[600px] tetx-emilio text-center pt-[10px]">Hostel Affidavit</p>
                </div>

              </div>
              </div>  
            </div>
        </>
    )
}
