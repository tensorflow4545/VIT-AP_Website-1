import Image from 'next/image';
import './placements.css'
export default function placements(){

    return(
        <> 
                      <div class="basis-1/2">
                      <div class="slider">
                          <div class="slid-track flex">

                              <div class="slide">
                              <Image class="img" src="/uni1.jpeg" width="500" height="400"></Image>
                              <div class="imgheading">10+</div>
                              <div class="imgtext">We have 10+ Undergraduate Programes</div>
                              </div>
                              <div class="slide1 z-10">
                              <Image class="img" src="/uni1.jpeg" width="500" height="400"></Image>
                              <div class="imgheading">10+</div>
                              <div class="imgtext">We have 10+ Undergraduate Programes</div>
                              </div>
                              <div class="slide2 z-20">
                              <Image class="img" src="/uni1.jpeg" width="500" height="400"></Image>
                              <div class="imgheading">10+</div>
                              <div class="imgtext">We have 10+ Undergraduate Programes</div>
                              </div>
                              <div class="slide3 z-30">
                              <Image class="img" src="/uni1.jpeg" width="500" height="400"></Image>
                              <div class="imgheading">10+</div>
                              <div class="imgtext">We have 10+ Undergraduate Programes</div>
                              </div>
                              <div class="slide4 z-40">
                              <Image class="img" src="/uni1.jpeg" width="500" height="400"></Image>
                              <div class="imgheading">10+</div>
                              <div class="imgtext">We have 10+ Undergraduate Programes</div>
                              </div>
                           </div>
                            </div>  
                              </div>

                      <div class="container basis-1/2">
                      <div class="slider"></div>  
                      </div>
        </>
    )
}
