import { BsArrowRight } from "react-icons/bs";

const HeaderText = () => {
  return (
    <>
      <div className="z-0 absolute ls:top-[180px] md:top-[352px] ls:left-[108px] sm:left-[110px] text-white  font-semibold ls:w-[700px] md:w-[800px] sm:top-[200px]  ls:block sm:flex-col ls:text-left sm:text-center">
        <h1 className="mt-[17%] md:leading-[100px] font-Emilio sm:leading-10 ls:leading-[70px] sm:text-[35px] ls:text-[64px] md:text-[78px]">
          Welcome to <br /> VIT-AP University
        </h1>
        <h1 className="md:text-[20px] sm:text-[10px] ls:text-[15px] font-Montserrat">
          APPLY KNOWLEDGE, IMPROVE LIFE
        </h1>
        <button className="md:w-[201px] md:mt-[25px] sm:mt-3 ls:mt-10 md:h-[54px] sm:w-[160px] sm:h-[34px] bg-primary ls:text-[15px] md:text-[14px] rounded-full font-Montserrat text-white hover:opacity-80">
          <div className="flex justify-center items-center space-x-[12px] ">
            <div>CONTACT US</div> <BsArrowRight />
          </div>
        </button>
      </div>
    </>
  );
};

export default HeaderText;
