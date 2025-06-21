import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Beauty = () => {
  const navigate = useNavigate();

  // Service categories data
  const serviceCategories = [
    { id: 1, name: 'Salon Women', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Spa for Women', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Hair Studio for Women', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Makeup & Styling Studio', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 5, name: 'Salon Men', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 6, name: 'Massage for Men', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  const services = [
    {
      id: 1,
      name: "Hair Styling",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
    },
    {
      id: 2,
      name: "Makeup",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      name: "Manicure",
      image: "https://images.unsplash.com/photo-1604656853579-4f35850f7b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      name: "Facial",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 5,
      name: "Waxing",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const handleSeeAllClick = () => {
    navigate('/about');
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side - Services */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Beauty Services at Your Doorstep
              </h1>
              
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">What are you looking for?</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {serviceCategories.slice(0, 6).map((service) => (
                    <div 
                      key={service.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => console.log(`Navigating to ${service.name} page`)}
                    >
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="w-full h-24 sm:h-32 object-cover"
                      />
                      <div className="p-2 sm:p-3">
                        <h3 className="text-xs sm:text-sm font-medium text-gray-800">{service.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Side - Fixed Images */}
            <div className="w-full md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                <img 
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Beauty Services" 
                  className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg shadow-lg transform rotate-1"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Beauty Services" 
                  className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg shadow-lg transform -rotate-1"
                />
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Beauty Services" 
                  className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg shadow-lg transform -rotate-2"
                />
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Beauty Services" 
                  className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg shadow-lg transform rotate-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Repair Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-emerald-800">Home Repair</h2>
          <button 
            onClick={handleSeeAllClick}
            className="text-amber-600 hover:text-amber-800 font-medium flex items-center transition-all duration-300 transform hover:translate-x-1 border p-2 rounded-lg cursor-pointer"
          >
            See All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div onClick={handleSeeAllClick} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 cursor-pointer">
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

      

    </div>
  );
};

export default Beauty;