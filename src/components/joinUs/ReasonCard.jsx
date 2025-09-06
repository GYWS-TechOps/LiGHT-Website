import React from "react";

const ReasonCard = ({ text }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-md p-6 text-left 
                    transition duration-300 hover:shadow-lg h-50">
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
};

export default ReasonCard;
