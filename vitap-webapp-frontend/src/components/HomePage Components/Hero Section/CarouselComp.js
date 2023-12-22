import { Carousel } from "@material-tailwind/react";

const CarouselComp = () => {
  return (
    <>
      <Carousel className=" h-[97vh] w-full z-0">
        <div className="w-full h-full object-cover relative ">
          <div className="absolute w-full h-full bg-black opacity-30 bg-gradient-to-b from-blue-gray-900 to-blue-gray-800"></div>
          <video autoPlay muted loop className="h-full w-full object-cover">
            <source src="/intro.mp4" />
          </video>
        </div>
        <div className="w-full h-full object-cover relative ">
          <div className="absolute w-full h-full bg-black opacity-40 bg-gradient-to-b from-blue-gray-900 to-blue-gray-800"></div>
          <img
            src="/pic1.jpg"
            alt="pic1"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full h-full object-cover relative ">
          <div className="absolute w-full h-full bg-black opacity-40 bg-gradient-to-b from-blue-gray-900 to-blue-gray-800"></div>
          <img
            src="/pic2.jpg"
            alt="pic2"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full h-full object-cover relative ">
          <div className="absolute w-full h-full bg-black opacity-40 bg-gradient-to-b from-blue-gray-900 to-blue-gray-800"></div>
          <img
            src="/pic3.jpg"
            alt="pic3"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full h-full object-cover relative ">
          <div className="absolute w-full h-full bg-black opacity-40 bg-gradient-to-b from-blue-gray-900 to-blue-gray-800"></div>
          <img
            src="/acheivements1.jpeg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
      </Carousel>
    </>
  );
}

export default CarouselComp;