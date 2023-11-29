"use client";

import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai';
import "./FacultyPage.css"
import Link from 'next/link';
import { professors } from '@/constants';

const FacultyPage = () => {

    const [active, setActive] = useState(0);

    const [numactive, setNumactive] = useState(1);

    const leftClick = () => {
        { numactive === 1 ? setNumactive(4) : setNumactive(numactive - 1) }
    }

    const rightClick = () => {
        {
            numactive === 4 ? setNumactive(1) : setNumactive(numactive + 1);
        }
    };

    return (
        <div className="max-w-[1560px] w-[100%] min-h-[1300px] h-[100%] mx-auto">
            <div
                style={{ backgroundImage: `url("/facultybg.jpeg")` }}
                className="relative max-w-[1560px] w-full h-[300px] bg-cover bg-no-repeat bg-center mx-auto flex items-center justify-center"
            >
                <h1 className="text-white text-[45px] font-semibold text-center flex justify-center items-center font-Emilo">
                    Faculty
                </h1>
            </div>

            <div className='grid grid-cols-2 max-w-[1440px] mx-auto gap-5 text-center py-[70px] text-[#650010]'>
                <div className={`border border-[#650010] py-5 font-Montserrant text-[20px] mx-5 rounded-xl hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 0 ? 'bg-[#650010] text-white' : 'bg-white'} cursor-pointer`} onClick={() => setActive(0)}>
                    School of Computer Science and Engineering (SCOPE) 
                </div>
                <div className={`border border-[#650010] py-5 font-Montserrant text-[20px] mx-5 rounded-xl hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 1 ? 'bg-[#650010] text-white' : 'bg-white'} cursor-pointer`} onClick={() => setActive(1)}>
                    School of Electronics Engineering   
                </div>
                <div className={`border border-[#650010] py-5 font-Montserrant text-[20px] mx-5 rounded-xl hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 2 ? 'bg-[#650010] text-white' : 'bg-white'} cursor-pointer`} onClick={() => setActive(2)}>
                    School of Mechanical Engineering (SMEC)  
                </div>
                <div className={`border border-[#650010] py-5 font-Montserrant text-[20px] mx-5 rounded-xl hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 3 ? 'bg-[#650010] text-white' : 'bg-white'} cursor-pointer`} onClick={() => setActive(3)}>
                    School of Advanced Science (SAS)  
                </div>
                <div className={`border border-[#650010] py-5 font-Montserrant text-[20px] mx-5 rounded-xl hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 4 ? 'bg-[#650010] text-white' : 'bg-white'} cursor-pointer`} onClick={() => setActive(4)}>
                    School of Business (VSB)  
                </div>
                <div className={`border border-[#650010] py-5 font-Montserrant text-[20px] mx-5 rounded-xl hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 5 ? 'bg-[#650010] text-white' : 'bg-white'} cursor-pointer`} onClick={() => setActive(5)}>
                    School of Law (VSL)  
                </div>
                <div className={`border border-[#650010] py-5 font-Montserrant text-[20px] mx-5 rounded-xl hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 6 ? 'bg-[#650010] text-white' : 'bg-white'} cursor-pointer`} onClick={() => setActive(6)}>
                    School of Social Science and Humanities (VISH)  
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className='max-w-[800px] w-[100%] bg-gray-400 min-h-[55px] h-[100%] rounded-xl mb-[50px] flex justify-between items-center px-[50px] cursor-pointer'>
                    <h1 className='font-Inter text-[17px]'>Search Faculty</h1>
                    <AiOutlineSearch size={25}/>
                </div>
            </div>

            <div className='grid md:grid-cols-5 max-w-[1250px] md:mx-auto items-center justify-center grid-cols-4 gap-5 mx-[30px]'>
                {
                    professors.slice(0, 15).map((professor) => (
                        <div key={professor.id} className='border border-black ml-[15px] max-w-[210px] min-h-[250px] w-[100%] h-[100%] relative overflow-hidden font-Emilo cursor-pointer group'>
                            <div style={{ backgroundImage: `url(/professor.png)` }} className='bg-no-repeat bg-right bg-contain w-full absolute bottom-[70px] right-0 pt-[10px] pl-[15px] tracking-normal font-semibold text-left flex flex-col justify-center items-start space-y-0 min-h-[170px] group-hover:bottom-[60px] group-hover:-right-2 transition-all duration-300 ease-in-out group'>
                                <h1 className='pl-[20px] text-[35px] text-[#650010] -rotate-90 leading-7 group-hover:hidden'>E</h1>
                                <h1 className='pl-[20px] text-[35px] text-[#650010] -rotate-90 leading-7 group-hover:hidden'>P</h1>
                                <h1 className='pl-[15px] text-[35px] text-[#650010] -rotate-90 leading-7 group-hover:hidden'>O</h1>
                                <h1 className='pl-[17px] text-[35px] text-[#650010] -rotate-90 leading-7 group-hover:hidden'>C</h1>
                                <h1 className='pl-[20px] text-[35px] text-[#650010] -rotate-90 leading-7 group-hover:hidden'>S</h1>
                            </div>
                            <div className='absolute w-full bottom-0 left-0 h-[70px] bg-[#650010] group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-red-700 transition-all duration-300 flex justify-center items-center'>
                                <h1 className='font-semibold text-center text-white font-Emilo text-[16px]'>{professor.name}</h1>
                            </div>
                            <div className='card group'>
                                <div className='absolute -bottom-32 group-hover:translate-y-4 group-hover:bottom-[160px] group-hover:left-2 group-hover:transition-all group-hover:duration-500 '>
                                    <p>{professor.subname}</p>
                                    <p className='text-[12px] leading-7'>{professor.profession}</p>
                                    <p className='text-[10px] leading-4 -mt-1'>{professor.school}</p>
                                    <Link href={"/"} className='text-[14px] leading-9 pt-[25px]'>Veiw Full Profile</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
                {/*
                <div className='border border-black ml-[15px] max-w-[210px] min-h-[250px] w-[100%] h-[100%] relative overflow-hidden font-Emilo cursor-pointer group'>
                    <div style={{ backgroundImage: `url(/professor.png)` }} className='bg-no-repeat bg-right bg-contain w-full absolute bottom-[70px] right-0 pt-[10px] pl-[15px] tracking-normal font-semibold text-left flex flex-col justify-center items-start space-y-0 min-h-[170px] group-hover:bottom-[60px] group-hover:-right-2 transition-all duration-300 ease-in-out group'>
                        <h1 className='pl-[20px] text-[35px] text-[#650010] -rotate-90 leading-7 group-hover:hidden'>E</h1>
                        <h1 className='pl-[20px] text-[35px] text-[#650010] -rotate-90 leading-7 group-hover:hidden'>P</h1>
                        <h1 className='pl-[15px] text-[35px] text-[#650010] -rotate-90 leading-7 group-hover:hidden'>O</h1>
                        <h1 className='pl-[17px] text-[35px] text-[#650010] -rotate-90 leading-7 group-hover:hidden'>C</h1>
                        <h1 className='pl-[20px] text-[35px] text-[#650010] -rotate-90 leading-7 group-hover:hidden'>S</h1>
                    </div>
                    <div className='absolute w-full bottom-0 left-0 h-[70px] bg-[#650010] group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-red-700 transition-all duration-300 flex justify-center items-center'>
                        <h1 className='font-semibold text-center text-white font-Emilo text-[16px]'>Dr. Asish Kumar Dalai Kumar Dalai</h1>
                    </div>
                    <div className='card group'>
                        <div className='absolute -bottom-32 group-hover:translate-y-4 group-hover:bottom-[160px] group-hover:left-2 group-hover:transition-all group-hover:duration-500'>
                            <p>Dr. Ashish kumar Dalai</p>
                            <p className='text-[12px] leading-7'>Assistant Professor</p>
                            <p className='text-[10px] leading-4 -mt-1'>SCOPE</p>
                            <Link href={"/"} className='text-[14px] leading-9 pt-[25px]'>Veiw Full Profile</Link>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* <div className="min-h-[200px] w-[100%] bg-red-100 mt-[-60px] -z-20"></div> */}

            <div className="w-[100%] bg-red-100 h-[200px] mt-[-70px] -z-10 flex justify-center items-end gap-5 pb-[40px]">
                <div className="cursor-pointer" onClick={() => leftClick()}>
                    <AiOutlineArrowLeft size={30} />
                </div>
                <div
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg ${numactive === 1 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`
                        } flex justify-center items-center  cursor-pointer`}
                    onClick={() => setNumactive(1)}
                >
                    1
                </div>
                <div
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg ${numactive === 2 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`
                        } flex justify-center items-center  cursor-pointer`}
                    onClick={() => setNumactive(2)}
                >
                    2
                </div>
                <div
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg ${numactive === 3 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`
                        }  flex justify-center items-center  cursor-pointer`}
                    onClick={() => setNumactive(3)}
                >
                    3
                </div>
                <div
                    className={`w-[40px] h-[40px] p-[5px] rounded-lg ${numactive === 4 ? `bg-[#650010] text-white` : `bg-[#F9C6CB] text-black`
                        } flex justify-center items-center  cursor-pointer`}
                    onClick={() => setNumactive(4)}
                >
                    4
                </div>
                <div className="cursor-pointer" onClick={() => rightClick()}>
                    <AiOutlineArrowRight size={30} />
                </div>
            </div>
            <div>
                <div class="updated2">
                    <h1 class="updateheader">Keep Me Updated</h1>
                    <p class="updatetext">Fill out this box to be the <span class="person">First Person</span> to hear about our updates</p>

                    <form>
                        <div class="flex flex-row flex-wrap gap-5 md:gap-0">
                            <div class="basis-1/4">
                                <input class="input" placeholder="*NAME" for="grid-first-name" />
                            </div>
                            <div class="basis-1/4">
                                <input class="input" placeholder="*EMAIL ADDRESS" for="grid-first-name" />
                            </div>
                            <div class="basis-1/4">
                                <input class="input" placeholder="*PHONE NUMBER" for="grid-first-name" />
                            </div>
                            <div class="basis-1/4">
                                <button class="inputbutton"><span class="inputbuttontext">SUBSCRIBE</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FacultyPage
