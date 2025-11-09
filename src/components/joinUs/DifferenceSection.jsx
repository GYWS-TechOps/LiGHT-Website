import React from "react";

const DifferenceSection = () => {
  return (
   <section className="bg-[#333336] text-white py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="inline-block bg-[rgb(230,197,37)] px-5 py-2 text-2xl md:text-3xl tracking-tight">
            Difference from other platforms
          </h2>
          <div className="w-12 h-1 bg-[#F7C631] mx-auto mt-3"></div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-y-10 gap-x-16 items-center">
          <div className="flex justify-center md:justify-start">
              <img
                src="/images/icons/diamond.png"
                alt="Difference icons"
                className="w-48 h-48"
              />
          </div>

          <div className="text-center md:text-left text-gray-300 leading-relaxed">
            <p className="text-base md:text-[17px]">
              Student-run: The complete <span className="text-[#F7C631]">LiGHT</span> network is run by students studying
              in different colleges of the country. Being a student-run body
              enables better understanding and communication between members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
