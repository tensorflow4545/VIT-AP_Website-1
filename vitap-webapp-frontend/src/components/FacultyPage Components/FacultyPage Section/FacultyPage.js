"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai';
import "./FacultyPage.css"
import Link from 'next/link';
import Image from 'next/image';

const FacultyPage = () => {

    const [active, setActive] = useState(0);

    const [numactive, setNumactive] = useState(1);
    const [Department,setDepartment] = useState("School of Computer Science and Engineering (SCOPE)");

    const leftClick = () => {
        { numactive === 1 ? setNumactive(roundedNumItems) : setNumactive(numactive - 1) }
    }

    const rightClick = () => {
        {
            numactive === roundedNumItems ? setNumactive(1) : setNumactive(numactive + 1);
        }
    };

    const [Professors, setProfessors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/scope-faculty-profiles?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                    },
                });
                if (response.data && Array.isArray(response.data.data)) {
                    const extractedAttributes = response.data.data.map((item) => item.attributes);
                    setProfessors(extractedAttributes);
                } else {
                    console.error('The "data" property in the API response is not an array:', response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    const numItems = Professors.length;
    const roundedNumItems = Math.ceil(numItems/15);
    const numArray = Array.from({ length: roundedNumItems }, (_, index) => index + 1);


    const maxPagesToShow = 4;

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

            <div className='grid grid-cols-4 max-w-[1440px] mx-auto gap-3 text-center p-[30px] text-[#650010] bg-[#F3F4F8] my-10'>
                <div className={`py-5 font-Montserrant text-[20px] hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 0 ? 'bg-[#650010] text-white' : 'bg-[#F3F4F8]'} cursor-pointer`} onClick={() => {setActive(0);setDepartment("School of Computer Science and Engineering (SCOPE)")}}>
                    School of Computer Science and Engineering (SCOPE)
                </div>
                <div className={`py-5 font-Montserrant text-[20px] hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 1 ? 'bg-[#650010] text-white' : 'bg-[#F3F4F8]'} cursor-pointer`} onClick={() => {setActive(1);setDepartment("School of Electronics Engineering")}}>
                    School of Electronics Engineering
                </div>
                <div className={`py-5 font-Montserrant text-[20px] hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 2 ? 'bg-[#650010] text-white' : 'bg-[#F3F4F8]'} cursor-pointer`} onClick={() => {setActive(2);setDepartment("School of Mechanical Engineering (SMEC)")}}>
                    School of Mechanical Engineering (SMEC)
                </div>
                <div className={`py-5 font-Montserrant text-[20px] hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 3 ? 'bg-[#650010] text-white' : 'bg-[#F3F4F8]'} cursor-pointer`} onClick={() => {setActive(3);setDepartment("School of Advanced Science (SAS)")}}>
                    School of Advanced Science (SAS)
                </div>
                <div className={`py-5 font-Montserrant text-[20px] hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 4 ? 'bg-[#650010] text-white' : 'bg-[#F3F4F8]'} cursor-pointer`} onClick={() => {setActive(4);setDepartment("School of Business (VSB)")}}>
                    School of Business (VSB)
                </div>
                <div className={`py-5 font-Montserrant text-[20px] hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 5 ? 'bg-[#650010] text-white' : 'bg-[#F3F4F8]'} cursor-pointer`} onClick={() => {setActive(5);setDepartment("School of Law (VSL)")}}>
                    School of Law (VSL)
                </div>
                <div className={`py-5 font-Montserrant text-[20px] hover:bg-[#650010] hover:text-white transition-all duration-300 ${active === 6 ? 'bg-[#650010] text-white' : 'bg-[#F3F4F8]'} cursor-pointer`} onClick={() => {setActive(6);setDepartment("School of Social Science and Humanities (VISH)")}}>
                    School of Social Science and Humanities (VISH)
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className='max-w-[800px] w-[100%] bg-gray-400 min-h-[55px] h-[100%] rounded-xl mb-[50px] flex justify-between items-center px-[50px] cursor-pointer'>
                    <h1 className='font-Inter text-[17px]'>Search Faculty</h1>
                    <AiOutlineSearch size={25} />
                </div>
            </div>
            <div className='grid md:grid-cols-5 max-w-[1250px] md:mx-auto items-center justify-center grid-cols-4 gap-5 mx-[30px]'>
                {Professors.slice((numactive - 1) * 15, numactive * 15).map((professor) => (
                    (professor.Department === Department) ? (
                        <Link key={professor.id} href={`/${professor.Department}/faculty/profile/${professor.Employee_Id}`}>
                            <div className='border border-black ml-[15px] max-w-[210px] min-h-[250px] w-[100%] h-[100%] relative overflow-hidden font-Emilo cursor-pointer group hover:shadow-2xl'>
                                <div className='max-w-[210px] w-[100%] min-h-[180px] relative overflow-hidden'>
                                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}${professor?.Photo.data[0].attributes.url}`} alt={professor.Photo.data[0].attributes.alternativeText || 'Professor Image'} fill className='' />
                                </div>
                                <div className='absolute w-full bottom-0 left-0 h-[70px] bg-[#650010] group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-red-700 transition-all duration-300 flex justify-center items-center'>
                                    <h1 className='font-semibold text-center text-white font-Emilo text-[16px]'>{professor.Name}</h1>
                                </div>
                            </div>
                        </Link>
                    ) : null
                ))}
            </div>
            <div className="w-[100%] bg-red-100 h-[200px] mt-[-70px] -z-10 flex justify-center items-end gap-5 pb-[40px]">
                <div className="cursor-pointer" onClick={leftClick}>
                    <AiOutlineArrowLeft size={30} />
                </div>

                {numArray.length > maxPagesToShow && (
                    <>
                        {numArray.slice(numactive - 1, numactive + maxPagesToShow - 1).map((num) => (
                            <div
                                key={num}
                                className={`w-[40px] h-[40px] p-[5px] rounded-lg ${numactive === num ? 'bg-[#650010] text-white' : 'bg-[#F9C6CB] text-black'
                                    } flex justify-center items-center cursor-pointer`}
                                onClick={() => setNumactive(num)}
                            >
                                {num}
                            </div>
                        ))}
                        <div
                            key="ellipsis"
                            className={`w-[40px] h-[40px] p-[5px] rounded-lg bg-[#F9C6CB] text-black flex justify-center items-center`}
                        >
                            ......
                        </div>
                    </>
                )}

                <div className="cursor-pointer" onClick={rightClick}>
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
