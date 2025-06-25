import React from 'react';
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    title: 'Insta Help',
    route: "/inst",
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwaGVscHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    title: 'Wall Panel',
    route: "/wall",
    image: 'https://plus.unsplash.com/premium_photo-1681487161166-e228f5d3a2fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FsbCUyMHBhbmVsc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 3,
    title: 'Native Water Purifier',
    route: "/water-purifier",
    image: 'https://media.istockphoto.com/id/1284077894/photo/pure-water-in-glass-and-water-filters-on-the-blurred-background-household-filtration-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=nxbH9ZhFrrBecEV7MM9d1j9jVeOR38UnT2_L0XrqJCA='
  },
  {
    id: 4,
    title: 'Native Smart Locks',
    route: "/smart-lock",
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBsb2NrfGVufDB8fDB8fHww'
  },
  {
    id: 5,
    title: 'Kitchen Cleaning',
    route: "/kitchen-cleaning",
    image: 'https://media.istockphoto.com/id/666923110/photo/handsome-employee-doing-dishes.webp?a=1&b=1&s=612x612&w=0&k=20&c=10x9qRUWS7lIgABW03jy_qD1KztDC7sZ1UQ00L95qi0='
  },
  {
    id: 6,
    title: 'Full Home Painting',
    route: "/home-painting",
    image: 'https://plus.unsplash.com/premium_photo-1723662253911-db2eaa3324be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1bGwlMjBob21lJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 7,
    title: 'Laptop',
    route: "/laptop",
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 8,
    title: 'Spa Ayurveda',
    route: "/spa-ayurveda",
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhJTIwYXl1cnZlZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 9,
    title: 'Hair Studio for Women',
    route: "/hair-women",
    image: 'https://plus.unsplash.com/premium_photo-1661632701774-bffbcf314a5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGFpciUyMFN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 10,
    title: 'Ac Services & Repair',
    route: "/ac-service",
    image: 'https://media.istockphoto.com/id/1284843352/photo/the-technicians-are-cleaning-the-air-conditioner-by-spraying-water-hand-and-water-spray-are.webp?a=1&b=1&s=612x612&w=0&k=20&c=sJyiPhLk0LJdpvJAsswYqeOSwZWypX2qztfCc-XvREk='
  }
];

const NewNoteworthy = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-8">
      <h2 className="text-3xl font-bold text-emerald-800 mb-8">New and noteworthy</h2>
      
      {/* Desktop Grid (2 rows of 5 columns) */}
      <div className="hidden md:grid md:grid-cols-5 gap-6">
        {cardData.map((card) => (
          <div 
            key={card.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border border-emerald-100"
            onClick={() => handleCardClick(card.route)}
          >
            <div className="h-40 overflow-hidden">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4 text-center font-semibold text-emerald-800">
              {card.title}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden flex overflow-x-auto pb-4 gap-4 scroll-smooth snap-x snap-mandatory">
        {cardData.map((card) => (
          <div 
            key={card.id} 
            className="flex-shrink-0 w-48 snap-start bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer border border-emerald-100"
            onClick={() => handleCardClick(card.route)}
          >
            <div className="h-32 overflow-hidden">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-3 text-center font-semibold text-emerald-800 text-sm">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewNoteworthy;