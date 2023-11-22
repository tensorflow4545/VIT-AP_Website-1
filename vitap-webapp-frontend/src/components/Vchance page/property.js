import style from "./property.module.css";

export default function property(){
    return(
        <>
           <div class="w-full h-max bg-white px-[108px]">
              
              <div>
                <h1 class="text-red-900 text-[48px] font-[600px] pb-[15px]">“Confidentiality is a delicate bargain of trust.”</h1>
                <p class="text-black text-[20px] font-[400px]">Confidentiality in counseling creates a space where the client can explore sensitive subjects in the knowledge that the counselor will not repeat or misuse the information discussed outside of the counseling room. For the counselor, maintaining confidentiality within certain limitations is an ethical responsibility, and it is part of what makes counseling different from other relationships.
                Your privacy is of utmost importance to us. All counseling sessions are strictly confidential, and information shared during sessions will remain within the counseling center.</p>
              </div>


               {/* new description */}
               <div class="lg:flex lg:flex-row pt-[150px]">
               {/* Description div */}
               <div class="basis-1/2 md:pb-[40px]">
               <h1 class="font-bold text-[48px] font-emilie text-red-900 pb-[20px]">Appointment And Accessibility </h1>
               <p class="text-black text-[20px] font-[400px]">Getting in touch with us is simple. Students, faculty, and staff can reach out for counseling on an appointment basis through email. The counselors are available on an appointment basis from 9am to 6pm during Tuesday to Saturday. We are committed to making our services accessible and inclusive for all members of the university community.
                 At Vellore Institute of Technology Andhra Pradesh (VIT-AP), the counselors are experienced and trained to address a wide range of concerns. Whether you’re facing academic challenges, struggling with personal issues, or simply need someone to talk to, our team is here to lend a listening ear, offer guidance and are ready to assist you in your journey towards self-discovery and empowerment.</p>
               </div>
               {/* Background image div */}
               <div class={`basis-1/2 w-[600px] h-[350px] relative`}>
                   <div class={`rounded-lg w-[500px] h-[300px] relative float-right z-1 rounded-lg ${style.desc5}`}>
                   
                   </div>
                   <div class={`rounded-lg w-[300px] h-[150px] absolute bottom-0 left-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.desc55}`}>

                   </div>
               </div>
               </div>


           </div>
        </>
    )

}