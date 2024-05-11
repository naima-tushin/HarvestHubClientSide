import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "We create stunning and responsive websites tailored to your business needs.",
      icon: "web-design-icon.svg"
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing strategies.",
      icon: "digital-marketing-icon.svg"
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At [Your Platform Name], we are committed to reducing food waste and promoting community involvement. 
          Our goal is to create a platform where individuals and organizations can share surplus food 
          with those in need, fostering a sense of community and sustainability.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
