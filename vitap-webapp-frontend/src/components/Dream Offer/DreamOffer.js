import React from "react";
import Image from "next/image";
import banner from "../../assets/images/Dream Offers/banner.png";
import s5 from "../../assets/images/Dream Offers/stats5.png";
import img from "../../assets/images/Dream Offers/image.png";
import sd from "../../assets/images/Dream Offers/superdream.png";
import dr from "../../assets/images/Dream Offers/dream.png";
import st from "../../assets/images/Dream Offers/statistics.png";
import cdc from "../../assets/images/Dream Offers/cdcoffice.png";
import styles from "../../styles/DreamOffer.module.css";

const DreamOffer = () => {
  return (
    <>
      <div>
        <div className={`${styles.container} relative`}>
          <Image src={banner} className="w-[100%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 opacity-50"></div>
          <div className="absolute inset-0">
            <p
              className={`${styles.head} absolute font-Emilo text-white opacity-100 font-bold text-[44px] mt-[205px] ml-[34px] w-[139px]`}
            >
              Dream Offer
            </p>
            <div
              className={`${styles.line} absolute w-[327px] h-[2px] bg-white mt-[333px] ml-[34px]`}
            ></div>
          </div>
        </div>
        <div
          className={`${styles.div1} w-[1332px] h-[745px] bg-[#FCE3E5] ml-[7%] flex`}
        >
          <p
            className={`${styles.heading} text-[58px] text-[#51060D] font-Emilo font-semibold mt-[95px] ml-[54px] absolute`}
          >
            Dream Offer
          </p>
          <div
            className={`${styles.paragraph} w-[1189px] ml-[54px] mt-[173px] font-Montserrant text-[18px]`}
          >
            <p>
              In Dream placement offer, 3836 students are presented with offers
              with Cost of Company (CTC) of 5.5 Lakhs and above per annum. More
              than 386 companies have been giving this placement offer to enable
              students to have multiple choices in the dream placement category.
              They can choose among various streams including IT Services,
              product consulting, banking, Core Engineering companies among
              other options. Such placement opportunities allow the students to
              freely select the offer that is present in their area of interest.
            </p>
            <p className="mt-[15px]">
              VIT is a proud holder for the Limca book of records for the
              highest number of recruitments through placements done from a
              single institution by IT sector companies for 7 years. Cognizant,
              TATA Consultancy Services, Accenture, Wipro, and Infosys are a few
              names in the IT sector that have their placement bases in VIT.
              These companies have had about 8,000 placements in the year 2016
              and the number is increasing every year.
            </p>
            <p className="mt-[15px]">
              Also, the Career Development Centre in VIT is responsible for
              internships for students. Apart from placements for students in
              their final year, the Placement Cell provides international
              internships with leading MNCs across the globe. An average of 10
              students every year get an opportunity to get internships in USA,
              UK, Ireland, Japan, China, Israel, Taiwan, UAE, Kenya, Germany,
              Nigeria and Italy. These internship programs help the students to
              earn a stipend, in addition to hands-on experience and practical
              application of everything they have learned. While VIT ensures
              that all its students obtain placement in leading MNCs, it also
              makes sure that they get internships and have valuable work
              experience.
            </p>
            <p className="mt-[15px]">
              The placement season is now growing higher as our students are
              getting placed with Dream companies. The list of final year
              students who have bagged their Dream offers is listed below. We
              are certain that this upward trend with placements will scale
              higher and our students shall be successfully placed.
            </p>
          </div>
        </div>
        <div className={`${styles.img} mt-[-100px] ml-[230px]`}>
          <Image
            src={s5}
            width={1080}
            height={581}
            className={`${styles.image} absolute border`}
          />
        </div>
        <div className={`${styles.info1} mt-[671px]`}>
          <div className="bg-[#F3F4F8] h-[751px] border">
            <div
              className={`${styles.redbg} w-[35px] h-[751px] absolute bg-[#741D26]`}
            ></div>
            <p
              className={`${styles.h1} ml-[108px] text-[#51060D] font-Emilo font-bold mt-[80px] text-[58px]`}
            >
              Student Grabs Dream Offers till 2024
            </p>
            <div
              className={`${styles.infodiv} absolute w-[1429px] h-[447px] flex overflow-hidden ml-[85px] mt-[36px]`}
            >
              <Image src={img} className="absolute mt-[79px]" />
              <Image
                src={img}
                className={`${styles.img2} absolute mt-[79px] ml-[369px]`}
              />
              <Image
                src={img}
                width={447}
                height={447}
                className={`${styles.img3} absolute ml-[738px]`}
              />
              <Image
                src={img}
                className={`${styles.img4} absolute mt-[79px] ml-[1265px]`}
              />
            </div>
          </div>
          <div className={`${styles.buttons} mt-[-60px] flex ml-[1000px]`}>
            <button className="rounded-full bg-white border h-[40px] w-[40px] absolute">
              &lt;
            </button>
            <button className="rounded-full bg-white border h-[40px] w-[40px] absolute ml-[56px]">
              &gt;
            </button>
          </div>
        </div>
        <div className={`${styles.info2} mt-[60px]`}>
          <div className="h-[751px] border">
            <div
              className={`${styles.redbg} w-[35px] h-[751px] absolute bg-[#741D26] right-0`}
            ></div>
            <p
              className={`${styles.h1} ml-[108px] text-[#51060D] font-Emilo font-bold mt-[80px] text-[58px]`}
            >
              Student Grabs Dream Offers till 2023
            </p>
            <div
              className={`${styles.infodiv} absolute w-[1429px] h-[447px] flex overflow-hidden ml-[85px] mt-[36px]`}
            >
              <Image src={img} className="absolute mt-[79px]" />
              <Image
                src={img}
                className={`${styles.img2} absolute mt-[79px] ml-[369px]`}
              />
              <Image
                src={img}
                width={447}
                height={447}
                className={`${styles.img3} absolute ml-[738px]`}
              />
              <Image
                src={img}
                className={`${styles.img4} absolute mt-[79px] ml-[1265px]`}
              />
            </div>
          </div>
          <div className={`${styles.buttons} mt-[-60px] flex ml-[1000px]`}>
            <button className="rounded-full bg-white border h-[40px] w-[40px] absolute">
              &lt;
            </button>
            <button className="rounded-full bg-white border h-[40px] w-[40px] absolute ml-[56px]">
              &gt;
            </button>
          </div>
        </div>
        <div className="mt-[60px]">
          <div className="bg-[#F3F4F8] h-[751px] border">
            <div
              className={`${styles.redbg} w-[35px] h-[751px] absolute bg-[#741D26]`}
            ></div>
            <p
              className={`${styles.h1} ml-[108px] text-[#51060D] font-Emilo font-bold mt-[80px] text-[58px]`}
            >
              Student Grabs Dream Offers till 2022
            </p>
            <div
              className={`${styles.infodiv} absolute w-[1429px] h-[447px] flex overflow-hidden ml-[85px] mt-[36px]`}
            >
              <Image src={img} className="absolute mt-[79px]" />
              <Image
                src={img}
                className={`${styles.img2} absolute mt-[79px] ml-[369px]`}
              />
              <Image
                src={img}
                width={447}
                height={447}
                className={`${styles.img3} absolute ml-[738px]`}
              />
              <Image
                src={img}
                className={`${styles.img4} absolute mt-[79px] ml-[1265px]`}
              />
            </div>
          </div>
          <div className={`${styles.buttons} mt-[-60px] flex ml-[1000px]`}>
            <button className="rounded-full bg-white border h-[40px] w-[40px] absolute">
              &lt;
            </button>
            <button className="rounded-full bg-white border h-[40px] w-[40px] absolute ml-[56px]">
              &gt;
            </button>
          </div>
        </div>
        <div className={`${styles.last} relative`}>
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
      </div>
    </>
  );
};

export default DreamOffer;
