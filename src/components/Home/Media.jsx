import React from 'react';
import MediaCard from './MediaCard';
import media1 from '../../assets/Home/media1.jpg';
import media2 from '../../assets/Home/media2.jpg';
import media3 from '../../assets/Home/media3.jpg';  

const Media = () => {
  const mediaData = [
    {
      title: "Dainik Bhaskar",
      description: "LiGHT Raipur (students from NIT Raipur) raised funds to donate fan and cooler to special school students.",
      image: media1,
      date: "03-05-2022",
     
    },
    {
      title: "Lokmat",
      description: "LiGHT Wardha(students from Bajaj Institute of Technology, Wardha) raised funds to donate Water Purifier to Sankalp Orphanage",
      image: media2,
      date: "03-05-2022",
    
    },
    {
      title: "Pudhari",
      description: "LiGHT Samvedna raised funds to donate orphanage to children of Bhagwaan Baba Balika Ashram Orphanage",
      image: media3,
      date: "03-05-2022",
  
    }
  ];

  return (

    <div>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-center">
        Media Coverage
        <div className="w-16 h-1 my-10 bg-yellow-400 mx-auto "></div>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {mediaData.map((item, index) => (
          <MediaCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            date={item.date}
            newspaper={item.newspaper}
          />
        ))}
      </div>
      
      
    </div>
    <div className="text-center mt-[-12] mb-10">
          <a 
            href="/initiatives"
            className="inline-block -mt-2 px-2 py-1 text-lg text-white bg-[rgb(230,197,37)] hover:bg-[rgb(200,167,20)] rounded-sm transition-all duration-300 hover:scale-105"
          >
            View More
          </a>
      </div>
    </div>
  );
};

export default Media;
