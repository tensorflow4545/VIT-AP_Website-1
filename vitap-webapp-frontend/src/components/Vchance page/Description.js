import Image from 'next/image';
import style from './description.module.css';
import d1 from "../../assets/images/Vchance/vimage1.png"
import d2 from "../../assets/images/Vchance/vimage2.png"
import d3 from "../../assets/images/Vchance/vimage3.png"
import d4 from "../../assets/images/Vchance/vimage4.png"

export default function Description() {
    return (
        <>

            {/* desktop view */}
            <div className="sm:flex hidden">
                <div className="w-full h-max px-[80px] bg-white">

                    {/* new description */}
                    <div className="lg:flex lg:flex-row mb-[150px]">
                        <div className="lg:basis-1/2 md:jusitfy-center md:pb-[40px]">
                            <h1 className="font-bold text-[48px] font-emilie text-red-900 pb-[5px]">Counselling Services</h1>
                            <p className="text-black text-[20px] font-[400px] pb-[30px]">Welcome to V-CHANCE, Center for Healing, Awareness and <br></br> Nurturing through Counseling and Empowerment !</p>
                            <p className="text-black text-[20px] font-[400px] pb-[30px]">“The good life is a process, not a state of being. It is a direction, not a destination.” – Carl Rogers</p>
                            <p className="text-black text-[20px] font-[400px]">At V-CHANCE, we prioritize the mental well-being of our university students, faculty, and staff.</p>
                        </div>
                        <div className={`lg:basis-1/2 w-[600px] h-[350px] relative`}>
                            <div className={` w-[500px] h-[300px] relative float-right z-1 rounded-lg ${style.desc1} relative`}>
                                <Image src={d1} fill className='rounded-lg' />
                            </div>
                            <div className={`w-[300px] h-[150px] absolute bottom-0 left-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.desc11} `}>
                                <Image src={d1} fill className='rounded-lg' />
                            </div>
                        </div>
                    </div>

                    {/* new description */}
                    <div className="lg:flex lg:flex-row mb-[150px]">
                        <div className={`basis-1/2 w-[600px] h-[350px] pr-[20px] relative`}>
                            {/* Background image div */}
                            <div className={`w-[500px] h-[300px] relative float-left z-1 rounded-lg ${style.desc2}`}>
                                <Image src={d2} fill className='rounded-lg' />
                            </div>
                            <div className={`rounded-lg w-[300px] h-[150px] absolute bottom-0 right-0 z-10 float-left border-2 border-white shadow-xl ${style.desc22}`}>
                                <Image src={d2} fill className='rounded-lg' />
                            </div>
                        </div>
                        {/* Description div */}
                        <div className="basis-1/2 pl-[50px] md:pt-[40px]">
                            <h1 className="font-bold text-[48px] font-emilie text-red-900 pb-[5px]">The Helping Hand</h1>
                            <p className="text-black text-[20px] font-[400px] pb-[30px]">“We should make it clear that getting help isn’t a sign of weakness – it’s a sign of strength.”- Michelle Obama</p>
                            <p className="text-black text-[20px] font-[400px]">The counseling services provided, are open for each student, faculty and staff members of the VIT-AP family. Our mission is to foster a nurturing environment where individuals can explore their thoughts, emotions, and challenges with the guidance of our experienced and highly trained counselors.</p>
                        </div>
                    </div>

                    {/* new description */}
                    <div className="lg:flex lg:flex-row mb-[150px]">
                        {/* Description div */}
                        <div className="basis-1/2 md:pb-[40px]">
                            <h1 className="font-bold text-[48px] font-emilie text-red-900 pb-[20px]">Gains From Seeking Counseling </h1>
                            <p className="text-black text-[20px] font-[400px]">The counseling services provided, are open for each student, faculty and staff members of the VIT-AP family. Our mission is to foster a nurturing environment where individuals can explore their thoughts, emotions, and challenges with the guidance of our experienced and highly trained counselors.</p>
                        </div>
                        {/* Background image div */}
                        <div className={`basis-1/2 w-[600px] h-[350px] relative`}>
                            <div className={`rounded-lg w-[500px] h-[300px] relative float-right z-1 ${style.desc3}`}>
                                <Image src={d3} fill className='rounded-lg' />
                            </div>
                            <div className={` w-[300px] h-[150px] absolute bottom-0 left-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.desc33}`}>
                                <Image src={d3} fill className='rounded-lg' />
                            </div>
                        </div>
                    </div>

                    {/* new description */}
                    <div className="lg:flex lg:flex-row pb-[150px]">
                        {/* Description div */}
                        <div className={`basis-1/2 w-[600px] h-[350px] relative`}>
                            <div className={`rounded-lg w-[500px] h-[300px] relative float-left z-1 ${style.desc4}`}>
                                <Image src={d4} fill className='rounded-lg' />
                            </div>
                            <div className={`rounded-lg w-[300px] h-[150px] absolute bottom-0 right-0 z-10 float-left  border-2 border-white shadow-xl ${style.desc44}`}>
                                <Image src={d4} fill className='rounded-lg' />
                            </div>
                        </div>
                        <div className="basis-1/2 pl-[40px] md:pt-[40px]">
                            <h1 className="font-bold text-[48px] font-emilie text-red-900 pb-[20px]">Our Services</h1>
                            <p className="text-black text-[20px] font-[400px]">The individual counseling sessions offer a personalized approach to address specific concerns and promote personal growth. Our counselors work collaboratively with clients to develop effective coping strategies and achieve meaningful goals. We offer a range of counseling services to cater to the diverse needs of our university community. Whether you are facing academic stress, personal challenges, relationship issues, or any other emotional difficulties, our team of professional counselors is here to assist you.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile view */}
            <div className="sm:hidden relative">

                <div className="w-full h-max px-[50px] pb-[20px] bg-red-200">
                    <h1 className="font-extrabold text-[30px] text-center font-emilio text-red-900 pb-[25px] pt-[50px] pb-[5px]">Counselling Services</h1>
                    {/* images */}
                    <div className={`w-[350px] h-[170px] relative`}>
                        <div className={`rounded-lg w-[260px] h-[146px] relative float-right z-1  ${style.mdesc1}`}>
                            <Image src={d1} fill className='rounded-lg' />
                        </div>
                        <div className={`rounded-lg w-[156px] h-[78px] absolute bottom-0 left-0 z-10 float-left border-2 border-white shadow-xl ${style.mdesc11}`}>
                            <Image src={d1} fill className='rounded-lg' />
                        </div>
                    </div>
                    {/* description */}
                    <p className="text-black text-[20px] font-[400px] pt-[25px] pb-[30px]">Welcome to V-CHANCE, Center for Healing, Awareness and <br></br> Nurturing through Counseling and Empowerment !</p>
                    <p className="text-black text-[20px] font-[400px] pb-[30px]">“The good life is a process, not a state of being. It is a direction, not a destination.” – Carl Rogers</p>
                    <p className="text-black text-[20px] font-[400px]">At V-CHANCE, we prioritize the mental well-being of our university students, faculty, and staff.</p>
                </div>

                <div className="w-full h-max px-[50px] pb-[20px] bg-white">
                    <h1 className="font-extrabold text-[30px] text-center font-emilio text-red-900 pt-[50px] pb-[5px]">The Helping Hand</h1>
                    {/* image  */}
                    <div className={`w-[350px] h-[170px] pr-[20px] relative`}>
                        {/* Background image div */}
                        <div className={`rounded-lg w-[260px] h-[146px] relative float-left z-1 ${style.mdesc2}`}>
                            <Image src={d2} fill className='rounded-lg' />
                        </div>
                        <div className={` w-[156px] h-[78px] absolute bottom-0 right-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.mdesc22}`}>
                            <Image src={d2} fill className='rounded-lg' />
                        </div>
                    </div>
                    {/* Description */}
                    <p className="text-black text-[20px] font-[400px] pt-[20px] pb-[30px]">“We should make it clear that getting help isn’t a sign of weakness – it’s a sign of strength.”- Michelle Obama</p>
                    <p className="text-black text-[20px] font-[400px]">The counseling services provided, are open for each student, faculty and staff members of the VIT-AP family. Our mission is to foster a nurturing environment where individuals can explore their thoughts, emotions, and challenges with the guidance of our experienced and highly trained counselors.</p>
                </div>

                <div className="w-full h-max px-[50px] pb-[20px] bg-red-200">
                    <h1 className="font-extrabold text-[30px] text-center font-emilio text-red-900 pb-[25px] pt-[50px] pb-[5px]">Gains From Seeking Counseling </h1>
                    {/* images */}
                    <div className={`w-[350px] h-[170px] relative`}>
                        <div className={`w-[260px] h-[146px] relative float-right z-1 rounded-lg ${style.mdesc3}`}>
                            <Image src={d3} fill className='rounded-lg' />
                        </div>
                        <div className={`w-[156px] h-[78px] absolute bottom-0 left-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.mdesc33}`}>
                            <Image src={d3} fill className='rounded-lg' />
                        </div>
                    </div>
                    {/* description */}
                    <p className="text-black text-[20px] font-[400px] pt-[25px] pb-[30px]">Welcome to V-CHANCE, Center for Healing, Awareness and <br></br> Nurturing through Counseling and Empowerment !</p>
                    <p className="text-black text-[20px] font-[400px]">The counseling services provided, are open for each student, faculty and staff members of the VIT-AP family. Our mission is to foster a nurturing environment where individuals can explore their thoughts, emotions, and challenges with the guidance of our experienced and highly trained counselors.</p>
                </div>

                <div className="w-full h-max px-[50px] pb-[20px] bg-white">
                    <h1 className="font-extrabold text-[30px] text-center font-emilio text-red-900 pb-[25px] pt-[50px] pb-[5px]">Our Services</h1>
                    {/* image  */}
                    <div className={`w-[350px] h-[170px] pr-[20px] relative`}>
                        {/* Background image div */}
                        <div className={`w-[260px] h-[146px] relative float-left z-1 rounded-lg ${style.mdesc4}`}>
                            <Image src={d4} fill className='rounded-lg' />
                        </div>
                        <div className={`w-[156px] h-[78px] absolute bottom-0 right-0 z-10 float-left rounded-lg border-2 border-white shadow-xl ${style.mdesc44}`}>
                            <Image src={d4} fill className='rounded-lg' />
                        </div>
                    </div>
                    {/* Description */}
                    <p className="text-black text-[20px] pt-[20px] font-[400px]">The individual counseling sessions offer a personalized approach to address specific concerns and promote personal growth. Our counselors work collaboratively with clients to develop effective coping strategies and achieve meaningful goals. We offer a range of counseling services to cater to the diverse needs of our university community. Whether you are facing academic stress, personal challenges, relationship issues, or any other emotional difficulties, our team of professional counselors is here to assist you.</p>
                </div>

            </div>
        </>
    )
};
