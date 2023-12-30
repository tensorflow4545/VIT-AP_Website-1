import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";


const MobileCard = ({ title, href, imgsrc }) => {
  return (
    <>
      <div className="justify-center flex item w-full h-full ">
      
        <div className="flex justify-center w-full h-auto items-center space-x-5 relative top-5 ">
          <div className="bg-[#E6CFCF] h-[250px] md:h-[400px] w-[100px] md:w-[280px] absolute left-1 md:left-0  z-0"></div>
          
          <div className="w-[316px] h-[324px]  flex justify-center items-center">
            <Image
              src={imgsrc}
              objectFit="cover"
              className="z-10"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <h1 className="text-[20px] sm:text-[28px] text-primary font-Emilio font-[600]">
              {title}
            </h1>
            <h1>
                <Link href={href} className="font-Montserrat font-[400] flex  items-center ">
                <h1>
                Explore Now 
                </h1>
                <BsArrowRightShort size={30}/>
                </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileCard;
