import style from './description.module.css';

export default function description(){
    return(
        <>

             {/* desktop view */}
             <div class="sm:flex hidden">
            <div class="w-full h-max px-[80px] bg-white">
                
                {/* new description */}
               <div class="lg:flex lg:flex-row mb-[150px]">
               <div class="lg:basis-1/2 md:jusitfy-center md:pb-[40px]">
                  <h1 class="font-bold text-[48px] font-emilie text-red-900 pb-[5px]">Counselling Services</h1>
                  <p class="text-black text-[20px] font-[400px] pb-[30px]">Welcome to V-CHANCE, Center for Healing, Awareness and <br></br> Nurturing through Counseling and Empowerment !</p>
                  <p class="text-black text-[20px] font-[400px] pb-[30px]">“The good life is a process, not a state of being. It is a direction, not a destination.” – Carl Rogers</p>
                  <p class="text-black text-[20px] font-[400px]">At V-CHANCE, we prioritize the mental well-being of our university students, faculty, and staff.</p>
               </div>
               <div class={`lg:basis-1/2 w-[600px] h-[350px] relative`}>
                   <div class={`rounded-lg w-[500px] h-[300px] relative float-right z-1 rounded-lg ${style.desc1}`}>
                   
                   </div>
                   <div class={`rounded-lg w-[300px] h-[150px] absolute bottom-0 left-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.desc11}`}>

                   </div>
               </div>
               </div>

                {/* new description */}
               <div class="lg:flex lg:flex-row mb-[150px]">
               <div class={`basis-1/2 w-[600px] h-[350px] pr-[20px] relative`}>
                   {/* Background image div */}
                   <div class={`rounded-lg w-[500px] h-[300px] relative float-left z-1 rounded-lg ${style.desc2}`}>
                    
                   </div>
                   <div class={`rounded-lg w-[300px] h-[150px] absolute bottom-0 right-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.desc22}`}>

                   </div>
               </div>
               {/* Description div */}
               <div class="basis-1/2 pl-[50px] md:pt-[40px]">
               <h1 class="font-bold text-[48px] font-emilie text-red-900 pb-[5px]">The Helping Hand</h1>
               <p class="text-black text-[20px] font-[400px] pb-[30px]">“We should make it clear that getting help isn’t a sign of weakness – it’s a sign of strength.”- Michelle Obama</p>
               <p class="text-black text-[20px] font-[400px]">The counseling services provided, are open for each student, faculty and staff members of the VIT-AP family. Our mission is to foster a nurturing environment where individuals can explore their thoughts, emotions, and challenges with the guidance of our experienced and highly trained counselors.</p>
               </div>
               </div>
                
                {/* new description */}
               <div class="lg:flex lg:flex-row mb-[150px]">
               {/* Description div */}
               <div class="basis-1/2 md:pb-[40px]">
               <h1 class="font-bold text-[48px] font-emilie text-red-900 pb-[20px]">Gains From Seeking Counseling </h1>
               <p class="text-black text-[20px] font-[400px]">The counseling services provided, are open for each student, faculty and staff members of the VIT-AP family. Our mission is to foster a nurturing environment where individuals can explore their thoughts, emotions, and challenges with the guidance of our experienced and highly trained counselors.</p>
               </div>
               {/* Background image div */}
               <div class={`basis-1/2 w-[600px] h-[350px] relative`}>
                   <div class={`rounded-lg w-[500px] h-[300px] relative float-right z-1 rounded-lg ${style.desc3}`}>
                   
                   </div>
                   <div class={`rounded-lg w-[300px] h-[150px] absolute bottom-0 left-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.desc33}`}>

                   </div>
               </div>
               </div>

               {/* new description */}
               <div class="lg:flex lg:flex-row pb-[150px]">
               {/* Description div */}
               <div class={`basis-1/2 w-[600px] h-[350px] relative`}>
                   <div class={`rounded-lg w-[500px] h-[300px] relative float-left z-1 rounded-lg ${style.desc4}`}>
                   
                   </div>
                   <div class={`rounded-lg w-[300px] h-[150px] absolute bottom-0 right-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.desc44}`}>

                   </div>
               </div>
               <div class="basis-1/2 pl-[40px] md:pt-[40px]">
               <h1 class="font-bold text-[48px] font-emilie text-red-900 pb-[20px]">Our Services</h1>
               <p class="text-black text-[20px] font-[400px]">The individual counseling sessions offer a personalized approach to address specific concerns and promote personal growth. Our counselors work collaboratively with clients to develop effective coping strategies and achieve meaningful goals. We offer a range of counseling services to cater to the diverse needs of our university community. Whether you are facing academic stress, personal challenges, relationship issues, or any other emotional difficulties, our team of professional counselors is here to assist you.</p>
               </div>
               </div>

            </div>
            </div>

            {/* Mobile view */}
            <div class="sm:hidden relative">

            <div class="w-full h-max px-[50px] pb-[20px] bg-red-200">
            <h1 class="font-extrabold text-[30px] text-center font-emilio text-red-900 pb-[25px] pt-[50px] pb-[5px]">Counselling Services</h1>
            {/* images */}
            <div class={`w-[350px] h-[170px] relative`}>
                   <div class={`rounded-lg w-[260px] h-[146px] relative float-right z-1 rounded-lg ${style.mdesc1}`}>
                   
                   </div>
                   <div class={`rounded-lg w-[156px] h-[78px] absolute bottom-0 left-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.mdesc11}`}>

                   </div>
               </div>
               {/* description */}
               <p class="text-black text-[20px] font-[400px] pt-[25px] pb-[30px]">Welcome to V-CHANCE, Center for Healing, Awareness and <br></br> Nurturing through Counseling and Empowerment !</p>
                  <p class="text-black text-[20px] font-[400px] pb-[30px]">“The good life is a process, not a state of being. It is a direction, not a destination.” – Carl Rogers</p>
                  <p class="text-black text-[20px] font-[400px]">At V-CHANCE, we prioritize the mental well-being of our university students, faculty, and staff.</p>
            </div>

            <div class="w-full h-max px-[50px] pb-[20px] bg-white">
            <h1 class="font-extrabold text-[30px] text-center font-emilio text-red-900 pb-[25px] pt-[50px] pb-[5px]">The Helping Hand</h1>
            {/* image  */}
            <div class={`w-[350px] h-[170px] pr-[20px] relative`}>
                   {/* Background image div */}
                   <div class={`rounded-lg w-[260px] h-[146px] relative float-left z-1 rounded-lg ${style.mdesc2}`}>
                    
                   </div>
                   <div class={`rounded-lg w-[156px] h-[78px] absolute bottom-0 right-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.mdesc22}`}>

                   </div>
               </div>
               {/* Description */}
               <p class="text-black text-[20px] font-[400px] pt-[20px] pb-[30px]">“We should make it clear that getting help isn’t a sign of weakness – it’s a sign of strength.”- Michelle Obama</p>
               <p class="text-black text-[20px] font-[400px]">The counseling services provided, are open for each student, faculty and staff members of the VIT-AP family. Our mission is to foster a nurturing environment where individuals can explore their thoughts, emotions, and challenges with the guidance of our experienced and highly trained counselors.</p>
            </div>

            <div class="w-full h-max px-[50px] pb-[20px] bg-red-200">
            <h1 class="font-extrabold text-[30px] text-center font-emilio text-red-900 pb-[25px] pt-[50px] pb-[5px]">Gains From Seeking Counseling </h1>
            {/* images */}
            <div class={`w-[350px] h-[170px] relative`}>
                   <div class={`rounded-lg w-[260px] h-[146px] relative float-right z-1 rounded-lg ${style.mdesc3}`}>
                   
                   </div>
                   <div class={`rounded-lg w-[156px] h-[78px] absolute bottom-0 left-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.mdesc33}`}>

                   </div>
               </div>
               {/* description */}
               <p class="text-black text-[20px] font-[400px] pt-[25px] pb-[30px]">Welcome to V-CHANCE, Center for Healing, Awareness and <br></br> Nurturing through Counseling and Empowerment !</p>
               <p class="text-black text-[20px] font-[400px]">The counseling services provided, are open for each student, faculty and staff members of the VIT-AP family. Our mission is to foster a nurturing environment where individuals can explore their thoughts, emotions, and challenges with the guidance of our experienced and highly trained counselors.</p>
            </div>

            <div class="w-full h-max px-[50px] pb-[20px] bg-white">
            <h1 class="font-extrabold text-[30px] text-center font-emilio text-red-900 pb-[25px] pt-[50px] pb-[5px]">Our Services</h1>
            {/* image  */}
            <div class={`w-[350px] h-[170px] pr-[20px] relative`}>
                   {/* Background image div */}
                   <div class={`rounded-lg w-[260px] h-[146px] relative float-left z-1 rounded-lg ${style.mdesc4}`}>
                    
                   </div>
                   <div class={`rounded-lg w-[156px] h-[78px] absolute bottom-0 right-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.mdesc44}`}>

                   </div>
               </div>
               {/* Description */}
               <p class="text-black text-[20px] pt-[20px] font-[400px]">The individual counseling sessions offer a personalized approach to address specific concerns and promote personal growth. Our counselors work collaboratively with clients to develop effective coping strategies and achieve meaningful goals. We offer a range of counseling services to cater to the diverse needs of our university community. Whether you are facing academic stress, personal challenges, relationship issues, or any other emotional difficulties, our team of professional counselors is here to assist you.</p>
            </div>            

            </div>
        </>
    )
}
