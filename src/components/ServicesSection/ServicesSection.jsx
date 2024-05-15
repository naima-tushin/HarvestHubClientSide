import React from 'react';
import { motion } from 'framer-motion';


const ServicesSection = () => {

    const headingVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { 
            scale: [1, 1., 1],
            opacity: 1,
            transition: { duration: 2, repeat: 100 }
        }
    };
    return (
        <section >
             <motion.h2 className="text-4xl font-bold text-center text-primary"
                initial="hidden"
                animate="visible"
                variants={headingVariants}>Website Hours</motion.h2>
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
