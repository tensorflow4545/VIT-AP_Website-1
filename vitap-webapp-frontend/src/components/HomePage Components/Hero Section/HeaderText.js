import { BsArrowRight } from "react-icons/bs";

const HeaderText = () => {
  return (
    <>
      <div className="z-0 absolute text-white  font-semibold w-[500px]  md:w-[800px] sm:top-[200px] top-[250px] sm:left-[70px] left-[10px] text-center sm:flex-col sm:text-center lg:text-left lg:ml-[100px]">
        <h1 className=" md:leading-[100px] font-Emilio sm:leading-10  sm:text-[35px] text-[35px]  md:text-[78px] lg:text-[68px]">
          Welcome to <br /> VIT-AP University
        </h1>
        <h1 className="md:text-[20px] sm:text-[10px] font-Montserrat">
          APPLY KNOWLEDGE, IMPROVE LIFE
        </h1>
        <button className="md:w-[201px] w-[190px] h-[40px] md:mt-[25px] sm:mt-3 ls:mt-10 md:h-[54px] sm:w-[160px] sm:h-[34px] bg-primary md:text-[14px] rounded-full font-Montserrat text-white hover:opacity-80">
          <div className="flex justify-center items-center space-x-[12px] ">
            <div>CONTACT US</div> <BsArrowRight />
          </div>
        </button>
      </div>
    </>
  );
};

export default HeaderText;
