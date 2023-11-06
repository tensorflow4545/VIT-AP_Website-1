import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const Carousel = ({ slides }) => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex h-[760px]">
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`Slide ${index}`} />
        )}
      </div>
      <div className="absolute top-[220px]">
        <button>
          <BsArrowLeft size={30} />
        </button>
        <button>
          <BsArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
