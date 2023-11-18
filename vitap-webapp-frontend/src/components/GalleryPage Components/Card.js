import image1 from "../../../public/gallery/image1.jpg";
import Image from "next/image";
const Card = ({src}) => {
  return (
    <>
    <div className="w-full h-full relative overflow-hidden">
        <div className="bg-black w-full h-full absolute opacity-30 "></div>
        <div className="absolute flex text-center items-center justify-center bg-white w-[357px] h-[70px] bottom-[10px]">
            <h1 className="text-primary font-Emilio text-[18px]">University Day Celebrations - 2022</h1>
        </div>
    <Image src={src}/>
    </div>
    </>
  );
};

export default Card;
