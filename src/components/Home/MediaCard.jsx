import React from 'react';

const MediaCard = ({ 
  title, 
  description, 
  image, 
  date, 
  newspaper,
  className = "" 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:-translate-y-2 transition-all duration-300  max-w-xs mx-auto overflow-hidden ${className}`}>
      {/* Image Section */}
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full object-cover"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        {/* Header with newspaper and date */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500">
           Date- {date}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-md leading-relaxed line-clamp-3">
          {description}
        </p>
        
      
         
      </div>
    </div>
  );
};

export default MediaCard;
