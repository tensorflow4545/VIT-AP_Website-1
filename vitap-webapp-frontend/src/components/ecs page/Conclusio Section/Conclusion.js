export default function conclusion(){
    return(
        <>
            {/* Desktop view */}
            <div className="sm:grid hidden">
            <div className='bg-red-100 w-[100%] h-[297px] pt-[37px] text-center'>
            <p className='text-primary font-Emilio text-[20px] font-bold text-red-900'>Contact Us</p>
            <p className='text-primary font-Emilio text-[32px] font-bold pb-[6px] text-red-900'>Dr. Pradeep Reddy</p>
            <p className='text-primary font-Montserrat text-[20px] font-medium pb-[24px] text-red-900'>Dean – School of Computer Science and Engineering</p>
            <p className='text-primary font-Montserrat text-[20px] font-medium pb-[12px] text-red-900'>VIT-AP University, Beside AP Secretariat, Near Vijayawada, 522 237, Andhra Pradesh</p>
            <p className='text-primary font-Montserrat text-[20px] font-medium pb-[12px] text-red-900'>Email : adminoffice@vitap.ac.in</p>
            <p className='text-primary font-Montserrat text-[20px] font-medium text-red-900'>Intercom: 5162</p>
            </div>        
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
            
            <div className='bg-red-100 w-[100%] h-[297px] pt-[37px] text-center px-[20px]'>
            <p className='text-primary font-Emilio text-[16px] font-bold text-red-900'>Contact Us</p>
            <p className='text-primary font-Emilio text-[24px] font-bold pb-[6px] text-red-900'>Dr. Pradeep Reddy</p>
            <p className='text-primary font-Montserrat text-[14px] font-medium pb-[24px] text-red-900'>Dean – School of Computer Science and Engineering</p>
            <p className='text-primary font-Montserrat text-[14px] font-medium pb-[12px] text-red-900'>VIT-AP University, Beside AP Secretariat, Near Vijayawada, 522 237, Andhra Pradesh</p>
            <p className='text-primary font-Montserrat text-[14px] font-medium pb-[12px] text-red-900'>Email : adminoffice@vitap.ac.in</p>
            <p className='text-primary font-Montserrat text-[14px] font-medium text-red-900'>Intercom: 5162</p>
            </div> 

            <div className="w-full h-[100px] bg-red-950 px-[20px]">
            <div className="pt-[22px]">
              <p className="text-white text-[12px] font-[700px] tetx-emilio text-center">“ Lorem ipsum dolor sit amet consectetur, Lorem ipsum</p>          
              <p className="text-white text-[12px] font-[700px] tetx-emilio text-center">dolor sit amet consectetur ”</p>
              <p className="text-[6px] font-[400px] text-white text-right">-Jagadish Mudiganti</p>
            </div>
            </div>
            </div>
        </>
    )
}