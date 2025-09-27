import React from 'react';
import MediaCard from './MediaCard';
import { mediaData } from '../../data/mediaData';

// filepath: c:\coding\LiGHT\LiGHT-Website\src\components\Home\Media.jsx
const Media = () => {
  // For home page, show only first 3 cards
  const featuredMedia = mediaData.slice(0, 3);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-center">
          Media Coverage
          <div className="w-16 h-1 my-10 bg-yellow-400 mx-auto"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredMedia.map((item, index) => (
            <MediaCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              date={item.date}
              newspaper={item.newspaper}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-[-12] mb-10">
        <a 
          href="/mediacoverage"
          className="inline-block -mt-2 px-2 py-1 text-lg text-white bg-[rgb(230,197,37)] hover:bg-[rgb(200,167,20)] rounded-sm transition-all duration-300 hover:scale-105"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default Media;