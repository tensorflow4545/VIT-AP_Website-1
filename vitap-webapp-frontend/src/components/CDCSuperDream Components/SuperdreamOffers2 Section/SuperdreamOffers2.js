"use client";

import Image from 'next/image'
import React, { useState } from 'react';
import "./SuperdreamOffers.css";
import { superdreamImages } from '@/constants';

const SuperdreamOffers2 = () => {

    const [index, setIndex] = useState(0);

    console.log(index);

    return (
        <div className="max-w-[1560px] w-[100%] min-h-[700px] lx:min-h-[900px] h-[100%] mx-auto flex flex-col relative overflow-hidden ">
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
                    <Image src={"/package.png"} fill alt='package' className='group-hover:scale-110'/>
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
    )
}

export default SuperdreamOffers2
