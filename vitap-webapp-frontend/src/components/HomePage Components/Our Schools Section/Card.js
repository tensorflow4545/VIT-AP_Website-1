import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

const Card = ({src, text}) => {
  console.log(src)
  return (
    <>
      <div className="lx:w-[270px] lx:h-[270px] ls:hidden sm:hidden lx:block relative group">
        <Image
          src={src}
          className="opacity-100 transition-transform transform scale-100 group-hover:scale-105"
          layout="fill"
          objectFit="cover" 
        />
        <div className="absolute top-[190px] text-white  px-[14px] font-semibold flex-col  transition-transform transform scale-100 group-hover:scale-105 ">
          <h1 className="leading-[23px] ls:block sm:hidden font-Emilio text-[20px]">
            {text}
          </h1>
          <h1 className="font-Montserrat text-[13px] font-medium flex items-center">
            Explore Now
            <span>
              <BsArrowRightShort size={23} />
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Card;
