import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const Carousel = ({ slides }) => {
  return (
    <>
      <div className=" overflow-hidden relative">
        <div className="flex h-[760px]">
          {slides.map((s) => {
            return <img src={s} />;
          })}
        </div>

        <div className="absolute top-[220px]">
          <button>
            <BsArrowLeft  size={30}/>
          </button>
          <button>
            <BsArrowRight size={30}/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
