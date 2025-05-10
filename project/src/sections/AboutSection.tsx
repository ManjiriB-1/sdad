import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About MVB Ventures</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Building Excellence Since 2005</h3>
            <p className="text-gray-600 leading-relaxed">
              MVB Ventures LLP is a premier provider of building envelope solutions with over 18 years of expertise in the architectural industry. We specialize in designing, manufacturing, and installing innovative building envelope systems that combine aesthetic appeal with functional performance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of skilled professionals works closely with architects, contractors, and building owners to deliver customized solutions that meet the unique requirements of each project, ensuring exceptional results that stand the test of time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {['Innovative Solutions', 'Certified Experts', 'Sustainable Materials', 'Quality Assurance'].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white font-semibold py-2 px-6 border border-blue-600 hover:border-transparent rounded transition-colors mt-4">
              Learn More About Us
            </button>
          </div>
          
          {/* Video/Image Showcase */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <div className="relative pb-[56.25%] h-0">
              <img 
                src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="MVB Ventures Project Showcase" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;