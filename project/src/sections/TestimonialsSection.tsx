import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    text: "MVB Ventures transformed our office building with an innovative curtain wall system that reduced our energy costs by 30% while creating a stunning visual impact.",
    author: "John Hastings",
    position: "Project Director",
    company: "TechCore Enterprises",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 2,
    text: "The expertise and professionalism displayed by the MVB team exceeded our expectations. Their attention to detail and commitment to quality made them the perfect partner for our complex project.",
    author: "Sarah Miller",
    position: "CEO",
    company: "Urban Development Group",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 3,
    text: "Working with MVB Ventures on our high-rise residential development was seamless from start to finish. Their innovative solutions addressed all our technical challenges while maintaining our design vision.",
    author: "Michael Chen",
    position: "Principal Architect",
    company: "Axis Architecture",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 4,
    text: "The rainscreen system MVB installed has significantly improved our building's performance and appearance. Their team's technical knowledge and installation expertise were absolutely first-rate.",
    author: "Elizabeth Thornton",
    position: "Facilities Manager",
    company: "Heritage Properties",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 5,
    text: "MVB Ventures delivered our project on time and within budget despite complex design requirements. Their collaborative approach to problem-solving made all the difference.",
    author: "David Rodriguez",
    position: "Construction Director",
    company: "Pinnacle Developments",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const TestimonialsSection = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const { current } = scrollContainer;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-opacity-10 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)", 
          backgroundSize: "20px 20px" 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We take pride in our client relationships and the successful outcomes of our projects.
            Here's what some of our valued clients have to say about working with MVB Ventures.
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
        </div>
        
        {/* Carousel Navigation */}
        <div className="flex justify-end mb-6 gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        {/* Testimonials Carousel */}
        <div 
          className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory gap-6 pb-6"
          ref={scrollContainer}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[350px] bg-gray-800 rounded-lg p-6 flex flex-col snap-start"
            >
              <Quote className="h-10 w-10 text-blue-500 mb-4" />
              <p className="text-gray-300 mb-6 flex-grow">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Client Logos */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold">Trusted by Industry Leaders</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="h-12 filter grayscale opacity-60 hover:opacity-100 hover:filter-none transition-all">
                {/* Placeholder for client logos */}
                <div className="w-32 h-full bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-sm font-medium">Client Logo {index}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;