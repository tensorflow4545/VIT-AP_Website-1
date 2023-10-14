import { Tb360View} from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import config from "@/config";
// import axios from 'axios';


// const fetchNavlinks = async () => {
//   try {
//     const response = await axios.get(`${config.api}/api/navbarlinks/`, {
//       headers: {
//         Authorization: `Bearer ${process.env.API_TOKEN}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error; // Rethrow the error for handling at a higher level
//   }
// };

const NavbarUpper = async () => {

  // const navlinksdata = await fetchNavlinks();
  // const navlinks = navlinksdata.data;
  // console.log(navlinks);

  return (
    <>
      <div className="z-auto w-full h-[60px] text-white bg-primary md:flex ls:flex sm:hidden justify-between items-center px-[37px]">
      
          <ul className="flex  h-[20px] md:space-x-[31px] ls:space-x-[20px] text-[14px] ">
            {/* {navlinks.map((item) =>{
              return(
                <>
                 <li><a href={item.attributes.link} target="#">{item.attributes.navitems}</a></li>
                </>
              )
            })}
            <li>AP</li> */}
            <li>Vellore</li>
            <li>Chennai</li>
            <li>Bhopal</li>
            <li>Banglore</li>

          </ul>
          {/* <div className=" h-[20px] space-x-[31px] text-[14px]">

          </div> */}

          <ul className="flex h-[20px] md:space-x-[31px] ls:space-x-[20px]  text-[14px] ">
            <li><a>How to reach VIT-AP</a></li>
            <li><a><FiSearch size={20}/></a></li>
            <li><a><Tb360View size={25}/></a></li>
          </ul>

        </div>

    </>
  );
};

export default NavbarUpper;
