import React from "react";
import Image from "next/image";
import banner from "../../assets/images/Events/banner2.png";
import img1 from "../../assets/images/GRC/img1.png";
import img2 from "../../assets/images/GRC/img2.png";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";

const GRC = () => {
  return (
    <>
      <div>
        <Image src={banner} className="w-full" />
        <p className="text-[44px] font-Emilo text-[#650010] mt-10 ml-[27%] font-bold">
          Grievance Redressal Committee (GRC)
        </p>
        <p className="mt-[15px] w-[1224px] text-center ml-[10%] font-Montserrant">
          As per UGC regulations, the Grievance Redressal Committee and
          Ombudsman has been constituted for the purpose of redressal of
          grievances including the cases of caste based discrimination.
        </p>
        <p className="ml-[10%] font-Montserrant font-bold mt-[30px] text-[22px]">
          In accordance to the above the following are nominated as the members
          of the committee.
        </p>
        <table className="w-[1224px] ml-[10%] border mt-[15px]">
          <tr className="h-[80px] text-[30px] font-Emilo text-white bg-[#5C0E14]">
            <th>Name</th>
            <th>School/Dept</th>
            <th>Role</th>
          </tr>
          <tr className="text-center h-[80px] text-[24px] font-Montserrant bg-[#F9C6CB80]">
            <td>Dr. Hari Seetha</td>
            <td>SCOPE</td>
            <td>Chairman</td>
          </tr>
          <tr className="text-center h-[80px] text-[24px] font-Montserrant">
            <td>Dr. Hari Seetha</td>
            <td>SCOPE</td>
            <td>Chairman</td>
          </tr>
          <tr className="text-center h-[80px] text-[24px] font-Montserrant bg-[#F9C6CB80]">
            <td>Dr. Hari Seetha</td>
            <td>SCOPE</td>
            <td>Chairman</td>
          </tr>
          <tr className="text-center h-[80px] text-[24px] font-Montserrant">
            <td>Dr. Hari Seetha</td>
            <td>SCOPE</td>
            <td>Chairman</td>
          </tr>
          <tr className="text-center h-[80px] text-[24px] font-Montserrant bg-[#F9C6CB80]">
            <td>Dr. Hari Seetha</td>
            <td>SCOPE</td>
            <td>Chairman</td>
          </tr>
          <tr className="text-center h-[80px] text-[24px] font-Montserrant">
            <td>Dr. Hari Seetha</td>
            <td>SCOPE</td>
            <td>Chairman</td>
          </tr>
          <tr className="text-center h-[80px] text-[24px] font-Montserrant bg-[#F9C6CB80]">
            <td>Dr. Hari Seetha</td>
            <td>SCOPE</td>
            <td>Chairman</td>
          </tr>
          <tr className="text-center h-[80px] text-[24px] font-Montserrant">
            <td>Dr. Hari Seetha</td>
            <td>SCOPE</td>
            <td>Chairman</td>
          </tr>
          <tr className="text-center h-[80px] text-[24px] font-Montserrant bg-[#F9C6CB80]">
            <td>Dr. Hari Seetha</td>
            <td>SCOPE</td>
            <td>Chairman</td>
          </tr>
          <tr className="text-center h-[80px] text-[24px] font-Montserrant">
            <td>Dr. Hari Seetha</td>
            <td>SCOPE</td>
            <td>Chairman</td>
          </tr>
        </table>
        <p className="font-bold mt-[32px] text-[22px] font-Montserrant ml-[6%]">
          As per the UGC Regulations called as “Redress of Grievances of
          Students, 2023” defines Grievance as follows
        </p>
        <div className="flex ml-[6%] mt-[36px]">
          <div className="font-Montserrant w-[700px] text-[22px]">
            <p className="mb-[15px]">
              ✧ making admission contrary to merit determined in accordance with
              the declared admission policy of the institute;
            </p>
            <p className="mb-[15px]">
              ✧ irregularity in the admission policy is adopted by the
              institute;
            </p>
            <p className="mb-[15px]">
              ✧ refusing admission in accordance with the declared admission
              policy of the institute;
            </p>
            <p className="mb-[15px]">
              ✧ non publication of prospectus, as specified;
            </p>
            <p className="mb-[15px]">
              ✧ publishing any information in the prospectus, which is false or
              misleading and not based on facts;
            </p>
            <p className="mb-[15px]">
              ✧ withhold or refuse to return any document in the form of
              certificates of degree, diploma or any other award or other
              document deposited with it by a person for the purpose of seeding
              admission in such institution, with a view to induce or compel
              such a person to pay any fee or fees in respect of any course or
              program of study which such person does not intend to pursue;
            </p>
            <p className="mb-[15px]">
              ✧ non transparent or unfair evaluation practices;
            </p>
            <p className="mb-[15px]">
              ✧ on provision of student amenities as may have been promised or
              required to be provided by the institution;
            </p>
          </div>
          <Image src={img1} width={620} height={500} className="ml-[25px]" />
        </div>
        <div className="flex ml-[6%] mt-[36px]">
          <Image src={img2} width={500} height={500} />
          <div className="font-Montserrant w-[700px] text-[22px] ml-[76px]">
            <p className="mb-[15px]">
              ✧ demand of money in excess of that specified in the declared
              admission policy or approved by the competent authority to be
              charged by such institution;
            </p>
            <p className="mb-[15px]">
              ✧ breach of the policy for reservation in admission as may be
              applicable;
            </p>
            <p className="mb-[15px]">
              ✧ complaints, of alleged discrimination of students, from the
              scheduled castes, the scheduled tribes, other backward classes,
              women, minority or disabled categories;
            </p>
            <p className="mb-[15px]">
              ✧ non-payment or delay in payment of scholarships to any student
              that such institution is committed, under the conditions imposed
              by university grants commission, or by any other authority;
            </p>
            <p className="mb-[15px]">
              ✧ delay in conduct of examinations or declaration of results
              beyond that specified in the academic calendar;
            </p>
            <p className="mb-[15px]">
              ✧ denial of quality education as promised at the time of admission
              or required to be provided;
            </p>
            <p className="mb-[15px]">
              ✧ Complaints not listed above will be dealt case specific and the
              chairman has the discretion to consider/ reject it as a grievance.
            </p>
          </div>
        </div>
        <div className="bg-[#E6CFCF] h-[669px] mt-[70px] flex rounded-tr-3xl rounded-bl-3xl">
          <div className="font-Montserrant text-[22px] ml-[5%]">
            <p className="font-Emilo text-[30px] mt-[96px] font-bold mb-[15px]">
              Scope and Responsibilities of the Committee:
            </p>
            <p className="mb-[15px]">
              ✧ The Grievance Redressal Committee shall fix a date for hearing
              the complaint, which shall be communicated to the chairman of the
              committee and the aggrieved person either in writing or
              electronically, as may be feasible
            </p>
            <p className="mb-[15px]">
              ✧ The quorum for the meeting including the Chairperson, but
              excluding the special invitee, shall be three
            </p>
            <p className="mb-[15px]">
              ✧ The term of Chairperson and Members is for a period of two years
              and that of special invitee is one year
            </p>
            <p className="mb-[15px]">
              ✧ An aggrieved student/ person may appear either in person or
              represented by such person as may be authorized to present his/
              her case
            </p>
            <p className="mb-[15px]">
              ✧ Grievance Redressal Committee shall be guided by the principles
              of natural justice while hearing the grievances
            </p>
            <p className="mb-[15px]">
              ✧ Grievance Redressal Committee shall ensure disposal of every
              application as speedily as possible not later than a month and
              preferably within ten days of receipt of the grievance
            </p>
            <p className="mb-[15px]">
              ✧ On the conclusion of proceedings, the Grievance Redressal
              Committee shall pass such order, with reasons for such order, as
              may be deemed fit to redress the grievance and provide relief as
              may be desirable to the affected person/ party at issue
            </p>
            <p className="mb-[15px]">
              ✧ The order so passed shall be provided to the aggrieved student/
              person and the University will comply with the order
            </p>
          </div>
        </div>
        <p className="text-[55px] mt-[96px] ml-[5%] font-Emilo">
          Reporting of Cases:
        </p>
        <p className="text-[22px] mt-[15px] ml-[5%] font-Montserrant">
          The aforementioned grievances may be reported to the Chairman of the
          committee by any means and additionally through the following email
          address grievance.redressal@vitap.ac.in{" "}
        </p>
        <div className="w-[1016px] h-[563px] shadow-2xl mt-[36px] ml-[17%] border flex">
          <div className="w-[440px] ml-[80px]">
            <p className="mt-[96px] text-[67px] font-Emilo">Contact Us</p>
            <p className="font-Montserrant text-[22px]">
              Feel free to contact us at any time we will get back to you as
              soon as we can
            </p>
            <form>
              <div className="mt-[15px] font-Montserrant">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-b-2 w-full focus:outline-none"
                />
              </div>

              <div className="mt-[15px] font-Montserrant">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border-b-2 w-full focus:outline-none"
                />
              </div>

              <div className="mt-[15px] font-Montserrant">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="border-b-2 w-full focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="font-Montserrant text-white bg-[#650010] w-full h-[48px]"
              >
                Send
              </button>
            </form>
          </div>
          <div className="w-[241px] bg-[#5C0E14] h-[563px] ml-[253px]"></div>
          <div className="w-[360px] h-[369px] ml-[578px] mt-[97px] bg-[#F9C6CB] absolute rounded">
            <p className="font-Montserrant mt-[67px] ml-[20px] font-bold text-[22px] pb-[15px]">
              Info
            </p>
            <div className="text-[#650010] flex text-[20px] pb-[35px] ml-[20px] items-center">
              <RxEnvelopeClosed />
              <p className="ml-[10px]">grievance.redressal@vitap.ac.in</p>
            </div>
            <div className="text-[#650010] flex text-[20px] pb-[35px] ml-[20px] items-center">
              <FiPhone />
              <p className="ml-[10px]">+91 8333909617</p>
            </div>
            <div className="text-[#650010] flex text-[20px] pb-[35px] ml-[20px] items-center">
              <HiMiniBuildingOffice2 />
              <p className="ml-[10px]">AB-1 G-01</p>
            </div>
            <div className="text-[#650010] flex text-[20px] ml-[20px] items-center">
              <FaRegClock />
              <p className="ml-[10px]">09:00-18:00</p>
            </div>
          </div>
        </div>
        <div className="w-[1224px] ml-[5%]">
          <p className="mt-[166px] text-[55px] font-Emilo">
            Role of Ombudsperson:
          </p>
          <p className="font-Montserrant text-[22px]">
            If in case a student/ person is not convinced by the decision given
            by the committee; he/ she is at liberty to approach the ombudsman
            for further trail of hearing. The ombudsman can resolve the issue by
            following the procedure specified above for the grievance Redressal
            committee. If in case the ombudsman identifies the complaint to be
            false/ frivolous appropriate action is suggested against the
            complainant.
          </p>
          <p className="font-Montserrant text-[22px] mt-[10px]">
            The Ombudsperson for GRC is Dr. Chandini Stephens. She can be
            contacted on{" "}
            <Link
              href="mailto:ombudsman.grc@vitap.ac.in"
              className="underline text-[#5C0E14]"
            >
              ombudsman.grc@vitap.ac.in
            </Link>
          </p>
          <p className="font-Emilo text-[55px] mt-[36px]">
            Office Order: Click Here
          </p>
        </div>
        <div className="mt-[194px] w-screen h-[248px] bg-[#741D26] flex">
          <div className="w-[760px] mt-[75px] ml-[313px]">
            <p className="text-[26px] text-[#FDFEFF] font-Emilo">
              “ Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit
              amet consectetur ”
            </p>
            <p className="text-[20px] text-white font-Montserrant float-right">
              -Jagdish Mudiganti
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GRC;
