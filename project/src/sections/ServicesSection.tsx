import React from 'react';
import { 
  LayoutGrid, Layers, Building, Grid3X3, Maximize, Combine, Shield, Thermometer, Clock, Settings 
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    id: 1,
    title: 'Aluminium Systems',
    description: 'Custom aluminum framing solutions designed for durability, energy efficiency, and aesthetic appeal.',
    icon: <LayoutGrid className="h-10 w-10" />,
  },
  {
    id: 2,
    title: 'Glazing Systems',
    description: 'Advanced glazing solutions that optimize natural light while ensuring energy efficiency and sound insulation.',
    icon: <Layers className="h-10 w-10" />,
  },
  {
    id: 3,
    title: 'Architectural Cladding',
    description: 'Innovative cladding systems that enhance building aesthetics while providing protection against environmental elements.',
    icon: <Building className="h-10 w-10" />,
  },
  {
    id: 4,
    title: 'Curtain Walls',
    description: 'Cutting-edge curtain wall systems that combine structural integrity with sophisticated design features.',
    icon: <Grid3X3 className="h-10 w-10" />,
  },
  {
    id: 5,
    title: 'Structural Glazing',
    description: 'Seamless glass installations that create stunning visual impact while meeting structural requirements.',
    icon: <Maximize className="h-10 w-10" />,
  },
  {
    id: 6,
    title: 'Composite Panels',
    description: 'Versatile panel solutions offering design flexibility, thermal performance, and weather resistance.',
    icon: <Combine className="h-10 w-10" />,
  },
  {
    id: 7,
    title: 'Rainscreen Systems',
    description: 'Advanced rainscreen solutions that provide superior moisture management and thermal performance.',
    icon: <Shield className="h-10 w-10" />,
  },
  {
    id: 8,
    title: 'Thermal Solutions',
    description: 'Specialized systems designed to optimize building thermal performance and energy efficiency.',
    icon: <Thermometer className="h-10 w-10" />,
  },
  {
    id: 9,
    title: 'Retrofit Solutions',
    description: 'Tailored retrofit options to upgrade existing buildings for improved performance and appearance.',
    icon: <Clock className="h-10 w-10" />,
  },
  {
    id: 10,
    title: 'Project Management',
    description: 'Comprehensive project oversight from concept to completion, ensuring quality execution.',
    icon: <Settings className="h-10 w-10" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive building envelope solutions tailored to your specific project requirements.
            Our expertise spans from design to installation.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;