import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiLogoInstagramAlt, BiLogoFacebookCircle } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="md:grid hidden w-screen ">
        <div className="w-screen h-[555px] p-[60px] pl-[110px] pr-[70px]">
          <div className="flex flex-row ">
            <div className="pt-0 pb-[20px] w-[600px] h-[467px] lg:basis-3/4 md:basis-1">
              <div className="flex flex-row space-x-[75px]">
                <div className="pr-[30px] pb-[47px]">
                  <p className="text-primary font-Emilio text-[24px] font-bold leading-[133.5%] pb-[10px]">Quick Links</p>
                  <ul className="w-[147px] h-[136px]">
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Careers</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Gallery</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Hostel</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Transport</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Policies</li>
                  </ul>
                </div>
                <div className="pr-[30px] pb-[47px]">
                  <p className="text-primary font-Emilio text-[24px] font-bold leading-[133.5%] pb-[10px]">VIT Connect</p>
                  <ul className="w-[147px] h-[136px]">
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">V-TOP Login</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">V-TOP Parent Login </li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Mail</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Alumni</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Contact Us</li>
                  </ul>
                </div>
                <div className="w-[max-content] pr-[30px] pb-[47px]">
                  <p className="text-primary font-Emilio text-[24px] font-bold leading-[133.5%] pb-[10px]">Ranking & Accereditation</p>
                  <ul className="w-[147px] h-[136px]">
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">RAAC</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">NACC</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row space-x-[75px]">
                <div className="pr-[30px] pb-[47px]">
                  <p className="text-primary font-Emilio text-[24px] font-bold leading-[133.5%] pb-[10px]">Research</p>
                  <ul className="w-[147px] h-[136px]">
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Centres</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Google Scholars</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">News</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Patents</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Projects</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Publications</li>
                  </ul>
                </div>
                <div className="pr-[30px] pb-[47px]">
                  <p className="text-primary font-Emilio text-[24px] font-bold leading-[133.5%] pb-[10px]">Academics</p>
                  <ul className="w-[147px] h-[136px]">
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Programes Offered</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Academic Calendar</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Application Process</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Fee Structure</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Scholarship</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">IQAC</li>
                  </ul>
                </div>
                <div className="w-[max-content] pr-[30px] pb-[47px]">
                  <p className="text-primary font-Emilio text-[24px] font-bold leading-[133.5%] pb-[10px]">Information</p>
                  <ul className="w-[147px] h-[136px]">
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Public Note:University Act</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Forms</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Directory</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Feedback</li>
                    <li className="text-black font-Montserrat text-[16px] font-light w-[max-content] leading-[133%] pb-[5px] hover:text-primary hover:font-semibold">Academic Bank of Credits(ABC)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pr-[25px] pt-[20px] text-right w-full md:w-full basis-1/4">
              <div>
                <iframe
                  className="w-[460px] h-[202px] pb-[30px] pr-[15px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.6106982247265!2d80.49881150582188!3d16.495238672470556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1696503206483!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex flex-col items-start gap-[18px] pb-[10px]">
                <p className="addresstext-primary font-Emilio text-[24px] font-bold leading-[133.5%] pb-[10px]">VIT-AP University, Amaravathi</p>
                <div className="text-black font-Montserrat text-[16px] font-light leading-[150%] text-left">
                  <p>Near Vijayawada - 522237,</p>
                  <p>AndhraPradesh.</p>
                  <p>Phone: 040-29559555</p>
                  <p>Email: adminoffice@vitap.ac.in</p>
                </div>
              </div>
              <div className="flex flex-row">
                <a
                  href="https://www.google.com/maps/search/vit+ap+university/@16.4943189,80.4961346,17z/data=!3m1!4b1?entry=ttu"
                  className="text-black font-Montserrate text-[20px] font-normal leading-[150%] underline pr-[5px]"
                >
                  HOW TO REACH VIT-AP
                </a>
                <a href="https://www.google.com/maps/search/vit+ap+university/@16.4943189,80.4961346,17z/data=!3m1!4b1?entry=ttu">
                  <FiArrowUpRight size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-[100px] justify-center items-center bg-[#741D26] lg:w-full md:w-max ">
          <div className="flex w-full">
            <div className="basis mt-2 mr-3 pr-2">
              <div className="pl-[140px] mt-[10px] mr-[10px]">
                <Image
                  src="/unilogo.png"
                  width="200"
                  height="250"
                  className="object-cover w-[190px] h-[50px]"
                ></Image>
              </div>
            </div>
            <div className="basis links justify-center items-center text-center relative left-[100px]">
              <div className="link pl-7">
                <a className="creditlink">VIT-AP Home</a>
                <a className="creditlink">Maps & Directions</a>
                <a className="creditlink">Search VIT-AP</a>
                <a className="creditlink">Emergency Info</a>
              </div>
              <div className="link  pl-7">
                <a className="creditlink">Privacy</a>
                <a className="creditlink">Terms of Use</a>
                <a className="creditlink">Copyright</a>
                <a className="creditlink">Trademarks</a>
                <a className="creditlink">Non- Discrimination</a>
                <a className="creditlink">Accessibility</a>
              </div>
            </div>


          </div>
        </div>
        <div className="creditfoot flex pl-[80px] pb-[5px] justify-center items-center ">
          <div className="basis">
            <p className="copytext relative right-[140px]">© VIT-AP University</p>
          </div>
          <div className="basis">
            <p className="credittext ">
              Crafted with Passion at VIT-AP University by Website Team
            </p>
          </div>
          <div className="basis">
            <div className="relative icons left-[140px] flex w-full">
              <a
                href="https://www.instagram.com/vitap.university/?hl=en"
                className="socialicon"
              >
                <BiLogoInstagramAlt size={30} />
              </a>
              <a
                href="https://www.linkedin.com/school/vitap-university/?originalSubdomain=in"
                className="socialicon"
              >
                <AiFillLinkedin size={30} />
              </a>
              <a
                href="https://www.facebook.com/vitap.university/"
                className="socialicon"
              >
                <BiLogoFacebookCircle size={30} />
              </a>
              <a href="https://www.youtube.com/c/VITAP" className="socialicon">
                <AiFillYoutube size={30} />
              </a>
              <a
                href="https://twitter.com/VITAPuniversity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                className="socialicon"
              >

                <FaXTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div class="md:hidden flex relative">
        <div class="w-full h-max">

          {/* uni logo */}
          <div class={`w-full h-max overflow-hidden flex justify-center pt-[30px] pb-[20px]`}>
            <div class={`w-[145px] h-[44px]`}>
              <Image width={145} height={44} src="/unilogom.png" alt="Uni Image" class="text-center"></Image>
            </div>
          </div>

          {/* flex */}
          <div class="flex flex-row justify-center">
            <div class="basis">
              <div >
                <p class="text-red-900 text-[15px] font-bold">Apply Now</p>
              </div>
            </div>
            <div class="basis pt-[5px] px-[40px]">
              <div class="w-[5px] h-[5px] bg-red-900 rounded">

              </div>
            </div>
            <div class="basis">
              <div>
                <p class="text-red-900 text-[15px] font-bold">Maps</p>
              </div>
            </div>
            <div class="basis pt-[5px] px-[20px]">
              <div class="w-[5px] h-[5px] bg-red-900 rounded">

              </div>
            </div>
            <div class="basis">
              <div>
                <p class="text-red-900 text-[15px] font-bold">Outreach</p>
              </div>
            </div>
          </div>

          {/* Social icons */}
          {/* flex */}
          <div class="flex flex-row w-full h-[20px] justify-center py-[17px]">
            <div class="basis pr-[10px]">
              <a
                href="https://www.instagram.com/vitap.university/?hl=en"

              >
                <BiLogoInstagramAlt class="bg-purple-300" size={30} />
              </a>
            </div>
            <div class="basis pr-[10px]">
              <a
                href="https://www.linkedin.com/school/vitap-university/?originalSubdomain=in"

              >
                <AiFillLinkedin class="bg-purple-300" size={30} />
              </a>
            </div>
            <div class="basis pr-[10px]">
              <a
                href="https://www.facebook.com/vitap.university/"

              >
                <BiLogoFacebookCircle class="bg-purple-300" size={29} />
              </a>
            </div>
            <div class="basis pr-[10px]">
              <a href="https://www.youtube.com/c/VITAP" >
                <AiFillYoutube class="bg-purple-300" size={30} />
              </a>
            </div>
            <div class="basis">
              <a
                href="https://twitter.com/VITAPuniversity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"

              >

                <FaXTwitter class="bg-purple-300" size={29} />
              </a>
            </div>
          </div>

          <div class="w-full text-center pt-[20px]"><p class="text-red-900 text-[15px] font-bold pt-[30px] pb-[20px]">Quick Links</p></div>
          {/* flex */}
          <div class="flex flex-row w-full justify-center">
            <div class="basis">
              <p class="text-[14px] text-gray-500 text-montserrat">Careers  </p>
            </div>
            <div class="basis pt-[9px] px-[10px]">
              <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
            </div>
            <div class="basis">
              <p class="text-[14px] text-gray-500 text-montserrat">Gallery</p>
            </div>
            <div class="basis pt-[9px] px-[10px]">
              <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
            </div>
            <div class="basis">
              <p class="text-[14px] text-gray-500 text-montserrat">Hostels</p>
            </div>
            <div class="basis pt-[9px] px-[10px]">
              <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
            </div>
            <div class="basis">
              <p class="text-[14px] text-gray-500 text-montserrat">Transport</p>
            </div>
            <div class="basis pt-[9px] px-[10px]">
              <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
            </div>
            <div class="basis">
              <p class="text-[14px] text-gray-500 text-montserrat">Policies</p>
            </div>
          </div>

          {/* Vit Connect */}
          <div class="w-full text-center pt-[20px]"><p class="text-red-900 text-[15px] font-bold pt-[30px] pb-[20px]">VIT Connect</p></div>
          {/* flex */}
          <div class="flex flex-row w-full justify-center">
            <div class="basis">
              <p class="text-[14px] text-gray-500 text-montserrat">VTOP Login</p>
            </div>
            <div class="basis pt-[9px] px-[10px]">
              <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
            </div>
            <div class="basis">
              <p class="text-[14px] text-gray-500 text-montserrat">Mail</p>
            </div>
            <div class="basis pt-[9px] px-[10px]">
              <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
            </div>
            <div class="basis">
              <p class="text-[14px] text-gray-500 text-montserrat">Alumni</p>
            </div>
            <div class="basis pt-[9px] px-[10px]">
              <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
            </div>
            <div class="basis">
              <p class="text-[14px] text-gray-500 text-montserrat">Contact Us</p>
            </div>
          </div>

          {/* Ranking */}
          <div>
            <div class="w-full text-center pt-[20px]"><p class="text-red-900 text-[15px] font-bold pt-[30px] pb-[20px]">Ranking & Accereditation</p></div>
            {/* flex */}
            <div class="flex flex-row w-full justify-center">
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">RAAC</p>
              </div>
              <div class="basis pt-[9px] px-[10px]">
                <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
              </div>
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">NAAC</p>
              </div>
            </div>
          </div>

          {/* Research */}
          <div>
            <div class="w-full text-center pt-[20px]"><p class="text-red-900 text-[15px] font-bold pt-[30px] pb-[20px]">Research</p></div>
            {/* flex */}
            <div class="flex flex-row w-full pb-[7px] justify-center">
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Centers  </p>
              </div>
              <div class="basis pt-[9px] px-[10px]">
                <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
              </div>
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Google Scholar</p>
              </div>
              <div class="basis pt-[9px] px-[10px]">
                <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
              </div>
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Scopus</p>
              </div>
              <div class="basis pt-[9px] px-[10px]">
                <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
              </div>
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Patents</p>
              </div>
            </div>
            {/* flex */}
            <div class="flex flex-row w-full justify-center">
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Projects</p>
              </div>
              <div class="basis pt-[9px] px-[10px]">
                <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
              </div>
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Publications</p>
              </div>
            </div>
          </div>

          {/* Program */}
          <div>
            <div class="w-full text-center pt-[20px]"><p class="text-red-900 text-[15px] font-bold pt-[30px] pb-[20px]">Programs</p></div>
            {/* flex */}
            <div class="flex flex-row w-full pb-[7px] justify-center">
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Programs Offered</p>
              </div>
              <div class="basis pt-[9px] px-[10px]">
                <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
              </div>
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Academic Calender</p>
              </div>
              <div class="basis pt-[9px] px-[10px]">
                <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
              </div>
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Application Process</p>
              </div>
            </div>
            {/* flex */}
            <div class="flex flex-row w-full justify-center">
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Scholarship</p>
              </div>
              <div class="basis pt-[9px] px-[10px]">
                <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
              </div>
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Fee Structure</p>
              </div>
              <div class="basis pt-[9px] px-[10px]">
                <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
              </div>
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">IQAC</p>
              </div>
            </div>
          </div>

          {/* Information */}
          <div class="pb-[20px]">
            <div class="w-full text-center pt-[20px]"><p class="text-red-900 text-[15px] font-bold pt-[30px] pb-[20px]">Information</p></div>
            {/* flex */}
            <div class="flex flex-row w-full pb-[7px] justify-center">
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Public Note: University Act</p>
              </div>
              <div class="basis pt-[9px] px-[10px]">
                <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
              </div>
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Forms</p>
              </div>
              <div class="basis pt-[9px] px-[10px]">
                <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
              </div>
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Directory</p>
              </div>
            </div>
            {/* flex */}
            <div class="flex flex-row w-full justify-center">
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Feedback</p>
              </div>
              <div class="basis pt-[9px] px-[10px]">
                <div class="w-[5px] h-[5px] bg-slate-900 rounded "></div>
              </div>
              <div class="basis">
                <p class="text-[14px] text-gray-500 text-montserrat">Academic Bank of Credit (ABC)</p>
              </div>
            </div>
          </div>

          {/* Credit Section */}
          <div class="w-full h-[51px] bg-red-900">
            <p class="text-white items-center text-center text-[16px] font-semibold text-emilio py-[10px]">Crafted With Passion At VIT-AP University</p>
          </div>
        </div>
      </div>
    </>
  );
}
