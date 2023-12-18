import style from "./Hero.module.css";
import Image from 'next/image'
export default function Hero(){
    return(
        <>
            {/* Desktop view */}
            <div className="sm:grid hidden">
            <div className={`w-full h-[362px] flex items-center justify-center ${style.hero}`}>
                 <p className="text-white font-600 text-[44px]">Facilities to Faculty and Staff</p>
            </div>

            {/* About Facilities */}
            <div className={`w-full h-max pt-[46px] lg:pl-[108px] pb-[72px] lg:pr-[108px]`}>
            <p className="text-red-900 text-[44px] font-bold text-emilio">Facilities to Faculty and Staff</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Air-Conditioned cabins and IT facilities are provided to the Faculty Members.</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Free transport facility for all employees.</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Medical support: In-house first aid facility is provided</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Faculty and Staff (including their dependents) are covered by health insurance</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Performance Appreciation Pay (PAP): Up to 15 days of gross salary based on the points scored out of 100 (variable pay)</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ EPF – Employer contribution</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Leave encashment options (CL, EL and ML)</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Research seed fund support (RGEMS)</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Sponsored visit to paper presentations in International Conferences (@ one travel per faculty per year)</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Provision for sabbatical leave</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Ambulance facility for 24 X 7.</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Library facility with access to online journals and e-books.</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Maternity leave to female employees.</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Medical leave.</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ ATM facility on the Campus.</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Canteen facility</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Wifi facility</p>
            <p className="text-dark text-[16px] font-light pt-[15px]">✧ Other required basic amenities for faculty are available in common areas</p>
            </div>
            </div>

            {/* Mobile view */}
            <div className="sm:hidden">
              
            <div className={`w-full h-[200px] flex items-center justify-center ${style.mhero}`}>
                 
            </div>
            
            {/* About Facilities */}
            <div className={`w-full h-max pt-[50px]  pb-[72px] px-[50px]`}>
            <p className="text-red-900 text-[24px] font-bold text-emilio">Facilities to Faculty and Staff</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Air-Conditioned cabins and IT facilities are provided to the Faculty Members.</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Free transport facility for all employees.</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Medical support: In-house first aid facility is provided</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Faculty and Staff (including their dependents) are covered by health insurance</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Performance Appreciation Pay (PAP): Up to 15 days of gross salary based on the points scored out of 100 (variable pay)</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ EPF – Employer contribution</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Leave encashment options (CL, EL and ML)</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Research seed fund support (RGEMS)</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Sponsored visit to paper presentations in International Conferences (@ one travel per faculty per year)</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Provision for sabbatical leave</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Ambulance facility for 24 X 7.</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Library facility with access to online journals and e-books.</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Maternity leave to female employees.</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Medical leave.</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ ATM facility on the Campus.</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Canteen facility</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Wifi facility</p>
            <p className="text-dark text-[18px] font-light pt-[15px]">✧ Other required basic amenities for faculty are available in common areas</p>
            </div>

            </div>

        </>
    )
}
