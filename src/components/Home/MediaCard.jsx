import React from 'react';

const MediaCard = ({ 
  title, 
  description, 
  image, 
  date, 
  newspaper,
  className = "" 
}) => {
  // Function to dynamically import images
  const getImageSrc = (imagePath) => {
    try {
      return require(`../../assets/Home/${imagePath.split('/').pop()}`);
    } catch (error) {
      return imagePath; // fallback to original path
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md hover:-translate-y-2 transition-all duration-300 max-w-md mx-auto overflow-hidden ${className}`}>
      {/* Image Section */}
      <div className="relative">
        <img 
          src={getImageSrc(image)}
          alt={title}
          className="w-full h-56 object-cover"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        {/* Header with newspaper and date */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500 font-medium">
            {newspaper}
          </span>
          <span className="text-sm text-gray-500">
            {date}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MediaCard;