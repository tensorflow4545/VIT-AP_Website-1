import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import insta from "../../../assets/images/socialIcons/insta.png";
import twitter from "../../../assets/images/socialIcons/twitter.png";
import linkin from "../../../assets/images/socialIcons/linkedin.png";
import fb from "../../../assets/images/socialIcons/fb.png";
import yt from "../../../assets/images/socialIcons/yt.png";
import img1 from "../../../assets/images/socialImages/image 1.jpg";
import img2 from "../../../assets/images/socialImages/image 2.jpg";
import img3 from "../../../assets/images/socialImages/image 3.jpg";
import img4 from "../../../assets/images/socialImages/image 4.jpg";
import img5 from "../../../assets/images/socialImages/image 5.jpg";
import img6 from "../../../assets/images/socialImages/image 6.jpg";
import img7 from "../../../assets/images/socialImages/image 7.jpg";
import img8 from "../../../assets/images/socialImages/image 8.jpg";
import img9 from "../../../assets/images/socialImages/image 9.jpg";
import logo from "../../../assets/images/socialImages/vitapLogo.png";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import styles from "../../../styles/Socials.module.css";

const Socials = () => {
  return (
    <>
      <div className={`${styles.container} bg-[#FDFEFF] flex h-screen`}>
        <div>
          <p
            className={`${styles.stay} mt-[40px] ml-[108px] text-[#5C0E14] text-[22px] font-Emilo font-bold`}
          >
            <i>Stay Connected</i>
          </p>
          <p
            className={`${styles.sentence} mt-[16px] ml-[108px] w-[293px] text-[40px] text-[#1B1C1E] font-Emilo font-bold`}
          >
            The Wall of Socials from VIT-AP
          </p>
          <p
            className={`${styles.followus} mt-[30px] ml-[108px] font-Montserrant text-[#0F0F0F] text-[21px]`}
          >
            Follow us on our socials
          </p>
          <div className={`${styles.icons}`}>
            <p className={`${styles.follow} opacity-0`}>Follow Us On:</p>
            <div
              className={`${styles.icons2} w-[300px] h-[44px] ml-[108px] mt-[22px] flex transition-transform transform hover:scale-105`}
            >
              <div className="w-[40px] h-[40px] rounded bg-[#DCCED0] relative">
                <Link href="https://www.instagram.com/vitap.university/?hl=en">
                  <Image
                    src={insta}
                    className="absolute w-[22px] h-[22px] ml-[9px] mt-[9px]"
                  />
                </Link>
              </div>
              <p
                className={`${styles.instaText} text-[#1B1C1E] font-Montserrant text-[20px] ml-[13px] mt-[4px]`}
              >
                Follow us on Instagram
              </p>
            </div>
            <div
              className={`${styles.icons3} w-[300px] h-[44px] ml-[108px] mt-[22px] flex transition-transform transform hover:scale-105`}
            >
              <div className="w-[40px] h-[40px] rounded bg-[#DCCED0] relative">
                <Link href="https://twitter.com/VITAPuniversity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <Image
                    src={twitter}
                    className="absolute w-[22px] h-[22px] ml-[9px] mt-[9px]"
                  />
                </Link>
              </div>
              <p
                className={`${styles.twitterText} text-[#1B1C1E] font-Montserrant text-[20px] ml-[13px] mt-[4px]`}
              >
                Tweet with us on X
              </p>
            </div>
            <div
              className={`${styles.icons4} w-[350px] h-[44px] ml-[108px] mt-[22px] flex transition-transform transform hover:scale-105`}
            >
              <div className="w-[40px] h-[40px] rounded bg-[#DCCED0] relative">
                <Link href="https://www.linkedin.com/school/vitap-university/?originalSubdomain=in">
                  <Image
                    src={linkin}
                    className="absolute w-[22px] h-[22px] ml-[9px] mt-[9px]"
                  />
                </Link>
              </div>
              <p
                className={`${styles.linkedinText} text-[#1B1C1E] font-Montserrant text-[20px] ml-[13px] mt-[4px]`}
              >
                Grow with us on LinkedIn
              </p>
            </div>
            <div
              className={`${styles.icons5} w-[300px] h-[44px] ml-[108px] mt-[22px] flex transition-transform transform hover:scale-105`}
            >
              <div className="w-[40px] h-[40px] rounded bg-[#DCCED0] relative">
                <Link href="https://www.facebook.com/vitap.university/">
                  <Image
                    src={fb}
                    className="absolute w-[22px] h-[22px] ml-[9px] mt-[9px]"
                  />
                </Link>
              </div>
              <p
                className={`${styles.facebookText} text-[#1B1C1E] font-Montserrant text-[20px] ml-[13px] mt-[4px]`}
              >
                Like us on Facebook
              </p>
            </div>
            <div
              className={`${styles.icons6} w-[300px] h-[44px] ml-[108px] mt-[22px] flex transition-transform transform hover:scale-105`}
            >
              <div className="w-[40px] h-[40px] rounded bg-[#DCCED0] relative">
                <Link href="https://www.youtube.com/c/VITAP">
                  <Image
                    src={yt}
                    className="absolute w-[22px] h-[22px] ml-[9px] mt-[9px]"
                  />
                </Link>
              </div>
              <p
                className={`${styles.ytText} text-[#1B1C1E] font-Montserrant text-[20px] ml-[13px] mt-[4px]`}
              >
                Watch us on Youtube
              </p>
            </div>
          </div>
        </div>
        <button
          className={`${styles.b1} w-[60px] h-[60px] border bg-[#E6CFCFCC] rounded opacity-0 absolute text-[25px]`}
        >
          &lt;
        </button>
        <button
          className={`${styles.b2} w-[60px] h-[60px] border bg-[#E6CFCFCC] rounded opacity-0 absolute text-[25px]`}
        >
          &gt;
        </button>
        <div className={`${styles.group1} ml-[56px] overflow-hidden`}>
          <div className={`${styles.images1} relative`}>
            <div className="card1 relative inline-block group">
              <Image src={image1} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[60px] duration-300 group-hover:opacity-100"
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
            <div className={`${styles.card2} relative inline-block group`}>
              <Image src={image2} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[60px] duration-300 group-hover:opacity-100"
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
            <div className={`${styles.card3} relative inline-block group`}>
              <Image src={image3} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[60px] duration-300 group-hover:opacity-100"
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
        <div className={`${styles.group2} ml-[64.96px] overflow-hidden`}>
          <div className="relative">
            <div className="card1 mt-[55px] relative inline-block group">
              <Image src={image4} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[60px] duration-300 group-hover:opacity-100"
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
              <Image src={image5} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[60px] duration-300 group-hover:opacity-100"
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
            <div className={`${styles.card3} relative inline-block group`}>
              <Image src={image6} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[20px] duration-300 group-hover:opacity-100"
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
        <div className={`${styles.group3} ml-[64.96px] overflow-hidden`}>
          <div className="relative">
            <div className="card1 relative inline-block group">
              <Image src={image7} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 group-hover:opacity-70">
                <Image src={logo} className="absolute ml-[5px] mt-[200px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[60px] duration-300 group-hover:opacity-100"
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
              <Image src={image8} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[60px] duration-300 group-hover:opacity-100"
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
              <Image src={image9} width={233} height={233} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900">
                <Image src={logo} className="absolute mt-[200px] ml-[5px]" />
                <SocialIcon
                  url="www.instagram.com"
                  bgColor="rgba(0,0,0,0)"
                  fgColor="#FFFFFF"
                  className="opacity-0 ml-[40%] items-center justify-center absolute transform mt-[60px] duration-300 group-hover:opacity-100"
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
      </div>
    </>
  );
};

export default Socials;
