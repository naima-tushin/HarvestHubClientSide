import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import { Link } from "react-router-dom";

const FeaturedFoodsHome = ({ allFood }) => {

    const sortedFood = allFood.sort((a, b) => b.foodQuantity - a.foodQuantity);

    const availableFood = sortedFood.filter(food => food.foodStatus === "Available");
    
    const limitedFood = availableFood.slice(0, 6);


    return (
        <div className="container mx-auto lg:mt-20 mt-10">
            <h2 className="text-4xl font-bold lg:mb-4 text-center text-primary">Featured Foods</h2>
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
