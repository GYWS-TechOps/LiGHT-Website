import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const MemberCard = ({ name, role, image, facebook, linkedin }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-72 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Member Image */}
      <div className="w-full h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Member Info */}
      <div className="p-5 text-center bg-yellow-200">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-700 mb-3">{role}</p>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              <FaFacebook size={20} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-800 transition"
            >
              <FaLinkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;



