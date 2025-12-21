import React from "react";
import { sems } from "../../data/sems";

const SemsName = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {sems.map((name, index) => (
        <div key={index} className="relative w-60 h-20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group bg-white border border-gray-200">
          {/* Content - Centered */}
          <div className="flex items-center justify-center h-full p-4">
            <h3 className="text-lg font-bold text-gray-800 text-center">{name}</h3>
          </div>

          {/* Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(230,197,37)] via-yellow-400 to-transparent"></div>
        </div>
      ))}
    </div>
  );
};

export default SemsName;