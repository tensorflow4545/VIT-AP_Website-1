import Image from 'next/image';
import "./placements.css"
export default function placements() {
  return (
    <>
      {/* Desktop view */}
      <div class="placements sm:flex hidden">
        <div class="lg:flex md:flex flex-row">
          <div class="basis-1/2">
            <div class="numbers pr-40">
              <h1 class="numberheader" >Placement Spotlight</h1>
              <p class="numbertext text-justify">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
                Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div class="stats">
              <div class="flex flex-row">
                <div class="basis-1/2">
                  <div class="figures">
                    <p class="statnumber pl-10">1560</p>
                    <p class="statdescription">Total Offers</p>
                  </div>
                  <div class="figures">
                    <p class="statnumber pl-10">360</p>
                    <p class="statdescription">Dream Offers</p>
                  </div>
                  <div class="figures">
                    <p class="statnumber">34.4 LPA</p>
                    <p class="statdescription">Highest Package</p>
                  </div>
                  <div class="figures">
                    <p class="statnumber pl-10">90%</p>
                    <p class="statdescription">Placements</p>
                  </div>
                </div>
                <div class="basis-1/2">
                  <div class="figures1">
                    <p class="statnumber pl-10">384</p>
                    <p class="statdescription">Super Dream Offers</p>
                  </div>
                  <div class="figures1">
                    <p class="statnumber pl-10">816</p>
                    <p class="statdescription">Regular Offers</p>
                  </div>
                  <div class="figures1">
                    <p class="statnumber">7.2 LPA</p>
                    <p class="statdescription">Average Package</p>
                  </div>
                  <div class="figures1">
                    <p class="statnumber pl-12">10</p>
                    <p class="statdescription">International Offers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container basis-1/2">
            <div class="slider"></div>
          </div>

        </div>
      </div>
    </>
  )
}
