import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Working with this company was an absolute pleasure. They exceeded all my expectations!",
      author: "John Doe",
      position: "CEO, ABC Inc.",
      image: "john-doe.jpg"
    },
    {
      id: 2,
      quote: "The service provided was top-notch. I highly recommend them to anyone looking for quality.",
      author: "Jane Smith",
      position: "Marketing Manager, XYZ Corp.",
      image: "jane-smith.jpg"
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
