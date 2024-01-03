// pages/gallery.js
import GalleryHeader from '@/components/GalleryPage Components/GalleryHeader';
import Footer from '@/components/HomePage Components/Footer Section/Footer';
import NavbarBottom from '@/components/HomePage Components/Navbar/NavbarBottom';
import NavbarUpper from '@/components/HomePage Components/Navbar/NavbarUpper';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
// Assuming you have local images or you can put URLs for your images here

const imageData = [
  { id: 1, src: '/gallery/image1.jpg', title: 'University Day Celebrations - 2022' },
  { id: 2, src: '/gallery/image1.jpg', title: 'University Day Celebrations - 2022' },
  { id: 3, src: '/gallery/image1.jpg', title: 'University Day Celebrations - 2022' },
  { id: 4, src: '/gallery/image1.jpg', title: 'University Day Celebrations - 2022' },
  { id: 5, src: '/gallery/image1.jpg', title: 'University Day Celebrations - 2022' },
  { id: 6, src: '/gallery/image1.jpg', title: 'University Day Celebrations - 2022' },
  { id: 7, src: '/gallery/image1.jpg', title: 'University Day Celebrations - 2022' },
  { id: 8, src: '/gallery/image1.jpg', title: 'University Day Celebrations - 2022' },
  { id: 9, src: '/gallery/image1.jpg', title: 'University Day Celebrations - 2022' },
  { id: 10, src: '/gallery/image1.jpg', title: 'University Day Celebrations - 2022' },



];

export default function GalleryPage() {
  return (
    <div className="font-Inter">
      <Head>
        <title>Gallery | VIT-AP University</title>
      </Head>
      
      {/* Navbar and other components go here */}
        <NavbarUpper/>
        <NavbarBottom/>
      {/* <header className="bg-backgroundRed text-primary p-6 text-center ">
        <h1 className="text-4xl font-Montserrat font-bold">Gallery</h1>
        <p className="mt-3">A look into some Events and Happenings at VIT-AP</p>
      </header> */}
       <figure>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"
          className="aspect-[2.32] object-contain object-center w-full fill-stone-300 overflow-hidden"
          alt="Description of the image"
        />
      </figure>

    {/* <GalleryHeader/> */}
    
      <main className="p-6">
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageData.map((image) => (
              <Link href="/gallery/subgallery" key={image.id} className="overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={400}
                  height={300}
                  layout="responsive"
                  className="hover:opacity-75 transition duration-300 ease-in-out"
                />
                <div className="px-6 py-4">
                  <h3 className="font-semibold text-lg hover:text-primary">{image.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
        
      {/* Footer goes here */}
      <Footer/>
    </div>
  )
}
