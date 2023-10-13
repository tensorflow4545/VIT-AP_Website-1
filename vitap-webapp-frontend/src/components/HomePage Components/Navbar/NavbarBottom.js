"use client" ; 
import Image from "next/image";
import logo from "../../../assets/images/logos/vitaplogo.png";
import image0 from "../../../assets/images/Homepage Images/navbar-images/0.png";
import image1 from "../../../assets/images/Homepage Images/navbar-images/1.png";
import image2 from "../../../assets/images/Homepage Images/navbar-images/2.png";
import image3 from "../../../assets/images/Homepage Images/navbar-images/3.png";
import image4 from "../../../assets/images/Homepage Images/navbar-images/4.png";
import image5 from "../../../assets/images/Homepage Images/navbar-images/5.png";
import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
const NavbarBottom = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <>
      <div className="sticky top-0 z-30 sm:hidden md:block ">
        {" "}
        {/* Increased z-index to 30 */}
        <div className="bg-gray-900 shadow-sm w-full h-[94px] bg-opacity-50 absolute md:flex font-Montserrant font-medium text-white text-[16px]">
          <ul className="flex flex-row space-x-[31px] items-center pl-[33px] w-full justify-between pr-[76px]">
            <li>
              <a>
                <Image src={logo} />
              </a>
            </li>
            <li className="group hover:cursor-pointer">
              <a>About</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]">
                  <div className="w-full h-full">
                    <ol className="flex-row font-[400] text-[24px] uppercase pt-[82px] pl-[110px] space-y-[40px]">
                      <li className="peer/vision">Vision & Mission</li>
                      <li className="absolute left-[600px]  top-[20px] ">
                        <Image src={image0} />
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/vision:visible">
                        <Image src={image0} />
                      </li>
                      <li className="peer/leadership">Leadership</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/leadership:visible">
                        <Image src={image1} />
                      </li>
                      <li className="peer/Governance">Governance</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/Governance:visible">
                        <Image src={image2} />
                      </li>
                      <li className="peer/contactus">contact us</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/contactus:visible">
                        <Image src={image3} />
                      </li>
                      <li className="peer/reach">How to reach VIT-AP</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/reach:visible">
                        <Image src={image4} />
                      </li>
                      <li className="peer/faq">FAQ</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/faq:visible">
                        <Image src={image5} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
            <li className="group hover:cursor-pointer">
              <a>Admissions</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]"></div>
              </div>
            </li>
            <li className="group hover:cursor-pointer">
              <a>Academics</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]"></div>
              </div>
            </li>
            <li className="group hover:cursor-pointer">
              <a>Career Development Center</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]">
                  <div className="w-full h-full">
                    <ol className="flex-row font-[400] text-[24px] uppercase pt-[82px] pl-[110px] space-y-[40px]">
                      <li className="peer/vision">Vision & Mission</li>
                      <li className="absolute left-[600px]  top-[20px] ">
                        <Image src={image0} />
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/vision:visible">
                        <Image src={image0} />
                      </li>
                      <li className="peer/leadership">Leadership</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/leadership:visible">
                        <Image src={image1} />
                      </li>
                      <li className="peer/Governance">Governance</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/Governance:visible">
                        <Image src={image2} />
                      </li>
                      <li className="peer/contactus">contact us</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/contactus:visible">
                        <Image src={image3} />
                      </li>
                      <li className="peer/reach">How to reach VIT-AP</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/reach:visible">
                        <Image src={image4} />
                      </li>
                      <li className="peer/faq">FAQ</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/faq:visible">
                        <Image src={image5} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
            <li className="group hover:cursor-pointer">
              <a>Facilities</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]"></div>
              </div>
            </li>
            <li className="group hover:cursor-pointer">
              <a>Campus Life</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]"></div>
              </div>
            </li>
            <li className="group hover:cursor-pointer">
              <a>Research</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="sticky top-0 z-30 ls:block md:hidden">
        {" "}
        {/* Increased z-index to 30 */}
        <div className="bg-gray-900 shadow-sm w-full h-[85px] bg-opacity-50 absolute sm:flex  text-white text-[16px]">
          <ul className="flex flex-row space-x-[31px] items-center pl-[33px] w-full justify-between pr-[76px]">
            <li>
              <a>
                <Image src={logo} />
              </a>
            </li>
            <li
              className="hover:cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <RxHamburgerMenu size={30} />
            </li>
            {/* <li><a>About</a></li>
            <li><a>Admissions</a></li>
            <li><a>Academics</a></li>
            <li><a>Career Development Center</a></li>
            <li><a>Facilities</a></li>
            <li><a>Campus Life</a></li>
            <li><a>Research</a></li> */}
          </ul>
        </div>
      </div>

      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
        >
          

        </div>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
};

export default NavbarBottom;
