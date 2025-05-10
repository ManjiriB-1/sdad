import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact-us" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or need expert advice on building envelope solutions?
            Get in touch with our team to schedule a consultation.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-700">Address</h4>
                    <p className="text-gray-600 mt-1">
                      123 Architecture Plaza, Design District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-700">Phone</h4>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+12345678901" className="hover:text-blue-600 transition-colors">
                        +1 (234) 567-8901
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-700">Email</h4>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:info@mvbventures.com" className="hover:text-blue-600 transition-colors">
                        info@mvbventures.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-700">Business Hours</h4>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Location</h3>
              <div className="h-64 bg-gray-200 rounded-md">
                {/* This would be replaced with an actual Google Maps embed */}
                <div className="h-full flex items-center justify-center bg-gray-300 rounded-md">
                  <p className="text-gray-600">Google Maps Embed Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;