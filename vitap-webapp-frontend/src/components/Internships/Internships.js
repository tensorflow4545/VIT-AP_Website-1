import React from "react";
import Image from "next/image";
import banner from "../../assets/images/Internships/banner.png";
import vit from "../../assets/images/Internships/vit.png";
import ir from "../../assets/images/Internships/IR.png";
import sd from "../../assets/images/Internships/superdream.png";
import dr from "../../assets/images/Internships/dream.png";
import st from "../../assets/images/Internships/statistics.png";
import cdc from "../../assets/images/Internships/cdcoffice.png";
import styles from "../../styles/Internships.module.css";

const Internships = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.banner} relative`}>
          <Image src={banner} className="w-[100%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 opacity-50"></div>
          <div className="absolute inset-0">
            <p
              className={`${styles.head} absolute font-Emilo text-white opacity-100 font-bold text-[44px] mt-[274px] ml-[34px]`}
            >
              Internships
            </p>
            <div className="absolute w-[327px] h-[2px] bg-white mt-[333px] ml-[34px]"></div>
          </div>
        </div>
        <div className="relative ml-[84px]">
          <div
            className={`${styles.borderdiv} w-[1134px] h-[704px] border border-[#650010] mt-[101px] relative`}
          >
            <p
              className={`${styles.heading} absolute top-[-50px] left-[54px] text-[62px] text-[#5C0E14] bg-white font-bold font-Emilo`}
            >
              VIT-AP Internships
            </p>
            <Image
              src={vit}
              className={`${styles.image} absolute ml-[866px] mt-[56px]`}
            />
            <p
              className={`${styles.p1} w-[798px] text-[20px] font-Montserrant ml-[54px] mt-[56px]`}
            >
              VIT-AP has numerous internship programs where students can learn
              about professional fields and get first-hand experience of the
              work environment even before they reach the actual placements. We
              work very closely with the industry counterparts and also have a
              network established with corporates and other universities across
              the globe that enable our students to gain the experience required
              for their respective job area while being interns.
            </p>
            <p
              className={`${styles.p2} w-[798px] text-[20px] font-Montserrant ml-[54px] mt-[24px]`}
            >
              To boost the placement opportunities VIT-AP has the final semester
              as the Cooperative Education Programme (co-op). Co-op provides
              students the opportunity to explore and refine their potential
              career path. The experience the student gains from this long
              internship period, narrows the gap with the industry, builds
              valuable industry connections, broaden their perspectives on the
              job front, and acquire the skills and knowledge required to face
              the professional world. This co-op makes them strong contenders
              ready for their job role.
            </p>
            <p
              className={`${styles.p3} w-[798px] text-[20px] font-Montserrant ml-[54px] mt-[24px]`}
            >
              Internships for students of VIT-AP made its way when our first
              batch of students completed their first academic year. Most of our
              students went in for internships during the summer break of 2018.
              This pattern has been continuing in a very positive manner, that
              now, students register for internships right from their first year
              of joining a programme at VIT-AP. In 2018, we had students doing
              international internships at Europe, Colombo, Bahrain and USA.
              Since then, we have almost all of our students’ doing internships
              in MNCs.
            </p>
            <Image
              src={vit}
              width={600}
              className={`${styles.image2} opacity-0`}
            />
          </div>
        </div>
        <div
          className={`${styles.irInternships} h-[1250px] bg-[#F3F4F8] border mt-[70px]`}
        >
          <div className={`${styles.sec2} ml-[109px]`}>
            <p
              className={`${styles.heading2} text-[62px] text-[#5C0E14] font-Emilo font-bold mt-[96px]`}
            >
              International Relations
            </p>
            <p className={`${styles.para2} text-[22px] font-Emilo w-[1250px]`}>
              Career Development Centre has been instrumental in providing
              international internships and placement offers. They have placed
              at an average of 10 students every year in leading MNC’s at USA,
              UK, Ireland, Japan, China, Israel, Taiwan, UAE, Kenya, Germany,
              Nigeria and Italy.
            </p>
            <div className="flex mt-[34px]">
              <div
                className={`${styles.div1} w-[288px] h-[268px] bg-[#FDFEFF] border items-center justify-center`}
              >
                <Image src={ir} className="ml-[8px]" />
                <p
                  className={`${styles.uk} font-Emilo mt-[15px] ml-[55px] text-[26px]`}
                >
                  United Kingdom
                </p>
              </div>
              <div
                className={`${styles.div1} w-[288px] h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px]`}
              >
                <Image src={ir} className="ml-[8px]" />
                <p
                  className={`${styles.uk} font-Emilo mt-[15px] ml-[55px] text-[26px]`}
                >
                  United Kingdom
                </p>
              </div>
              <div
                className={`${styles.div4} w-[288px] h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px]`}
              >
                <Image src={ir} className="ml-[8px]" />
                <p className="font-Emilo mt-[15px] ml-[55px] text-[26px]">
                  United Kingdom
                </p>
              </div>
              <div
                className={`${styles.div4} w-[288px] h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px]`}
              >
                <Image src={ir} className="ml-[8px]" />
                <p className="font-Emilo mt-[15px] ml-[55px] text-[26px]">
                  United Kingdom
                </p>
              </div>
            </div>
            <div className="flex mt-[34px]">
              <div className="w-[288px] h-[268px] bg-[#FDFEFF] border items-center justify-center">
                <Image src={ir} className="ml-[8px]" />
                <p
                  className={`${styles.uk} font-Emilo mt-[15px] ml-[55px] text-[26px]`}
                >
                  United Kingdom
                </p>
              </div>
              <div className="w-[288px] h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px]">
                <Image src={ir} className="ml-[8px]" />
                <p
                  className={`${styles.uk} font-Emilo mt-[15px] ml-[55px] text-[26px]`}
                >
                  United Kingdom
                </p>
              </div>
              <div
                className={`${styles.div4} w-[288px] h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px]`}
              >
                <Image src={ir} className="ml-[8px]" />
                <p className="font-Emilo mt-[15px] ml-[55px] text-[26px]">
                  United Kingdom
                </p>
              </div>
              <div
                className={`${styles.div4} w-[288px] h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px]`}
              >
                <Image src={ir} className="ml-[8px]" />
                <p className="font-Emilo mt-[15px] ml-[55px] text-[26px]">
                  United Kingdom
                </p>
              </div>
            </div>
            <div className="flex mt-[34px]">
              <div className="w-[288px] h-[268px] bg-[#FDFEFF] border items-center justify-center">
                <Image src={ir} className="ml-[8px]" />
                <p
                  className={`${styles.uk} font-Emilo mt-[15px] ml-[55px] text-[26px]`}
                >
                  United Kingdom
                </p>
              </div>
              <div className="w-[288px] h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px]">
                <Image src={ir} className="ml-[8px]" />
                <p
                  className={`${styles.uk} font-Emilo mt-[15px] ml-[55px] text-[26px]`}
                >
                  United Kingdom
                </p>
              </div>
              <div
                className={`${styles.div4} w-[288px] h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px]`}
              >
                <Image src={ir} className="ml-[8px]" />
                <p className="font-Emilo mt-[15px] ml-[55px] text-[26px]">
                  United Kingdom
                </p>
              </div>
              <div
                className={`${styles.div4} w-[288px] h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px]`}
              >
                <Image src={ir} className="ml-[8px]" />
                <p className="font-Emilo mt-[15px] ml-[55px] text-[26px]">
                  United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className={`${styles.pinkbg} h-[227px] mt-[289px] bg-[#E6CFCF]`}
          ></div>
          <div className="flex ml-[10%] absolute mt-[-420px]">
            <div
              className={`${styles.card1} w-[240px] h-[350px] transform bg-gray-300 border -skew-x-6`}
            >
              <Image src={sd} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Overview</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div
              className={`${styles.card1} w-[240px] h-[350px] transform bg-gray-300 border -skew-x-6 ml-[10px]`}
            >
              <Image src={sd} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Super Dream Offer</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div
              className={`${styles.card2} w-[240px] h-[350px] transform bg-gray-300 border -skew-x-6 ml-[10px]`}
            >
              <Image src={dr} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Dream Offer</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div
              className={`${styles.card3} w-[240px] h-[350px] transform bg-gray-300 border -skew-x-6 ml-[10px]`}
            >
              <Image src={st} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Statistics</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div
              className={`${styles.card4} w-[240px] h-[350px] transform bg-gray-300 border -skew-x-6 ml-[10px]`}
            >
              <Image src={cdc} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">C.D.C Office</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-[250px] bg-[#FFF3F4] text-[#650010] flex justify-center items-center">
          <div class="pt-[78px] pb-[59px] px-[250px] flex flex-col justify-center items-center text-center">
            <p class=" text-[12px] lx:text-[14px] font-semibold tetx-emilio text-center">
              Contact Us
            </p>
            <p class=" text-[19px] lx:text-[24px] font-bold tetx-emilio text-center ">
              Dr. S.M.A.K. Azad
            </p>
            <p class=" text-[16px] lx:text-[19px] font-[700px] tetx-emilio text-center">
              Assistant Director (Placement and Training)
            </p>
            <p class=" text-[16px] lx:text-[19px] font-[700px] tetx-emilio text-center">
              VIT-AP University, Beside AP Secretariat, Near Vijayawada, 522
              237, Andhra Pradesh
            </p>
            <p
              class={`${styles.email} text-[16px] lx:text-[19px] font-[400px] text-right`}
            >
              Email : placement@vitap.ac.in
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Internships;
