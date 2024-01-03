import React from "react";
import Image from "next/image";
import styles from "@/styles/Life.module.css";
import exp1 from "@/assets/images/explorePhotos/explore1.png";
import exp2 from "@/assets/images/explorePhotos/explore2.png";
import exp3 from "@/assets/images/explorePhotos/explore3.png";
import exp4 from "@/assets/images/explorePhotos/explore4.png";
import exp5 from "@/assets/images/explorePhotos/explore5.png";
import exp6 from "@/assets/images/explorePhotos/explore6.png";
import exp7 from "@/assets/images/explorePhotos/explore7.png";
import exp8 from "@/assets/images/explorePhotos/explore8.png";
import exp9 from "@/assets/images/explorePhotos/explore9.png";
import mob from "@/assets/images/explorePhotos/mobile.png";


const Life = () => {
  return (
    <>
      <div
        className={`${styles.container} flex flex-col h-screen bg-[#E8E8E8] items-center relative`}
      >
        <Image
          src={exp1}
          width={250}
          height={200}
          className={`${styles.img1} absolute top-3 left-[100px]`}
        />
        <Image
          src={exp2}
          className={`${styles.mobile1} opacity-0 absolute top-0 left-[520px]`}
        />
        <Image
          src={exp2}
          className={`${styles.mobile7} opacity-0 absolute top-0 left-[520px]`}
        />
        <Image
          src={exp2}
          className={`${styles.mobile8} opacity-0 absolute top-0 left-[520px]`}
        />
        <Image src={mob} className={`${styles.mobile3} opacity-0`} />
        <Image src={mob} className={`${styles.mobile4} opacity-0`} />
        <Image src={mob} className={`${styles.mobile5} opacity-0`} />
        <Image src={mob} className={`${styles.mobile6} opacity-0`} />
        <Image
          src={exp2}
          width={184}
          height={147}
          className={`${styles.img2} absolute top-0 left-[520px]`}
        />
        <Image
          src={exp3}
          width={250}
          height={200}
          className={`${styles.img3} absolute top-0 left-[840px]`}
        />
        <Image
          src={exp4}
          width={250}
          height={180}
          className={`${styles.img4} absolute top-[40px] right-[60px]`}
        />
        <Image
          src={exp5}
          width={320}
          height={220}
          className={`${styles.img5} absolute left-[50px] top-[255px]`}
        />
        <Image
          src={exp6}
          width={316}
          height={200}
          className={`${styles.img6} absolute top-[290px] right-[20px]`}
        />
        <Image
          src={exp7}
          width={272}
          height={200}
          className={`${styles.img7} absolute left-[10%] bottom-[10px]`}
        />
        <Image
          src={exp8}
          width={280}
          height={202}
          className={`${styles.img8} absolute bottom-0 left-[41%]`}
        />
        <Image
          src={exp9}
          width={280}
          height={202}
          className={`${styles.img9} absolute bottom-[10px] right-[10%]`}
        />
        <div
          className={`${styles.centerdiv} flex items-center justify-center mt-[-330px]`}
        >
          <div className={`${styles.textdiv} text-center`}>
            <h4
              className={`${styles.explore} text-[24px] text-[#5C0E14] font-Emilo font-bold`}
            >
              <i>Explore our campus</i>
            </h4>
            <h1
              className={`${styles.life} text-[80px] text-center font-Emilo font-bold`}
            >
              Life @ VIT-AP
            </h1>
            <p className={`${styles.experience} w-[616px] h-[54px]`}>
              Experience the vibrant heart of our campus life at Vitap
              University.
            </p>
            <button
              className={`${styles.button} bg-[#5C0E14] text-[#FDFEFF] w-[150px] h-[58px] rounded-full hover:bg-[#7A1820]`}
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Life;
