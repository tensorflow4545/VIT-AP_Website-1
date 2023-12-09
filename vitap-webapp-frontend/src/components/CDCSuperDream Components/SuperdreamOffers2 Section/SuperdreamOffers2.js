"use client";

import Image from 'next/image'
import React, { useState } from 'react';
import "./SuperdreamOffers.css";
import { superdreamImages } from '@/constants';
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';

const SuperdreamOffers2 = () => {

    const [index, setIndex] = useState(0);

    console.log(index);

    return (
        <>
            <div className="max-w-[1560px] w-[100%] min-h-[700px] lx:min-h-[900px] h-[100%] mx-auto bg-[#F3F4F8] hidden ls:flex flex-col relative overflow-hidden ">
                <div className='absolute top-[60%] right-16 max-w-[80px] w-[100%] max-h-[40px] h-[100%] flex justify-between items-center'>
                    <button className='bg-white rounded-full' onClick={() => setIndex(index - 1)}><GrFormPrevious size={35} /></button>
                    <button className='bg-white rounded-full' onClick={() => setIndex(index + 1)}><MdNavigateNext size={35} /></button>
                </div>
                <div className='flex-1 flex flex-col justify-center items-center gap-4'>
                    <h1 className='text-[#650010] text-center text-[32px] font-bold'>2024 Graduating Batch Students Grab Super Dream Offers</h1>
                    <div className='flex gap-5'>
                        <div className='flex flex-col justify-center items-end'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="306" height="53" viewBox="0 0 306 53" fill="none">
                                    <g filter="url(#filter0_d_1876_12667)">
                                        <path d="M297 5H9L34 40H297V5Z" fill="#650010" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1876_12667" x="0.2" y="0.2" width="305.6" height="52.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="4.4" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.717448 0 0 0 0 0.0281001 0 0 0 0 0.137304 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1876_12667" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1876_12667" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="259" height="53" viewBox="0 0 259 53" fill="none">
                                    <g filter="url(#filter0_d_1876_12669)">
                                        <path d="M250 5H9L29.9201 40H250V5Z" fill="#650010" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1876_12669" x="0.2" y="0.2" width="258.6" height="52.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="4.4" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.717448 0 0 0 0 0.0281001 0 0 0 0 0.137304 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1876_12669" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1876_12669" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="209" height="53" viewBox="0 0 209 53" fill="none">
                                    <g filter="url(#filter0_d_1876_12671)">
                                        <path d="M200 5H9L25.5799 40H200V5Z" fill="#650010" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1876_12671" x="0.2" y="0.2" width="208.6" height="52.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="4.4" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.717448 0 0 0 0 0.0281001 0 0 0 0 0.137304 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1876_12671" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1876_12671" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className='lx:w-[550px] lx:h-[350px] w-[400px] h-[250px] relative'>
                            <Image src={superdreamImages[index].imgUrl} alt='' fill />
                        </div>
                        <div className='flex flex-col justify-center items-start'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="306" height="53" viewBox="0 0 306 53" fill="none">
                                    <g filter="url(#filter0_d_1876_12666)">
                                        <path d="M9 5H297L272 40H9V5Z" fill="#650010" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1876_12666" x="0.2" y="0.2" width="305.6" height="52.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="4.4" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.717448 0 0 0 0 0.0281001 0 0 0 0 0.137304 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1876_12666" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1876_12666" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="259" height="53" viewBox="0 0 259 53" fill="none">
                                    <g filter="url(#filter0_d_1876_12668)">
                                        <path d="M9 5H250L229.08 40H9V5Z" fill="#650010" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1876_12668" x="0.2" y="0.2" width="258.6" height="52.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="4.4" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.717448 0 0 0 0 0.0281001 0 0 0 0 0.137304 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1876_12668" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1876_12668" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="209" height="53" viewBox="0 0 209 53" fill="none">
                                    <g filter="url(#filter0_d_1876_12670)">
                                        <path d="M9 5H200L183.42 40H9V5Z" fill="#650010" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1876_12670" x="0.2" y="0.2" width="208.6" height="52.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="4.4" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.717448 0 0 0 0 0.0281001 0 0 0 0 0.137304 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1876_12670" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1876_12670" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='basis-1/4 flex justify-center items-center gap-2 mb-10 slide-track'>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out' onClick={() => setIndex(0)}>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out' onClick={() => setIndex(1)}>
                        <Image src={"/super-dream-offer 1.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>

                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>
                    <div className='lx:min-w-[250px] w-[100%] lx:min-h-[250px] h-[100%] min-w-[200px] min-h-[200px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                        <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                    </div>

                </div>
            </div>

            <div className='w-full max-h-[550px] bg-[#F3F4F8] block ls:hidden relative overflow-hidden'>
                <div className='absolute top-[60%] left-[10%] max-w-[60px] w-[100%] max-h-[60px] h-[100%] flex justify-between items-center'>
                    <button className='bg-white rounded-full' onClick={() => setIndex(index - 1)}><GrFormPrevious size={25} /></button>
                    <button className='bg-white rounded-full' onClick={() => setIndex(index + 1)}><MdNavigateNext size={25} /></button>
                </div>
                <div className='flex flex-col gap-4 text-center px-[30px] py-[20px]'>
                    <h1 className='text-[#650010] text-center text-[22px] font-bold'>2024 Graduating Batch Students Grab Super Dream Offers</h1>

                    <div className='flex gap-5 justify-center items-center'>
                        <div className='flex flex-col justify-center items-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="43" viewBox="0 0 64 43" fill="none">
                                <g filter="url(#filter0_d_2348_16808)">
                                    <path d="M62 1.93775H2.0002L7.20852 9.22942H62V1.93775Z" fill="#650010" />
                                </g>
                                <g filter="url(#filter1_d_2348_16808)">
                                    <path d="M62 17.3547H11.7918L16.1502 24.6464H62V17.3547Z" fill="#650010" />
                                </g>
                                <g filter="url(#filter2_d_2348_16808)">
                                    <path d="M62 32.7705H22.2085L25.6626 40.0622H62V32.7705Z" fill="#650010" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_2348_16808" x="0.16667" y="0.937753" width="63.6667" height="10.9583" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="0.833332" />
                                        <feGaussianBlur stdDeviation="0.916665" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717448 0 0 0 0 0.0281001 0 0 0 0 0.137304 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2348_16808" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2348_16808" result="shape" />
                                    </filter>
                                    <filter id="filter1_d_2348_16808" x="9.95573" y="16.3547" width="53.8776" height="10.9583" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="0.833332" />
                                        <feGaussianBlur stdDeviation="0.916665" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717448 0 0 0 0 0.0281001 0 0 0 0 0.137304 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2348_16808" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2348_16808" result="shape" />
                                    </filter>
                                    <filter id="filter2_d_2348_16808" x="20.3776" y="31.7705" width="43.4557" height="10.9583" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="0.833332" />
                                        <feGaussianBlur stdDeviation="0.916665" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717448 0 0 0 0 0.0281001 0 0 0 0 0.137304 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2348_16808" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2348_16808" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className='w-[190px] h-[190px] relative'>
                            <Image src={superdreamImages[index].imgUrl} alt='' fill />
                        </div>
                        <div className='flex flex-col justify-center items-start'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="43" viewBox="0 0 64 43" fill="none">
                                <g filter="url(#filter0_d_2348_16813)">
                                    <path d="M2 1.93764H61.9998L56.7915 9.22929H2V1.93764Z" fill="#650010" />
                                </g>
                                <g filter="url(#filter1_d_2348_16813)">
                                    <path d="M2 17.3546H52.2082L47.8498 24.6463H2V17.3546Z" fill="#650010" />
                                </g>
                                <g filter="url(#filter2_d_2348_16813)">
                                    <path d="M2 32.7707H41.7916L38.3374 40.0623H2V32.7707Z" fill="#650010" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_2348_16813" x="0.166671" y="0.937647" width="63.6667" height="10.9583" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="0.833331" />
                                        <feGaussianBlur stdDeviation="0.916664" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717448 0 0 0 0 0.0281001 0 0 0 0 0.137304 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2348_16813" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2348_16813" result="shape" />
                                    </filter>
                                    <filter id="filter1_d_2348_16813" x="0.166671" y="16.3546" width="53.8776" height="10.9583" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="0.833331" />
                                        <feGaussianBlur stdDeviation="0.916664" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717448 0 0 0 0 0.0281001 0 0 0 0 0.137304 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2348_16813" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2348_16813" result="shape" />
                                    </filter>
                                    <filter id="filter2_d_2348_16813" x="0.166671" y="31.7707" width="43.4557" height="10.9583" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="0.833331" />
                                        <feGaussianBlur stdDeviation="0.916664" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717448 0 0 0 0 0.0281001 0 0 0 0 0.137304 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2348_16813" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2348_16813" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-2 mt-10 slide-track'>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out' onClick={() => setIndex(0)}>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out' onClick={() => setIndex(1)}>
                            <Image src={"/super-dream-offer 1.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>

                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>
                        <div className='w-[100%] h-[100%] min-w-[130px] min-h-[120px] relative slide overflow-hidden group transition-all duration-300 ease-in-out'>
                            <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SuperdreamOffers2
