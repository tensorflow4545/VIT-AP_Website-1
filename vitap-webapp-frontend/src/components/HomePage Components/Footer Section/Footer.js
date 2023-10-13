import { AiFillLinkedin,AiFillYoutube,AiFillTwitterCircle} from 'react-icons/ai'
import {BiLogoInstagramAlt,BiLogoFacebookCircle} from 'react-icons/bi'
import { BsArrowUpRight} from 'react-icons/bs';
import "./footer.css"
import Image from 'next/image';
export default function Footer(){
    
    return(
        <>  

        <div class="w-full">
          <div class="footer">
             
             <div class="flex flex-row">
             <div class="footer1 basis-3/4">
             <div class="flex flex-row">
               <div class="part1">
                <p class="heading">Quick Links</p>
                <ul>
                    <li>Academics</li>
                    <li>Programs Offered</li>   
                    <li>Careers</li>
                    <li>Gallery</li>
                    <li>Time of Service</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
                <div class="part2">
                <p class="heading">Quick Links</p>
                <ul>
                    <li>V-TOP Login</li>
                    <li>V-TOP Parent Login </li>   
                    <li>Mail</li>
                    <li>Alumni</li>
                    <li>Contact Us</li>
                </ul>
                </div>
                <div class="part3">
                <p class="heading">Quick Links</p>
                <ul>
                    <li>Rankings</li>
                    <li>Accreditation </li>   
                    <li>Leadership</li>
                    <li>Newsletter</li>
                    <li>Press Media</li>
                    <li>Governance</li>
                </ul>
                </div>
               
                </div>
                <div class="flex flex-row">
               <div class="part1">
                <p class="heading">Quick Links</p>
                <ul>
                    <li>Centres</li>
                    <li>Google Scholars</li>   
                    <li>News</li>
                    <li>Patents</li>
                    <li>Projects</li>
                    <li>Publications</li>
                </ul>
                </div>
                <div class="part2">
                <p class="heading">Quick Links</p>
                <ul>
                    <li>Undergraduate</li>
                    <li>Postgraduate</li>   
                    <li>Integrated Degree</li>
                    <li> Doctoral</li>
                    <li>International</li>
                </ul>
                </div>
                <div class="part3">
                <p class="heading">Quick Links</p>
                <ul>
                    <li>Public Note</li>
                    <li>Academic Calendar</li>   
                    <li>Campus Maps</li>
                    <li>Application Process</li>
                    <li>Academic Bank of Credits</li>
                    <li>IQAC</li>
                </ul>
                </div>
               
                </div>
             </div>
             <div class="footer2 basis-1/4">
                  <div>
                  <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.6106982247265!2d80.49881150582188!3d16.495238672470556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1696503206483!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  <div class="address">
                     <p class="addressheading">VIT-AP University, Amaravathi</p>
                     <div  class="addresstext">
                     <p>Near Vijayawada - 522237,</p>
                     <p>AndhraPradesh.</p>   
                     <p>Phone: 040-29559555</p>    
                     <p>Email: adminoffice@vitap.ac.in</p>
                    </div>
                  </div>
                  <div class="flex flex-row"> 
                  <a href="https://www.google.com/maps/search/vit+ap+university/@16.4943189,80.4961346,17z/data=!3m1!4b1?entry=ttu" class="reach" >HOW TO REACH VIT-AP</a>
                  <a href="https://www.google.com/maps/search/vit+ap+university/@16.4943189,80.4961346,17z/data=!3m1!4b1?entry=ttu"><BsArrowUpRight size={20}/></a>
                  </div>
                  
             </div>
             </div>
             </div>
             

             <div class="credit">
             <div class="flex flex-row">
             <div class="basis">
             <div class="pt-4 pb-5"><Image class="unilogo " src="/unilogo.png" width="240" height="100"></Image></div>
             <p class="copytext">© VIT-AP University</p>
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
                    <div class="credittext">
                        <p >Crafted with Passion at VIT-AP University by Website Team︎</p>
                    </div>
              </div>
                    <div class="basis">
                    <div class="icons pt-5"> 
                        <a href="https://www.instagram.com/vitap.university/?hl=en" class="socialicon"><BiLogoInstagramAlt size={30}/></a>
                        <a href ="https://www.linkedin.com/school/vitap-university/?originalSubdomain=in"class="socialicon"><AiFillLinkedin size={30}/></a>
                        <a href ="https://www.facebook.com/vitap.university/"class="socialicon"><BiLogoFacebookCircle size={30}/></a>
                        <a href ="https://www.youtube.com/c/VITAP"class="socialicon"><AiFillYoutube size={30}/></a>
                        <a href ="https://twitter.com/VITAPuniversity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"class="socialicon"><AiFillTwitterCircle size={30}/></a>
                    </div>
                    </div>
                </div>
                </div>
              </div>
        </>
    )
}
