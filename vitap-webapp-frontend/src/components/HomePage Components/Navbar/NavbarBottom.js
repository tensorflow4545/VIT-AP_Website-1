import Image from "next/image";
import logo from "../../../assets/images/logos/vitaplogo.png"

const NavbarBottom = () => {
    return (
      <>
      <div className="sticky top-0">
        <div className="bg-gray-900 z-20 shadow-sm w-full h-[85px] bg-opacity-50 absolute flex text-white text-[16px]">
          <ul className="flex flex-row space-x-2 items-center pl-[33px] w-full justify-between pr-[76px]">
            <li><a><Image src={logo}/></a></li>
            <li><a>About</a></li>
            <li><a>Admissions</a></li>
            <li><a>Academics</a></li>
            <li><a>Career Development Center</a></li>
            <li><a>Facilities</a></li>
            <li><a>Campus Life</a></li>
            <li><a>Research</a></li>
          </ul>
        </div>
      </div>
      </>
    );
  };
  
  export default NavbarBottom;
  