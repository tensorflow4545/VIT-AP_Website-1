import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import "./navbarBottom.css"
const NavbarBottomItem = () => {
  return (
    <>
      <div className="w-full h-[38px] bg-primary absolute top-[72px] z-0 flex flex-row items-center text-white shadow-inner inner-shadow-top ">
        <ul className="ml-[34px] flex flex-row items-center space-x-2">
          <li><Link href="/">Home</Link></li>
          <li className="mt-[2px]"><IoIosArrowForward color="grey"/></li>
          <li><Link href="/">Schools</Link></li>
          <li className="mt-[2px]"><IoIosArrowForward color="grey"/></li>
          <li><Link href="/">School of Computer Science and Engineering</Link></li>
        </ul>
      </div>
    </>
  );
};

export default NavbarBottomItem;
