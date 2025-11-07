import React from "react";
import MemberCard from "../components/Members/MemberCard";
import SemsName from "../components/Members/SemsName";
import { members } from "../data/members";

export default function Members() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4 text-center">
            Our Team
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-lg">
            <span className="hover:text-[rgb(230,197,37)] transition-colors cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-[rgb(230,197,37)]">Members</span>
          </div>
          <div className="mt-8 w-24 h-1 bg-[rgb(230,197,37)] rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Home Branch Members
          </h2>
          <div className="w-24 h-1 bg-[rgb(230,197,37)] rounded-full mx-auto mb-8"></div>
          <p className="text-center text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            We are a group of individuals based in IIT Kharagpur who have seen the success of the strategies and plans of GYWS, IIT Kharagpur, one of India's largest govt. reg. student run NGO which aims at the socio economic development of the underprivileged near the IIT Kharagpur campus. We were inspired to reciprocate the same to various other parts of the nation so as to create a greater impact by spreading knowledge and experience gained through GYWS which has been running successfully since 2002 and now has over 150 active members and a budget of 30 lakh INR per annum. LiGHT currently aims at forming teams of spirited students in various colleges across India and we have already succeeded in convincing over 20 colleges which include various reputed IITs, NITs and IIITs.
          </p>
        </div>
      </div>

      {/* Members Section */}
      <div className="bg-gray-50 py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Our Leaders
            </h3>
            <div className="w-20 h-1 bg-[rgb(230,197,37)] rounded-full mx-auto"></div>
          </div>

          {/* CEO Card */}
          <div className="flex justify-center mb-16">
            <MemberCard {...members[0]} />
          </div>

          {/* Row 2 - 2 cards */}
          <div className="flex justify-center gap-8 flex-wrap mb-16">
            {members.slice(1, 3).map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>

          {/* Row 3 - 2 cards */}
          <div className="flex justify-center gap-8 flex-wrap mb-16">
            {members.slice(3, 5).map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>

          {/* Sems Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Sems
            </h3>
            <div className="w-20 h-1 bg-[rgb(230,197,37)] rounded-full mx-auto mb-8"></div>
          </div>
          <SemsName />
        </div>
      </div>
    </div>
  );
}