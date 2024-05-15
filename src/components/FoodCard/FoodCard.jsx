import React from 'react';
import { Link } from "react-router-dom";


const FoodCard = ({ foods }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        
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
    console.log(foods.donatorImage);

const  placeHolderImage = "https://i.ibb.co/BV0NHW2/pics.jpg" ;
    return (
        
        <div className="container mx-auto bg-accent bg-opacity-55 p-4 rounded-lg mt-10 shadow-lg shadow-black">
            <ul className="divide-y divide-gray-200">
                {foods.map(food => (
                    <li key={food.id} className="py-4">
                        <div className="flex items-center justify-evenly">
                            <div>
                                <img src={food.foodImage} alt={food.foodName} className="w-14 h-14 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-full mr-4" />
                                <h3 className="lg:text-lg lg:text-center md:text-center mt-3 font-bold mb-2">{food.foodName}</h3>
                            </div>
                            <div>
                                <div className="flex items-center mb-2">
                                    <img src={food.donatorImage === '' ?placeHolderImage : food.donatorImage} alt={food.donatorName} className="w-8 h-8 rounded-full mr-2 border-black border-2" />
                                    <span className="text-black font-black">{food.donatorName}</span>
                                </div>
                                <p className="text-black mb-2"><span className='font-bold'>Food Quantity:</span> {food.foodQuantity} servings</p>
                                <p className="text-black mb-2"><span className='font-bold'>Pickup Location:</span> {food.pickupLocation}</p>
                                <p className="text-black mb-2"><span className='font-bold'>Expiry Date:</span> {formatDate(food.expiredDateTime)}</p>
                                <p className="text-black mb-2"><span className='font-bold'>Expiry Time:</span> {formatTime(food.expiredDateTime)}</p>
                            </div>
                        </div>
                        <p className="text-black mb-2 mt-2"><span className='font-bold underline'>Additional Notes:</span> {food.additionalNotes} </p>
                        <div className="mt-4">
                            <Link to={`/foodDetails/${food._id}`}>
                                <button className="bg-black text-accent border-accent border-4 hover:border-black hover:bg-accent hover:text-white px-4 py-2 rounded-md mx-auto flex">View Details</button>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
};



export default FoodCard;
