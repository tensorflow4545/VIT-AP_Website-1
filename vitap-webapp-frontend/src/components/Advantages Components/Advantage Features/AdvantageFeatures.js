import React from 'react'
import FeaturesCard from './FeaturesCard'
import Image from 'next/image'

const AdvantageFeatures = () => {
    return (
        <div className='max-w-[1560px] w-[100%] mx-auto max-h-[7500px] py-[40px]'>
            <h1 className='text-[24px] font-bold ls:text-[42px] lx:text-[46px] font-Emilio text-[#650010] py-5 ls:font-thin text-center'>Objectives Key Features</h1>
            <div className='ls:flex flex-col items-center justify-center gap-3 mx-10 hidden '>
                <div className='min-h-[400px] w-[100%] relative py-[40px] flex '> 
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] ml-[100px] md:ml-[200px] relative mt-[60px]'>
                            <Image src={"/advantagefacility.jpeg"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 left-10 border-2 border-[#650010] -z-10'>

                            </div>
                        </div>
                    </div>
                    <div className='basis-2/3 max-h-[400px] bg-[#FCE3E5] flex justify-center items-center -z-20'>
                        <div className='flex-1 '></div>
                        <div className='flex-1 flex flex-col justify-center items-start -ml-[200px] px-[10px] md:px-[40px]'>
                            <h1 className='text-[26px] lx:text-[32px] font-Emilio text-[#650010]'>Unique Teaching-Learning Process</h1>
                            <p className='text-[#000] font-Montserrat text-[18px] font-thin text-justify'>With a focus on Engineering and Technology competencies, identified by industry and professional societies, the teaching learning process at VIT-AP prepares the students for the future. Based on a meticulously designed curriculum with industry and international academia feedback, the students are part of a flexible credit system where their learning is continuously assessed.</p>
                        </div>
                    </div>
                </div>

                <div className='min-h-[400px] w-[100%] py-[40px] flex  '>
                    <div className='basis-2/3 max-h-[400px] flex flex-col items-start justify-center border-2 border-[#655010]'>
                        <div className='px-[30px] flex'>
                            <div className='flex-1'>
                                <h1 className='text-[32px] lx:text-[32px] font-Emilio text-[#650010]'>Fully Flexible Credit System (FFCS® )</h1>
                                <p className='text-[#000] font-Montserrat text-[18px] font-thin text-justify'>The students are offered a range of diverse courses, and provided the opportunity to select courses, timings and faculty members based on their aspirations and interests.</p>
                            </div>
                            <div className='flex-1'></div>
                        </div>
                    </div>
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] -ml-[150px] lx:-ml-[250px] relative mt-[60px]'>
                            <Image src={"/advantages/ffcs494400.png"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 right-10 bg-[#FCE3E5] -z-10'></div>
                        </div>
                    </div>
                </div>
                
                <div className='min-h-[400px] w-[100%] relative py-[40px] flex '> 
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] ml-[100px] md:ml-[200px] relative mt-[60px]'>
                            <Image src={"/advantages/ecs494400.png"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 left-10 border-2 border-[#650010] -z-10'>

                            </div>
                        </div>
                    </div>
                    <div className='basis-2/3 max-h-[400px] bg-[#FCE3E5] flex justify-center items-center -z-20'>
                        <div className='flex-1 '></div>
                        <div className='flex-1 flex flex-col justify-center items-start -ml-[200px] px-[10px] md:px-[40px]'>
                            <h1 className='text-[26px] lx:text-[32px] font-Emilio text-[#650010]'>Engineering Clinics</h1>
                            <p className='text-[#000] font-Montserrat text-[18px] font-thin text-justify'>We focus on practical learning, which involves the learners to apply classroom content to solve real-world problems. One of the key opportunities they are provided with is the Engineering Clinics where they put the concepts to use by creating contraptions. Students from different subject areas form their own groups, and with the help of a faculty coordinator, undertake projects where they apply knowledge gained from the classrooms.</p>
                        </div>
                    </div>
                </div>

                <div className='min-h-[400px] w-[100%] py-[40px] flex  '>
                    <div className='basis-2/3 max-h-[400px] flex flex-col items-start justify-center border-2 border-[#655010]'>
                        <div className='px-[30px] flex'>
                            <div className='flex-1'>
                                <h1 className='text-[32px] lx:text-[32px] font-Emilio text-[#650010]'>Co-op Programmes and Internships</h1>
                                <p className='text-[#000] font-Montserrat text-[18px] font-thin text-justify'>Even before the students step out into the real world, we ensure they are industry -ready through our mandatory internships which are carried out as part of the programmes. The aim is to provide industrial exposure at an early stage in order to acquire a better understanding of the industry expectations.</p>
                            </div>
                            <div className='flex-1'></div>
                        </div>
                    </div>
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] -ml-[150px] lx:-ml-[250px] relative mt-[60px]'>
                            <Image src={"/advantagefacility3.jpeg"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 right-10 bg-[#FCE3E5] -z-10'></div>
                        </div>
                    </div>
                </div>

                <div className='min-h-[400px] w-[100%] relative py-[40px] flex '> 
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] ml-[100px] md:ml-[200px] relative mt-[60px]'>
                            <Image src={"/advantages/sports 494400.png"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 left-10 border-2 border-[#650010] -z-10'>

                            </div>
                        </div>
                    </div>
                    <div className='basis-2/3 max-h-[400px] bg-[#FCE3E5] flex justify-center items-center -z-20'>
                        <div className='flex-1 '></div>
                        <div className='flex-1 flex flex-col justify-center items-start -ml-[200px] px-[10px] md:px-[40px]'>
                            <h1 className='text-[26px] lx:text-[32px] font-Emilio text-[#650010]'>Sports</h1>
                            <p className='text-[#000] font-Montserrat text-[18px] font-thin text-justify'>At VIT-AP, we believe that sound mental and good physical health are crucial for holistic development. With a strong emphasis on recreation of students, VIT-AP students, faculty and staff are provided facilities which keeps them active, spirited, involved, and healthy. Several intramural sports events are organised where students compete in cricket, badminton, volleyball, chess etc. Apart from intramural sports, different colleges and universities also participate in our in-house Sports and Cultural fest VITopia.</p>
                        </div>
                    </div>
                </div>

                <div className='min-h-[400px] w-[100%] py-[40px] flex  '>
                    <div className='basis-2/3 max-h-[400px] flex flex-col items-start justify-center border-2 border-[#655010]'>
                        <div className='px-[30px] flex'>
                            <div className='flex-1'>
                                <h1 className='text-[26px] lx:text-[32px] font-Emilio text-[#650010]'>Clubs and Chapters</h1>
                                <p className='text-[#000] font-Montserrat text-[16px] lx:text-[18px] font-thin text-justify'>At VIT-AP, there exists a symbiotic relationship between learning and enjoyment. With a stimulating community of students, various opportunities are provided to interact with students from diverse backgrounds. Several club activities eventually lead them to develop a crucial skillset comprising team-work, leadership, and event management.</p>
                            </div>
                            <div className='flex-1'></div>
                        </div>
                    </div>
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] -ml-[150px] lx:-ml-[250px] relative mt-[60px]'>
                            <Image src={"/advantages/clubs and chapters494400.png"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 right-10 bg-[#FCE3E5] -z-10'></div>
                        </div>
                    </div>
                </div>

                <div className='min-h-[400px] w-[100%] relative py-[40px] flex '> 
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] ml-[100px] md:ml-[200px] relative mt-[60px]'>
                            <Image src={"/advantagefacility6.jpeg"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 left-10 border-2 border-[#650010] -z-10'>

                            </div>
                        </div>
                    </div>
                    <div className='basis-2/3 max-h-[400px] bg-[#FCE3E5] flex justify-center items-center -z-20'>
                        <div className='flex-1 '></div>
                        <div className='flex-1 flex flex-col justify-center items-start -ml-[200px] px-[10px] md:px-[40px]'>
                            <h1 className='text-[26px] lx:text-[32px] font-Emilio text-[#650010]'>Stellar Placements</h1>
                            <p className='text-[#000] font-Montserrat text-[18px] font-thin text-justify'>Seize the Unbeatable Placement Advantage [700+ companies, multiple offers]. At VIT-AP, students are part of serious and rigorous programmes which do not compromise on quality. As a result, they receive unparalleled placement opportunities through the well-connected placement cell.</p>
                        </div>
                    </div>
                </div>

                <div className='min-h-[400px] w-[100%] py-[40px] flex  '>
                    <div className='basis-2/3 max-h-[400px] flex flex-col items-start justify-center border-2 border-[#655010]'>
                        <div className='px-[30px] flex'>
                            <div className='flex-1'>
                                <h1 className='text-[26px] md:text-[32px] font-Emilio text-[#650010]'>International Programmes</h1>
                                <p className='text-[#000] font-Montserrat text-[14px] lx:text-[16px] md:text-[18px] font-thin text-justify'>International tie-ups have already resulted in several interactions with faculty from abroad such as Rochester Institute of Technology (USA) and Queensland University of Technology (Australia). Our international programmes are aimed at providing a global experience to the students with our SAP (Study Abroad Programmes) and ITP (International Transfer Programme-2 years abroad and 2 years at VIT-AP)Collaborative Masters + Doctoral level studies with international universities</p>
                            </div>
                            <div className='flex-1'></div>
                        </div>
                    </div>
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] -ml-[150px] lx:-ml-[250px] relative mt-[60px]'>
                            <Image src={"/advantages/international_progrmmas290180.png"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 right-10 bg-[#FCE3E5] -z-10'></div>
                        </div>
                    </div>
                </div>

                <div className='min-h-[400px] w-[100%] relative py-[40px] flex '> 
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] ml-[100px] md:ml-[200px] relative mt-[60px]'>
                            <Image src={"/advantages/community 494400.png"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 left-10 border-2 border-[#650010] -z-10'>

                            </div>
                        </div>
                    </div>
                    <div className='basis-2/3 max-h-[400px] bg-[#FCE3E5] flex justify-center items-center -z-20'>
                        <div className='flex-1 '></div>
                        <div className='flex-1 flex flex-col justify-center items-start -ml-[200px] px-[10px] md:px-[40px]'>
                            <h1 className='text-[26px] lx:text-[32px] font-Emilio text-[#650010]'>Community Development</h1>
                            <p className='text-[#000] font-Montserrat text-[18px] font-thin text-justify'>The aim of reaching out to communities is to serve emerging rural needs, challenges, and help in social sustainability. It is also to promote sustainable rural development through participative planning, capacity building, effective networking, research and innovative efforts.</p>
                        </div>
                    </div>
                </div>

                <div className='min-h-[400px] w-[100%] py-[40px] flex  '>
                    <div className='basis-2/3 max-h-[400px] flex flex-col items-start justify-center border-2 border-[#655010]'>
                        <div className='px-[30px] flex'>
                            <div className='flex-1'>
                                <h1 className='text-[25px] lx:text-[28px] font-Emilio text-[#650010]'>Infrastructure and Facilities</h1>
                                <p className='text-[#000] font-Montserrat text-[18px] font-thin text-justify'>Located at the heart of Amaravati, the capital of Andhra Pradesh, the institute is spread across 200 acres providing a comfortable and vibrant life on campus. In less than a year, our campus has two fully functional blocks, and three more coming up shortly. The aim is to create a green, educational and recreational space where learning is made meaningful and enjoyable.From digital library, well-equipped laboratories, health centre, cafeteria, bank and ATM, sports facilities, to a wi-fi enabled campus, the students are provided numerous superior facilities which are in line with global educational standards.</p>
                            </div>
                            <div className='flex-1'></div>
                        </div>
                    </div>
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] -ml-[150px] lx:-ml-[250px] relative mt-[60px]'>
                            <Image src={"/advantagefacility8.jpeg"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 right-10 bg-[#FCE3E5] -z-10'></div>
                        </div>
                    </div>
                </div>

                <div className='min-h-[400px] w-[100%] relative py-[40px] flex '> 
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] ml-[100px] md:ml-[200px] relative mt-[60px]'>
                            <Image src={"/advantages/mentorship494400.png"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 left-10 border-2 border-[#650010] -z-10'>

                            </div>
                        </div>
                    </div>
                    <div className='basis-2/3 max-h-[400px] bg-[#FCE3E5] flex justify-center items-center -z-20'>
                        <div className='flex-1 '></div>
                        <div className='flex-1 flex flex-col justify-center items-start -ml-[200px] px-[10px] md:px-[40px]'>
                            <h1 className='text-[26px] lx:text-[32px] font-Emilio text-[#650010]'>Mentoring Programme</h1>
                            <p className='text-[#000] font-Montserrat text-[18px] font-thin text-justify'>A unique mentoring programme is in place at our institute, where, a faculty member is assigned to a group of students as a mentor. The mentor not only helps a student in making informed decisions about his or her academic progress, but also acts as a local guardian.</p>
                        </div>
                    </div>
                </div>

                <div className='min-h-[400px] w-[100%] py-[40px] flex  '>
                    <div className='basis-2/3 max-h-[400px] flex flex-col items-start justify-center border-2 border-[#655010]'>
                        <div className='px-[30px] flex'>
                            <div className='flex-1'>
                                <h1 className='text-[32px] lx:text-[32px] font-Emilio text-[#650010]'>Qualified and Caring Faculty</h1>
                                <p className='text-[#000] font-Montserrat text-[17px] font-thin text-justify'>We have highly-qualified, experienced, committed and caring faculty to help students adjust to living and studying at VIT – AP. Our faculty members are well abreast with the current trends in Education and Technology and impart the same in classrooms and laboratories.</p>
                            </div>
                            <div className='flex-1'></div>
                        </div>
                    </div>
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] -ml-[150px] lx:-ml-[250px] relative mt-[60px]'>
                            <Image src={"/advantages/qualified494400.png"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 right-10 bg-[#FCE3E5] -z-10'></div>
                        </div>
                    </div>
                </div>

                <div className='min-h-[400px] w-[100%] relative py-[40px] flex '> 
                    <div className='basis-1/3'>
                        <div className='max-w-[550px] w-[100%] min-h-[400px] ml-[100px] md:ml-[200px] relative mt-[60px]'>
                            <Image src={"/advantages/alumini494400.png"} alt='advantage' fill />
                            <div className='absolute w-full h-full top-10 left-10 border-2 border-[#650010] -z-10'>

                            </div>
                        </div>
                    </div>
                    <div className='basis-2/3 max-h-[400px] bg-[#FCE3E5] flex justify-center items-center -z-20'>
                        <div className='flex-1 '></div>
                        <div className='flex-1 flex flex-col justify-center items-start -ml-[200px] px-[10px] md:px-[40px]'>
                            <h1 className='text-[26px] lx:text-[32px] font-Emilio text-[#650010]'>Well-connected Alumni Network</h1>
                            <p className='text-[#000] font-Montserrat text-[18px] font-thin text-justify'>Being a VITian gives you an exclusive life-long opportunity of having a friend in most countries you go to and most companies you visit, and a mentor who can help you in time of need.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center ls:hidden gap-5 px-[20px]'>
                <div className='max-w-[420px] w-[100%] min-h-[500px] flex flex-col  relative'>
                    <div className='min-h-[150px]'></div>
                        <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-10 right-10 z-10 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("/advantagefacility.jpeg")' }}></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-0 right-0 border-2 border-[#650010]'></div>
                    <div className='min-h-[350px] bg-[#FCE3E5] p-3 flex flex-col justify-end items-start'>
                        <p className='text-[20px] font-Emilio font-thin text-[#650010]'>Unique Teaching-Learning </p>
                        <p className='text-[16px] font-Montserrat font-thin'>With a focus on Engineering and Technology competencies, identified by industry and professional societies, the teaching learning process at VIT-AP prepares the students for the future. Based on a meticulously designed curriculum with industry and international academia feedback, the students are part of a flexible credit system where their learning is continuously assessed.</p>
                    </div>
                </div>

                <div className='max-w-[420px] w-[100%] min-h-[440px] flex flex-col  relative'>
                    <div className='min-h-[150px]'></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-10 left-10 z-10 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("/advantagefacility2.jpeg")' }}></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-0 left-0 bg-[#FCE3E5]'></div>
                    <div className='min-h-[260px] border-2 border-[#650010] p-3 flex flex-col justify-end items-start'>
                        <p className='text-[20px] font-Emilio font-thin text-[#650010]'>Fully Flexible Credit System (FFCS® ) </p>
                        <p className='text-[16px] font-Montserrat font-thin'>The students are offered a range of diverse courses, and provided the opportunity to select courses, timings and faculty members based on their aspirations and interests.</p>
                    </div>
                </div>

                <div className='max-w-[420px] w-[100%] min-h-[540px] flex flex-col  relative'>
                    <div className='min-h-[150px]'></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-10 right-10 z-10 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("/advantagefacility3.jpeg")' }}></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-0 right-0 border-2 border-[#650010]'></div>
                    <div className='min-h-[390px] bg-[#FCE3E5] p-3 flex flex-col justify-end items-start'>
                        <p className='text-[20px] font-Emilio font-thin text-[#650010]'>Engineering Clinics</p>
                        <p className='text-[16px] font-Montserrat font-thin'>We focus on practical learning, which involves the learners to apply classroom content to solve real-world problems. One of the key opportunities they are provided with is the Engineering Clinics where they put the concepts to use by creating contraptions. Students from different subject areas form their own groups, and with the help of a faculty coordinator, undertake projects where they apply knowledge gained from the classrooms.</p>
                    </div>
                </div>

                <div className='max-w-[420px] w-[100%] max-h-[740px] flex flex-col  relative'>
                    <div className='min-h-[150px]'></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-10 left-10 z-10 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("/advantagefacility6.jpeg")' }}></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-0 left-0 bg-[#FCE3E5]'></div>
                    <div className='min-h-[260px] pt-[100px] border-2 border-[#650010] p-3 flex flex-col justify-end items-start'>
                        <p className='text-[20px] font-Emilio font-thin text-[#650010]'>Co-op Programmes and Internships </p>
                        <p className='text-[16px] font-Montserrat font-thin'>Even before the students step out into the real world, we ensure they are industry -ready through our mandatory internships which are carried out as part of the programmes. The aim is to provide industrial exposure at an early stage in order to acquire a better understanding of the industry expectations.</p>
                    </div>
                </div>

                <div className='max-w-[420px] w-[100%] max-h-[640px] flex flex-col  relative'>
                    <div className='min-h-[150px]'></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-10 right-10 z-10 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("/advantagefacility4.jpeg")' }}></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-0 right-0 border-2 border-[#650010]'></div>
                    <div className='min-h-[390px] pt-[100px] bg-[#FCE3E5] p-3 flex flex-col justify-end items-start'>
                        <p className='text-[20px] font-Emilio font-thin text-[#650010]'>Sports</p>
                        <p className='text-[16px] font-Montserrat font-thin'>At VIT-AP, we believe that sound mental and good physical health are crucial for holistic development. With a strong emphasis on recreation of students, VIT-AP students, faculty and staff are provided facilities which keeps them active, spirited, involved, and healthy. Several intramural sports events are organised where students compete in cricket, badminton, volleyball, chess etc. Apart from intramural sports, different colleges and universities also participate in our in-house Sports and Cultural fest VITopia.</p>
                    </div>
                </div>

                <div className='max-w-[420px] w-[100%] max-h-[740px] flex flex-col  relative'>
                    <div className='min-h-[150px]'></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-10 left-10 z-10 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("/advantagefacility6.jpeg")' }}></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-0 left-0 bg-[#FCE3E5]'></div>
                    <div className='min-h-[260px] pt-[100px] border-2 border-[#650010] p-3 flex flex-col justify-end items-start'>
                        <p className='text-[20px] font-Emilio font-thin text-[#650010]'>Co-op Programmes and Internships </p>
                        <p className='text-[16px] font-Montserrat font-thin'>Even before the students step out into the real world, we ensure they are industry -ready through our mandatory internships which are carried out as part of the programmes. The aim is to provide industrial exposure at an early stage in order to acquire a better understanding of the industry expectations.</p>
                    </div>
                </div>

                <div className='max-w-[420px] w-[100%] max-h-[640px] flex flex-col  relative'>
                    <div className='min-h-[150px]'></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-10 right-10 z-10 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("/advantagefacility4.jpeg")' }}></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-0 right-0 border-2 border-[#650010]'></div>
                    <div className='min-h-[390px] pt-[100px] bg-[#FCE3E5] p-3 flex flex-col justify-end items-start'>
                        <p className='text-[20px] font-Emilio font-thin text-[#650010]'>Sports</p>
                        <p className='text-[16px] font-Montserrat font-thin'>At VIT-AP, we believe that sound mental and good physical health are crucial for holistic development. With a strong emphasis on recreation of students, VIT-AP students, faculty and staff are provided facilities which keeps them active, spirited, involved, and healthy. Several intramural sports events are organised where students compete in cricket, badminton, volleyball, chess etc. Apart from intramural sports, different colleges and universities also participate in our in-house Sports and Cultural fest VITopia.</p>
                    </div>
                </div>

                <div className='max-w-[420px] w-[100%] max-h-[740px] flex flex-col  relative'>
                    <div className='min-h-[150px]'></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-10 left-10 z-10 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("/advantagefacility6.jpeg")' }}></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-0 left-0 bg-[#FCE3E5]'></div>
                    <div className='min-h-[260px] pt-[100px] border-2 border-[#650010] p-3 flex flex-col justify-end items-start'>
                        <p className='text-[20px] font-Emilio font-thin text-[#650010]'>Co-op Programmes and Internships </p>
                        <p className='text-[16px] font-Montserrat font-thin'>Even before the students step out into the real world, we ensure they are industry -ready through our mandatory internships which are carried out as part of the programmes. The aim is to provide industrial exposure at an early stage in order to acquire a better understanding of the industry expectations.</p>
                    </div>
                </div>

                <div className='max-w-[420px] w-[100%] max-h-[640px] flex flex-col  relative'>
                    <div className='min-h-[150px]'></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-10 right-10 z-10 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("/advantagefacility4.jpeg")' }}></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-0 right-0 border-2 border-[#650010]'></div>
                    <div className='min-h-[390px] pt-[100px] bg-[#FCE3E5] p-3 flex flex-col justify-end items-start'>
                        <p className='text-[20px] font-Emilio font-thin text-[#650010]'>Sports</p>
                        <p className='text-[16px] font-Montserrat font-thin'>At VIT-AP, we believe that sound mental and good physical health are crucial for holistic development. With a strong emphasis on recreation of students, VIT-AP students, faculty and staff are provided facilities which keeps them active, spirited, involved, and healthy. Several intramural sports events are organised where students compete in cricket, badminton, volleyball, chess etc. Apart from intramural sports, different colleges and universities also participate in our in-house Sports and Cultural fest VITopia.</p>
                    </div>
                </div>

                <div className='max-w-[420px] w-[100%] max-h-[740px] flex flex-col  relative'>
                    <div className='min-h-[150px]'></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-10 left-10 z-10 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("/advantagefacility6.jpeg")' }}></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-0 left-0 bg-[#FCE3E5]'></div>
                    <div className='min-h-[260px] pt-[100px] border-2 border-[#650010] p-3 flex flex-col justify-end items-start'>
                        <p className='text-[20px] font-Emilio font-thin text-[#650010]'>Co-op Programmes and Internships </p>
                        <p className='text-[16px] font-Montserrat font-thin'>Even before the students step out into the real world, we ensure they are industry -ready through our mandatory internships which are carried out as part of the programmes. The aim is to provide industrial exposure at an early stage in order to acquire a better understanding of the industry expectations.</p>
                    </div>
                </div>

                <div className='max-w-[420px] w-[100%] max-h-[640px] flex flex-col  relative'>
                    <div className='min-h-[150px]'></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-10 right-10 z-10 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("/advantagefacility4.jpeg")' }}></div>
                    <div className='absolute max-w-[250px] w-[100%] min-h-[180px] top-0 right-0 border-2 border-[#650010]'></div>
                    <div className='min-h-[390px] pt-[100px] bg-[#FCE3E5] p-3 flex flex-col justify-end items-start'>
                        <p className='text-[20px] font-Emilio font-thin text-[#650010]'>Sports</p>
                        <p className='text-[16px] font-Montserrat font-thin'>At VIT-AP, we believe that sound mental and good physical health are crucial for holistic development. With a strong emphasis on recreation of students, VIT-AP students, faculty and staff are provided facilities which keeps them active, spirited, involved, and healthy. Several intramural sports events are organised where students compete in cricket, badminton, volleyball, chess etc. Apart from intramural sports, different colleges and universities also participate in our in-house Sports and Cultural fest VITopia.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvantageFeatures
 