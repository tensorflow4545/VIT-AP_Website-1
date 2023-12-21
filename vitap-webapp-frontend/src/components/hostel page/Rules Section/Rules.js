import Image from "next/image";
export default function rules(){
    return(
        <>
            <div className="w-full h-[468px] bg-purple-200">

            <div className="pl-[188px] pr-[188px] pt-[72px] pb-[72px]">
              <div className="flex flex-row">

               <div className="basis w-[235px] h-[335px]">
                   <Image width={235} height={335} src="/rules.png" alt="Rules Image"></Image>
                   <p className="text-[20px] font-[600px] tetx-emilio text-center pt-[10px]">Hostel Affidavit</p>
                </div>

                <div className="basis w-[235px] h-[335px] ml-[180px]">
                   <Image width={235} height={335} src="/rules.png" alt="Rules Image"></Image>
                   <p className="text-[20px] font-[600px] tetx-emilio text-center pt-[10px]">Hostel Affidavit</p>
                </div>

                <div className="basis w-[235px] h-[335px] ml-[180px]">
                   <Image width={235} height={335} src="/rules.png" alt="Rules Image"></Image>
                   <p className="text-[20px] font-[600px] tetx-emilio text-center pt-[10px]">Hostel Affidavit</p>
                </div>

              </div>
              </div>  
            </div>
        </>
    )
}
