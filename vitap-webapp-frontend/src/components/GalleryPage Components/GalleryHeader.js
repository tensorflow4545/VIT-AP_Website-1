// components/Header.js

import Image from 'next/image';
import ThreeDImage from './ThreeDImage';


export default function GalleryHeader() {
  return (
    <div className="relative bg-backgroundRed">
      <div className="container mx-auto flex flex-col lg:flex-row items-center py-12 lg:py-24">
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <h1 className="text-5xl text-primary font-bold mb-6 text-center lg:text-left">
            Gallery
          </h1>
          <p className="mb-6 text-xl text-secondary text-center lg:text-left">
            A look into some Events and Happenings at VIT-AP
          </p>
        </div>
        <div className="flex-1 hidden lg:block">
          {/* Replace with the path to your image */}
        </div>
      </div>
      {/* This pseudo-element is for the diagonal design */}
      <div className="hidden lg:block overflow-hidden bg-backgroundRed" style={{ height: '150px', transform: 'skewY(-6deg)', transformOrigin: '0 0' }} />
    </div>
  );
}
