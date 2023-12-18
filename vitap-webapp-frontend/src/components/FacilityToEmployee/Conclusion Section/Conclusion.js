export default function conclusion(){
    return(
        <>
            {/* Desktop view */}
            <div className="sm:grid hidden">        
            <div className="w-full h-[250px] bg-red-900">
            <div className="pt-[78px] pb-[59px] px-[300px]">
              <p className="text-white text-[28px] font-[700px] tetx-emilio text-center">“ Lorem ipsum dolor sit amet consectetur, Lorem ipsum</p>          
              <p className="text-white text-[28px] font-[700px] tetx-emilio text-center">dolor sit amet consectetur ”</p>
              <p className="text-[24] font-[400px] text-white text-right">-Jagadish Mudiganti</p>
            </div>
            </div>
            </div>

            {/* mobile view */}
            <div className="sm:hidden">
            <div className="w-full h-[100px] bg-red-950 px-[20px]">
            <div className="pt-[22px]">
              <p className="text-white text-[12px] font-[700px] tetx-emilio text-center">“ Lorem ipsum dolor sit amet consectetur, Lorem ipsum</p>          
              <p className="text-white text-[12px] font-[700px] tetx-emilio text-center">dolor sit amet consectetur ”</p>
              <p className="text-[6px] font-light text-white text-right">-Jagadish Mudiganti</p>
            </div>
            </div>
            </div>
        </>
    )
}
