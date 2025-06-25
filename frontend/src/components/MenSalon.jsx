import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenSalon = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "Haircut & beard styling",
      image: "https://media.istockphoto.com/id/872361244/photo/man-getting-his-beard-trimmed-with-electric-razor.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZFGPZr_9hJwGPMe-J24YJpf69aCnrzV98FLyhejtgj8="
    },
    {
      id: 2,
      name: "Hair color & Hair spa",
      image: "https://images.unsplash.com/photo-1571454870742-43c314f3a81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwSGFpciUyMGNvbG9yJTIwJTI2JTIwSGFpciUyMHNwYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 3,
      name: "Pedicure & Manicure",
      image: "https://media.istockphoto.com/id/180706244/photo/a-man-getting-his-feet-touched-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=j3wPuYjpnwDZQCnFDEHebSA5K-WK3Vs-tKwrV3u3N10="
    },
    {
      id: 4,
      name: "Facial & Cleanup",
      image: "https://media.istockphoto.com/id/1731969814/photo/skin-doctor-using-hifu-resurfacing-facial-skincare-treatment-technology-with-adult-male-to.webp?a=1&b=1&s=612x612&w=0&k=20&c=qVHZ3XcMYk13e3kPxl5NxHj7gGK5QPZbpSjH8usq4SM="
    }
  ];

  const handleCardClick = () => {
    navigate('/men-salon');
  };

return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-emerald-800">Salon for men</h2>
        <button 
          onClick={handleCardClick}
          className="text-amber-600 hover:text-amber-800 font-medium flex items-center transition-all duration-300 transform hover:translate-x-1 border p-2 rounded-lg cursor-pointer"
        >
          See All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div onClick={handleCardClick} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 cursor-pointer">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
          >
            <div className="relative overflow-hidden">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute top-0 left-0 bg-amber-600 text-white px-3 py-1 rounded-br-lg transition-all duration-300 group-hover:bg-amber-700">
              <span className="font-medium">{service.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenSalon;