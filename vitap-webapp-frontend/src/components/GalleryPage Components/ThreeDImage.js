import Image from 'next/image';
import "./ThreeDStyles.css"
export default function ThreeDImage() {
  return (
    <div className="perspective-container">
      <div className="image-3d">
        {/* Replace with the path to your image */}
        <Image
          src="/gallery/image1.jpg"
          alt="3D effect image"
          width={500} // Set appropriate size
          height={300} // Set appropriate size
          layout="responsive"
        />
      </div>

    </div>
  );
}
