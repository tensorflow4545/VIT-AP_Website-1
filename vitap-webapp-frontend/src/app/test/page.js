import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Head>
        <title>About School</title>
      </Head>

      {/* Text section */}
      <div className="flex-1 px-6 py-8 bg-white text-gray-800">
        <h1 className="text-3xl font-semibold mb-4">About School</h1>
        <p className="text-base mb-4">
          The Department of Computer Science and Engineering was established in 2017. It has become the School of Computer Science and Engineering (SCOPE) in January 2019. At present, the School is headed by Dr. CH. Pradeep Reddy. The School has qualified and committed faculty members who offer impressive instruction in a variety of modes, exploring experiential learning approaches and new pedagogical methods in order to provide proper learning to students. The school provides the necessary infrastructure, hardware, and software to support the faculty for their continuous learning and research.
        </p>
      </div>

      {/* Image section */}
      <div className="flex-1">
        {/* The image for larger screens, shown next to the text */}
        <div className="hidden lg:block relative w-full h-64 lg:h-auto">
          {/* Replace '/your-image-path.jpg' with the path to your actual image */}
          <Image
            src="/schools/image.jpg"
            layout="fill"
            objectFit="cover"
            alt="Computer Science Lab"
          />
        </div>
        {/* The image for smaller screens, shown below the text */}
        <div className="lg:hidden mt-4 relative w-full h-64">
          {/* Replace '/your-image-path.jpg' with the path to your actual image */}
          <Image
            src="/schools/image.jpg"
            layout="responsive"
            width={100}
            height={50} // The aspect ratio 100:50 can be adjusted based on your actual image
            alt="Computer Science Lab"
          />
        </div>
      </div>
    </div>
  );
}
