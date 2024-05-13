import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../FoodCard/FoodCard';

const AvailableFood = () => {
    const allFood = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState(null); // Initialize sortOrder as null

    // Filter foods where foodStatus is Available
    const availableFoods = allFood.filter(food => food.foodStatus === "Available");

    // Filter availableFoods based on search query
    const filteredFoods = availableFoods.filter(food =>
        food.foodName && food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort filteredFoods based on expiration date
    const sortedFoods = filteredFoods.sort((a, b) => {
        const dateA = new Date(a.expiredDateTime);
        const dateB = new Date(b.expiredDateTime);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSortAsc = () => {
        setSortOrder('asc');
    };

    const handleSortDesc = () => {
        setSortOrder('desc');
    };

    return (
        <div className='min-h-screen bg-gray-100'>
            <Helmet>
                <title>Harvest Hub | Available Foods</title>
            </Helmet>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 text-center text-primary">Available Foods</h1>
                <input
                    type="text"
                    placeholder="Search by Food Name"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="w-full md:w-[60%] lg:w-1/2 mx-auto flex border border-gray-300 rounded-md px-4 py-2 mb-4"
                />
                <div className="flex lg:w-1/2 mx-auto justify-center lg:gap-5 mb-4">
                    <button
                        onClick={handleSortAsc}
                        className={`bg-black text-accent hover:bg-accent hover:text-black px-4 py-2 rounded-md mr-2 ${sortOrder === 'asc' ? 'bg-secondary text-white' : ''}`}
                    >
                        Expire Date In Ascending
                    </button>
                    <button
                        onClick={handleSortDesc}
                        className={`bg-black text-accent hover:bg-accent hover:text-black px-4 py-2 rounded-md ${sortOrder === 'desc' ? 'bg-accent text-white' : ''}`}
                    >
                        Expire Date In Descending
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 md:gap-8 lg:w-[90%] mx-auto">
                    {sortedFoods.map(food => (
                        <FoodCard key={food.id} foods={[food]} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailableFood;
