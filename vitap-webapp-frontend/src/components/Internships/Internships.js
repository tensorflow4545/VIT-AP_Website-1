import React from "react";
import Image from "next/image";
import banner from "../../assets/images/Internships/banner.png";
import vit from "../../assets/images/Internships/vit.png";
import ir from "../../assets/images/Internships/IR.png";
import sd from "../../assets/images/Internships/superdream.png";
import dr from "../../assets/images/Internships/dream.png";
import st from "../../assets/images/Internships/statistics.png";
import cdc from "../../assets/images/Internships/cdcoffice.png";

const Internships = () => {
  return (
    <>
      <div>
        <div className="relative">
          <Image src={banner} className="w-[100%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 opacity-50"></div>
          <div className="absolute inset-0 md:mt-[200px] lg:mt-[274px]">
            <p className=" max-w-[327px] text-white lg:text-[40px] md:text-[40px] font-semibold text-start flex justify-left items-center p-[10px] pl-0 ml-[30px] mb-[30px] border-2 border-white border-t-0 border-l-0 border-r-0 font-Emilio sm:text-[26px]">
              Internships
            </p>
          </div>
        </div>
        <div className="relative lg:ml-[54px] max-w-[1278px] md:mx-auto md:flex">
          <div className="lg:w-[1134px] lg:ml-[84px] max-h-[704px] border border-[#650010] mt-[101px] relative md:mx-auto sm:border-0 lg:border">
            <p className="absolute top-[-50px] left-[54px] lg:text-[62px] text-[#5C0E14] bg-white font-bold font-Emilio sm:text-[31px] sm:left-[18px]">
              VIT-AP Internships
            </p>
            <Image
              src={vit}
              className="absolute ml-[866px] mt-[56px] max-w-[392px] lg:max-h-[586px] sm:opacity-0 lg:opacity-100 md:opacity-0"
            />
            <p className="lg:max-w-[795px] text-[20px] font-Montserrant mt-[56px] ml-[54px] mx-auto flex sm:ml-[18px]">
              VIT-AP has numerous internship programs where students can learn
              about professional fields and get first-hand experience of the
              work environment even before they reach the actual placements. We
              work very closely with the industry counterparts and also have a
              network established with corporates and other universities across
              the globe that enable our students to gain the experience required
              for their respective job area while being interns.
            </p>
            <p className="md:max-w-[795px] text-[20px] font-Montserrant mt-[24px] ml-[54px] mx-auto flex sm:ml-[18px]">
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
            <p className="md:max-w-[795px] text-[20px] font-Montserrant ml-[54px] mt-[24px] sm:ml-[18px]">
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
              className="opacity-0 sm:opacity-100 sm:mt-[30px] lg:opacity-0 md:opacity-0"
            />
          </div>
        </div>
        <div className="max-h-[1250px] bg-[#F3F4F8] border lg:mt-[70px] md:mt-[70px] sm:mt-[1250px] sm:bg-white sm:border-0">
          <div className="mx-auto">
            <p className="lg:text-[62px] text-[#5C0E14] font-Emilio font-bold lg:mt-[96px] md:mx-auto lg:ml-[109px] sm:text-[31px] sm:ml-[18px]">
              International Relations
            </p>
            <p className="text-[22px] font-Emilio max-w-[1250px] w-[100%] mx-auto lg:ml-[109px] sm:ml-[18px]">
              Career Development Centre has been instrumental in providing
              international internships and placement offers. They have placed
              at an average of 10 students every year in leading MNC’s at USA,
              UK, Ireland, Japan, China, Israel, Taiwan, UAE, Kenya, Germany,
              Nigeria and Italy.
            </p>
            <div className="lg:ml-[109px] sm:ml-[18px]">
              <div className="flex mt-[34px]">
                <div className="max-w-[288px] max-h-[268px] bg-[#FDFEFF] border items-center justify-center">
                  <Image src={ir} className=" object-contain" />
                  <p className="font-Emilio mt-[15px] ml-[55px] text-[26px]">
                    United Kingdom
                  </p>
                </div>
                <div className="max-w-[288px] max-h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px]">
                  <Image src={ir} className="object-contain" />
                  <p className="font-Emilio mt-[15px] ml-[55px] text-[26px]">
                    United Kingdom
                  </p>
                </div>
                <div className="max-w-[288px] max-h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px] sm:opacity-0 lg:opacity-100 md:opacity-100">
                  <Image src={ir} className=" object-contain" />
                  <p className="font-Emilio mt-[15px] ml-[55px] text-[26px]">
                    United Kingdom
                  </p>
                </div>
                <div className="max-w-[288px] max-h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px] sm:opacity-0 lg:opacity-100 md:opacity-100">
                  <Image src={ir} className=" object-contain" />
                  <p className="font-Emilio mt-[15px] ml-[55px] text-[26px]">
                    United Kingdom
                  </p>
                </div>
              </div>
              <div className="flex mt-[34px]">
                <div className="max-w-[288px] max-h-[268px] bg-[#FDFEFF] border items-center justify-center">
                  <Image src={ir} className="object-contain" />
                  <p className="font-Emilio mt-[15px] ml-[55px] text-[26px]">
                    United Kingdom
                  </p>
                </div>
                <div className="max-w-[288px] max-h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px]">
                  <Image src={ir} className="object-contain" />
                  <p className="font-Emilio mt-[15px] ml-[55px] text-[26px]">
                    United Kingdom
                  </p>
                </div>
                <div className="max-w-[288px] max-h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px] sm:opacity-0 lg:opacity-100 md:opacity-100">
                  <Image src={ir} className="object-contain" />
                  <p className="font-Emilio mt-[15px] ml-[55px] text-[26px]">
                    United Kingdom
                  </p>
                </div>
                <div className="max-w-[288px] max-h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px] sm:opacity-0 lg:opacity-100 md:opacity-100">
                  <Image src={ir} className="object-contain" />
                  <p className="font-Emilo mt-[15px] ml-[55px] text-[26px]">
                    United Kingdom
                  </p>
                </div>
              </div>
              <div className="flex mt-[34px]">
                <div className="max-w-[288px] max-h-[268px] bg-[#FDFEFF] border items-center justify-center">
                  <Image src={ir} className="object-contain" />
                  <p className="font-Emilio mt-[15px] ml-[55px] text-[26px]">
                    United Kingdom
                  </p>
                </div>
                <div className="max-w-[288px] max-h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px]">
                  <Image src={ir} className="object-contain" />
                  <p className="font-Emilio mt-[15px] ml-[55px] text-[26px]">
                    United Kingdom
                  </p>
                </div>
                <div className="max-w-[288px] max-h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px] sm:opacity-0 lg:opacity-100 md:opacity-100">
                  <Image src={ir} className="object-contain" />
                  <p className="font-Emilio mt-[15px] ml-[55px] text-[26px]">
                    United Kingdom
                  </p>
                </div>
                <div className="max-w-[288px] max-h-[268px] bg-[#FDFEFF] border items-center justify-center ml-[33px] sm:opacity-0 lg:opacity-100 md:opacity-100">
                  <Image src={ir} className="object-contain" />
                  <p className="font-Emilio mt-[15px] ml-[55px] text-[26px]">
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="lg:h-[227px] md:h-[227px] lg:mt-[289px] md:mt-[289px] bg-[#E6CFCF] sm:h-[670px] sm:mt-[250px]"></div>
          <div className="flex lg:ml-[10%] absolute mt-[-420px] md:mx-auto">
            <div className="md:max-w-[240px] md:max-h-[350px] lg:w-[240px] lg:h-[240px] transform bg-gray-300 border lg:relative md:relative lg:mt-0 md:mt-0 -skew-x-6 sm:mt-[-400px] sm:w-[151px] sm:h-[229px] sm:ml-[30px] sm:absolute">
              <Image src={sd} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Overview</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div className="md:max-w-[240px] md:max-h-[350px] lg:w-[240px] lg:h-[240px] transform bg-gray-300 border lg:relative md:relative lg:ml-[20px] lg:mt-0 md:mt-0 -skew-x-6 ml-[10px] sm:w-[150px] sm:absolute sm:h-[229px] mt-[-400px] sm:ml-[191px] ">
              <Image src={sd} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Super Dream Offer</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div className="md:max-w-[240px] md:max-h-[350px] lg:w-[240px] lg:h-[240px] transform bg-gray-300 border lg:relative md:relative lg:ml-[20px] lg:mt-0 md:mt-0 -skew-x-6 ml-[10px] sm:absolute sm:w-[150px] sm:h-[229px] sm:mt-[-150px] sm:ml-[20px]">
              <Image src={dr} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Dream Offer</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div className="md:max-w-[240px] md:max-h-[350px] lg:w-[240px] lg:h-[240px] transform bg-gray-300 border lg:relative md:relative lg:ml-[20px] lg:mt-0 md:mt-0 -skew-x-6 ml-[10px] sm:ml-[181px] sm:absolute sm:w-[150px] sm:h-[229px] mt-[-150px]">
              <Image src={st} />
              <div className="absolute bottom-0 w-[100%] min-h-[75px] group-hover:bg-[#fff] group-hover:text-[#650010] bg-[#650010] text-white pl-6 pt-3">
                <h1 className="text-[17px] font-bold">Statistics</h1>
                <p className="text-[14px] font-Montserrant cursor-pointer">
                  Explore Now
                </p>
              </div>
            </div>
            <div className="md:max-w-[240px] md:max-h-[350px] lg:w-[240px] lg:h-[240px] transform bg-gray-300 border lg:relative md:relative lg:ml-[20px] lg:mt-0 md:mt-0 -skew-x-6 ml-[10px] sm:absolute sm:w-[150px] sm:mt-[100px] sm:ml-[20px]">
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
            <p class="text-[16px] lx:text-[19px] font-[400px] text-right">
              Email : placement@vitap.ac.in
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Internships;