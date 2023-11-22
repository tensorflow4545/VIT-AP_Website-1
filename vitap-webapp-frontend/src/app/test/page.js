"use client"
import { useState } from 'react';

const data = [
  {
    id: 1,
    imageSrc: '../../../assets/images/Homepage Images/Schools/SAS.jpg',
    title: 'School of Advanced Sciences',
    description: 'Lorem ipsum dolor sit amet consectetur.Lorem',
    link: '/computer-science'
  },
  {
    id: 2,
    imageSrc: '/path-to-your-image-1.jpg',
    title: 'School of Electronics Engineering',
    description: 'Lorem ipsum dolor sit amet consectetur.Lorem',
    link: '/computer-science'
  },
  {
    id: 3,
    imageSrc: '/path-to-your-image-1.jpg',
    title: 'School of Computer Science & Engineering',
    description: 'Lorem ipsum dolor sit amet consectetur.Lorem',
    link: '/computer-science'
  },
  {
    id: 4,
    imageSrc: '/path-to-your-image-1.jpg',
    title: 'School of Law',
    description: 'Lorem ipsum dolor sit amet consectetur.Lorem',
    link: '/computer-science'
  },
];

const PaginationItem = ({ number, isActive, onClick }) => (
  <button
    className={`px-2 py-1 ${isActive ? 'text-red-500' : 'text-gray-500'}`}
    onClick={onClick}
  >
    {number}
  </button>
);

const MainPage = () => {
  const [activePage, setActivePage] = useState(1);

  const handleChangePage = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const activeData = data.find((item) => item.id === activePage);

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-4 mb-4">
        <img src={activeData.imageSrc} alt={activeData.title} className="w-48 h-auto" />
        <div>
          <h2 className="text-2xl font-bold">{activeData.title}</h2>
          <p>{activeData.description}</p>
          <a href={activeData.link} className="text-blue-600 hover:text-blue-800">
            Explore Now →
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2">
        {data.map((item) => (
          <PaginationItem
            key={item.id}
            number={item.id}
            isActive={item.id === activePage}
            onClick={() => handleChangePage(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
