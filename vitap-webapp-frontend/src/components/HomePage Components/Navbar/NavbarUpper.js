"use client";
import { Tb360View } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import config from "@/config";
import { motion, spring } from "framer-motion";
import { useState, useEffect } from "react";
import "./NavbarUpper.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";

const navlinks = [];
// import axios from 'axios';

// const fetchNavlinks = async () => {
//   try {
//     const response = await axios.get(`${config.api}/api/navbarlinks/`, {
//       headers: {
//         Authorization: `Bearer ${process.env.API_TOKEN}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error; // Rethrow the error for handling at a higher level
//   }
// };

const NavbarUpper = () => {
  // const navlinksdata = await fetchNavlinks();
  // const navlinks = navlinksdata.data;
  // console.log(navlinks);

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than a certain number of pixels (e.g., 50)
      if (window.scrollY > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="z-auto w-full h-[40px] text-white bg-primary md:flex sm:hidden ls:flex justify-between items-center px-[37px]">
        <div className="flex  h-[20px] md:space-x-[10px] ls:space-x-[20px] text-[14px] items-center ">
          {/* {navlinks.map((item) =>{
              return(
                <>
                 <li><a href={item.attributes.link} target="#">{item.attributes.navitems}</a></li>
                </>
              )
            })}
            <li>AP</li> */}
          <motion.div
            className="flex items-center hover:cursor-pointer space-x-3"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4375 3.50001V4.06251C17.4375 4.1371 17.4079 4.20864 17.3551 4.26138C17.3024 4.31413 17.2308 4.34376 17.1562 4.34376H16.3125V4.76563C16.3125 4.99862 16.1236 5.18751 15.8906 5.18751H2.10938C1.87639 5.18751 1.6875 4.99862 1.6875 4.76563V4.34376H0.84375C0.769158 4.34376 0.697621 4.31413 0.644876 4.26138C0.592132 4.20864 0.5625 4.1371 0.5625 4.06251V3.50001C0.5625 3.44437 0.579005 3.38998 0.609926 3.34372C0.640847 3.29746 0.684794 3.26141 0.736207 3.24013L8.89246 0.146385C8.96132 0.117872 9.03868 0.117872 9.10754 0.146385L17.2638 3.24013C17.3152 3.26141 17.3592 3.29746 17.3901 3.34372C17.421 3.38998 17.4375 3.44437 17.4375 3.50001ZM16.5938 14.1875H1.40625C0.940254 14.1875 0.5625 14.5653 0.5625 15.0313V15.5938C0.5625 15.6684 0.592132 15.7399 0.644876 15.7926C0.697621 15.8454 0.769158 15.875 0.84375 15.875H17.1562C17.2308 15.875 17.3024 15.8454 17.3551 15.7926C17.4079 15.7399 17.4375 15.6684 17.4375 15.5938V15.0313C17.4375 14.5653 17.0597 14.1875 16.5938 14.1875ZM3.375 5.75001V12.5H2.10938C1.87639 12.5 1.6875 12.6889 1.6875 12.9219V13.625H16.3125V12.9219C16.3125 12.6889 16.1236 12.5 15.8906 12.5H14.625V5.75001H12.375V12.5H10.125V5.75001H7.875V12.5H5.625V5.75001H3.375Z"
                fill="#DDDDDD"
              />
            </svg>

            <h1 className="text-[16px]">CAMPUSES</h1>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.81226 4.53076C4.93457 4.6531 5.00327 4.81901 5.00327 4.992C5.00327 5.16499 4.93457 5.3309 4.81226 5.45324L1.12166 9.14385C1.06148 9.20616 0.989487 9.25586 0.909892 9.29005C0.830297 9.32424 0.74469 9.34224 0.658065 9.34299C0.57144 9.34375 0.485533 9.32724 0.405356 9.29444C0.325179 9.26163 0.252337 9.21319 0.191082 9.15194C0.129827 9.09068 0.0813846 9.01784 0.0485815 8.93766C0.0157785 8.85748 -0.000728113 8.77158 2.46325e-05 8.68495C0.000777378 8.59833 0.0187746 8.51272 0.052966 8.43313C0.0871574 8.35353 0.136858 8.28154 0.199169 8.22136L3.42853 4.992L0.199169 1.76264C0.0803294 1.6396 0.0145716 1.4748 0.016058 1.30375C0.0175445 1.13269 0.0861561 0.96906 0.207116 0.8481C0.328075 0.72714 0.491704 0.658528 0.66276 0.657042C0.833817 0.655556 0.998613 0.721313 1.12166 0.840153L4.81226 4.53076Z"
                fill="white"
              />
            </svg>

            {isOpen && (
              <motion.ol
                className="space-x-[20px] flex"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: spring }}
              >
                <li className="ml-[10px]">
                  <a href="https://vit.ac.in/" target="_blank">
                    VELLORE
                  </a>
                </li>
                <li className="ml-[10px]">
                  <a href="https://chennai.vit.ac.in/" target="_blank">
                    CHENNAI
                  </a>
                </li>
                <li className="ml-[10px]">
                  <a href="https://vitbhopal.ac.in/" target="_blank">
                    BHOPAL
                  </a>
                </li>
                <li className="ml-[10px]">
                  <a href="https://vitbangalore.in/" target="_blank">
                    BANGLORE
                  </a>
                </li>
              </motion.ol>
            )}
          </motion.div>
        </div>
        {/* <div className=" h-[20px] space-x-[31px] text-[14px]">

          </div> */}

        <ul className="flex font-Montserrant h-[20px] md:space-x-[31px] ls:space-x-[20px]  text-[16px] ">
          <li>
            <a>Alumini</a>
          </li>
          <li>
            <a>VIT-AP Advantages</a>
          </li>

          <li>
            <a>
              <FiSearch size={20} />
            </a>
          </li>
          <li>
            <a>
              <Tb360View size={25} />
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`w-full h-[50px] text-white ls:hidden sm:flex items-center justify-between px-8 sticky top-0 z-30 ${scrolled ? "bg-white" : "bg-primary"
          }`}
      >
        <div className="w-[95px] h-[32px]">
          <img
            src={
              scrolled
                ? "../../../assets/images/logos/vitaplogored.png"
                : "../../../assets/images/logos/vitaplogo.png"
            }
            alt="Logo"
            className={`logo ${scrolled ? "active" : ""}`}
          />
        </div>
        <div>
          <RxHamburgerMenu size={30} className="" color={scrolled ? "black" : ""} />
        </div>
      </div>
    </>
  );
};

export default NavbarUpper;
