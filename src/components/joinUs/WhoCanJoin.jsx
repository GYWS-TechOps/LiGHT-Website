import React from "react";
import JoinCard from "./JoinCard";

/**
 * WhoCanJoin Component
 * 
 * Displays information about who can join the LiGHT initiative.
 * Shows three main categories: Social Workers, College Students, and College Professors.
 * Uses a responsive grid layout with individual cards for each category.
 * 
 * @returns {JSX.Element} The WhoCanJoin section component
 */
const WhoCanJoin = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 text-center">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-gray-500 mb-6">Who can join us?</h2>
      
      {/* Decorative underline */}
      <div className="h-1 w-12 bg-yellow-400 mx-auto mb-10"></div>

      {/* Main join icon - central visual element */}
      <div className="flex justify-center mb-12">
        <img 
          src="/assets/join/joinIcon.png" 
          alt="Join Icon" 
          className="h-60 w-60" 
        />
      </div>

      {/* Grid of join categories - responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        
        {/* Social Worker Card */}
        <div className="flex justify-center">
          <div className="w-72">
            <JoinCard
              img="/assets/join/socialWorker.png"
              title="Social Worker"
              text="We always believe that building a forest is much better than building a tree, and so the social workers."
            />
          </div>
        </div>
        
        {/* College Student Card */}
        <div className="flex justify-center">
          <div className="w-72">
            <JoinCard
              img="/assets/join/student.png"
              title="College Student"
              text="College Students like Ram, who instead of blaming governments want..."
            />
          </div>
        </div>
        
        {/* College Professor Card */}
        <div className="flex justify-center">
          <div className="w-72">
            <JoinCard
              img="/assets/join/professor.png"
              title="College Professor"
              text="If you are a College Professor who thinks that your students should get opportunity..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoCanJoin;
