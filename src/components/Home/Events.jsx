import React from 'react';
import EventsCard from './EventsCard';
import event1 from '../../assets/Home/event1.jpg';
import event2 from '../../assets/Home/event2.jpg';

const Reach = () => {
  const cardData = [
    {
      image: event1,
      title: 'Career Counseling Program',
      metrics: [
        { 
          label: 'Number of Mentees Attended', 
          value: '250+' 
        },
        { 
          label: 'Number of Sessions between Mentors and Mentees', 
          value: '280+' 
        }
      ],
      description: 'The event was conducted to raise money to provide a Volleyball court, and books for the library of a school named Dr. S R Patil School.',
      variant: 'solid'
    },
    {
      image: event2,
      title: 'Career Counseling Program',
      metrics: [
        { 
          label: 'Number of Mentees Attended', 
          value: '250+' 
        },
        { 
          label: 'Number of Sessions between Mentors and Mentees', 
          value: '280+' 
        }
      ],
      description: 'The event was conducted to raise money to provide a Volleyball court, and books for the library of a school named Dr. S R Patil School.',
      variant: 'solid'
    },
  
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-gray-800 mb-4">Featured Events</h2>
          <div className="w-16 h-1 my-10 bg-yellow-400 mx-auto "></div>
        </div>

        {/* Cards Grid - 2 cards per row on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {cardData.map((card, index) => (
            <EventsCard
              key={index}
              image={card.image}
              title={card.title}
              metrics={card.metrics}
              description={card.description}
              variant={card.variant}
            />
          ))}
            

        </div>
      </div>
      <div className="text-center mt-12">
          <a 
            href="/initiatives"
            className="inline-block  px-2 py-1 text-lg text-white bg-[rgb(230,197,37)] hover:bg-[rgb(200,167,20)] rounded-sm transition-all duration-300 hover:scale-105"
          >
            View More
          </a>
      </div>


    </section>
  );
};

export default Reach;
