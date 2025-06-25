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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMHBhbmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    title: 'Native Water Purifier',
    route: "/water-purifier",
    image: 'https://images.unsplash.com/photo-1508968419-73cca394e8aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBwdXJpZmllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    title: 'Native Smart Locks',
    route: "/smart-lock",
    image: 'https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBsb2NrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    title: 'Kitchen Cleaning',
    route: "/kitchen-cleaning",
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMGNsZWFuaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 6,
    title: 'Full Home Painting',
    route: "/home-painting",
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMHBhaW50aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
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
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 10,
    title: 'Ac Services & Repair',
    route: "/ac-service",
    image: 'https://images.unsplash.com/photo-1709432767122-d3cb5326911a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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