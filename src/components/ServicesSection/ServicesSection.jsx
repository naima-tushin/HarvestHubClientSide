import React from 'react';


const ServicesSection = () => {
    
      

        return (
            <section >
                <h2 className="text-4xl text-primary font-bold mt-10 text-center">Website Hours</h2>
                <div className="bg-white py-10 w-[95%] mx-auto rounded-md">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border border-accent shadow-lg shadow-black rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Sunday - Thursday</h3>
          <p className="text-gray-700 mb-4">8:00 AM - 6:00 PM </p>
        </div>
        <div className="border border-accent shadow-lg shadow-black rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Saturday</h3>
          <p className="text-gray-700 mb-4">10:00 AM - 4:00 PM</p>
        </div>
        <div className="border border-accent shadow-lg shadow-black rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Friday</h3>
          <p className="text-gray-700 mb-4">Closed</p>
        </div>
      </div>
    </div>
    </div>
  </section>

  );
};

export default ServicesSection;
