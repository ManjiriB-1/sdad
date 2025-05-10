import React, { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'The Azure Tower',
    category: 'Curtain Wall',
    description: 'A 45-story commercial building featuring a custom curtain wall system with high-performance glazing.',
    imageUrl: 'https://images.pexels.com/photos/342214/pexels-photo-342214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Riverfront Business Center',
    category: 'Structural Glazing',
    description: 'Innovative structural glazing solution for a waterfront office complex.',
    imageUrl: 'https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Metro Arts Center',
    category: 'Architectural Cladding',
    description: 'Cultural center with distinctive aluminum composite cladding and feature elements.',
    imageUrl: 'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Highland Residences',
    category: 'Glazing Systems',
    description: 'Luxury residential tower utilizing advanced glazing systems for thermal and acoustic performance.',
    imageUrl: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'Westside Shopping Mall',
    category: 'Aluminium Systems',
    description: 'Retail complex featuring custom aluminum entrance systems and feature facades.',
    imageUrl: 'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'The Platinum Offices',
    category: 'Rainscreen Systems',
    description: 'Corporate headquarters with high-performance rainscreen cladding system.',
    imageUrl: 'https://images.pexels.com/photos/373572/pexels-photo-373572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 7,
    title: 'University Science Complex',
    category: 'Thermal Solutions',
    description: 'Educational facility with energy-efficient building envelope systems.',
    imageUrl: 'https://images.pexels.com/photos/3772630/pexels-photo-3772630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 8,
    title: 'Grand Hotel Renovation',
    category: 'Retrofit Solutions',
    description: 'Historic hotel renovation with custom retrofit solutions for the building facade.',
    imageUrl: 'https://images.pexels.com/photos/2217365/pexels-photo-2217365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const categories = ['All', 'Curtain Wall', 'Structural Glazing', 'Architectural Cladding', 'Glazing Systems', 'Aluminium Systems', 'Rainscreen Systems', 'Thermal Solutions', 'Retrofit Solutions'];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our showcase of completed projects that demonstrate our expertise in creating innovative building envelope solutions.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.slice(0, 5).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
          <div className="relative group">
            <button className="px-4 py-2 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
              More +
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 hidden group-hover:block">
              {categories.slice(5).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="relative rounded-lg overflow-hidden shadow-md group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-blue-300 text-sm mb-1">{item.category}</span>
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{item.description}</p>
                <button className="text-white border border-white hover:bg-white hover:text-blue-800 transition-colors py-1 px-4 rounded-md text-sm self-start">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View Full Portfolio Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-md transition-all hover:shadow-lg inline-flex items-center text-sm font-medium">
            View Full Portfolio
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;