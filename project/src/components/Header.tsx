import React, { useState, useEffect } from 'react';
import { Building2 } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Building2 
              className={`h-8 w-8 ${isScrolled ? 'text-blue-700' : 'text-white'}`} 
            />
            <span 
              className={`ml-2 text-xl font-bold ${isScrolled ? 'text-blue-700' : 'text-white'}`}
            >
              MVB Ventures
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About Us', 'Portfolio', 'Contact Us', 'Blog'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-all hover:shadow-lg text-sm font-medium"
            >
              Get a Free Consultation
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-4">
              {['Home', 'Services', 'About Us', 'Portfolio', 'Contact Us', 'Blog'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-800 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium w-full"
              >
                Get a Free Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;