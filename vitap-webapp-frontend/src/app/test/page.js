// "use client";

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const YourComponent = () => {
//   const [imageData, setImageData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://strapi-157665-0.cloudclusters.net/api/scope-school-faculty-sections");
//         const firstRecord = response.data[2]; // Assuming you're fetching a list of records
//         setImageData(firstRecord);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   // Check if the image field exists in your data structure
// //   const imageField = imageData.image;

//   return (
//     <div>
//       {/* Displaying the image if the image field exists */}
//       {/* {imageField && (
//         <img src={imageField.url} alt={imageField.alternativeText || 'Alt Text'} />
//       )} */}

//       {/* Display other data as needed */}
//       <p>Name: {imageData.attributes.Name}</p>
//       <p>Title: {imageData.attributes.Title}</p>
//       {/* Add other fields here */}
//     </div>
//   );
// };

// export default YourComponent;


// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Contact = () => {
//   const [profiles, setProfiles] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/events-datas?populate=*`,{
//             headers: {
//               Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
//             },
//           });
//         if (response.data && Array.isArray(response.data.data)) {
//           const extractedAttributes = response.data.data.map((item) => item.attributes);
//           setProfiles(extractedAttributes);
//         } else {
//           console.error('The "data" property in the API response is not an array:', response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {/* {profiles.map((profile, index) => ( */}
//         <div>
//           <p>Name: {profiles[0]?.Name}</p>
//           <img src={`${process.env.NEXT_PUBLIC_API_URL}${profiles[0]?.Image.data[0].attributes.url}`} alt={profiles[0]?.Image.data[0].attributes.alternativeText || 'Alt Text'} />
//         </div>
//       {/* ))} */}
//     </div>
//   );
// };

// export default Contact;

"use client";
import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    // Add all your image URLs here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current index to the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Set the interval time in milliseconds (e.g., 3000 for 3 seconds)

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length]);

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
};

export default ImageCarousel;

