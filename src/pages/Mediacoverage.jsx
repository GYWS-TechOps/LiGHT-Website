import React from 'react';
import MediaCard from '../components/Home/MediaCard';
import { mediaData } from '../data/mediaData';

// filepath: c:\coding\LiGHT\LiGHT-Website\src\pages\Mediacoverage.jsx
const Mediacoverage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-center">
        Media Coverage
        <div className="w-16 h-1 my-10 bg-yellow-400 mx-auto"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {mediaData.map((item, index) => (
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
  );
};

export default Mediacoverage;