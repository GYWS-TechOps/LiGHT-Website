import React from "react";
import HelpCard from "./HelpCard";
import platform from "../../assets/platform.png";
import leader from "../../assets/leader.png";
import team from "../../assets/team.png";

const HelpSection = () => {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-4xl font-semibold text-gray-500 mb-4">
        How we can help Ram?
      </h2>
      <div className="h-1 w-12 bg-yellow-400 mx-auto mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <HelpCard img={platform} text="1. By providing him a Platform where he can work with like-minded individuals." />
        <HelpCard img={leader} text="2. By Bringing out the leader in him." />
        <HelpCard img={team} text="3. To form a team and develop Team - bonding among his college mates." />
      </div>
    </div>
  );
};

export default HelpSection;
