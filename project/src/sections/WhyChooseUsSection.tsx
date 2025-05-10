import React from 'react';
import { Lightbulb, Award, Users } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Innovation',
    description: 'We continuously invest in research and development to bring cutting-edge building envelope solutions to our clients.',
    icon: <Lightbulb className="h-10 w-10" />,
  },
  {
    id: 2,
    title: 'Quality',
    description: 'Our commitment to excellence ensures that every project meets the highest standards of performance and durability.',
    icon: <Award className="h-10 w-10" />,
  },
  {
    id: 3,
    title: 'Collaboration',
    description: 'We work closely with clients, architects, and contractors to deliver integrated solutions that exceed expectations.',
    icon: <Users className="h-10 w-10" />,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-repeat opacity-5" 
        style={{ 
          backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
          backgroundSize: '400px' 
        }} 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            MVB Ventures LLP stands out in the building envelope industry through our commitment to excellence in every aspect of our work.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-lg p-8 shadow-md text-center transition-all duration-300 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg overflow-hidden">
          {[
            { value: '300+', label: 'Projects Completed' },
            { value: '18+', label: 'Years of Experience' },
            { value: '50+', label: 'Expert Professionals' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="p-6 text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;