import React from "react";
import MemberCard from "../components/MemberCard";
import Aaradhya from "../assets/Aaradhya.jpg";
import Dishil from "../assets/Dishil.jpg";
import Megha from "../assets/MeghaSinghal (2).jpg";
import Thania from "../assets/Thania.jpg";
import Vikash from "../assets/Vikash.jpg";
import { Facebook, Linkedin } from "react-bootstrap-icons";

export default function Members() {
  const members = [
    { 
      name: "Megha Singhal",
      role: "Chief Executive Officer, LiGHT", 
      image: Megha,
      facebook: "https://www.facebook.com/megha.singhal.35325/",
      linkedin:"https://www.linkedin.com/in/megha-singhal-7a9a3926a/"
    },
    { 
      name: "Aaradhya Shukla", 
      role: "LiGHT Head", 
      image: Aaradhya,
      facebook: "https://www.facebook.com/aaradhya1729/",
      linkedin:"https://www.linkedin.com/in/aaradhya-shukla-205289280"
    },
    { 
      name: "Zalavadiya Dishil", 
      role: "LiGHT Head", 
      image: Dishil,
      facebook: "#",
      linkedin:"https://www.linkedin.com/in/dishil-zalavadiya-943020280"
    },
    { 
      name: "Thania Joshi", 
      role: "LiGHT Head", 
      image: Thania,
      facebook:"#",
      linkedin:"https://www.linkedin.com/in/thania-joshi-varanasi-733161333"
    },
    { 
      name: "Vikash Siyak", 
      role: "LiGHT Head", 
      image: Vikash,
      facebook:"#",
      linkedin:"https://www.linkedin.com/in/vikash-siyak-221697293"
    },
   
  ];

 return (
  <div className="min-h-screen relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="fixed inset-0 -z-20">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-green-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-200 rounded-full opacity-20"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-10 transform -translate-x-32 rotate-45"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-blue-200 to-indigo-200 rounded-full opacity-10 transform translate-x-32 -rotate-45"></div>
    </div>

   {/* Banner Section with enhanced design */}
<div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
  {/* Animated background pattern */}
  <div className="absolute inset-0 bg-black opacity-40"></div>
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
    <div className="absolute -top-16 -left-16 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>
  </div>
  
  <div className="relative z-10 flex flex-col items-center justify-center text-white py-24 px-6">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-white leading-tight">
      Our Amazing Team
    </h1>
    <div className="flex items-center gap-2 text-gray-200 text-lg">
      <span className="hover:text-yellow-300 transition-colors cursor-pointer">Home</span>
      <span>/</span>
      <span className="text-yellow-300">All Members</span>
    </div>
    
    {/* Decorative line */}
    <div className="mt-6 w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
  </div>
</div>

    {/* Intro Text Section with enhanced background */}
    <div className="relative py-20 px-6 md:px-20 bg-white/80 backdrop-blur-sm">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full opacity-15"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Home Branch Members
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto mb-8"></div>
        <p className="text-center text-gray-700 text-lg leading-relaxed max-w-5xl mx-auto backdrop-blur-sm bg-white/60 rounded-2xl p-8 shadow-lg border border-white/20">
          We are a group of individuals based in IIT Kharagpur who have seen the success of the strategies and plans of GYWS, IIT Kharagpur, one of India's largest govt. reg. student run NGO which aims at the socio economic development of the underprivileged near the IIT Kharagpur campus. We were inspired to reciprocate the same to various other parts of the nation so as to create a greater impact by spreading knowledge and experience gained through GYWS which has been running successfully since 2002 and now has over 150 active members and a budget of 30 lakh INR per annum. LiGHT currently aims at forming teams of spirited students in various colleges across India and we have already succeeded in convincing over 20 colleges which include various reputed IITs, NITs and IIITs.
        </p>
      </div>
    </div>

     {/* Members Section with glass morphism effect */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Meet Our Leaders
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto"></div>
          </div>


{/* Row 1 - CEO card with special styling */}
<div className="flex justify-center mb-16">
  <div className="relative">
    <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-20 blur-lg"></div>
    <div className="relative">
      <MemberCard {...members[0]} />
    </div>
  </div>
</div>

{/* Row 2 - 2 cards */}
<div className="flex justify-center gap-8 flex-wrap mb-16">
  {members.slice(1, 3).map((member, index) => (
    <div key={index} className="relative group">
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
      <div className="relative">
        <MemberCard {...member} />
      </div>
    </div>
  ))}
</div>

{/* Row 3 - 2 cards */}
<div className="flex justify-center gap-8 flex-wrap">
  {members.slice(3, 5).map((member, index) => (
    <div key={index} className="relative group">
      <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
      <div className="relative">
        <MemberCard {...member} />
      </div>
    </div>
  ))}
</div>
        </div>
      </div>


      {/* Bottom decorative wave */}
      <div className="relative">
        <svg className="w-full h-24 fill-current text-gray-100" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
}