import React from "react";
import HelpCard from "./HelpCard";

/**
 * HelpSection Component
 * 
 * Explains how LiGHT can help students like "Ram" achieve their social goals.
 * Displays three key ways LiGHT supports students through platform, leadership,
 * and team building. Uses a grid layout with individual help cards.
 * 
 * @returns {JSX.Element} The help section component
 */
const HelpSection = () => {
  return (
    <div className="py-16 bg-white text-center">
      
      {/* Section header */}
      <h2 className="text-4xl font-semibold px-1 text-gray-500 mb-4">
        How we can help Ram?
      </h2>
      
      {/* Decorative underline */}
      <div className="h-1 w-12 bg-yellow-400 mx-auto mb-10"></div>

      {/* Grid of help cards - responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
        {/* Platform Help Card */}
        <HelpCard 
          img="/assets/icons/platform.png" 
          text="1. By providing him a Platform where he can work with like-minded individuals." 
        />
        
        {/* Leadership Help Card */}
        <HelpCard 
          img="/assets/icons/leader.png" 
          text="2. By Bringing out the leader in him." 
        />
        
        {/* Team Building Help Card */}
        <HelpCard 
          img="/assets/icons/team.png" 
          text="3. To form a team and develop Team - bonding among his college mates." 
        />
      </div>
    </div>
  );
};

export default HelpSection;
