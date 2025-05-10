import React, { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:translate-y-[-5px] h-full flex flex-col">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-5 flex-grow">{description}</p>
      <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center mt-auto">
        Learn More
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 ml-1" 
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
  );
};

export default ServiceCard;