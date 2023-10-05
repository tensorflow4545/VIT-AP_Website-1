import { Tb360View} from "react-icons/tb";
import { FiSearch } from "react-icons/fi";

const NavbarUpper = () => {
  return (
    <>
      <div className="w-full h-[60px] text-white bg-primary flex justify-between items-center px-[37px]">
      
          <ul className="flex h-[20px] space-x-[31px] text-[14px] ">
            <li><a>AP</a></li>
            <li><a>Vellore</a></li>
            <li><a>Chennai</a></li>
            <li><a>Bhopal</a></li>
            <li><a>Banglore</a></li>
          </ul>

          <ul className="flex h-[25px] space-x-[31px] text-[14px] ">
            <li><a>How to reach VIT-AP</a></li>
            <li><a><FiSearch size={20}/></a></li>
            <li><a><Tb360View size={25}/></a></li>
          </ul>

        </div>

    </>
  );
};

export default NavbarUpper;
