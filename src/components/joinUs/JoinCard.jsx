import React from "react";
import ProgressiveImage from "../ProgressiveImage";

const JoinCard = ({ img, title, text }) => {
  return (
    <div className="w-70 h-100 bg-white border-3 border-black shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <ProgressiveImage src={img} alt={title} className="h-40 mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-1xl text-gray-600">{text}</p>
    </div>
  );
};

export default JoinCard;
