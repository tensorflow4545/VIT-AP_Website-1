import Image from 'next/image';

export default function ProfileCard() {
    return (
        <div className="relative">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                <Image
                    src="/faculty1.jpeg" // Place your image path here
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:opacity-75"
                    alt="Profile"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <p className="text-sm font-medium">Dr. Saroj Kumar</p>
                    <p className="text-xs">Associate Dean, SCOPE</p>
                </div>
            </div>
        </div>
    );
}


