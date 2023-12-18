export default function Conclusion(){
    return(
        <>
            {/* Desktop view */}
            <div class="sm:grid hidden">
            <div class="w-full h-[250px] bg-red-950">
            <div class="pt-[78px] pb-[59px] px-[300px]">
              <p class="text-white text-[28px] font-[700px] tetx-emilio text-center">“ Lorem ipsum dolor sit amet consectetur, Lorem ipsum</p>          
              <p class="text-white text-[28px] font-[700px] tetx-emilio text-center">dolor sit amet consectetur ”</p>
              <p class="text-[24] font-[400px] text-white text-right">-Jagadish Mudiganti</p>
            </div>
            </div>
            </div>

            {/* Mobile view */}
            <div class="sm:hidden">
            <div class="w-full h-[100px] bg-red-950 px-[20px]">
            <div class="pt-[22px]">
              <p class="text-white text-[12px] font-[700px] tetx-emilio text-center">“ Lorem ipsum dolor sit amet consectetur, Lorem ipsum</p>          
              <p class="text-white text-[12px] font-[700px] tetx-emilio text-center">dolor sit amet consectetur ”</p>
              <p class="text-[6] font-[400px] text-white text-right">-Jagadish Mudiganti</p>
            </div>
            </div>
            </div>
        </>
    )
}