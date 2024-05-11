import React from 'react';
import { useSpring, animated } from 'react-spring';

const ServicesSection = () => {
    
      

        return (
            <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Website Hours</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Monday - Friday</h3>
          <p className="text-gray-700 mb-4">8:00 AM - 6:00 PM (EST)</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Saturday</h3>
          <p className="text-gray-700 mb-4">10:00 AM - 4:00 PM (EST)</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Sunday</h3>
          <p className="text-gray-700 mb-4">Closed</p>
        </div>
      </div>
    </div>
  </section>

  );
};

export default ServicesSection;
