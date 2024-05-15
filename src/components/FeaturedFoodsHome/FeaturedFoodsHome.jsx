import React from 'react';
import { motion } from 'framer-motion';
import FoodCard from '../FoodCard/FoodCard';
import { Link } from "react-router-dom";

const FeaturedFoodsHome = ({ allFood }) => {

    const sortedFood = allFood.sort((a, b) => b.foodQuantity - a.foodQuantity);
    const availableFood = sortedFood.filter(food => food.foodStatus === "Available");
    const limitedFood = availableFood.slice(0, 6);

    // Animation variants for the heading
    const headingVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { 
            scale: [1, 1, 1],
            opacity: 1,
            transition: { duration: 1, repeat: 100 }
        }
    };

    return (
        <div className="container mx-auto lg:mt-20 mt-10">
            <motion.h2 className="text-4xl font-bold lg:mb-4 text-center text-primary"
                initial="hidden"
                animate="visible"
                variants={headingVariants}>Featured Foods</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 md:gap-7 mx-auto w-[95%]">
                {limitedFood.map(food => (
                    <FoodCard key={food.id} foods={[food]} />
                ))}
            </div>
            <Link to="/availableFood">
                <div className="text-center mt-10">
                    <button className="bg-primary text-black border-black border-2 hover:text-white hover:bg-accent px-6 py-3 rounded-md font-bold">Show All</button>
                </div>
            </Link>
        </div>
    );
};

export default FeaturedFoodsHome;
