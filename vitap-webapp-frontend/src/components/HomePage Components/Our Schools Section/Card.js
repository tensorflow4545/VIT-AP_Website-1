import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const card = ({ imgsrc, href, title }) => {
  return (
    <>
      <div className="w-[270px] h-[270px]  relative group overflow-hidden">
        <Link href={href} target="_blank">
          <div className="absolute w-full h-full bg-black"></div>
          <Image
            src={imgsrc}
            className="opacity-60 transition-transform transform scale-100 group-hover:scale-105"
            layout="fill"
            objectFit="cover" // Changed from "contain" to "cover"
          />
          <div className="absolute top-[190px] text-white  px-[14px] font-semibold flex-col ">
            <h1 className="leading-[23px] font-Emilio text-[20px]">{title}</h1>
            <h1 className="font-Montserrat text-[13px] font-medium flex items-center">
              Explore Now{" "}
              <span>
                <BsArrowRightShort size={23} />
              </span>
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default card;
