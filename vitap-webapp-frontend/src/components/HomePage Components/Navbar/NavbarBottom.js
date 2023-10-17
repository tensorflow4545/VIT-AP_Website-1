"use client";
import Image from "next/image";
import logo from "../../../assets/images/logos/vitaplogo.png";
import image0 from "../../../assets/images/Homepage Images/navbar-images/0.png";
import image1 from "../../../assets/images/Homepage Images/navbar-images/1.png";
import image2 from "../../../assets/images/Homepage Images/navbar-images/2.png";
import image3 from "../../../assets/images/Homepage Images/navbar-images/3.png";
import image4 from "../../../assets/images/Homepage Images/navbar-images/4.png";
import image5 from "../../../assets/images/Homepage Images/navbar-images/5.png";
import "./navbar.css";
import { useState, useEffect } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
const NavbarBottom = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= 1020) {
          setNavbar(true);
          setLogo(true);
        } else {
          setNavbar(false);
          setLogo(false);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackground);
    }

    // Cleanup the event listener when the component is unmounted
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeBackground);
      }
    };
  }, []);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const handleDropdownEnter = (navItem) => {
    setActiveNavItem(navItem);
  };

  const handleDropdownLeave = () => {
    setActiveNavItem(null);
  };
  return (
    <>
      <div className="sticky top-0 z-30 sm:hidden md:block ">
        {/* {"bg-opacity-50 "} */}
        {/* Increased z-index to 30 */}
        <div
          className={`bg-gray-900 ${
            navbar ? "navbar active" : "navbar"
          }  w-full h-[94px] shadow-xl absolute md:flex font-Montserrant font-medium text-white text-[16px]`}
        >
          <ul className="flex flex-row  items-center pl-[33px] w-full justify-between pr-[76px]">
            <li>
              <a>
                <Image src={logo} className={logo ? "logo active" : "logo"} />
              </a>
            </li>

            <li
              className={`group hover:cursor-pointer ${
                activeNavItem === "about" ? "active-nav-item" : ""
              }`}
              onMouseEnter={() => handleDropdownEnter("about")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline">About</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]">
                  <div className="w-full h-full">
                    <ol className="flex-row font-[400] text-[24px]  pt-[82px] pl-[110px] space-y-[40px]">
                      <li className="peer/vision underline w-[200px]">Vision & Mission</li>
                      <li className="absolute left-[600px]  top-[20px] ">
                        <Image src={image0} />
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/vision:visible">
                        <Image src={image1} />
                      </li>
                      <li className="peer/leadership w-[200px]">Leadership</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/leadership:visible">
                        <Image src={image2} />
                      </li>
                      <li className="peer/Governance w-[200px]">Governance</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/Governance:visible">
                        <Image src={image3} />
                      </li>
                      <li className="peer/contactus w-[200px]">contact us</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/contactus:visible">
                        <Image src={image4} />
                      </li>
                      <li className="peer/faq w-[200px]">FAQ</li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/faq:visible">
                        <Image src={image5} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${
                activeNavItem === "admissions" ? "active-nav-item" : ""
              }`}
              onMouseEnter={() => handleDropdownEnter("admissions")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline ">Admissions</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]"></div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${
                activeNavItem === "Academics" ? "active-nav-item" : ""
              }`}
              onMouseEnter={() => handleDropdownEnter("Academics")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline ">Academics</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]"></div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${
                activeNavItem === "Career Development Center" ? "active-nav-item" : ""
              }`}
              onMouseEnter={() => handleDropdownEnter("Career Development Center")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline ">Career Development Center</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]">
                  <div className="w-full h-full">
                    <ol className="flex-row font-[400] text-[24px]  pt-[82px] pl-[110px] space-y-[40px]">
                      <li className="peer/vision w-[200px]">Vision & Mission</li>
                      <li className="absolute left-[600px]  top-[20px] ">
                        <Image src={image0} />
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/vision:visible">
                        <Image src={image1} />
                      </li>
                      <li className="peer/leadership w-[200px]">
                        <a className=" ">Leadership</a>
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/leadership:visible">
                        <Image src={image2} />
                      </li>
                      <li className="peer/Governance w-[200px]">
                        <a className="">Governance</a>
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/Governance:visible">
                        <Image src={image3} />
                      </li>
                      <li className="peer/contactus w-[200px]">
                        <a className="">Contact Us</a>
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/contactus:visible">
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

            <li
              className={`group hover:cursor-pointer ${
                activeNavItem === "Facilities" ? "active-nav-item" : ""
              }`}
              onMouseEnter={() => handleDropdownEnter("Facilities")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline ">Facilities</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]"></div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${
                activeNavItem === "Campus Life" ? "active-nav-item" : ""
              }`}
              onMouseEnter={() => handleDropdownEnter("Campus Life")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline ">Campus Life</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]"></div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${
                activeNavItem === "Research" ? "active-nav-item" : ""
              }`}
              onMouseEnter={() => handleDropdownEnter("Research")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline">Research</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="sticky top-0 z-30 ls:block md:hidden">
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
        ></div>
      </div>
    </>
  );
};

export default NavbarBottom;
