import React from 'react'
import { FaUserDoctor, FaUserNurse } from 'react-icons/fa6';
import { FaAmbulance, FaHeartbeat } from "react-icons/fa";

const HealthDetails = () => {
    return (
        <div className='max-w-[1560px] w-[100%] md:px-[100px] px-[50px] py-[30px] min-h-[450px] h-[100%]'>
            <h1 className='text-[46px] text-[#650010] font-bold font-Emilio'>Details</h1>
            <div className='grid grid-cols-1 ls:grid-cols-2 lx:grid-cols-4 my-[15px] gap-4'>
                <div className='flex flex-col gap-3 items-center justify-start text-center bg-[#FCE3E5] min-h-[330px] h-[100%] py-[20px] px-[20px]'>
                    <h1><FaUserDoctor size={120} className='text-[#650010]' /></h1>
                    <h1 className='text-[#000] text-[20px] font-Emilio font-bold'>Doctors</h1>
                    <div className='pt-[10px] flex flex-col gap-2'>
                        <p className='text-[#000] text-[16px] font-Montserrat'>Dr. Surya Avinash Ramanapudi</p>
                        <p className='text-[#000] text-[16px] font-Montserrat'> Dr.Lakshmi Lavanya CH</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 items-center justify-start text-center bg-[#FCE3E5] min-h-[330px] h-[100%] py-[20px] px-[20px]'>
                    <h1><FaUserNurse size={120} className='text-[#650010]' /></h1>
                    <h1 className='text-[#000] text-[20px] font-Emilio font-bold'>Nursing Stuff</h1>
                    <div className='pt-[10px] flex flex-col gap-2'>
                        <p className='text-[#000] text-[16px] font-Montserrat'>Tulasi Kattupalli <br /> (Nursing Incharge)</p>
                        <p className='text-[#000] text-[16px] font-Montserrat'> Srilatha Gochipatha <br /> (Staff Nurse)</p>
                        <p className='text-[#000] text-[16px] font-Montserrat'> Anusha Gochipatha <br /> (Staff Nurse)</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 items-center justify-start text-center bg-[#FCE3E5] min-h-[330px] h-[100%] py-[20px] px-[20px]'>
                    <h1><FaHeartbeat size={120} className='text-[#650010]' /></h1>
                    <h1 className='text-[#000] text-[20px] font-Emilio font-bold'>Health Centre</h1>
                    <div className='pt-[10px] flex flex-col gap-2'>
                        <p className='text-[#000] text-[16px] font-Montserrat'>Outpatient services with 10 bedded fully equipped 24/7</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 items-center justify-start text-center bg-[#FCE3E5] min-h-[330px] h-[100%] py-[20px] px-[20px]'>
                    <h1><FaAmbulance size={120} className='text-[#650010]' /></h1>
                    <h1 className='text-[#000] text-[20px] font-Emilio font-bold'>Emergency Ambulance</h1>
                    <div className='pt-[10px] flex flex-col gap-2'>
                        <p className='text-[#000] text-[16px] font-Montserrat'>7997965624</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthDetails
