import NavbarBottom from "@/components/HomePage Components/Navbar/NavbarBottom";
import NavbarUpper from "@/components/HomePage Components/Navbar/NavbarUpper";
import image1 from "../../../public/gallery/image1.jpg";
import Card from "@/components/GalleryPage Components/Card";

const Gallery = () => {
  return (
    <>
      <NavbarUpper />
      <NavbarBottom />
      <figure>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/752709d1-73b8-4e2b-80c3-368a9a059d51?apiKey=86ab2603bef245f3a4fc444bffafe3d1&"
          className="aspect-[2.32] object-contain object-center w-full fill-stone-300 overflow-hidden"
          alt="Description of the image"
        />
      </figure>
      <div className="w-full">
        <div class="mx-auto flex justify-center mt-[50px]">
          <div class="grid xl:grid-cols-3 ls:grid-cols-2 sm:gap-[10px] md:gap-[40px] ">
            <div class="flex justify-center ">
              <Card src={image1} />
            </div>
            <div class="flex justify-center ">
              <Card src={image1} />
            </div>
            <div class="flex justify-center ">
              <Card src={image1} />
            </div>
            <div class="flex justify-center ">
              <Card src={image1} />
            </div>
            <div class="flex justify-center ">
              <Card src={image1} />
            </div>
            <div class="flex justify-center ">
              <Card src={image1} />
            </div>
            <div class="flex justify-center ">
              <Card src={image1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
