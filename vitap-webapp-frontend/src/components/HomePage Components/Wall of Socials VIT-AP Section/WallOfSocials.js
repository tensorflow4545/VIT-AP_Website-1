
"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import insta from "@/assets/images/socialIcons/insta.png"
import { SocialIcon } from "react-social-icons";

import twitter from "@/assets/images/socialIcons/twitter.png";
import linkin from "@/assets/images/socialIcons/linkedin.png";
import fb from "@/assets/images/socialIcons/fb.png";
import yt from "@/assets/images/socialIcons/yt.png";
import img1 from "@/assets/images/socialImages/Img1.png";
import img2 from "@/assets/images/socialImages/Img2.png";
import img3 from "@/assets/images/socialImages/Img3.png";
import logo from "@/assets/images/socialImages/vitapLogo.png";



const Socials = () => {
  const containerRef = useRef(null);
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <>
      <div className="bg-[#FDFEFF] flex h-screen">
        <div>
          <p className="mt-[10px] ml-[108px] text-[#5C0E14] text-[27px] font-Emilo font-bold">
            <i>Stay Connected</i>
          </p>
          <p className="mt-[16px] ml-[108px] w-[293px] text-[45px] text-[#1B1C1E] font-Emilo font-bold">
            The Wall of Socials from VIT-AP
          </p>
          <p className="mt-[30px] ml-[108px] font-Montserrant text-[#0F0F0F] text-[24px]">
            Follow us on our socials
          </p>
          <div className="w-[300px] h-[44px] ml-[108px] mt-[28px] flex">
            <div className="w-[44px] h-[44px] rounded bg-[#DCCED0] relative">
              {/* <SocialIcon
                url="www.instagram.com"
                bgColor="#DCCED0"
                fgColor="#000000"
              /> */}
              <Image
                src={insta}
                className="absolute w-[24px] h-[24px] ml-[10px] mt-[10px]"
              />
            </div>
            <p className="text-[#1B1C1E] font-Montserrant text-[22px] ml-[13px] mt-[8px]">
              Follow us on Instagram
            </p>
          </div>
          <div className="w-[300px] h-[44px] ml-[108px] mt-[28px] flex">
            <div className="w-[44px] h-[44px] rounded bg-[#DCCED0] relative">
              <Image
                src={twitter}
                className="absolute w-[24px] h-[24px] ml-[10px] mt-[10px]"
              />
            </div>
            <p className="text-[#1B1C1E] font-Montserrant text-[22px] ml-[13px] mt-[8px]">
              Tweet with us on X
            </p>
          </div>
          <div className="w-[350px] h-[44px] ml-[108px] mt-[28px] flex">
            <div className="w-[44px] h-[44px] rounded bg-[#DCCED0] relative">
              <Image
                src={linkin}
                className="absolute w-[24px] h-[24px] ml-[10px] mt-[10px]"
              />
            </div>
            <p className="text-[#1B1C1E] font-Montserrant text-[22px] ml-[13px] mt-[8px]">
              Grow with us on LinkedIn
            </p>
          </div>
          <div className="w-[300px] h-[44px] ml-[108px] mt-[28px] flex">
            <div className="w-[44px] h-[44px] rounded bg-[#DCCED0] relative">
              <Image
                src={fb}
                className="absolute w-[24px] h-[24px] ml-[10px] mt-[10px]"
              />
            </div>
            <p className="text-[#1B1C1E] font-Montserrant text-[22px] ml-[13px] mt-[8px]">
              Like us on Facebook
            </p>
          </div>
          <div className="w-[300px] h-[44px] ml-[108px] mt-[28px] flex">
            <div className="w-[44px] h-[44px] rounded bg-[#DCCED0] relative">
              <Image
                src={yt}
                className="absolute w-[24px] h-[24px] ml-[10px] mt-[10px]"
              />
            </div>
            <p className="text-[#1B1C1E] font-Montserrant text-[22px] ml-[13px] mt-[8px]">
              Watch us on Youtube
            </p>
          </div>
        </div>
        <div className="ml-[56px] overflow-hidden">
          <div
            ref={containerRef}
            className={`relative ${
              isHovered ? "animate-scroll" : ""
            } infinite-scroll-content`}
          >
            <div className="card1 mt-[25px] relative inline-block">
              <Image src={img1} width={250.04} height={297} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                <Image src={logo} className="absolute ml-[11px] mt-[257px]" />
              </div>
            </div>
            <div className="card2 mt-[25px] relative inline-block">
              <Image src={img2} width={250.04} height={297} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                <Image src={logo} className="absolute ml-[11px] mt-[257px]" />
              </div>
            </div>
            <div className="card3 mt-[25px] relative inline-block">
              <Image src={img3} width={250.04} height={297} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                <Image src={logo} className="absolute ml-[11px] mt-[257px]" />
              </div>
            </div>
            <div className="card4 mt-[25px] relative inline-block">
              <Image src={img1} width={250.04} height={297} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                <Image src={logo} className="absolute ml-[11px] mt-[257px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[64.96px] overflow-hidden">
          <div
            ref={containerRef}
            className="infinite-scroll-content ${isHovered ? 'animate-scroll' : ''} relative"
          >
            <div className="card1 mt-[25px] relative inline-block">
              <Image src={img1} width={250.04} height={297} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                <Image src={logo} className="absolute ml-[11px] mt-[257px]" />
              </div>
            </div>
            <div className="card2 mt-[25px] relative inline-block">
              <Image src={img2} width={250.04} height={297} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                <Image src={logo} className="absolute ml-[11px] mt-[257px]" />
              </div>
            </div>
            <div className="card3 mt-[25px] relative inline-block">
              <Image src={img3} width={250.04} height={297} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                <Image src={logo} className="absolute ml-[11px] mt-[257px]" />
              </div>
            </div>
            <div className="card4 mt-[25px] relative inline-block">
              <Image src={img1} width={250.04} height={297} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                <Image src={logo} className="absolute ml-[11px] mt-[257px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[64.96px] overflow-hidden">
          <div
            ref={containerRef}
            className="infinite-scroll-content ${isHovered ? 'animate-scroll' : ''} relative"
          >
            <div className="card1 mt-[25px] relative inline-block group">
              <Image src={img1} width={250.04} height={297} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:opacity-70">
                <Image src={logo} className="absolute ml-[11px] mt-[257px]" />
                <Image
                  src={insta}
                  width={25}
                  height={25}
                  className="opacity-0 justify-center items-center absolute transform mt-[84px] ml-[112px] duration-300 group-hover:opacity-100"
                />
                <p className="text-[#FFFFFF] text-center opacity-0 absolute transform mt-[125px] ml-[7px] mr-[7px] text-[15px] transition-opacity duration-300 group-hover:opacity-100">
                  It was a pleasure to have our students, from all over india
                  and working towards a common goal
                </p>
                <p className="text-[#FFFFFF] underline text-center opacity-0 absolute transform mt-[188px] ml-[67px] mr-[7px] text-[16px] transition-opacity duration-300 group-hover:opacity-100">
                  VISIT THIS POST
                </p>
              </div>
            </div>
            <div className="card2 mt-[25px] relative inline-block">
              <Image src={img2} width={250.04} height={297} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                <Image src={logo} className="absolute ml-[11px] mt-[257px]" />
              </div>
            </div>
            <div className="card3 mt-[25px] relative inline-block">
              <Image src={img3} width={250.04} height={297} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                <Image src={logo} className="absolute ml-[11px] mt-[257px]" />
              </div>
            </div>
            <div className="card4 mt-[25px] relative inline-block">
              <Image src={img1} width={250.04} height={297} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
                <Image src={logo} className="absolute ml-[11px] mt-[257px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: tramslateY(-100%);
          }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
    </>
  );
};

export default Socials;
