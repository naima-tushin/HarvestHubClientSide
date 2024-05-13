import React from 'react';
import { Link } from "react-router-dom";


const FoodCard = ({foods}) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours();
        return `${day}-${month}-${year}`;
    };
    const formatTime = (dateString) => {
        const date = new Date(dateString);
      
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes} ${ampm}`;
    };

    return (
        <div className="container mx-auto py-8">
            {foods.map(food => (
                <div key={food.id} className="bg-white bg-opacity-75 rounded-lg  overflow-hidden border-2 border-accent shadow-lg shadow-black">
                    <img src={food.foodImage} alt={food.foodName} className="w-full h-48 lg:object-contain md:object-contain bg-secondary" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{food.foodName}</h3>
                        <div className="flex items-center mb-2">
                            <img src={food.donatorImage} alt={food.donatorName} className="w-8 h-8 rounded-full mr-2" />
                            <span className="text-gray-700">{food.donatorName}</span>
                        </div>
                        <p className="text-gray-700 mb-2">Quantity: {food.foodQuantity} servings</p>
                        <p className="text-gray-700 mb-2">Expiry Date: {formatDate(food.expiredDateTime)}</p>
                        <p className="text-gray-700 mb-2">Expiry Time: {formatTime(food.expiredDateTime)}</p>
                        <Link to="/FeaturedFoodsHomeDetails">
                            <button className="bg-black text-accent border-accent border-4 hover:border-black hover:bg-accent hover:text-white px-4 py-2 rounded-md ">View Details</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};



export default FoodCard;
