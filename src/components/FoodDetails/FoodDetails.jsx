import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const foodDetails = useLoaderData(); 
   
    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedHours = hours % 12 || 12;
        return `Date: ${day}-${month}-${year} Time: ${formattedHours}  ${minutes} ${ampm}`;
    };

    return (
        <div className="container mx-auto px-5 py-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1 relative">
                    <div className="relative">
                        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                        <img className="w-full rounded-lg shadow-md" src={foodDetails.foodImage} alt={'Food Image'} />
                        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-800 text-white px-8 py-4 rounded text-xl">{name}</h2>
                    </div>
                </div>
                <div className="md:col-span-1 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-purple-800 mb-4">{foodDetails.foodName}</h1>
                    <div className="flex items-center mb-4">
                        <img src={foodDetails.donatorImage} alt={foodDetails.donatorName} className="w-10 h-10 rounded-full mr-2" />
                        <p className="text-gray-700">{foodDetails.donatorName}</p>
                    </div>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Food Quantity:</span> {foodDetails.foodQuantity} servings</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Pickup Location:</span> {foodDetails.pickupLocation}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Expired:</span> {formatDateTime(foodDetails.expiredDateTime)}</p>
                    <p className="text-gray-700 mb-4"><span className="font-bold">Additional Notes:</span> {foodDetails.additionalNotes}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
