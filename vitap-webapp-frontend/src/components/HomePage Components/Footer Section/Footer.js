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
      <div class="sm:grid hidden w-full ">
        <div class="footer  ">
          <div class="flex flex-row ">
            <div class="footer1 basis-3/4 ">
              <div class="flex flex-row space-x-[75px]">
                <div class="part1">
                  <p class="heading">Quick Links</p>
                  <ul class="list">
                    <li class="listitem">Careers</li>
                    <li class="listitem">Gallery</li>
                    <li class="listitem">Hostel</li>
                    <li class="listitem">Transport</li>
                    <li class="listitem">Policies</li>
                  </ul>
                </div>
                <div class="part2">
                  <p class="heading">VIT Connect</p>
                  <ul class="list">
                    <li class="listitem">V-TOP Login</li>
                    <li class="listitem">V-TOP Parent Login </li>
                    <li class="listitem">Mail</li>
                    <li class="listitem">Alumni</li>
                    <li class="listitem">Contact Us</li>
                  </ul>
                </div>
                <div class="part3">
                  <p class="heading">Ranking & Accereditation</p>
                  <ul class="list">
                    <li class="listitem">RAAC</li>
                    <li class="listitem">NACC</li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-row space-x-[75px]">
                <div class="part1">
                  <p class="heading">Research</p>
                  <ul class="list">
                    <li class="listitem">Centres</li>
                    <li class="listitem">Google Scholars</li>
                    <li class="listitem">News</li>
                    <li class="listitem">Patents</li>
                    <li class="listitem">Projects</li>
                    <li class="listitem">Publications</li>
                  </ul>
                </div>
                <div class="part2">
                  <p class="heading">Academics</p>
                  <ul class="list">
                    <li class="listitem">Programes Offered</li>
                    <li class="listitem">Academic Calendar</li>
                    <li class="listitem">Application Process</li>
                    <li class="listitem">Fee Structure</li>
                    <li class="listitem">Scholarship</li>
                    <li class="listitem">IQAC</li>
                  </ul>
                </div>
                <div class="part3">
                  <p class="heading">Information</p>
                  <ul class="list">
                    <li class="listitem">Public Note:University Act</li>
                    <li class="listitem">Forms</li>
                    <li class="listitem">Directory</li>
                    <li class="listitem">Feedback</li>
                    <li class="listitem">Academic Bank of Credits(ABC)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer2 w-full md:w-full basis-1/4">
              <div>
                <iframe
                  class="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.6106982247265!2d80.49881150582188!3d16.495238672470556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1696503206483!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="address">
                <p class="addressheading">VIT-AP University, Amaravathi</p>
                <div class="addresstext">
                  <p>Near Vijayawada - 522237,</p>
                  <p>AndhraPradesh.</p>
                  <p>Phone: 040-29559555</p>
                  <p>Email: adminoffice@vitap.ac.in</p>
                </div>
              </div>
              <div class="flex flex-row">
                <a
                  href="https://www.google.com/maps/search/vit+ap+university/@16.4943189,80.4961346,17z/data=!3m1!4b1?entry=ttu"
                  class="reach"
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

        <div class="credit lg:w-full md:w-max ">
          <div class="flex flex-row w-full">
            <div class="basis mt-2 mr-3 pr-2">
              <div className="mt-[10px] mr-[10px]">
                <Image
                  src="/unilogo.png"
                  width="200"
                  height="250"
                  className="object-cover w-[150px] h-[50px]"
                ></Image>
              </div>
              <p class="copytext pt-2 pl-2">© VIT-AP University</p>
            </div>
            <div class="basis">
              <div class="link pl-5">
                <a class="creditlink">VIT-AP Home</a>
                <a class="creditlink">Maps & Directions</a>
                <a class="creditlink">Search VIT-AP</a>
                <a class="creditlink">Emergency Info</a>
              </div>
              <div class="link  pl-5">
                <a class="creditlink">Privacy</a>
                <a class="creditlink">Terms of Use</a>
                <a class="creditlink">Copyright</a>
                <a class="creditlink">Trademarks</a>
                <a class="creditlink">Non- Discrimination</a>
                <a class="creditlink">Accessibility</a>
              </div>
              <div class="credittext pl-8">
                <p class="pt-5">
                  Crafted with Passion at VIT-AP University by Website Team︎
                </p>
              </div>
            </div>
            
            <div class="basis">
              <div class="icons pt-5 pl-[230px] flex w-full">
                <a
                  href="https://www.instagram.com/vitap.university/?hl=en"
                  class="socialicon"
                >
                  <BiLogoInstagramAlt size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/school/vitap-university/?originalSubdomain=in"
                  class="socialicon"
                >
                  <AiFillLinkedin size={30} />
                </a>
                <a
                  href="https://www.facebook.com/vitap.university/"
                  class="socialicon"
                >
                  <BiLogoFacebookCircle size={30} />
                </a>
                <a href="https://www.youtube.com/c/VITAP" class="socialicon">
                  <AiFillYoutube size={30} />
                </a>
                <a
                  href="https://twitter.com/VITAPuniversity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  class="socialicon"
                >
                
                  <FaXTwitter size={24}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
