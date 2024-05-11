import React from 'react';
import logo from '../../assets/images/img1.avif';
import logo2 from '../../assets/images/img2.avif';
import logo3 from '../../assets/images/img3.jpg';
import backgroundImg from '../../assets/images/banner_testimonial.jpg';

const TestimonialsSection = () => {

    return (
        <section className='mb-10'>
            <h2 className="text-4xl text-primary font-bold mb-8 mt-10 text-center">Testimonials</h2>
            <div className="py-12 w-[95%] mx-auto rounded-md" style={{ backgroundImage: `linear-gradient(to bottom, rgba(86, 61, 45, 0.7), rgba(154, 123, 79, 0.4)), url(${backgroundImg})`, backgroundSize: 'cover'}}>
            <div className="container mx-auto px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="border border-gray-300 rounded-lg p-6 text-center shadow-2xl shadow-black">
                        <div className="mb-4">
                            <img src={logo} alt="John Doe" className="rounded-full w-20 h-20 object-cover mx-auto border-2 border-black" />
                        </div>
                        <p className="text-white font-semibold mb-2">James Michael</p>
                        <p className="text-black">"CommunityShare has been a game-changer for our family. Thanks to this platform, we've been able to share surplus produce from our garden with neighbors in need. It's heartwarming to see the positive impact we can make within our community."</p>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="border border-gray-300 rounded-lg p-6 text-center shadow-2xl shadow-black">
                        <div className="mb-4">
                            <img src={logo2} alt="Jane Smith" className="rounded-full w-20 h-20 object-cover mx-auto border-2 border-black" />
                        </div>
                        <p className="text-white font-semibold mb-2">Olivia Emma</p>
                        <p className="text-black">"As a local restaurant owner, reducing food waste has always been a priority. CommunityShare has provided us with a convenient way to donate excess inventory to nearby shelters and community kitchens. It feels good to know that our surplus food is going to those who need it most."</p>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="border border-gray-300 rounded-lg p-6 text-center shadow-2xl shadow-black">
                        <div className="mb-4">
                            <img src={logo3} alt="Emily Brown" className="rounded-full w-20 h-20 object-cover mx-auto border-2 border-black" />
                        </div>
                        <p className="text-white font-semibold mb-2">Robert John</p>
                        <p className="text-black">"I've been volunteering with CommunityShare for over a year now, and it's been an incredibly rewarding experience. Seeing the smiles on people's faces when they receive fresh produce or meals brings me joy. Together, we're making a difference in the fight against food waste and hunger."</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
