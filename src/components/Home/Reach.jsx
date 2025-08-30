import React from 'react';
import CountUp from 'react-countup';

const Reach = () => {
  return (
    <section className='py-16 px-6 bg-gray-900 text-white relative mt-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-evenly gap-8'>
          
          {/* OUR REACH Title */}
          <div className='text-center md:text-left mb-8 md:mb-0'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white'>
              OUR<br />REACH
            </h2>
          </div>
          
          {/* Centers */}
          <div className='text-center'>
            <div className='text-5xl md:text-6xl font-semibold text-[rgb(230,197,37)] mb-2'>
              <CountUp end={11} duration={3.5} enableScrollSpy scrollSpyOnce/>
            </div>
            <div className='text-lg text-gray-300'>
              Centers
            </div>
          </div>
          
          {/* States */}
          <div className='text-center'>
            <div className='text-5xl md:text-6xl font-semibold text-[rgb(230,197,37)] mb-2'>
              <CountUp end={7} duration={3.5} enableScrollSpy scrollSpyOnce/>
            </div>
            <div className='text-lg text-gray-300'>
              States
            </div>
          </div>
          
          {/* Active Members */}
          <div className='text-center'>
            <div className='text-5xl md:text-6xl font-semibold text-[rgb(230,197,37)] mb-2'>
              <CountUp end={400} duration={4} enableScrollSpy scrollSpyOnce/>
            </div>
            <div className='text-lg text-gray-300'>
              Active Members
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Reach;