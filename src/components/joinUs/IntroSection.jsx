import React from "react";

/**
 * IntroSection Component
 * 
 * Introduces the concept of LiGHT through a character named "Ram".
 * Features a split-screen design with a cover image on the left 
 * and character introduction with description on the right.
 * Responsive design that stacks vertically on mobile devices.
 * 
 * @returns {JSX.Element} The intro section component
 */
const IntroSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-700 p-4">
      
      {/* Main card container with rounded corners and shadow */}
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg max-w-2xl w-full">
        
        {/* Left side: Cover image with dark background */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-black p-6">
          <img
            src="/assets/misc/cover.jpg"
            alt="Cover"
            className="h-64 md:h-70 w-56 md:w-60 object-cover"
          />
        </div>

        {/* Right side: Character introduction */}
        <div className="bg-white flex flex-col justify-center items-center px-8 md:px-10 py-8 w-full md:w-1/2 text-center">
          {/* Character avatar */}
          <img 
            src="/assets/icons/ram1.png" 
            alt="Ram - College Student Character" 
            className="h-40 mb-6" 
          />
          
          {/* Character description and motivation */}
          <p className="text-gray-600 text-sm md:text-base">
            Hello, he is Ram, a college student. He sees some social problems
            around locality. Instead of blaming governments he wants to take
            control and do something for society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;