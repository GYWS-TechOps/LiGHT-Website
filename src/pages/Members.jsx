import React, { useEffect, useState } from "react";
import MemberCard from "../components/MemberCard";
import Advait from "../assets/Advait Gokhale.png";
import Ayush from "../assets/AyushGurjar.jpg";
import Megha from "../assets/MeghaSinghal.jpg";
import Vidit from "../assets/ViditOm.jpg";
import Samshritha from "../assets/SamshrithaBura.jpg";
import { Facebook, Linkedin } from "react-bootstrap-icons";

// Map backend filenames → imported frontend images
const imageMap = {
  "Advait Gokhale.png": Advait,
  "AyushGurjar.jpg": Ayush,
  "MeghaSinghal.jpg": Megha,
  "ViditOm.jpg": Vidit,
  "SamshrithaBura.jpg": Samshritha,
};

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // ✅ Fetch from backend
    fetch("http://localhost:3000/api/members")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Fetched members:", data);
        setMembers(data);
      })
      .catch((err) => console.error("❌ Fetch error:", err));
  }, []);

  // Loading state
  if (members.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-xl font-semibold">
        Loading Members...
      </div>
    );
  }

  // Main component render
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-green-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-200 rounded-full opacity-20"></div>
      </div>

      {/* Banner */}
      <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white py-24 px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center leading-tight">
            Our Amazing Team
          </h1>
          <div className="flex items-center gap-2 text-gray-200 text-lg">
            <span className="hover:text-yellow-300 cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-yellow-300">All Members</span>
          </div>
          <div className="mt-6 w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
        </div>
      </div>

      {/* Intro */}
      <div className="relative py-20 px-6 md:px-20 bg-white/80 backdrop-blur-sm">
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Home Branch Members
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto mb-8"></div>
          <p className="text-center text-gray-700 text-lg leading-relaxed max-w-5xl mx-auto backdrop-blur-sm bg-white/60 rounded-2xl p-8 shadow-lg border border-white/20">
            We are a group of individuals based in IIT Kharagpur who have seen the success of GYWS,
            IIT Kharagpur — one of India's largest student-run NGOs. Inspired by this success, LiGHT
            now empowers colleges across India to take similar impactful initiatives.
          </p>
        </div>
      </div>

      {/* Members Section */}
      <div className="relative py-20 px-4 overflow-y-auto">
  <div className="max-w-6xl mx-auto space-y-16 flex flex-col items-center">


          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Meet Our Leaders
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto"></div>
          </div>

          {/* Member Cards */}
          <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">

            {members.map((member, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                <div className="relative">
                  <MemberCard {...member} image={imageMap[member.image]} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative wave bottom */}
      <div className="relative">
        <svg className="w-full h-24 fill-current text-gray-100" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
}
