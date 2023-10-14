import { AiFillLinkedin,AiFillYoutube,AiFillTwitterCircle} from 'react-icons/ai'
import {BiLogoInstagramAlt,BiLogoFacebookCircle} from 'react-icons/bi'
import { BsArrowUpRight} from 'react-icons/bs';
import Image from 'next/image';
export default function Footer(){
    
    return(
        <>  
           {/* DESKTOP VIEW */}
           <div class="sm:grid hidden w-full">
          <div class="footer ">
             
             <div class="flex flex-row">
             <div class="footer1 basis-3/4">
             <div class="flex flex-row">
               <div class="part1">
                <p class="heading">Quick Links</p>
                <ul class="list">
                    <li class="listitem">Academics</li>
                    <li class="listitem">Programs Offered</li>   
                    <li class="listitem">Careers</li>
                    <li class="listitem">Gallery</li>
                    <li class="listitem">Time of Service</li>
                    <li class="listitem">Privacy Policy</li>
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
                    <li class="listitem">Rankings</li>
                    <li class="listitem">Accreditation </li>   
                    <li class="listitem">Leadership</li>
                    <li class="listitem">Newsletter</li>
                    <li class="listitem">Press Media</li>
                    <li class="listitem">Governance</li>
                </ul>
                </div>
               
                </div>
                <div class="flex flex-row">
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
                <p class="heading">Programs</p>
                <ul class="list">
                    <li class="listitem">Undergraduate</li>
                    <li class="listitem">Postgraduate</li>   
                    <li class="listitem">Integrated Degree</li>
                    <li class="listitem"> Doctoral</li>
                    <li class="listitem">International</li>
                </ul>
                </div>
                <div class="part3">
                <p class="heading">Information</p>
                <ul class="list">
                    <li class="listitem">Public Note</li>
                    <li class="listitem">Academic Calendar</li>   
                    <li class="listitem">Campus Maps</li>
                    <li class="listitem">Application Process</li>
                    <li class="listitem">Academic Bank of Credits</li>
                    <li class="listitem">IQAC</li>
                </ul>
                </div>
               
                </div>
             </div>
             <div class="footer2 w-full md:w-full basis-1/4">
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
             

             <div class="credit lg:w-full md:w-max ">
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

                {/* MOBILE VIEW */}
                <div class="sm:hidden flex flex-column">

                    <div class="mcredit w-max h-max">
                    {/* <div><Image class="unilogo " src="/unilogo.png" width="240" height="100"></Image></div> */}
                    <div class="icons pl-14 pt-8"> 
                        <a href="https://www.instagram.com/vitap.university/?hl=en" class="socialicon"><BiLogoInstagramAlt size={30}/></a>
                        <a href ="https://www.linkedin.com/school/vitap-university/?originalSubdomain=in"class="socialicon"><AiFillLinkedin size={30}/></a>
                        <a href ="https://www.facebook.com/vitap.university/"class="socialicon"><BiLogoFacebookCircle size={30}/></a>
                        <a href ="https://www.youtube.com/c/VITAP"class="socialicon"><AiFillYoutube size={30}/></a>
                        <a href ="https://twitter.com/VITAPuniversity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"class="socialicon"><AiFillTwitterCircle size={30}/></a>
                    </div>
                <div class="quicklink pt-20 content-centre">
                <div class="flex flex-row">
                <div class="part1">
                <p class="heading">Quick Links</p>
                <ul class="list">
                    <li class="listitem">Academics</li>
                    <li class="listitem">Programs Offered</li>   
                    <li class="listitem">Careers</li>
                    <li class="listitem">Gallery</li>
                    <li class="listitem">Time of Service</li>
                    <li class="listitem">Privacy Policy</li>
                </ul>
                </div>
                <div class="part2">
                <p class="heading">Quick Links</p>
                <ul class="list">
                    <li class="listitem">V-TOP Login</li>
                    <li class="listitem">V-TOP Parent Login </li>   
                    <li class="listitem">Mail</li>
                    <li class="listitem">Alumni</li>
                    <li class="listitem">Contact Us</li>
                </ul>
                </div>
                
               
                </div>
                <div class="flex flex-row">
               <div class="part1">
                <p class="heading">Quick Links</p>
                <ul class="list">
                <li class="listitem">Rankings</li>
                    <li class="listitem">Accreditation </li>   
                    <li class="listitem">Leadership</li>
                    <li class="listitem">Newsletter</li>
                    <li class="listitem">Press Media</li>
                    <li class="listitem">Governance</li>
                </ul>
                </div>
                <div class="part2">
                <p class="heading">Quick Links</p>
                <ul class="list">
                <li class="listitem">Centres</li>
                    <li class="listitem">Google Scholars</li>   
                    <li class="listitem">News</li>
                    <li class="listitem">Patents</li>
                    <li class="listitem">Projects</li>
                    <li class="listitem">Publications</li>
                </ul>
                </div>
               
                </div>

                <div class="flex flex-row">
               <div class="part1">
                <p class="heading">Quick Links</p>
                <ul class="list">
                    <li class="listitem">Undergraduate</li>
                    <li class="listitem">Postgraduate</li>   
                    <li class="listitem">Integrated Degree</li>
                    <li class="listitem"> Doctoral</li>
                    <li class="listitem">International</li>
                </ul>
                </div>
                <div class="part2">
                <p class="heading">Quick Links</p>
                <ul class="list">
                <li class="listitem">Public Note</li>
                    <li class="listitem">Academic Calendar</li>   
                    <li class="listitem">Campus Maps</li>
                    <li class="listitem">Application Process</li>
                    <li class="listitem">Academic Bank of Credits</li>
                    <li class="listitem">IQAC</li>
                </ul>
                </div>
                </div>
                </div>


                </div>
                </div>
        </>
    )
}
