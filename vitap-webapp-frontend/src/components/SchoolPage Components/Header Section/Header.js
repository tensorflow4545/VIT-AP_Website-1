// Import the Image component from Next.js for optimized images
import Image from 'next/image';
import Head from 'next/head';

const Header = () =>{
  return (
    <div>
      {/* Header with background image */}
      <header
        className="relative text-white flex items-center justify-center"
        style={{ height: '400px' }} 
      >
        {/* Background image */}
        <Image
          src="/schools/bg.jpg" 
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background image"
          className="absolute z-0"
        />

        {/* Overlay content */}
        <div className="relative z-10 p-8 items-center justify-center">
          <h1 className="text-[43px] text-center md:text-4xl lg:text-5xl font-[600] font-Emilio">
            School of Computer Science & Engineering
          </h1>
          <p className="text-[43px] font-[550] font-Emilio text-center">(SCOPE)</p>
        </div>
      </header>

    </div>
  );
}

export default Header;