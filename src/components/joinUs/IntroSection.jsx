import React from "react";
import cover from "../../assets/cover.jpg";
import ram1 from "../../assets/ram1.png";

const IntroSection = () => {
  return (
    <div className="flex justify-center items-center h-120 bg-gray-700">
      <div className="flex rounded-2xl overflow-hidden shadow-lg max-w-2xl w-150 h-90">
        {/* Left Box with Cover Image */}
        <div className="w-1/2 flex items-center justify-center bg-black">
          <img
            src={cover}
            alt="Cover"
            className="h-70 w-60 object-cover scale-120"
          />
        </div>

        {/* Right Box */}
        <div className="bg-white flex flex-col justify-center items-center px-10 py-8 w-1/2 text-center">
          <img src={ram1} alt="Ram" className="h-40 mb-6" />
          <p className="text-gray-600">
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
