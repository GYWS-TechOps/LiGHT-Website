import React from 'react';
import FacebookIcon from '../assets/Facebook.svg';
import LinkedInIcon from '../assets/LinkedIn.svg';

const MemberCard = ({ name, role, image, facebook, linkedin }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 mb-3">{role}</p>
        
        {/* Social Media Links */}
        <div className="flex space-x-3">
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;