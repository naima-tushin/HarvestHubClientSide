import React from 'react';
import { Link } from "react-router-dom";
import img from '../../assets/images/banner_2.jpg';

const FeaturedFoodsHome = () => {
    const foods = [
        {
            id: 1,
            name: "Spaghetti Bolognese",
            donator: {
                image: "donator1.jpg",
                name: "Donator Name 1"
            },
            quantity: 10,
            expiryDateTime: "May 15, 2024 - 6:00 PM",
            image: "spaghetti_bolognese_image.jpg"
        },
        {
            id: 1,
            name: "Spaghetti Bolognese",
            donator: {
                image: "donator1.jpg",
                name: "Donator Name 1"
            },
            quantity: 10,
            expiryDateTime: "May 15, 2024 - 6:00 PM",
            image: "spaghetti_bolognese_image.jpg"
        },
        {
            id: 1,
            name: "Spaghetti Bolognese",
            donator: {
                image: "donator1.jpg",
                name: "Donator Name 1"
            },
            quantity: 10,
            expiryDateTime: "May 15, 2024 - 6:00 PM",
            image: "spaghetti_bolognese_image.jpg"
        },
        {
            id: 1,
            name: "Spaghetti Bolognese",
            donator: {
                image: "donator1.jpg",
                name: "Donator Name 1"
            },
            quantity: 10,
            expiryDateTime: "May 15, 2024 - 6:00 PM",
            image: "spaghetti_bolognese_image.jpg"
        },
        {
            id: 1,
            name: "Spaghetti Bolognese",
            donator: {
                image: "donator1.jpg",
                name: "Donator Name 1"
            },
            quantity: 10,
            expiryDateTime: "May 15, 2024 - 6:00 PM",
            image: "spaghetti_bolognese_image.jpg"
        },
        {
            id: 1,
            name: "Spaghetti Bolognese",
            donator: {
                image: "donator1.jpg",
                name: "Donator Name 1"
            },
            quantity: 10,
            expiryDateTime: "May 15, 2024 - 6:00 PM",
            image: "spaghetti_bolognese_image.jpg"
        },
        {
            id: 1,
            name: "Spaghetti Bolognese",
            donator: {
                image: "donator1.jpg",
                name: "Donator Name 1"
            },
            quantity: 10,
            expiryDateTime: "May 15, 2024 - 6:00 PM",
            image: "spaghetti_bolognese_image.jpg"
        },
        {
            id: 1,
            name: "Spaghetti Bolognese",
            donator: {
                image: "donator1.jpg",
                name: "Donator Name 1"
            },
            quantity: 10,
            expiryDateTime: "May 15, 2024 - 6:00 PM",
            image: "spaghetti_bolognese_image.jpg"
        },
    ];

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-4xl font-bold mb-10 text-center mt-8 text-primary">Featured Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mx-auto w-[95%]">
                {foods.map(food => (
                    <div key={food.id} className="bg-white bg-opacity-75 rounded-lg  overflow-hidden border-2 border-accent shadow-lg shadow-black">
                        <img src={img} alt={food.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">{food.name}</h3>
                            <div className="flex items-center mb-2">
                                <img src={food.donator.image} alt={food.donator.name} className="w-8 h-8 rounded-full mr-2" />
                                <span className="text-gray-700">{food.donator.name}</span>
                            </div>
                            <p className="text-gray-700 mb-2">Quantity: {food.quantity} servings</p>
                            <p className="text-gray-700 mb-2">Expired: {food.expiryDateTime}</p>
                            <Link to="/FeaturedFoodsHomeDetails">
                                <button className="bg-black text-accent border-accent border-4 hover:border-black hover:bg-accent hover:text-white px-4 py-2 rounded-md ">View Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <button className="bg-primary text-black border-black border-2 hover:text-white hover:bg-accent px-6 py-3 rounded-md font-bold">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedFoodsHome;
