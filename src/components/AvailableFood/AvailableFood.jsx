import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { useLoaderData  } from 'react-router-dom';
import FoodCard from '../FoodCard/FoodCard';

const AvailableFood = () => {
    const allFood = useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState(null);
    const [layoutMode, setLayoutMode] = useState('three-column'); // Initial layout mode

    const availableFoods = allFood.filter(food => food.foodStatus === "Available");

    // Initial sorting based on addedIndex
    const sortedFoods = availableFoods.slice().sort((a, b) => {
        if (a.addedIndex < b.addedIndex) return -1;
        if (a.addedIndex > b.addedIndex) return 1;
        return 0;
    });

    const filteredFoods = sortedFoods.filter(food =>
        food.foodName && food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSortAsc = () => {
        setSortOrder('asc');
    };

    const handleSortDesc = () => {
        setSortOrder('desc');
    };

    const toggleLayout = () => {
        setLayoutMode(prevMode => prevMode === 'three-column' ? 'two-column' : 'three-column');
    };

    // Sorting based on expiration date
    let sortedFilteredFoods = [...filteredFoods];
    if (sortOrder === 'asc') {
        sortedFilteredFoods.sort((a, b) => new Date(a.expiredDateTime) - new Date(b.expiredDateTime));
    } else if (sortOrder === 'desc') {
        sortedFilteredFoods.sort((a, b) => new Date(b.expiredDateTime) - new Date(a.expiredDateTime));
    }

    return (
        <div className='min-h-screen bg-white mb-10'>
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
                        className={`bg-black text-accent hover:bg-accent hover:text-black px-4 py-2 rounded-md ${sortOrder === 'desc' ? 'bg-secondary text-white' : ''}`}
                    >
                        Expire Date In Descending
                    </button>
                    <button
                        onClick={toggleLayout}
                        className="bg-black text-accent hover:bg-accent hover:text-black px-4 py-2 rounded-md ml-2"
                    >
                        Change Layout
                    </button>
                </div>
                <div className={`grid ${layoutMode === 'three-column' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[90%]' : 'grid-cols-1 md:grid-cols-2 lg:w-[60%]'} lg:gap-12 md:gap-8  mx-auto`}>
                    {sortedFilteredFoods.map(food => (
                        <FoodCard key={food.id} foods={[food]} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailableFood;
