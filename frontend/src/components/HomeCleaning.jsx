import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCleaning = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "Full home Cleaning",
      image: "https://media.istockphoto.com/id/957130298/photo/woman-cleaning-the-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=_cSb9kDeAyuT2o9dsDr6_gCaq_YoQxE6aqOkW-3WyZA="
    },
    {
      id: 2,
      name: "Sofa & Carpet Cleaning",
      image: "https://images.unsplash.com/photo-1675756544970-968f9e3f7ca5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mYSUyMGFuZCUyMGNhcnBldCUyMGNsZWFuaW5nfGVufDB8fDB8fHww"
    },
    {
      id: 3,
      name: "Cockroach, Ant & Pest",
      image: "https://plus.unsplash.com/premium_photo-1682126104327-ef7d5f260cf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVzdCUyMGNvbnRyb2x8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 4,
      name: "Bathroom Cleaning",
      image: "https://media.istockphoto.com/id/1364505556/photo/cleaning-time.webp?a=1&b=1&s=612x612&w=0&k=20&c=OBuaYXZIuvE4ySe1u8q-269_xZSJSG0Qxw9IeiuBCJA="
    },
    {
      id: 5,
      name: "Kitchen Cleaning",
      image: "https://plus.unsplash.com/premium_photo-1679500354879-1843bc88e064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtpdGNoZW4lMjBjbGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  const handleClick = () => {
    navigate('/home-cleaning');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-emerald-800">Cleaning & pest control</h2>
        <button 
          onClick={handleClick}
          className="text-amber-600 hover:text-amber-800 font-medium flex items-center transition-all duration-300 transform hover:translate-x-1 border p-2 rounded-lg cursor-pointer"
        >
          See All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div onClick={handleClick} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 cursor-pointer">
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

export default HomeCleaning;