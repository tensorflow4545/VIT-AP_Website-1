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
        <div className="sm:grid hidden w-full ">
          <div className="footer  ">
            <div className="flex flex-row ">
              <div className="footer1 lg:basis-3/4 md:basis-1">
                <div className="flex flex-row space-x-[75px]">
                  <div className="part1">
                    <p className="heading">Quick Links</p>
                    <ul className="list">
                      <li className="listitem">Careers</li>
                      <li className="listitem">Gallery</li>
                      <li className="listitem">Hostel</li>
                      <li className="listitem">Transport</li>
                      <li className="listitem">Policies</li>
                    </ul>
                  </div>
                  <div className="part2">
                    <p className="heading">VIT Connect</p>
                    <ul className="list">
                      <li className="listitem">V-TOP Login</li>
                      <li className="listitem">V-TOP Parent Login </li>
                      <li className="listitem">Mail</li>
                      <li className="listitem">Alumni</li>
                      <li className="listitem">Contact Us</li>
                    </ul>
                  </div>
                  <div className="part3">
                    <p className="heading">Ranking & Accereditation</p>
                    <ul className="list">
                      <li className="listitem">RAAC</li>
                      <li className="listitem">NACC</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row space-x-[75px]">
                  <div className="part1">
                    <p className="heading">Research</p>
                    <ul className="list">
                      <li className="listitem">Centres</li>
                      <li className="listitem">Google Scholars</li>
                      <li className="listitem">News</li>
                      <li className="listitem">Patents</li>
                      <li className="listitem">Projects</li>
                      <li className="listitem">Publications</li>
                    </ul>
                  </div>
                  <div className="part2">
                    <p className="heading">Academics</p>
                    <ul className="list">
                      <li className="listitem">Programes Offered</li>
                      <li className="listitem">Academic Calendar</li>
                      <li className="listitem">Application Process</li>
                      <li className="listitem">Fee Structure</li>
                      <li className="listitem">Scholarship</li>
                      <li className="listitem">IQAC</li>
                    </ul>
                  </div>
                  <div className="part3">
                    <p className="heading">Information</p>
                    <ul className="list">
                      <li className="listitem">Public Note:University Act</li>
                      <li className="listitem">Forms</li>
                      <li className="listitem">Directory</li>
                      <li className="listitem">Feedback</li>
                      <li className="listitem">Academic Bank of Credits(ABC)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer2 w-full md:w-full basis-1/4">
                <div>
                  <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.6106982247265!2d80.49881150582188!3d16.495238672470556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1696503206483!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="address">
                  <p className="addressheading">VIT-AP University, Amaravathi</p>
                  <div className="addresstext">
                    <p>Near Vijayawada - 522237,</p>
                    <p>AndhraPradesh.</p>
                    <p>Phone: 040-29559555</p>
                    <p>Email: adminoffice@vitap.ac.in</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <a
                    href="https://www.google.com/maps/search/vit+ap+university/@16.4943189,80.4961346,17z/data=!3m1!4b1?entry=ttu"
                    className="reach"
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

          <div className="credit lg:w-full md:w-max ">
            <div className="flex w-full">
              <div className="basis mt-2 mr-3 pr-2">
                <div className="mt-[10px] mr-[10px]">
                  <Image
                    src="/unilogo.png"
                    width="200"
                    height="250"
                    className="object-cover w-[150px] h-[50px]"
                  ></Image>
                </div>
              </div>
              <div className="basis links">
                <div className="link pl-5">
                  <a className="creditlink">VIT-AP Home</a>
                  <a className="creditlink">Maps & Directions</a>
                  <a className="creditlink">Search VIT-AP</a>
                  <a className="creditlink">Emergency Info</a>
                </div>
                <div className="link  pl-5">
                  <a className="creditlink">Privacy</a>
                  <a className="creditlink">Terms of Use</a>
                  <a className="creditlink">Copyright</a>
                  <a className="creditlink">Trademarks</a>
                </div>
              </div>
              
              <div className="basis">
                <div className="icons pt-5 flex w-full">
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
                  
                    <FaXTwitter size={24}/>
                  </a>
                </div>
              </div>
            </div>
            </div>
          <div className="creditfoot flex pl-[80px] pb-[5px] pt-[20px]">
           <div className="basis">
              <p className="copytext pl-[40px] pt-[20px]">© VIT-AP University</p>
           </div>
           <div className="basis">
           <p className="credittext">
                    Crafted with Passion at VIT-AP University by Website Team︎
                  </p>
           </div>
           </div>
        </div>

         {/* Mobile View */}
        <div class="sm:hidden flex relative">
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
                    <BiLogoFacebookCircle class="bg-purple-300"  size={29} />
                  </a>
          </div>
          <div class="basis pr-[10px]">
          <a href="https://www.youtube.com/c/VITAP" >
                    <AiFillYoutube class="bg-purple-300"  size={30} />
                  </a>
          </div>
          <div class="basis">
          <a
                    href="https://twitter.com/VITAPuniversity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  
                  >
                  
                    <FaXTwitter class="bg-purple-300" size={29}/>
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
            <p class="text-white items-center text-center text-[18px] font-semibold text-emilio py-[10px]">Crafted With Passion At VIT-AP University</p>
           </div>
          </div>
        </div>
      </>
    );
  }
  
