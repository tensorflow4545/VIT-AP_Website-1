import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import insta from "../../../assets/images/socialIcons/insta.png";
import twitter from "../../../assets/images/socialIcons/twitter.png";
import linkin from "../../../assets/images/socialIcons/linkedin.png";
import fb from "../../../assets/images/socialIcons/fb.png";
import yt from "../../../assets/images/socialIcons/yt.png";
import img1 from "../../../assets/images/socialImages/Img 1.png";
import img2 from "../../../assets/images/socialImages/Img 2.png";
import img3 from "../../../assets/images/socialImages/Img 3.png";
import logo from "../../../assets/images/socialImages/vitapLogo.png";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";



const Socials = () => {
  return (
    <>
      <div className="bg-[#FDFEFF] flex h-screen">
        <div>
          <p className="mt-[40px] ml-[108px] text-[#5C0E14] text-[22px] font-Emilo font-bold">
            <i>Stay Connected</i>
          </p>
          <p className="mt-[16px] ml-[108px] w-[293px] text-[40px] text-[#1B1C1E] font-Emilo font-bold">
            The Wall of Socials from VIT-AP
          </p>
          <p className="mt-[30px] ml-[108px] font-Montserrant text-[#0F0F0F] text-[21px]">
            Follow us on our socials
          </p>
          <div className="w-[300px] h-[44px] ml-[108px] mt-[22px] flex group">
            <div className="w-[40px] h-[40px] rounded bg-[#DCCED0] relative group-hover:bg-primary group-hover:bg-opacity-50">
              <Link href="https://www.instagram.com/vitap.university/?hl=en" target="_blank">
              <Image
                src={insta}
                className="absolute w-[22px] h-[22px] ml-[9px] mt-[9px]"
              />
              </Link>

            </div>
            <p className="text-[#1B1C1E] font-Montserrant text-[20px] ml-[13px] mt-[4px] group-hover:font-bold duration-300 group-hover:font-bold">
              <a href="https://www.instagram.com/vitap.university/?hl=en" target="_blank">Follow us on Instagram</a>
            </p>
          </div>
          <div className="w-[300px] h-[44px] ml-[108px] mt-[22px] flex group">
            <Link href="https://twitter.com/VITAPuniversity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
            <div className="w-[40px] h-[40px] rounded bg-[#DCCED0] relative group-hover:bg-primary group-hover:bg-opacity-50">
              <FaXTwitter className="absolute w-[22px] h-[22px] ml-[9px] mt-[9px]"/>
            </div>
            </Link>

            <p className="text-[#1B1C1E] font-Montserrant text-[20px] ml-[13px] mt-[4px] group-hover:font-bold duration-300 group-hover:font-bold">
            <a href="https://twitter.com/VITAPuniversity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">Tweet with us on X</a>
            </p>
          </div>
          <div className="w-[350px] h-[44px] ml-[108px] mt-[22px] flex group">
            <div className="w-[40px] h-[40px] rounded bg-[#DCCED0] relative group-hover:bg-primary group-hover:bg-opacity-50">
              <Link href="https://www.linkedin.com/school/vitap-university/?originalSubdomain=in" target="_blank">
              <Image
                src={linkin}
                className="absolute w-[22px] h-[22px] ml-[9px] mt-[9px]"
              />
              </Link>

            </div>
            <p className="text-[#1B1C1E] font-Montserrant text-[20px] ml-[13px] mt-[4px] group-hover:font-bold duration-300 group-hover:font-bold">
            <a href="https://www.linkedin.com/school/vitap-university/?originalSubdomain=in" target="_blank">Grow with us on LinkedIn</a>
            </p>
          </div>
          <div className="w-[300px] h-[44px] ml-[108px] mt-[22px] flex group">
            <div className="w-[40px] h-[40px] rounded bg-[#DCCED0] relative group-hover:bg-primary group-hover:bg-opacity-50">
              <Link href="https://www.facebook.com/vitap.university/" target="_blank">
              <Image
                src={fb}
                className="absolute w-[22px] h-[22px] ml-[9px] mt-[9px]"
              />
              </Link>

            </div>
            <p className="text-[#1B1C1E] font-Montserrant text-[20px] ml-[13px] mt-[4px] group-hover:font-bold duration-300 group-hover:font-bold">
              <a href="https://www.facebook.com/vitap.university/" target="_blank">Like us on Facebook</a>
            </p>
          </div>
          <div className="w-[300px] h-[44px] ml-[108px] mt-[22px] flex group">
            <div className="w-[40px] h-[40px] rounded bg-[#DCCED0] relative group-hover:bg-primary group-hover:bg-opacity-50">
        <Link href="https://www.youtube.com/c/VITAP" target="_blank">
        <Image
                src={yt}
                className="absolute w-[22px] h-[22px] ml-[9px] mt-[9px]"
              />
        </Link>
            </div>
            <p className="text-[#1B1C1E] font-Montserrant text-[20px] ml-[13px] mt-[4px] group-hover:font-bold duration-300 group-hover:font-bold">
              <a href="https://www.youtube.com/c/VITAP" target="_blank">Watch us on Youtube </a>
            </p>
          </div>
        </div>
        <div className="ml-[56px] overflow-hidden">
          <div className="relative">
            <div className="card1 relative inline-block group">
              <Image src={img1} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 hover:bg-black group-hover:bg-opacity-80">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[30px] duration-300 group-hover:opacity-100"
                />
                <p className="text-[#FFFFFF] text-center opacity-0 absolute transform ml-[7px] mr-[7px] text-[14px] transition-opacity duration-300 group-hover:opacity-100">
                  It was a pleasure to have our students, from all over india
                  and working towards a common goal
                </p>
                <p className="text-[#FFFFFF] underline text-center opacity-0 absolute transform mt-[65px] ml-[25%] mr-[7px] text-[16px] transition-opacity duration-300 group-hover:opacity-100">
                  VISIT THIS POST
                </p>
              </div>
            </div>
            <div className="card2 relative inline-block group">
              <Image src={img2} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 hover:bg-black group-hover:bg-opacity-80">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[30px] duration-300 group-hover:opacity-100"
                />
                <p className="text-[#FFFFFF] text-center opacity-0 absolute transform ml-[7px] mr-[7px] text-[14px] transition-opacity duration-300 group-hover:opacity-100">
                  It was a pleasure to have our students, from all over india
                  and working towards a common goal
                </p>
                <p className="text-[#FFFFFF] underline text-center opacity-0 absolute transform mt-[65px] ml-[25%] mr-[7px] text-[16px] transition-opacity duration-300 group-hover:opacity-100">
                  VISIT THIS POST
                </p>
              </div>
            </div>
            <div className="card3 relative inline-block group">
              <Image src={img3} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 hover:bg-black group-hover:bg-opacity-80">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[30px] duration-300 group-hover:opacity-100"
                />
                <p className="text-[#FFFFFF] text-center opacity-0 absolute transform ml-[7px] mr-[7px] text-[14px] transition-opacity duration-300 group-hover:opacity-100">
                  It was a pleasure to have our students, from all over india
                  and working towards a common goal
                </p>
                <p className="text-[#FFFFFF] underline text-center opacity-0 absolute transform mt-[65px] ml-[25%] mr-[7px] text-[16px] transition-opacity duration-300 group-hover:opacity-100">
                  VISIT THIS POST
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[64.96px] overflow-hidden">
          <div className="relative">
            <div className="card1 mt-[55px] relative inline-block group">
              <Image src={img1} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 hover:bg-black group-hover:bg-opacity-80">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[30px] duration-300 group-hover:opacity-100"
                />
                <p className="text-[#FFFFFF] text-center opacity-0 absolute transform ml-[7px] mr-[7px] text-[14px] transition-opacity duration-300 group-hover:opacity-100">
                  It was a pleasure to have our students, from all over india
                  and working towards a common goal
                </p>
                <p className="text-[#FFFFFF] underline text-center opacity-0 absolute transform mt-[65px] ml-[25%] mr-[7px] text-[16px] transition-opacity duration-300 group-hover:opacity-100">
                  VISIT THIS POST
                </p>
              </div>
            </div>
            <div className="card2 relative inline-block group">
              <Image src={img2} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 hover:bg-black group-hover:bg-opacity-80">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[30px] duration-300 group-hover:opacity-100"
                />
                <p className="text-[#FFFFFF] text-center opacity-0 absolute transform ml-[7px] mr-[7px] text-[14px] transition-opacity duration-300 group-hover:opacity-100">
                  It was a pleasure to have our students, from all over india
                  and working towards a common goal
                </p>
                <p className="text-[#FFFFFF] underline text-center opacity-0 absolute transform mt-[65px] ml-[25%] mr-[7px] text-[16px] transition-opacity duration-300 group-hover:opacity-100">
                  VISIT THIS POST
                </p>
              </div>
            </div>
            <div className="card3 relative inline-block group">
              <Image src={img3} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 hover:bg-black group-hover:bg-opacity-80">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[30px] duration-300 group-hover:opacity-100"
                />
                <p className="text-[#FFFFFF] text-center opacity-0 absolute transform ml-[7px] mr-[7px] text-[14px] transition-opacity duration-300 group-hover:opacity-100">
                  It was a pleasure to have our students, from all over india
                  and working towards a common goal
                </p>
                <p className="text-[#FFFFFF] underline text-center opacity-0 absolute transform mt-[65px] ml-[25%] mr-[7px] text-[16px] transition-opacity duration-300 group-hover:opacity-100">
                  VISIT THIS POST
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[64.96px] overflow-hidden">
          <div className="relative">
            <div className="card1 relative inline-block group">
              <Image src={img1} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900  hover:bg-black group-hover:bg-opacity-80">
                <Image src={logo} className="absolute ml-[5px] mt-[200px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[30px] duration-300 group-hover:opacity-100"
                />
                <p className="text-[#FFFFFF] text-center opacity-0 absolute transform ml-[7px] mr-[7px] text-[14px] transition-opacity duration-300 group-hover:opacity-100">
                  It was a pleasure to have our students, from all over india
                  and working towards a common goal
                </p>
                <p className="text-[#FFFFFF] underline text-center opacity-0 absolute transform mt-[65px] ml-[25%] mr-[7px] text-[16px] transition-opacity duration-300 group-hover:opacity-100">
                  VISIT THIS POST
                </p>
              </div>
            </div>
            <div className="card2 relative inline-block group">
              <Image src={img2} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900  hover:bg-black group-hover:bg-opacity-80">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[30px] duration-300 group-hover:opacity-100"
                />
                <p className="text-[#FFFFFF] text-center opacity-0 absolute transform ml-[7px] mr-[7px] text-[14px] transition-opacity duration-300 group-hover:opacity-100">
                  It was a pleasure to have our students, from all over india
                  and working towards a common goal
                </p>
                <p className="text-[#FFFFFF] underline text-center opacity-0 absolute transform mt-[65px] ml-[25%] mr-[7px] text-[16px] transition-opacity duration-300 group-hover:opacity-100">
                  VISIT THIS POST
                </p>
              </div>
            </div>
            <div className="card3 relative inline-block group ">
              <Image src={img3} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 hover:bg-black group-hover:bg-opacity-80">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[30px] duration-300 group-hover:opacity-100"
                />
                <p className="text-[#FFFFFF] text-center opacity-0 absolute transform ml-[7px] mr-[7px] text-[14px] transition-opacity duration-300 group-hover:opacity-100 ">
                  It was a pleasure to have our students, from all over india
                  and working towards a common goal
                </p>
                <p className="text-[#FFFFFF] underline text-center opacity-0 absolute transform mt-[65px] ml-[25%] mr-[7px] text-[16px] transition-opacity duration-300 group-hover:opacity-100">
                  VISIT THIS POST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socials;
