"use client";
import Image from "next/image";
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

  const [Programmes, setProgrammes] = useState([]);
  const [Programme, setProgramme] = useState(null);
  const [underline, setunderline] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-30 sm:hidden md:block ">
        {/* {"bg-opacity-50 "} */}
        {/* Increased z-index to 30 */}
        <div
          className={`bg-gray-900 ${navbar ? "navbar active" : "navbar"
            }  w-full h-[74px] shadow-xl absolute md:flex font-Montserrant font-medium text-white text-[20px]`}
        >
          <ul className="flex flex-row  items-center pl-[33px] w-full justify-between pr-[76px]">
            <li className="mr-[100px]">
              <a>
                <Image alt="A descriptive text here" src={logo} className={logo ? "logo active" : "logo"} />
              </a>
            </li>

            <li
              className={`group hover:cursor-pointer ${activeNavItem === "about" ? "active-nav-item" : ""
                }`}
              onMouseEnter={() => handleDropdownEnter("about")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline">About</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]">
                  <div className="w-full h-full">
                    <span className="w-[6px] h-[450px] bg-primary opacity-20 rounded-lg absolute left-[430px] top-[45px]"></span>

                    <ol className="flex-row font-[400] text-[20px]  pt-[82px] pl-[110px] space-y-[29px]">
                      <li className=" custom-list-item   w-[fit-content]">
                        <h1>Vision & Mission</h1>
                      </li>

                      <li className="absolute left-[600px]  top-[20px]  ">
                        <Image alt="A descriptive text here" src={image0} />
                      </li>

                      <li className="peer/leadership custom-list-item w-[fit-content]">
                        <h1 className="w-full h-full">Leadership</h1>
                      </li>

                      <li className="peer/Governance custom-list-item w-[fit-content]">
                        Governance
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/leadership:visible">
                        <Image alt="A descriptive text here" src={image2} />
                      </li>

                      <li className="peer/contactus custom-list-item w-[fit-content]">
                        FAQ
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/Governance:visible">
                        <Image alt="A descriptive text here" src={image3} />
                      </li>

                      <li className="peer/faq custom-list-item w-[fit-content]">
                        Contact us
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/contactus:visible">
                        <Image alt="A descriptive text here" src={image4} />
                      </li>
                      <li className="absolute left-[600px] invisible top-[20px] peer-hover/faq:visible">
                        <Image alt="A descriptive text here" src={image5} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${activeNavItem === "admissions" ? "active-nav-item" : ""
                }`}
              onMouseEnter={() => handleDropdownEnter("admissions")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline ">Admissions</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px] flex-row flex">

                  <ol className="flex-row font-[400] text-[20px]  pt-[82px] pl-[110px] space-y-[29px]">
                    <li
                      className={`peer/prog hover:cursor-pointer  w-[fit-content] ${underline}`}
                      onMouseEnter={() => {
                        setProgrammes([
                          "Undergraduate",
                          "Dual Degree",
                          "Integrated",
                          "Postgraduate",
                          "Ph. D",
                        ]);
                        setunderline(
                          "custom-underline decoration-[#650010] underline-offset-8 decoration-[6px] "
                        );
                      }}
                    >
                      Programmes
                    </li>
                    <li>Application Process</li>

                    <li>Fees & Scholarship</li>
                    <li>STARS</li>
                    <li>Affidivit</li>
                    <li>Videos</li>
                    <li>Enquiry</li>
                  </ol>
                  <span className="w-[6px] h-[450px] bg-primary opacity-20 rounded-lg absolute left-[20%] top-[45px]"></span>
                  <ol
                    className={` ${""}   flex-row font-[400] text-[20px]  pt-[82px] pl-[110px] space-y-[29px] absolute left-[350px] `}
                  >
                    {Programmes.map((Program, index) => {
                      return <li key={index} className="custom-list-item w-[fit-content]" onMouseEnter={() => { setProgramme(Program) }}> {Program} </li>;
                    })}
                  </ol>
                  <span className="w-[6px] h-[450px] bg-primary opacity-20 rounded-lg absolute left-[40%] top-[45px]"></span>
                  {Programme === "Undergraduate" ? (
                    <div className="flex">
                      <ol className="flex-row font-[400] text-[20px] pt-[82px] pl-[650px] space-y-[29px]">
                        <lh className="font-bold underline decoration-[#000000] underline-offset-8 decoration-[6px] text-[24px]">Engineering</lh>
                        <li>B.Tech CSE</li>
                        <li>B.Tech CSBS</li>
                        <li>B.Tech ECE</li>
                        <li>B.Tech Mechanical</li>
                      </ol>
                      <ol className="flex-row font-[400] text-[20px] pt-[82px] pl-[110px] space-y-[29px]">
                        <lh className="font-bold underline decoration-[#000000] underline-offset-8 decoration-[6px] text-[24px]">Management</lh>
                        <li>BBA</li>
                        <li>B.Com</li>
                      </ol>
                    </div>
                  ) : Programme === "Dual Degree" ? (
                    <ol className="flex-row font-[400] text-[20px] pt-[82px] pl-[650px] space-y-[29px]">
                      <li>BA - MA</li>
                      <li>B.Sc - M.Sc</li>
                    </ol>) : Programme === "Integrated" ? (
                      <ol className="flex-row font-[400] text-[20px] pt-[82px] pl-[650px] space-y-[29px]">
                        <li>M. Tech CSE in Collaboration with Virtusa</li>
                        <li>M. Tech Software Engineering</li>
                        <li>BA. LL.B (Hons.)</li>
                        <li>BBA. LL.B (Hons.)</li>
                      </ol>
                    ) : Programme === "Postgraduate" ? (
                      <ol className="flex-row font-[400] text-[20px] pt-[82px] pl-[650px] space-y-[29px]">
                        <li>M. Tech VLSI</li>
                        <li>M.Sc. Data Science</li>
                        <li>M. Sc. Physics</li>
                        <li>M. Sc. Chemistry</li>
                      </ol>
                    ) : Programme === "Ph. D" ? (
                      <ol className="flex-row font-[400] text-[20px] pt-[82px] pl-[650px] space-y-[29px]">
                        <li>School of Computer Science and Engineering</li>
                        <li>School of Electronics Engineering</li>
                        <li>School of Mechanical Engineering</li>
                        <li>School of Advanced Sciences</li>
                        <li>School of Social Science and Humanities</li>
                        <li>School of Law</li>
                        <li>School of Business</li>
                      </ol>
                    ) : null}
                </div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${activeNavItem === "Academics" ? "active-nav-item" : ""
                }`}
              onMouseEnter={() => handleDropdownEnter("Academics")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline ">Academics</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]">
                  <div className="w-full h-full flex flex-row ">
                    <ol className="flex-row font-[400] text-[20px]  pt-[61px] pl-[83px] space-y-[29px]">
                      <li className="font-bold underline decoration-black underline-offset-[2px]">
                        Schools
                      </li>
                      <li>School of Computer Science and Engineering (SCOPE)</li>
                      <li>School of Electronics Engineering (SENSE)</li>
                      <li>School of Mechanical Engineering (SMEC)</li>
                      <li>School of Advanced Sciences (SAS)</li>
                      <li>School of Social Sciences and Humanities (VISH)</li>
                      <li>School of Law (VSL)</li>
                      <li>School of Business (VSB)</li>
                    </ol>
                    <span className="w-[6px] h-[500px] bg-primary opacity-20 rounded-lg absolute right-[68%] top-[25px]"></span>
                    <ol className="flex-row font-[400] text-[20px]  pt-[61px] pl-[200px] space-y-[19px]">
                      <li>Academic Regulations</li>
                      <li>Academic Council</li> <li>Faculty</li> <li>Academic Calender</li>
                      <li>International Collabration</li>
                      <li>Engineering Clinic </li>
                      <li>Value Added Courses</li>
                      <li>Centre of Examination</li>
                      <li>Fully Flexible Credit System (FFCS)</li>
                      <li>Design your own degree (DYOD) </li>
                    </ol>

                  </div>
                </div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${activeNavItem === "Career Development Center"
                ? "active-nav-item"
                : ""
                }`}
              onMouseEnter={() =>
                handleDropdownEnter("Career Development Center")
              }
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline ">Career Development Center</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]">
                  <div className="w-full h-full">
                    <span className="w-[6px] h-[450px] bg-primary opacity-20 rounded-lg absolute left-[430px] top-[45px]"></span>

                    <ol className="flex-row font-[400] text-[20px]  pt-[82px] pl-[110px] space-y-[29px]">
                      <li className=" custom-list-item   w-[100px]">
                        Overview
                      </li>

                      <li className="absolute left-[600px]  top-[40px]  ">
                        <Image alt="A descriptive text here" src={image0} />
                      </li>

                      <li className="peer/leadership custom-list-item w-[fit-content]">
                        Super Dream Offers
                      </li>
                      <li className="absolute left-[600px] invisible top-[40px] peer-hover/leadership:visible">
                        <Image alt="A descriptive text here" src={image2} />
                      </li>

                      <li className="peer/Governance custom-list-item w-[fit-content]">
                        Dream offers
                      </li>
                      <li className="absolute left-[600px] invisible top-[40px] peer-hover/Governance:visible">
                        <Image alt="A descriptive text here" src={image3} />
                      </li>

                      <li className="peer/contactus custom-list-item w-[fit-content]">
                        Internships
                      </li>
                      <li className="absolute left-[600px] invisible top-[40px] peer-hover/contactus:visible">
                        <Image alt="A descriptive text here" src={image4} />
                      </li>

                      <li className="peer/faq custom-list-item w-[fit-content]">
                        Industrial Collaboration
                      </li>
                      <li className="absolute left-[600px] invisible top-[40px] peer-hover/faq:visible">
                        <Image alt="A descriptive text here" src={image5} />
                      </li>

                      <li className="peer/cdc custom-list-item w-[fit-content]">
                        CDC Office
                      </li>
                      <li className="absolute left-[600px] invisible top-[40px] peer-hover/cdc:visible">
                        <Image alt="A descriptive text here" src={image5} />
                      </li>

                      <li className="peer/Statistics custom-list-item w-[fit-content]">
                        Statistics
                      </li>
                      <li className="absolute left-[600px] invisible top-[40px] peer-hover/Statistics:visible">
                        <Image alt="A descriptive text here" src={image5} />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${activeNavItem === "Campus Life" ? "active-nav-item" : ""
                }`}
              onMouseEnter={() => handleDropdownEnter("Campus Life")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline ">Campus Life</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]">
                  <div className="w-full h-full flex flex-row ">
                    <ol className="flex-row font-[400] text-[20px]  pt-[32px] pl-[110px] space-y-[29px]">
                      <li className="font-bold underline decoration-black underline-offset-[2px]">
                        Life @ VIT-AP
                      </li>
                      <li>Clubs & Chapters</li>
                      <li>Celebrations</li> <li>Cafeteria</li> <li>Sports</li>
                      <li>Gallery</li>
                      <li>360 Campus Tour</li>
                    </ol>
                    <span className="w-[6px] h-[500px] bg-primary opacity-20 rounded-lg absolute left-[400px] top-[25px]"></span>
                    <ol className="flex-row font-[400] text-[20px]  pt-[32px] pl-[200px] space-y-[15px]">
                      <li className="font-bold underline decoration-black underline-offset-[2px]">
                        Facilities
                      </li>
                      <li>Infrastructure</li>
                      <li>Hostels</li> <li>Libraries</li> <li>Labs</li>
                      <li>Labs</li>
                      <li>Bank and ATM</li>
                      <li>Transport</li>
                      <li>Guest House</li>
                      <li>Facilities to employees</li>
                    </ol>
                    <span className="w-[6px] h-[500px] bg-primary opacity-20 rounded-lg absolute right-[65%] top-[25px]"></span>
                    <ol className="flex-row font-[400] text-[20px]  pt-[32px] pl-[160px] space-y-[29px]">
                      <li className="font-bold underline decoration-black underline-offset-[2px]">
                        Committees
                      </li>
                      <li>V-CHANCE</li>
                      <li>Anti - Ragging Commitee</li>
                      <li>Internal Complaints committee</li>
                      <li>University disciplinary committee</li>
                      <li>Grievances Redressal Commitee</li>

                    </ol>
                  </div>
                </div>
              </div>
            </li>

            <li
              className={`group hover:cursor-pointer ${activeNavItem === "Research" ? "active-nav-item" : ""
                }`}
              onMouseEnter={() => handleDropdownEnter("Research")}
              onMouseLeave={handleDropdownLeave}
            >
              <a className="custom-underline">Research</a>
              <div className="hidden group-hover:block hover:block  w-full h-[566px] absolute top-[55px] box-content  right-0 z-30">
                <div className="bg-white w-full text-black font-Montserrant h-full relative top-[20px]">
                <ol className="flex-row font-[400] text-[20px]  pt-[82px] pl-[110px] space-y-[29px]">
                  <li>Academic Reasearch</li>
                  <li>URE Project</li>
                  <li className="peer/coe custom-list-item w-[fit-content]">Center of Excellence</li>
                  <li className="absolute left-[500px] invisible top-[20px] peer-hover/coe:visible">
                    <ol className="flex-row font-[400] text-[20px] pt-[20px] space-y-[29px]">
                      <li>AI & Robotics</li>
                      <li>Cyber-Security</li>
                      <li>Internet of Things</li>
                      <li>Blockchain</li>
                    </ol>
                  </li>
                  <li className="peer/iiec custom-list-item w-[fit-content]">IIEC</li>
                  <li className="absolute left-[500px] invisible top-[20px] peer-hover/iiec:visible">
                    <ol className="flex-row font-[400] text-[20px] pt-[20px] space-y-[29px]">
                      <li>V-Launch</li>
                      <li>RGEMS</li>
                      <li>SpoRIC</li>
                      <li>Patents</li>
                      <li>Incubatees</li>
                      <li>E- magazine</li>
                    </ol>
                  </li>
                  <li>VITBIF</li>
                </ol>
                <span className="w-[6px] h-[450px] bg-primary opacity-20 rounded-lg absolute left-[20%] top-[45px]"></span>
                </div>
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
                <Image alt="A descriptive text here" src={logo} />
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
