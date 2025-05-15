
import React, { useEffect, useState } from 'react';
const headlines = [
  'Breaking: Skardu Hosts International Culture Festival',
  'Local Govt Launches New Education Program in Gilgit',
  'GB International TV Expands Coverage to Remote Areas',
  'Winter Sports Festival Attracts Thousands in Hunza',
  'Historic Agreement Signed to Boost Tourism in GB',
];

const TopNewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === headlines.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative mt-20 h-60 md:h-72 flex items-center justify-center text-white"
    //   style={{
    //     backgroundImage: `url(${backgroundImg})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">Top News</h2>
        <p className="text-lg md:text-xl transition-opacity duration-500 ease-in-out">
          {headlines[currentIndex]}
        </p>
      </div>
    </div>
  );
};

export default TopNewsSlider;
