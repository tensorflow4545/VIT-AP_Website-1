import {
    AiFillLinkedin,
    AiFillYoutube,
    AiFillTwitterCircle,
  } from "react-icons/ai";
  import { BiLogoInstagramAlt, BiLogoFacebookCircle } from "react-icons/bi";
  import { FiArrowUpRight } from "react-icons/fi";
  import { BsArrowUpRight } from "react-icons/bs";
  import Image from "next/image";
  import "../style/footer.css";

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
                  <a className="creditlink">Non- Discrimination</a>
                  <a className="creditlink">Accessibility</a>
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
              <p className="copytext pl-[80px] pt-[20px]">© VIT-AP University</p>
           </div>
           <div className="basis">
           <p className="credittext">
                    Crafted with Passion at VIT-AP University by Website Team︎
                  </p>
           </div>
           </div>
        </div>
      </>
    );
  }
  
